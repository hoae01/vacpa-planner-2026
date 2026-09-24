/**
 * VACPA Planner 2026 - Main Application Logic
 * Quản lý trạng thái, tính toán tiến độ, tương tác giao diện và đồng bộ dữ liệu
 * Tích hợp Ôn luyện Lý thuyết, Làm bài tập & Luyện đề, và Thư viện PDF gốc
 */

const STORAGE_KEY = 'VACPA_PLANNER_2026_STATE';
const THEME_KEY = 'VACPA_THEME';

// State container
let state = null;

// Navigation state
let currentActiveTab = 'planner';

// Filter state for Planner schedule
let currentFilters = {
  phase: 'all',
  subject: 'all',
  status: 'all'
};

// State for Theory Module
let currentTheorySubject = 'PL';
let currentTheoryPart = 'all';
let theorySearchQuery = '';

// State for Exercise Module
let currentExamMode = 'study'; // 'study' | 'exam'
let currentExerciseSubject = 'all';
let currentExerciseSet = 'all';
let currentQuestionIndex = 0;
let userAnswers = {}; // { questionId: selectedIndex }
let checkedAnswers = {}; // { questionId: true } (in study mode)
let examTimerInterval = null;
let examRemainingSeconds = 90 * 60;
let isExamPaused = false;
let isExamSubmitted = false;

const isLocalEnv = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:';
const SERVER_API = isLocalEnv ? 'http://localhost:8080/api' : null;
let isServerOnline = false;

// ==========================================
// INITIALIZATION & PERSISTENCE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initState();
  setupEventListeners();
  initNavigation();
  initTheoryModule();
  initExerciseModule();
  initMaterialsModule();
  renderApp();
});

function mergeState(parsed) {
  if (!parsed) return JSON.parse(JSON.stringify(DEFAULT_APP_STATE));
  return {
    ...DEFAULT_APP_STATE,
    ...parsed,
    subjects: DEFAULT_APP_STATE.subjects.map(defSub => {
      const found = parsed.subjects?.find(s => s.id === defSub.id);
      return found ? { ...defSub, ...found } : defSub;
    }),
    schedule: DEFAULT_APP_STATE.schedule.map(defItem => {
      const found = parsed.schedule?.find(s => s.id === defItem.id);
      return found ? { ...defItem, ...found } : defItem;
    }),
    theoryProgress: parsed.theoryProgress || {},
    testHistory: parsed.testHistory || []
  };
}

async function initState() {
  // Tier 1: Try reading LocalStorage
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      state = mergeState(JSON.parse(savedState));
    }
  } catch (e) {
    console.warn('LocalStorage unavailable or restricted:', e);
  }

  if (!state) {
    state = JSON.parse(JSON.stringify(DEFAULT_APP_STATE));
  }

  if (!state.theoryProgress) state.theoryProgress = {};
  if (!state.testHistory) state.testHistory = [];

  if (!isLocalEnv || !SERVER_API) {
    updateStorageBadge('online', '☁️ Đã lưu vĩnh viễn trên thiết bị này');
    renderApp();
    return;
  }

  // Tier 2: Check server disk file (vacpa_data.json)
  try {
    const resp = await fetch(`${SERVER_API}/data`, { cache: 'no-store' });
    if (resp.ok) {
      const serverData = await resp.json();
      if (serverData && serverData.schedule && serverData.schedule.length > 0) {
        state = mergeState(serverData);
        isServerOnline = true;
        updateStorageBadge('online', 'Đã kết nối tệp đĩa cứng (vacpa_data.json)');
        renderApp();
        return;
      } else {
        isServerOnline = true;
        updateStorageBadge('online', 'Đã kết nối tệp đĩa cứng (vacpa_data.json)');
        saveToServer();
      }
    } else {
      updateStorageBadge('offline', 'Chưa kết nối máy chủ (Mở Mo_App_VACPA.bat)');
    }
  } catch (err) {
    isServerOnline = false;
    updateStorageBadge('offline', 'Bộ nhớ tạm trình duyệt (Mở Mo_App_VACPA.bat để lưu đĩa)');
  }
}

function updateStorageBadge(status, text) {
  const badge = document.getElementById('storage-status-badge');
  const txt = document.getElementById('storage-status-text');
  if (badge && txt) {
    txt.textContent = text;
    if (status === 'online') {
      badge.className = 'storage-badge online';
      badge.title = 'Dữ liệu được lưu vĩnh viễn vào tệp vacpa_data.json trên ổ cứng máy bạn.';
    } else {
      badge.className = 'storage-badge offline';
      badge.title = 'Đang lưu vào bộ nhớ tạm trình duyệt. Để an toàn vĩnh viễn, hãy mở ứng dụng bằng file Mo_App_VACPA.bat.';
    }
  }
}

let saveDebounceTimer = null;
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Lỗi lưu LocalStorage:', e);
  }

  if (!isLocalEnv || !SERVER_API) {
    updateStorageBadge('online', '☁️ Đã lưu vĩnh viễn trên thiết bị này');
    return;
  }

  if (saveDebounceTimer) clearTimeout(saveDebounceTimer);
  saveDebounceTimer = setTimeout(() => {
    saveToServer();
  }, 250);
}

async function saveToServer() {
  try {
    const resp = await fetch(`${SERVER_API}/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    });
    if (resp.ok) {
      isServerOnline = true;
      updateStorageBadge('online', 'Đã lưu vào tệp máy tính (vacpa_data.json)');
    } else {
      updateStorageBadge('offline', 'Lỗi lưu tệp máy tính');
    }
  } catch (err) {
    isServerOnline = false;
    updateStorageBadge('offline', 'Bộ nhớ tạm trình duyệt (Mở Mo_App_VACPA.bat để lưu đĩa)');
  }
}

// ==========================================
// THEME HANDLING
// ==========================================
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(savedTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  const moonIcon = document.getElementById('theme-icon-moon');
  const sunIcon = document.getElementById('theme-icon-sun');
  if (moonIcon && sunIcon) {
    if (theme === 'dark') {
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    } else {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
    }
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// ==========================================
// NAVIGATION TABS SWITCHER
// ==========================================
function initNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;
      switchTab(targetTab);
    });
  });
}

function switchTab(tabName) {
  currentActiveTab = tabName;

  // Update tabs active state
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabName);
  });

  // Hide all tab views
  const views = ['planner', 'theory', 'exercises', 'materials'];
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) {
      if (v === tabName) {
        el.style.display = (v === 'planner') ? 'block' : 'block';
        el.classList.add('active');
      } else {
        el.style.display = 'none';
        el.classList.remove('active');
      }
    }
  });

  // Specific tab render triggers
  if (tabName === 'theory') {
    renderTheoryModule();
  } else if (tabName === 'exercises') {
    renderExerciseModule();
  } else if (tabName === 'materials') {
    renderMaterialsModule();
  } else if (tabName === 'planner') {
    renderApp();
  }
}

// Deep navigation helpers
function navigateToTheory(subjectId, part = 'all') {
  currentTheorySubject = subjectId;
  currentTheoryPart = part;
  switchTab('theory');
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToExercise(subjectId, set = 'all') {
  currentExerciseSubject = subjectId;
  currentExerciseSet = set;
  switchTab('exercises');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// RENDER ALL PLANNER COMPONENTS
// ==========================================
function renderApp() {
  renderHeaderInfo();
  renderMetrics();
  renderSubjectFilters();
  renderSubjectCards();
  renderSchedule();
}

function renderHeaderInfo() {
  document.getElementById('user-name-text').textContent = state.userName || 'Vũ Đức Hoàng';
  
  if (state.examTargetDate) {
    const parts = state.examTargetDate.split('-');
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    document.getElementById('target-exam-text').textContent = `Mục tiêu thi: ${formattedDate}`;
  }
}

// ==========================================
// METRICS COMPUTATION
// ==========================================
function getActiveSchedule() {
  return state.schedule.filter(item => {
    if (item.phase === 'extended' && !state.showExtended) {
      return false;
    }
    const isSubjectTask = state.subjects.some(s => s.id === item.subjectId);
    if (isSubjectTask) {
      const sub = state.subjects.find(s => s.id === item.subjectId);
      if (sub && !sub.active) return false;
    }
    return true;
  });
}

function renderMetrics() {
  // 1. Countdown
  const targetDate = new Date(state.examTargetDate + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const countdownEl = document.getElementById('countdown-days');
  const countdownSub = document.getElementById('countdown-subtext');

  if (diffDays > 0) {
    countdownEl.textContent = diffDays;
    countdownSub.textContent = `Còn ${diffDays} ngày đến kỳ thi (${targetDate.toLocaleDateString('vi-VN')})`;
  } else if (diffDays === 0) {
    countdownEl.textContent = '0';
    countdownSub.textContent = 'HÔM NAY LÀ NGÀY THI! Tự tin làm bài!';
  } else {
    countdownEl.textContent = '0';
    countdownSub.textContent = `Đã qua ngày thi dự kiến (${Math.abs(diffDays)} ngày trước)`;
  }

  // Active items
  const activeItems = getActiveSchedule();
  const totalTasks = activeItems.length;
  const completedTasks = activeItems.filter(i => i.completed).length;

  // 2. Total Progress
  const totalPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  document.getElementById('progress-percent').textContent = `${totalPercent}%`;
  document.getElementById('progress-ratio').textContent = `${completedTasks}/${totalTasks} buổi`;
  document.getElementById('progress-bar-total').style.width = `${totalPercent}%`;

  // 3. Phase 1: Theory
  const theoryTasks = activeItems.filter(i => i.phase === 'theory');
  const theoryCompleted = theoryTasks.filter(i => i.completed).length;
  const theoryTotal = theoryTasks.length;
  const theoryPercent = theoryTotal > 0 ? Math.round((theoryCompleted / theoryTotal) * 100) : 0;
  document.getElementById('theory-percent').textContent = `${theoryPercent}%`;
  document.getElementById('theory-ratio').textContent = `${theoryCompleted}/${theoryTotal} ngày`;

  // 4. Phase 2: Practice
  const practiceTasks = activeItems.filter(i => i.phase === 'practice');
  const practiceCompleted = practiceTasks.filter(i => i.completed).length;
  const practiceTotal = practiceTasks.length;
  const practicePercent = practiceTotal > 0 ? Math.round((practiceCompleted / practiceTotal) * 100) : 0;
  document.getElementById('practice-percent').textContent = `${practicePercent}%`;
  document.getElementById('practice-ratio').textContent = `${practiceCompleted}/${practiceTotal} ngày`;

  // Extended Filter Button Toggle
  const extBtn = document.getElementById('filter-phase-extended');
  if (extBtn) {
    extBtn.style.display = state.showExtended ? 'inline-block' : 'none';
  }
}

// ==========================================
// 6 SUBJECTS COVERAGE CARDS
// ==========================================
function renderSubjectCards() {
  const container = document.getElementById('subjects-container');
  container.innerHTML = '';

  state.subjects.filter(s => s.active).forEach(sub => {
    const subTasks = state.schedule.filter(i => i.subjectId === sub.id && i.phase === 'theory');
    const taskA = subTasks.find(i => i.part === 'A');
    const taskB = subTasks.find(i => i.part === 'B');
    const taskC = subTasks.find(i => i.part === 'C');
    const taskD = subTasks.find(i => i.part === 'D');

    const doneA = taskA ? taskA.completed : false;
    const doneB = taskB ? taskB.completed : false;
    const doneC = taskC ? taskC.completed : false;
    const doneD = taskD ? taskD.completed : false;

    let cumulativePercent = 0;
    if (doneD) cumulativePercent = 100;
    else if (doneC) cumulativePercent = 75;
    else if (doneB) cumulativePercent = 50;
    else if (doneA) cumulativePercent = 25;

    // Scores
    const practiceTasks = state.schedule.filter(i => i.subjectId === sub.id && i.phase === 'practice');
    const taskSetA = practiceTasks.find(i => i.part === 'Bộ A');
    const taskSetB = practiceTasks.find(i => i.part === 'Bộ B');

    const scoreA = taskSetA && taskSetA.score ? taskSetA.score : '--';
    const scoreB = taskSetB && taskSetB.score ? taskSetB.score : '--';

    const card = document.createElement('div');
    card.className = 'subject-card';
    card.style.setProperty('--subject-accent', sub.color);
    card.style.setProperty('--subject-bg', sub.bgLight);

    card.innerHTML = `
      <div class="subject-card-header">
        <div>
          <span class="subject-code">${sub.id}</span>
          <h3 class="subject-name">${sub.name}</h3>
        </div>
        <div class="coverage-percentage" style="color:${sub.color};">
          ${cumulativePercent}%
        </div>
      </div>

      <div class="coverage-milestones">
        <div class="milestone-badge ${doneA ? 'achieved' : ''}">
          <span class="milestone-title">Phần A</span>
          <span class="milestone-sub">25%</span>
        </div>
        <div class="milestone-badge ${doneB ? 'achieved' : ''}">
          <span class="milestone-title">Phần B</span>
          <span class="milestone-sub">50%</span>
        </div>
        <div class="milestone-badge ${doneC ? 'achieved' : ''}">
          <span class="milestone-title">Phần C</span>
          <span class="milestone-sub">75%</span>
        </div>
        <div class="milestone-badge ${doneD ? 'achieved' : ''}">
          <span class="milestone-title">Phần D</span>
          <span class="milestone-sub">100%</span>
        </div>
      </div>

      <div class="scores-row">
        <div class="score-badge">
          <span class="score-name">Bộ đề A:</span>
          <span class="score-val" id="score-val-${sub.id}-A">${scoreA}</span>
        </div>
        <div class="score-badge">
          <span class="score-name">Bộ đề B:</span>
          <span class="score-val" id="score-val-${sub.id}-B">${scoreB}</span>
        </div>
      </div>

      <div style="display:flex; gap:8px; margin-top:14px;">
        <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="navigateToTheory('${sub.id}')">
          📖 Ôn lý thuyết
        </button>
        <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="navigateToExercise('${sub.id}')">
          📝 Làm bài tập
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderSubjectFilters() {
  const container = document.getElementById('subject-filters');
  container.innerHTML = `
    <button class="filter-btn ${currentFilters.subject === 'all' ? 'active' : ''}" data-subject="all" id="filter-sub-all">
      Mọi môn
    </button>
  `;

  state.subjects.filter(s => s.active).forEach(sub => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${currentFilters.subject === sub.id ? 'active' : ''}`;
    btn.dataset.subject = sub.id;
    btn.id = `filter-sub-${sub.id.toLowerCase()}`;
    btn.textContent = sub.id;
    btn.title = sub.name;
    container.appendChild(btn);
  });

  const reviewBtn = document.createElement('button');
  reviewBtn.className = `filter-btn ${currentFilters.subject === 'REVIEW' ? 'active' : ''}`;
  reviewBtn.dataset.subject = 'REVIEW';
  reviewBtn.id = 'filter-sub-review';
  reviewBtn.textContent = 'Ôn vòng / Tổng hợp';
  container.appendChild(reviewBtn);
}

// ==========================================
// DAILY SCHEDULE & CHECKLIST
// ==========================================
function renderSchedule() {
  const container = document.getElementById('schedule-container');
  container.innerHTML = '';

  const todayStr = getTodayISOString();

  const items = state.schedule.filter(item => {
    if (item.phase === 'extended' && !state.showExtended) return false;

    const isSubjectTask = state.subjects.some(s => s.id === item.subjectId);
    if (isSubjectTask) {
      const sub = state.subjects.find(s => s.id === item.subjectId);
      if (sub && !sub.active) return false;
    }

    if (currentFilters.phase !== 'all') {
      if (currentFilters.phase === 'theory' && item.phase !== 'theory') return false;
      if (currentFilters.phase === 'practice' && item.phase !== 'practice') return false;
      if (currentFilters.phase === 'extended' && item.phase !== 'extended') return false;
    }

    if (currentFilters.subject !== 'all') {
      if (currentFilters.subject === 'REVIEW') {
        if (!['REVIEW', 'GENERAL', 'MOCK', 'FOCUS'].includes(item.subjectId)) return false;
      } else if (item.subjectId !== currentFilters.subject) {
        return false;
      }
    }

    if (currentFilters.status === 'today') {
      if (item.date !== todayStr) return false;
    } else if (currentFilters.status === 'pending') {
      if (item.completed) return false;
    } else if (currentFilters.status === 'completed') {
      if (!item.completed) return false;
    }

    return true;
  });

  if (items.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 48px 20px; background:var(--bg-card); border-radius:var(--radius-md); border:1px dashed var(--border-color); color:var(--text-muted);">
        <p style="font-size:15px; font-weight:600;">Không có bài học nào phù hợp với bộ lọc hiện tại.</p>
        <p style="font-size:13px; margin-top:6px;">Hãy thử chọn bộ lọc khác hoặc bật thêm môn học trong cài đặt.</p>
      </div>
    `;
    return;
  }

  items.forEach(item => {
    const isToday = item.date === todayStr;
    const subject = state.subjects.find(s => s.id === item.subjectId);
    
    let tagBg = 'rgba(255, 255, 255, 0.08)';
    let tagColor = 'var(--text-secondary)';
    let tagLabel = item.subjectId;

    if (subject) {
      tagBg = subject.bgLight;
      tagColor = subject.color;
      tagLabel = subject.id;
    } else if (item.subjectId === 'GENERAL') {
      tagLabel = 'CHUNG';
    } else if (item.subjectId === 'REVIEW') {
      tagLabel = 'ÔN VÒNG';
      tagColor = 'var(--accent-purple)';
      tagBg = 'rgba(168, 85, 247, 0.12)';
    } else if (item.subjectId === 'MOCK') {
      tagLabel = 'THI THỬ';
      tagColor = 'var(--accent-cyan)';
      tagBg = 'rgba(56, 189, 248, 0.12)';
    } else if (item.subjectId === 'FOCUS') {
      tagLabel = 'MÔN YẾU';
      tagColor = 'var(--accent-amber)';
      tagBg = 'rgba(245, 158, 11, 0.12)';
    }

    const card = document.createElement('div');
    card.className = `day-card ${item.completed ? 'completed' : ''} ${isToday ? 'is-today' : ''}`;
    card.id = `day-row-${item.id}`;

    const dateParts = item.date.split('-');
    const dayMonth = `${dateParts[2]}/${dateParts[1]}`;
    const isScoreable = ['Bộ A', 'Bộ B', 'Hỗn hợp 1', 'Hỗn hợp 2', 'Hỗn hợp 3'].includes(item.part);

    // Deep link action buttons
    let actionDeepLink = '';
    if (item.phase === 'theory' && ['A', 'B', 'C', 'D'].includes(item.part) && subject) {
      actionDeepLink = `
        <button class="btn btn-secondary btn-sm" onclick="navigateToTheory('${item.subjectId}', '${item.part}')" title="Mở trang lý thuyết ${item.subjectId} Phần ${item.part}">
          📖 Ôn lý thuyết
        </button>
      `;
    } else if (item.phase === 'practice' && subject) {
      const setCode = item.part.includes('Bộ B') ? 'set_b' : 'set_a';
      actionDeepLink = `
        <button class="btn btn-secondary btn-sm" onclick="navigateToExercise('${item.subjectId}', '${setCode}')" title="Mở bài tập luyện đề ${item.part}">
          📝 Làm bài tập
        </button>
      `;
    }

    card.innerHTML = `
      <button class="day-checkbox" data-id="${item.id}" aria-label="Đánh dấu hoàn thành bài học ${item.title}">
        ${item.completed ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
      </button>

      <div class="day-date-badge">
        <span class="date-day">${dayMonth}</span>
        <span class="date-sub">Ngày ${item.id}</span>
      </div>

      <div class="day-main-info">
        <div class="day-meta-row">
          <span class="day-subject-badge" style="background:${tagBg}; color:${tagColor};">
            ${tagLabel}
          </span>
          <span class="day-phase-tag">${item.phaseName}</span>
          ${isToday ? '<span class="day-today-tag">⚡ Hôm nay</span>' : ''}
          <span style="font-size:11px; color:var(--text-muted); margin-left:auto; font-family:var(--font-mono);">
            ⏱️ ${item.timeBreakdown}
          </span>
        </div>

        <div class="day-title">${item.title}</div>
        <div class="day-task">${item.task}</div>
        <div class="day-deliverable">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          <strong>Đầu ra:</strong> ${item.deliverable}
        </div>
      </div>

      <div class="day-actions-cell">
        ${actionDeepLink}
        ${isScoreable ? `
          <div class="score-input-wrapper" title="Nhập điểm thi thử để theo dõi">
            <span class="score-label">Điểm:</span>
            <input type="text" class="score-input" data-id="${item.id}" value="${item.score || ''}" placeholder="vd: 8.5">
          </div>
        ` : ''}

        <button class="btn-note ${item.notes ? 'has-note' : ''}" data-id="${item.id}" title="${item.notes ? 'Ghi chú: ' + item.notes : 'Thêm ghi chú bài học'}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
      </div>

      ${item.notes ? `
        <div class="day-note-preview" data-id="${item.id}">
          <span class="note-quote-icon">📝</span>
          <span>${escapeHtml(item.notes)}</span>
        </div>
      ` : ''}
    `;

    container.appendChild(card);
  });

  attachScheduleCardEvents();
}

function attachScheduleCardEvents() {
  // Checkbox toggle
  document.querySelectorAll('.day-checkbox').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id, 10);
      toggleTaskCompletion(id);
    });
  });

  // Score input change
  document.querySelectorAll('.score-input').forEach(input => {
    input.addEventListener('change', () => {
      const id = parseInt(input.dataset.id, 10);
      const val = input.value.trim();
      updateTaskScore(id, val);
    });
  });

  // Note button click
  document.querySelectorAll('.btn-note').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      openNoteEditor(id);
    });
  });

  // Note preview click to edit
  document.querySelectorAll('.day-note-preview').forEach(el => {
    el.addEventListener('click', () => {
      const id = parseInt(el.dataset.id, 10);
      openNoteEditor(id);
    });
  });
}

function toggleTaskCompletion(id) {
  const item = state.schedule.find(i => i.id === id);
  if (!item) return;

  item.completed = !item.completed;
  saveState();
  renderMetrics();
  renderSubjectCards();
  renderSchedule();

  if (item.completed) {
    showToast(`Đã hoàn thành buổi học: ${item.title}`);
  }
}

function updateTaskScore(id, scoreVal) {
  const item = state.schedule.find(i => i.id === id);
  if (!item) return;

  item.score = scoreVal || null;
  saveState();
  renderSubjectCards();
  showToast(`Đã lưu điểm thi thử: ${scoreVal || 'Trống'}`);
}

function openNoteEditor(id) {
  const item = state.schedule.find(i => i.id === id);
  if (!item) return;

  const currentNotes = item.notes || '';
  const newNotes = prompt(`Ghi chú bài học [${item.date} - ${item.title}]:\n(Ghi lý do sai, công thức cần nhớ hoặc kiến thức cần xem lại)`, currentNotes);

  if (newNotes !== null) {
    item.notes = newNotes.trim();
    saveState();
    renderSchedule();
    showToast('Đã lưu ghi chú bài học');
  }
}

// ==========================================
// THEORY REVIEW MODULE LOGIC
// ==========================================
function initTheoryModule() {
  // Render subject selector pills
  renderTheorySubjectPills();

  // Part filter buttons
  const partBtns = document.querySelectorAll('#theory-part-filters .filter-btn');
  partBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      partBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTheoryPart = btn.dataset.part;
      renderTheoryCards();
    });
  });

  // Search input
  const searchInput = document.getElementById('theory-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      theorySearchQuery = e.target.value.toLowerCase().trim();
      renderTheoryCards();
    });
  }
}

function renderTheorySubjectPills() {
  const container = document.getElementById('theory-subject-pills');
  if (!container) return;
  container.innerHTML = '';

  const subjects = [
    { id: 'PL', name: 'Pháp luật KD & DN', color: '#f59e0b' },
    { id: 'TC', name: 'Tài chính nâng cao', color: '#0284c7' },
    { id: 'TH', name: 'Thuế & QL Thuế', color: '#ef4444' },
    { id: 'KT', name: 'Kế toán nâng cao', color: '#10b981' },
    { id: 'KI', name: 'Kiểm toán nâng cao', color: '#8b5cf6' },
    { id: 'PT', name: 'Phân tích HĐTC', color: '#06b6d4' },
    { id: 'TA', name: 'Tiếng Anh chuyên ngành', color: '#ec4899' }
  ];

  subjects.forEach(sub => {
    const btn = document.createElement('button');
    btn.className = `subject-pill ${currentTheorySubject === sub.id ? 'active' : ''}`;
    btn.dataset.subject = sub.id;
    btn.textContent = sub.name;
    if (currentTheorySubject === sub.id) {
      btn.style.backgroundColor = sub.color;
      btn.style.color = '#fff';
    }
    btn.addEventListener('click', () => {
      currentTheorySubject = sub.id;
      renderTheorySubjectPills();
      renderTheoryCards();
    });
    container.appendChild(btn);
  });
}

function renderTheoryCards() {
  const container = document.getElementById('theory-cards-container');
  if (!container) return;
  container.innerHTML = '';

  if (typeof THEORY_BANK === 'undefined' || !THEORY_BANK[currentTheorySubject]) {
    container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-muted);">Đang tải dữ liệu lý thuyết...</div>`;
    return;
  }

  const subjectData = THEORY_BANK[currentTheorySubject];
  const parts = subjectData.parts;

  // Filter parts
  const partKeys = Object.keys(parts).filter(k => {
    if (currentTheoryPart !== 'all' && k !== currentTheoryPart) return false;
    return true;
  });

  let matchingCardsCount = 0;

  partKeys.forEach(partKey => {
    const partData = parts[partKey];

    // Filter by search query if any
    if (theorySearchQuery) {
      const matchInTitle = partData.title.toLowerCase().includes(theorySearchQuery);
      const matchInOverview = partData.overview.toLowerCase().includes(theorySearchQuery);
      const matchInTakeaways = partData.keyTakeaways.some(t => t.toLowerCase().includes(theorySearchQuery));
      const matchInPitfalls = partData.pitfalls ? partData.pitfalls.some(p => p.toLowerCase().includes(theorySearchQuery)) : false;
      if (!matchInTitle && !matchInOverview && !matchInTakeaways && !matchInPitfalls) {
        return;
      }
    }

    matchingCardsCount++;

    const card = document.createElement('div');
    card.className = 'theory-card';

    // Key takeaways list
    const takeawaysHtml = partData.keyTakeaways.map(item => {
      return `<li class="takeaway-item">${item}</li>`;
    }).join('');

    // Law Box (if any)
    let lawBoxHtml = '';
    if (partData.newRegulations && partData.newRegulations.length > 0) {
      lawBoxHtml = `
        <div class="law-box">
          <div class="law-box-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            <span>Quy định & Văn bản mới cập nhật 2026</span>
          </div>
          <div class="law-box-content">
            ${partData.newRegulations.join('<br>')}
          </div>
        </div>
      `;
    }

    // Pitfall Box (if any)
    let pitfallBoxHtml = '';
    if (partData.pitfalls && partData.pitfalls.length > 0) {
      const pitfallItems = partData.pitfalls.map(p => `<li class="pitfall-item">⚠️ ${p}</li>`).join('');
      pitfallBoxHtml = `
        <div class="pitfall-box">
          <div class="pitfall-box-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <span>Điểm dễ nhầm lẫn & Bẫy đề thi (Quan trọng)</span>
          </div>
          <ul class="pitfall-list">
            ${pitfallItems}
          </ul>
        </div>
      `;
    }

    // Formulas Grid (if any)
    let formulasHtml = '';
    if (partData.formulas && partData.formulas.length > 0) {
      const formulaCards = partData.formulas.map(f => {
        return `
          <div class="formula-card">
            <div class="formula-name">${f.name}</div>
            <div class="formula-expr">${f.expr}</div>
          </div>
        `;
      }).join('');

      formulasHtml = `
        <div class="theory-block">
          <div class="theory-block-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            <span>Bảng công thức trọng tâm</span>
          </div>
          <div class="formulas-grid">${formulaCards}</div>
        </div>
      `;
    }

    // Interactive Flashcards (if any)
    let flashcardsHtml = '';
    if (partData.flashcards && partData.flashcards.length > 0) {
      const fcCards = partData.flashcards.map((fc, idx) => {
        return `
          <div class="flashcard" onclick="this.classList.toggle('flipped')" title="Bấm để lật xem đáp án">
            <div class="flashcard-inner">
              <div class="flashcard-front">
                <span class="flashcard-label">Câu hỏi #${idx + 1}</span>
                <p class="flashcard-text">${fc.q}</p>
                <span class="flashcard-hint">👆 Bấm để lật thẻ</span>
              </div>
              <div class="flashcard-back">
                <span class="flashcard-label">Đáp án cốt lõi</span>
                <p class="flashcard-text">${fc.a}</p>
                <span class="flashcard-hint">👆 Bấm để lật lại</span>
              </div>
            </div>
          </div>
        `;
      }).join('');

      flashcardsHtml = `
        <div class="theory-block">
          <div class="theory-block-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            <span>Thẻ ghi nhớ nhanh (Flashcards)</span>
          </div>
          <div class="flashcards-grid">${fcCards}</div>
        </div>
      `;
    }

    // Check if user marked this part as studied
    const isUnderstood = state.theoryProgress && state.theoryProgress[`${currentTheorySubject}_${partKey}`];

    card.innerHTML = `
      <div class="theory-card-header">
        <div class="theory-title-group">
          <div class="theory-badges">
            <span class="badge-part" style="background:var(--accent-cyan); color:#000;">Phần ${partKey}</span>
            <span class="badge-milestone">${partData.milestone}</span>
            <button class="badge-pdf-link" onclick="openPdfModal('${subjectData.officialPdf}', 1, '${subjectData.subjectName}')">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span>Xem PDF gốc (${partData.pdfPages})</span>
            </button>
          </div>
          <h3 class="theory-part-title">${partData.title}</h3>
          <p class="theory-overview">${partData.overview}</p>
        </div>
      </div>

      ${lawBoxHtml}
      ${pitfallBoxHtml}

      <div class="theory-block">
        <div class="theory-block-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          <span>Kiến thức cốt lõi phải nhớ</span>
        </div>
        <ul class="takeaway-list">${takeawaysHtml}</ul>
      </div>

      ${formulasHtml}
      ${flashcardsHtml}

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px; padding-top:16px; border-top:1px solid var(--border-color);">
        <button class="btn ${isUnderstood ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="toggleTheoryUnderstood('${currentTheorySubject}', '${partKey}')">
          ${isUnderstood ? '✓ Đã nắm vững phần này' : '○ Đánh dấu đã học (≥ 80%)'}
        </button>
        <button class="btn btn-secondary btn-sm" onclick="navigateToExercise('${currentTheorySubject}')">
          Luyện bài tập môn này →
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  if (matchingCardsCount === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:48px 20px; background:var(--bg-card); border-radius:var(--radius-md); border:1px dashed var(--border-color); color:var(--text-muted);">
        <p style="font-size:15px; font-weight:600;">Không tìm thấy bài học nào phù hợp với từ khóa "${theorySearchQuery}".</p>
        <p style="font-size:13px; margin-top:6px;">Hãy thử tìm từ khóa khác hoặc chuyển sang chuyên đề khác.</p>
      </div>
    `;
  }
}

function toggleTheoryUnderstood(subjectId, partKey) {
  if (!state.theoryProgress) state.theoryProgress = {};
  const key = `${subjectId}_${partKey}`;
  state.theoryProgress[key] = !state.theoryProgress[key];
  saveState();
  renderTheoryCards();
  showToast(state.theoryProgress[key] ? 'Đã đánh dấu nắm vững phần này!' : 'Đã bỏ đánh dấu.');
}

// ==========================================
// EXERCISE & MOCK EXAM MODULE LOGIC
// ==========================================
function initExerciseModule() {
  // Render subject filter pills for exercises
  renderExerciseSubjectPills();

  // Mode switcher
  const btnStudy = document.getElementById('btn-mode-study');
  const btnExam = document.getElementById('btn-mode-exam');

  if (btnStudy && btnExam) {
    btnStudy.addEventListener('click', () => {
      setExerciseMode('study');
    });
    btnExam.addEventListener('click', () => {
      setExerciseMode('exam');
    });
  }

  // Set filter buttons
  const setBtns = document.querySelectorAll('#exercise-set-filters .filter-btn');
  setBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentExerciseSet = btn.dataset.set;
      currentQuestionIndex = 0;
      renderCurrentQuestion();
    });
  });

  // Exam timer buttons
  const btnPause = document.getElementById('btn-exam-toggle-pause');
  if (btnPause) {
    btnPause.addEventListener('click', toggleExamPause);
  }

  const btnSubmit = document.getElementById('btn-exam-submit');
  if (btnSubmit) {
    btnSubmit.addEventListener('click', confirmSubmitExam);
  }
}

function renderExerciseSubjectPills() {
  const container = document.getElementById('exercise-subject-pills');
  if (!container) return;
  container.innerHTML = '';

  const subjects = [
    { id: 'all', name: 'Tất cả môn' },
    { id: 'PL', name: 'Pháp luật' },
    { id: 'TC', name: 'Tài chính' },
    { id: 'TH', name: 'Thuế' },
    { id: 'KT', name: 'Kế toán' },
    { id: 'KI', name: 'Kiểm toán' },
    { id: 'PT', name: 'Phân tích' },
    { id: 'TA', name: 'Tiếng Anh' }
  ];

  subjects.forEach(sub => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${currentExerciseSubject === sub.id ? 'active' : ''}`;
    btn.dataset.subject = sub.id;
    btn.textContent = sub.name;
    btn.addEventListener('click', () => {
      currentExerciseSubject = sub.id;
      document.querySelectorAll('#exercise-subject-pills .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentQuestionIndex = 0;
      renderCurrentQuestion();
    });
    container.appendChild(btn);
  });
}

function setExerciseMode(mode) {
  currentExamMode = mode;
  document.getElementById('btn-mode-study').classList.toggle('active', mode === 'study');
  document.getElementById('btn-mode-exam').classList.toggle('active', mode === 'exam');

  const activeBar = document.getElementById('exam-active-bar');
  if (mode === 'exam') {
    activeBar.style.display = 'flex';
    startExamTimer();
  } else {
    activeBar.style.display = 'none';
    stopExamTimer();
  }

  currentQuestionIndex = 0;
  userAnswers = {};
  checkedAnswers = {};
  isExamSubmitted = false;

  document.getElementById('exercise-result-container').style.display = 'none';
  document.getElementById('exercise-card-container').style.display = 'block';

  renderCurrentQuestion();
}

function getFilteredQuestions() {
  if (typeof EXERCISE_BANK === 'undefined' || !EXERCISE_BANK.questions) return [];

  return EXERCISE_BANK.questions.filter(q => {
    // Subject filter
    if (currentExerciseSubject !== 'all' && q.subjectId !== currentExerciseSubject) {
      return false;
    }
    // Set filter
    if (currentExerciseSet !== 'all') {
      if (currentExerciseSet === 'mixed') {
        if (!['mixed_1', 'mixed_2'].includes(q.set)) return false;
      } else if (q.set !== currentExerciseSet) {
        return false;
      }
    }
    return true;
  });
}

function renderExerciseModule() {
  renderCurrentQuestion();
}

function renderQuestionNavigator(questions) {
  const navContainer = document.getElementById('question-navigator');
  if (!navContainer) return;
  navContainer.innerHTML = '';

  questions.forEach((q, idx) => {
    const pill = document.createElement('div');
    const isAnswered = userAnswers[q.id] !== undefined;
    const isCurrent = idx === currentQuestionIndex;

    pill.className = `q-nav-pill ${isCurrent ? 'current' : ''} ${isAnswered ? 'answered' : ''}`;
    pill.textContent = idx + 1;
    pill.title = `Câu ${idx + 1}: ${q.title}`;

    pill.addEventListener('click', () => {
      currentQuestionIndex = idx;
      renderCurrentQuestion();
    });

    navContainer.appendChild(pill);
  });
}

function renderCurrentQuestion() {
  const container = document.getElementById('exercise-card-container');
  if (!container) return;

  const questions = getFilteredQuestions();

  if (questions.length === 0) {
    document.getElementById('question-navigator').innerHTML = '';
    container.innerHTML = `
      <div style="text-align:center; padding:48px 20px; background:var(--bg-card); border-radius:var(--radius-md); border:1px dashed var(--border-color); color:var(--text-muted);">
        <p style="font-size:15px; font-weight:600;">Không có bài tập nào phù hợp với bộ lọc hiện tại.</p>
        <p style="font-size:13px; margin-top:6px;">Hãy thử chọn môn khác hoặc chọn "Tất cả bộ đề".</p>
      </div>
    `;
    return;
  }

  // Ensure index is within range
  if (currentQuestionIndex >= questions.length) currentQuestionIndex = 0;
  const q = questions[currentQuestionIndex];

  // Update progress text in exam bar
  const progressText = document.getElementById('exam-progress-text');
  if (progressText) {
    progressText.textContent = `Câu ${currentQuestionIndex + 1}/${questions.length}`;
  }

  renderQuestionNavigator(questions);

  const selectedOpt = userAnswers[q.id];
  const isChecked = checkedAnswers[q.id];

  // Render Options
  const optionsHtml = q.options.map((optText, optIdx) => {
    let optClass = 'q-option-item';
    if (selectedOpt === optIdx) optClass += ' selected';

    if (isChecked || isExamSubmitted) {
      if (optIdx === q.correctAnswer) {
        optClass += ' correct';
      } else if (selectedOpt === optIdx) {
        optClass += ' wrong';
      }
    }

    const letters = ['A', 'B', 'C', 'D'];

    return `
      <div class="${optClass}" onclick="selectQuestionOption('${q.id}', ${optIdx})">
        <div class="opt-radio-circle"></div>
        <div><strong>${letters[optIdx]}.</strong> ${optText}</div>
      </div>
    `;
  }).join('');

  // Explanation box (in study mode after checking, or after exam submission)
  let explanationHtml = '';
  if (isChecked || isExamSubmitted) {
    explanationHtml = `
      <div class="q-explanation-box">
        <div class="q-exp-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Đáp án đúng: ${['A', 'B', 'C', 'D'][q.correctAnswer]} & Lời giải chi tiết</span>
        </div>
        <div class="q-exp-content">${q.explanation}</div>
        ${q.legalBasis ? `<div class="q-exp-basis">📌 Căn cứ pháp lý / Chuẩn mực: ${q.legalBasis}</div>` : ''}
      </div>
    `;
  }

  // Type label
  const typeMap = {
    'multiple_choice': 'Trắc nghiệm',
    'calculation': 'Bài tập tính toán',
    'case_study': 'Tình huống thực tế',
    'essay': 'Tự luận'
  };

  container.innerHTML = `
    <div class="exercise-card">
      <div class="q-card-header">
        <div class="q-tags">
          <span class="q-tag-sub" style="background:var(--accent-cyan); color:#000;">${q.subjectId}</span>
          <span class="q-tag-type">${typeMap[q.type] || 'Bài tập'}</span>
          <span style="font-size:12px; color:var(--text-muted);">Câu hỏi ${currentQuestionIndex + 1}/${questions.length}</span>
        </div>
        <div class="q-points">+${q.points || 10} điểm</div>
      </div>

      <h3 class="q-body-title">${q.title}</h3>
      <div class="q-body-text">${q.question}</div>

      <div class="q-options-list">${optionsHtml}</div>

      ${explanationHtml}

      <div class="q-card-footer">
        <button class="btn btn-secondary btn-sm" onclick="navigateQuestion(-1)" ${currentQuestionIndex === 0 ? 'disabled' : ''}>
          ← Câu trước
        </button>

        <div style="display:flex; gap:8px;">
          ${currentExamMode === 'study' && !isChecked ? `
            <button class="btn btn-primary btn-sm" onclick="checkCurrentAnswer('${q.id}')">
              Kiểm tra đáp án & Xem lời giải
            </button>
          ` : ''}

          <button class="btn btn-secondary btn-sm" onclick="navigateQuestion(1)" ${currentQuestionIndex === questions.length - 1 ? 'disabled' : ''}>
            Câu tiếp theo →
          </button>
        </div>
      </div>
    </div>
  `;
}

function selectQuestionOption(questionId, optIndex) {
  if (isExamSubmitted) return; // Locked after submission
  userAnswers[questionId] = optIndex;
  renderCurrentQuestion();
}

function checkCurrentAnswer(questionId) {
  if (userAnswers[questionId] === undefined) {
    showToast('Vui lòng chọn một đáp án trước khi kiểm tra!', 'warning');
    return;
  }
  checkedAnswers[questionId] = true;
  renderCurrentQuestion();
}

function navigateQuestion(offset) {
  const questions = getFilteredQuestions();
  const nextIdx = currentQuestionIndex + offset;
  if (nextIdx >= 0 && nextIdx < questions.length) {
    currentQuestionIndex = nextIdx;
    renderCurrentQuestion();
  }
}

// Exam Timer
function startExamTimer() {
  stopExamTimer();
  examRemainingSeconds = (currentExerciseSet === 'mixed') ? 120 * 60 : 90 * 60;
  isExamPaused = false;
  updateTimerDisplay();

  examTimerInterval = setInterval(() => {
    if (!isExamPaused) {
      examRemainingSeconds--;
      updateTimerDisplay();
      if (examRemainingSeconds <= 0) {
        stopExamTimer();
        alert('Hết giờ làm bài! Hệ thống sẽ tự động thu bài và chấm điểm.');
        submitExam();
      }
    }
  }, 1000);
}

function stopExamTimer() {
  if (examTimerInterval) {
    clearInterval(examTimerInterval);
    examTimerInterval = null;
  }
}

function toggleExamPause() {
  isExamPaused = !isExamPaused;
  const btn = document.getElementById('btn-exam-toggle-pause');
  if (btn) {
    btn.textContent = isExamPaused ? 'Tiếp tục' : 'Tạm dừng';
  }
  showToast(isExamPaused ? 'Đã tạm dừng bài thi.' : 'Tiếp tục làm bài.');
}

function updateTimerDisplay() {
  const display = document.getElementById('exam-timer-display');
  if (!display) return;

  const hours = Math.floor(examRemainingSeconds / 3600);
  const minutes = Math.floor((examRemainingSeconds % 3600) / 60);
  const seconds = examRemainingSeconds % 60;

  const pad = (n) => n.toString().padStart(2, '0');

  if (hours > 0) {
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  } else {
    display.textContent = `${pad(minutes)}:${pad(seconds)}`;
  }

  display.classList.toggle('urgent', examRemainingSeconds < 300);
}

function confirmSubmitExam() {
  const questions = getFilteredQuestions();
  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = questions.length - answeredCount;

  let confirmMsg = `Bạn đã làm được ${answeredCount}/${questions.length} câu.`;
  if (unansweredCount > 0) {
    confirmMsg += ` Còn ${unansweredCount} câu chưa làm!`;
  }
  confirmMsg += '\nBạn có chắc chắn muốn nộp bài thi ngay bây giờ?';

  if (confirm(confirmMsg)) {
    submitExam();
  }
}

function submitExam() {
  stopExamTimer();
  isExamSubmitted = true;

  const questions = getFilteredQuestions();
  let correctCount = 0;
  let totalScore = 0;
  let earnedScore = 0;

  questions.forEach(q => {
    const pts = q.points || 10;
    totalScore += pts;
    if (userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
      earnedScore += pts;
    }
  });

  const percentage = totalScore > 0 ? Math.round((earnedScore / totalScore) * 100) : 0;
  const isPassed = percentage >= 50; // Chuẩn 50% đậu CPA

  // Hide quiz container, show result banner
  document.getElementById('exercise-card-container').style.display = 'none';
  document.getElementById('exam-active-bar').style.display = 'none';

  const resContainer = document.getElementById('exercise-result-container');
  resContainer.style.display = 'block';

  // Find target subject for saving score
  const targetSubId = currentExerciseSubject !== 'all' ? currentExerciseSubject : 'PL';
  const targetSetLabel = currentExerciseSet === 'set_b' ? 'Bộ đề B' : 'Bộ đề A';

  resContainer.innerHTML = `
    <div class="exam-result-banner">
      <div class="score-circle ${isPassed ? '' : 'failed'}">
        <span class="score-num">${percentage}%</span>
        <span class="score-label">${earnedScore}/${totalScore} điểm</span>
      </div>

      <h3 class="result-title">${isPassed ? '🎉 XUẤT SẮC! ĐẠT YÊU CẦU' : '⚠️ CẦN TIẾP TỤC ÔN LUYỆN'}</h3>
      <p class="result-desc">
        Bạn đã trả lời đúng <strong>${correctCount}/${questions.length}</strong> câu hỏi. 
        ${isPassed ? 'Điểm số của bạn vượt ngưỡng 50% yêu cầu của kỳ thi Bộ Tài chính.' : 'Bạn chưa đạt ngưỡng 50% để đậu môn thi này. Hãy rà soát lại các câu làm sai và ôn lại lý thuyết.'}
      </p>

      <div class="result-actions">
        <button class="btn btn-primary" onclick="saveExamScoreToSchedule('${targetSubId}', '${percentage}%', '${targetSetLabel}')">
          💾 Lưu điểm (${percentage}%) vào Lộ trình môn ${targetSubId}
        </button>
        <button class="btn btn-secondary" onclick="reviewExamAnswers()">
          🔍 Xem lại bài làm & Giải thích chi tiết
        </button>
        <button class="btn btn-secondary" onclick="setExerciseMode('study')">
          Làm lại bộ đề
        </button>
      </div>
    </div>
  `;

  // Save to test history
  if (!state.testHistory) state.testHistory = [];
  state.testHistory.push({
    date: getTodayISOString(),
    subject: currentExerciseSubject,
    set: currentExerciseSet,
    score: percentage,
    earnedScore,
    totalScore,
    correctCount,
    totalQuestions: questions.length
  });
  saveState();
}

function reviewExamAnswers() {
  document.getElementById('exercise-result-container').style.display = 'none';
  document.getElementById('exercise-card-container').style.display = 'block';
  currentQuestionIndex = 0;
  renderCurrentQuestion();
}

function saveExamScoreToSchedule(subjectId, scoreText, setLabel) {
  // Find schedule day corresponding to this subject and set
  const matchDay = state.schedule.find(item => item.subjectId === subjectId && item.part.includes(setLabel));
  if (matchDay) {
    matchDay.score = scoreText;
    matchDay.completed = true;
  }

  saveState();
  renderApp();
  showToast(`Đã lưu điểm ${scoreText} vào môn ${subjectId} (${setLabel}) thành công!`, 'success');
}

// ==========================================
// MATERIALS & PDF VIEWER MODULE LOGIC
// ==========================================
function initMaterialsModule() {
  // Close PDF modal events
  const btnClose = document.getElementById('btn-close-pdf-modal');
  if (btnClose) {
    btnClose.addEventListener('click', closePdfModal);
  }

  const modal = document.getElementById('pdf-viewer-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePdfModal();
    });
  }
}

function renderMaterialsModule() {
  const container = document.getElementById('materials-catalog-container');
  if (!container) return;
  container.innerHTML = '';

  if (typeof MATERIALS_CATALOG === 'undefined') {
    container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-muted);">Đang tải danh mục tài liệu...</div>`;
    return;
  }

  MATERIALS_CATALOG.forEach(mat => {
    const card = document.createElement('div');
    card.className = 'material-card';
    card.style.setProperty('--subject-accent', mat.color || 'var(--accent-cyan)');

    // Table of contents details HTML
    let tocHtml = '';
    if (mat.tableOfContents && mat.tableOfContents.length > 0) {
      const items = mat.tableOfContents.map(toc => {
        return `
          <li class="toc-item">
            <span><strong>${toc.part}:</strong> ${toc.title}</span>
            <span style="font-family:var(--font-mono); color:var(--accent-cyan); white-space:nowrap; margin-left:8px;">Trang ${toc.page}</span>
          </li>
        `;
      }).join('');

      tocHtml = `
        <details class="toc-details">
          <summary>📑 Xem mục lục đề cương (${mat.tableOfContents.length} mục)</summary>
          <ul class="toc-list">${items}</ul>
        </details>
      `;
    }

    const pdfPath = `materials/${mat.fileName}`;

    card.innerHTML = `
      <div class="material-card-top">
        <div class="material-meta-row">
          <span class="material-code-badge" style="background:${mat.color || 'var(--accent-cyan)'};">${mat.code}</span>
          <span class="material-specs">${mat.pages} trang • ${mat.fileSize}</span>
        </div>
        <h3 class="material-title">${mat.title}</h3>
        <p class="material-desc">${mat.description}</p>
        ${tocHtml}
      </div>

      <div class="material-actions">
        <button class="btn btn-primary btn-sm" style="flex:1;" onclick="openPdfModal('${mat.fileName}', 1, '${mat.title}')">
          📖 Đọc trực tuyến
        </button>
        <a href="${pdfPath}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="Mở trong tab mới">
          🔗
        </a>
        <a href="${pdfPath}" download="${mat.fileName}" class="btn btn-secondary btn-sm" title="Tải về máy">
          ⬇️
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

function openPdfModal(fileName, page = 1, title = 'Xem tài liệu PDF') {
  const modal = document.getElementById('pdf-viewer-modal');
  const titleEl = document.getElementById('pdf-modal-title');
  const frame = document.getElementById('pdf-viewer-frame');
  const extBtn = document.getElementById('btn-pdf-external');
  const downBtn = document.getElementById('btn-pdf-download');

  if (!modal || !frame) return;

  const pdfUrl = `materials/${fileName}#page=${page}`;

  titleEl.textContent = title;
  frame.src = pdfUrl;

  if (extBtn) extBtn.href = pdfUrl;
  if (downBtn) {
    downBtn.href = `materials/${fileName}`;
    downBtn.download = fileName;
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closePdfModal() {
  const modal = document.getElementById('pdf-viewer-modal');
  const frame = document.getElementById('pdf-viewer-frame');
  if (modal) modal.style.display = 'none';
  if (frame) frame.src = '';
  document.body.style.overflow = '';
}

// ==========================================
// SETTINGS & CONFIGURATION MODAL
// ==========================================
function setupEventListeners() {
  // Theme toggle
  document.getElementById('btn-theme-toggle').addEventListener('click', toggleTheme);

  // Settings modal
  const settingsModal = document.getElementById('settings-modal');
  document.getElementById('btn-open-settings').addEventListener('click', openSettingsModal);
  document.getElementById('btn-close-settings').addEventListener('click', () => {
    settingsModal.classList.remove('active');
  });

  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
      settingsModal.classList.remove('active');
    }
  });

  document.getElementById('btn-save-settings').addEventListener('click', saveSettings);
  document.getElementById('btn-reset-data').addEventListener('click', resetDataToDefault);

  // Backup & Restore
  document.getElementById('btn-export-backup').addEventListener('click', exportBackupJSON);
  const importInput = document.getElementById('import-file-input');
  document.getElementById('btn-import-backup').addEventListener('click', () => {
    importInput.click();
  });
  importInput.addEventListener('change', importBackupJSON);

  // Schedule Filter buttons
  document.querySelectorAll('#phase-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#phase-filters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilters.phase = btn.dataset.phase;
      renderSchedule();
    });
  });

  document.querySelectorAll('#status-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#status-filters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilters.status = btn.dataset.status;
      renderSchedule();
    });
  });

  // Delegated subject filter click
  document.getElementById('subject-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#subject-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilters.subject = btn.dataset.subject;
    renderSchedule();
  });
}

function openSettingsModal() {
  const modal = document.getElementById('settings-modal');
  document.getElementById('input-user-name').value = state.userName || 'Vũ Đức Hoàng';
  document.getElementById('input-exam-date').value = state.examTargetDate || '2026-11-14';
  document.getElementById('toggle-extended-schedule').checked = !!state.showExtended;

  const subContainer = document.getElementById('modal-subjects-list');
  subContainer.innerHTML = '';

  state.subjects.forEach(sub => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid var(--border-color);';
    row.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:${sub.color};"></span>
        <span style="font-weight:600; font-size:13px;">${sub.id} - ${sub.name}</span>
      </div>
      <label class="toggle-switch">
        <input type="checkbox" class="subject-toggle-input" data-id="${sub.id}" ${sub.active ? 'checked' : ''}>
        <span class="toggle-slider"></span>
      </label>
    `;
    subContainer.appendChild(row);
  });

  modal.classList.add('active');
}

function saveSettings() {
  state.userName = document.getElementById('input-user-name').value.trim() || 'Vũ Đức Hoàng';
  state.examTargetDate = document.getElementById('input-exam-date').value || '2026-11-14';
  state.showExtended = document.getElementById('toggle-extended-schedule').checked;

  document.querySelectorAll('.subject-toggle-input').forEach(checkbox => {
    const id = checkbox.dataset.id;
    const sub = state.subjects.find(s => s.id === id);
    if (sub) {
      sub.active = checkbox.checked;
    }
  });

  saveState();
  document.getElementById('settings-modal').classList.remove('active');
  renderApp();
  showToast('Đã lưu cấu hình mới!', 'success');
}

function resetDataToDefault() {
  if (confirm('CẢNH BÁO: Thao tác này sẽ đặt lại toàn bộ tiến độ, dấu tick, ghi chú và điểm số về trạng thái ban đầu. Bạn có chắc chắn không?')) {
    state = JSON.parse(JSON.stringify(DEFAULT_APP_STATE));
    state.theoryProgress = {};
    state.testHistory = [];
    saveState();
    document.getElementById('settings-modal').classList.remove('active');
    renderApp();
    showToast('Đã khôi phục dữ liệu mặc định ban đầu');
  }
}

// ==========================================
// BACKUP & RESTORE
// ==========================================
function exportBackupJSON() {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement('a');
  const nowStr = getTodayISOString();
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `vacpa_planner_backup_${nowStr}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('Đã tải xuống tệp sao lưu JSON', 'success');
}

function importBackupJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const importedData = JSON.parse(event.target.result);
      if (importedData && importedData.schedule && importedData.subjects) {
        state = importedData;
        saveState();
        renderApp();
        showToast('Khôi phục dữ liệu từ tệp sao lưu thành công!', 'success');
      } else {
        alert('Tệp JSON không hợp lệ hoặc thiếu dữ liệu lộ trình!');
      }
    } catch (err) {
      alert('Lỗi đọc tệp JSON: ' + err.message);
    }
    e.target.value = '';
  };
  reader.readAsText(file);
}

// ==========================================
// TOAST NOTIFICATIONS & UTILS
// ==========================================
let toastTimer = null;
function showToast(message, type = 'success') {
  const toast = document.getElementById('app-toast');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.className = `toast ${type} show`;

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

function getTodayISOString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
      default: return m;
    }
  });
}
