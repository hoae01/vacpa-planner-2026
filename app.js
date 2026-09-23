/**
 * VACPA Planner 2026 - Main Application Logic
 * Quản lý trạng thái, tính toán tiến độ, tương tác giao diện và đồng bộ dữ liệu
 */

const STORAGE_KEY = 'VACPA_PLANNER_2026_STATE';
const THEME_KEY = 'VACPA_THEME';

// State container
let state = null;

// Filter state
let currentFilters = {
  phase: 'all',
  subject: 'all',
  status: 'all'
};

const isLocalEnv = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:';
const SERVER_API = isLocalEnv ? 'http://localhost:8080/api' : null;
let isServerOnline = false;

// ==========================================
// INITIALIZATION & DUAL-TIER PERSISTENCE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initState();
  setupEventListeners();
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
    })
  };
}

async function initState() {
  // Tier 1: Try reading LocalStorage for instant zero-latency render
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

  // Khi triển khai trên GitHub Pages, LocalStorage được lưu vĩnh viễn theo tên miền HTTPS
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
        // Server exists but vacpa_data.json is new, seed with current state
        isServerOnline = true;
        updateStorageBadge('online', 'Đã kết nối tệp đĩa cứng (vacpa_data.json)');
        saveToServer();
      }
    } else {
      updateStorageBadge('offline', 'Chưa kết nối máy chủ (Mở Mo_App_VACPA.bat)');
    }
  } catch (err) {
    isServerOnline = false;
    updateStorageBadge('offline', 'Bộ nhớ tạm trình duyệt (Mở Mo_App_VACPA.bat để lưu vĩnh viễn)');
  }
}

function updateStorageBadge(status, text) {
  const badge = document.getElementById('storage-status-badge');
  const txt = document.getElementById('storage-status-text');
  if (badge && txt) {
    badge.className = `storage-badge ${status}`;
    txt.textContent = text;
  }
}

let saveDebounceTimer = null;
function saveState() {
  // 1. Save to LocalStorage immediately
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('LocalStorage write failed:', e);
  }

  // Khi ở trên GitHub Pages, chỉ cần lưu LocalStorage là vĩnh viễn
  if (!isLocalEnv || !SERVER_API) {
    updateStorageBadge('online', '☁️ Đã lưu vĩnh viễn trên thiết bị này');
    return;
  }

  // 2. Save to Server disk file (vacpa_data.json)
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
// RENDER ALL COMPONENTS
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
    // Check extended phase filter
    if (item.phase === 'extended' && !state.showExtended) {
      return false;
    }
    // Check if task belongs to a subject that is currently deactivated
    const isSubjectTask = state.subjects.some(s => s.id === item.subjectId);
    if (isSubjectTask) {
      const sub = state.subjects.find(s => s.id === item.subjectId);
      if (sub && !sub.active) return false;
    }
    return true;
  });
}

function renderMetrics() {
  // 1. Countdown calculation
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
    countdownSub.textContent = 'HÔM NAY LÀ NGÀY THI! Tự tin chiến thắng!';
  } else {
    countdownEl.textContent = 'Đã thi';
    countdownSub.textContent = `Kỳ thi đã diễn ra vào ${targetDate.toLocaleDateString('vi-VN')}`;
  }

  // 2. Active tasks & Overall Progress
  const activeItems = getActiveSchedule();
  const completedCount = activeItems.filter(i => i.completed).length;
  const totalCount = activeItems.length;
  const overallPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  document.getElementById('progress-percent').textContent = `${overallPercent}%`;
  document.getElementById('progress-ratio').textContent = `${completedCount}/${totalCount} buổi`;
  document.getElementById('progress-bar-total').style.width = `${overallPercent}%`;

  // 3. Theory Phase (30 days default)
  const theoryItems = activeItems.filter(i => i.phase === 'theory');
  const theoryCompleted = theoryItems.filter(i => i.completed).length;
  const theoryPercent = theoryItems.length > 0 ? Math.round((theoryCompleted / theoryItems.length) * 100) : 0;

  document.getElementById('theory-percent').textContent = `${theoryPercent}%`;
  document.getElementById('theory-ratio').textContent = `${theoryCompleted}/${theoryItems.length} ngày`;

  // 4. Practice Phase (23 days default + optional extended)
  const practiceItems = activeItems.filter(i => i.phase === 'practice' || i.phase === 'extended');
  const practiceCompleted = practiceItems.filter(i => i.completed).length;
  const practicePercent = practiceItems.length > 0 ? Math.round((practiceCompleted / practiceItems.length) * 100) : 0;

  document.getElementById('practice-percent').textContent = `${practicePercent}%`;
  document.getElementById('practice-ratio').textContent = `${practiceCompleted}/${practiceItems.length} ngày`;

  // Update extended filter button visibility
  const extBtn = document.getElementById('filter-phase-extended');
  if (extBtn) {
    extBtn.style.display = state.showExtended ? 'inline-block' : 'none';
  }
}

// ==========================================
// SUBJECTS COVERAGE CARDS
// ==========================================
function renderSubjectCards() {
  const container = document.getElementById('subjects-container');
  container.innerHTML = '';

  const activeSubjects = state.subjects.filter(s => s.active);

  activeSubjects.forEach(subject => {
    // Find theory tasks for parts A, B, C, D
    const theoryTasks = state.schedule.filter(i => i.subjectId === subject.id && i.phase === 'theory');
    const partA = theoryTasks.find(i => i.part === 'A');
    const partB = theoryTasks.find(i => i.part === 'B');
    const partC = theoryTasks.find(i => i.part === 'C');
    const partD = theoryTasks.find(i => i.part === 'D');

    const doneCount = [partA, partB, partC, partD].filter(p => p && p.completed).length;
    const coveragePercent = doneCount * 25;

    // Find mock scores
    const mockA = state.schedule.find(i => i.subjectId === subject.id && i.part === 'Bộ A');
    const mockB = state.schedule.find(i => i.subjectId === subject.id && i.part === 'Bộ B');

    const card = document.createElement('div');
    card.className = 'subject-card';
    card.style.borderTop = `3px solid ${subject.color}`;

    card.innerHTML = `
      <div>
        <div class="subject-card-top">
          <div class="subject-badge-title">
            <span class="subject-tag" style="background: ${subject.bgLight}; color: ${subject.color};">
              ${subject.id}
            </span>
            <span class="subject-name" title="${subject.fullName}">
              ${subject.name}
            </span>
          </div>
          <span class="subject-percent" style="color: ${coveragePercent === 100 ? 'var(--accent-emerald)' : 'var(--text-primary)'}">
            ${coveragePercent}%
          </span>
        </div>

        <!-- 4 Milestones A / B / C / D -->
        <div class="coverage-milestones">
          <div class="milestone-pill ${partA && partA.completed ? 'completed' : ''}" title="${partA ? partA.title : ''}">
            Phần A
            <span class="rate">25%</span>
          </div>
          <div class="milestone-pill ${partB && partB.completed ? 'completed' : ''}" title="${partB ? partB.title : ''}">
            Phần B
            <span class="rate">50%</span>
          </div>
          <div class="milestone-pill ${partC && partC.completed ? 'completed' : ''}" title="${partC ? partC.title : ''}">
            Phần C
            <span class="rate">75%</span>
          </div>
          <div class="milestone-pill ${partD && partD.completed ? 'completed' : ''}" title="${partD ? partD.title : ''}">
            Phần D
            <span class="rate">100%</span>
          </div>
        </div>
      </div>

      <div class="subject-card-footer">
        <span>Điểm luyện đề:</span>
        <div style="display:flex; gap:8px;">
          <span class="mock-score-badge" title="Điểm Bộ A">
            Bộ A: <strong>${mockA && mockA.score ? mockA.score : '--'}</strong>
          </span>
          <span class="mock-score-badge" title="Điểm Bộ B">
            Bộ B: <strong>${mockB && mockB.score ? mockB.score : '--'}</strong>
          </span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Render dynamic subject filter buttons
function renderSubjectFilters() {
  const container = document.getElementById('subject-filters');
  // Preserve "Mọi môn" button
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

  // Review / Mock filter button
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

  // Filter items
  const items = state.schedule.filter(item => {
    // 1. Hide extended if toggled off
    if (item.phase === 'extended' && !state.showExtended) {
      return false;
    }

    // 2. Hide inactive subjects
    const isSubjectTask = state.subjects.some(s => s.id === item.subjectId);
    if (isSubjectTask) {
      const sub = state.subjects.find(s => s.id === item.subjectId);
      if (sub && !sub.active) return false;
    }

    // 3. Phase Filter
    if (currentFilters.phase !== 'all') {
      if (currentFilters.phase === 'theory' && item.phase !== 'theory') return false;
      if (currentFilters.phase === 'practice' && item.phase !== 'practice') return false;
      if (currentFilters.phase === 'extended' && item.phase !== 'extended') return false;
    }

    // 4. Subject Filter
    if (currentFilters.subject !== 'all') {
      if (currentFilters.subject === 'REVIEW') {
        if (!['REVIEW', 'GENERAL', 'MOCK', 'FOCUS'].includes(item.subjectId)) return false;
      } else if (item.subjectId !== currentFilters.subject) {
        return false;
      }
    }

    // 5. Status Filter
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
    
    // Subject style
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

    // Format display date
    const dateParts = item.date.split('-');
    const dayMonth = `${dateParts[2]}/${dateParts[1]}`;

    // Has score field if practice day with "Bộ A" / "Bộ B" / "Hỗn hợp"
    const isScoreable = ['Bộ A', 'Bộ B', 'Hỗn hợp 1', 'Hỗn hợp 2', 'Hỗn hợp 3'].includes(item.part);

    card.innerHTML = `
      <!-- Checkbox -->
      <button class="day-checkbox" data-id="${item.id}" aria-label="Đánh dấu hoàn thành bài học ${item.title}">
        ${item.completed ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
      </button>

      <!-- Date Badge -->
      <div class="day-date-badge">
        <span class="date-day">${dayMonth}</span>
        <span class="date-sub">Ngày ${item.id}</span>
      </div>

      <!-- Main Info -->
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

      <!-- Actions: Score input + Note toggle -->
      <div class="day-actions-cell">
        ${isScoreable ? `
          <div class="score-input-wrapper" title="Nhập điểm thi thử để theo dõi">
            <span class="score-label">Điểm:</span>
            <input type="text" class="score-field" data-id="${item.id}" value="${item.score || ''}" placeholder="Vd: 8.5/10">
          </div>
        ` : ''}

        <button class="btn-note ${item.notes ? 'has-note' : ''}" data-id="${item.id}" title="${item.notes ? 'Sửa ghi chú' : 'Thêm ghi chú'}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
      </div>

      <!-- Inline Note Editor -->
      <div class="note-container ${item.notes ? 'active' : ''}" id="note-box-${item.id}">
        <textarea class="note-textarea" data-id="${item.id}" placeholder="Ghi chép nhanh các điểm cần nhớ hoặc lý do sai của buổi học này...">${item.notes || ''}</textarea>
      </div>
    `;

    container.appendChild(card);
  });
}

function getTodayISOString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// ==========================================
// INTERACTIVE EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  // Theme Toggle
  document.getElementById('btn-theme-toggle').addEventListener('click', toggleTheme);

  // Settings Modal open/close
  const settingsModal = document.getElementById('settings-modal');
  document.getElementById('btn-open-settings').addEventListener('click', () => {
    populateSettingsModal();
    settingsModal.classList.add('active');
  });
  document.getElementById('btn-close-settings').addEventListener('click', () => {
    settingsModal.classList.remove('active');
  });
  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) settingsModal.classList.remove('active');
  });

  // Save Settings
  document.getElementById('btn-save-settings').addEventListener('click', saveSettingsFromModal);

  // Reset Data to Default
  document.getElementById('btn-reset-data').addEventListener('click', () => {
    if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ dữ liệu lộ trình về trạng thái ban đầu không? Dữ liệu đã lưu sẽ bị xóa.')) {
      state = JSON.parse(JSON.stringify(DEFAULT_APP_STATE));
      saveState();
      settingsModal.classList.remove('active');
      renderApp();
      showToast('Đã khôi phục lộ trình mặc định thành công!', 'info');
    }
  });

  // Export / Import Backup
  document.getElementById('btn-export-backup').addEventListener('click', exportBackupJSON);
  
  const importInput = document.getElementById('import-file-input');
  document.getElementById('btn-import-backup').addEventListener('click', () => {
    importInput.click();
  });
  importInput.addEventListener('change', importBackupJSON);

  // Filter Buttons Delegation
  document.getElementById('phase-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#phase-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilters.phase = btn.dataset.phase;
    renderSchedule();
  });

  document.getElementById('subject-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#subject-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilters.subject = btn.dataset.subject;
    renderSchedule();
  });

  document.getElementById('status-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#status-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilters.status = btn.dataset.status;
    renderSchedule();
  });

  // Schedule Container Delegation (Checkbox, Score input, Note button, Note textarea)
  const scheduleContainer = document.getElementById('schedule-container');

  // 1. Toggle Checkbox
  scheduleContainer.addEventListener('click', (e) => {
    const checkbox = e.target.closest('.day-checkbox');
    if (checkbox) {
      const id = parseInt(checkbox.dataset.id, 10);
      toggleTaskCompleted(id);
      return;
    }

    // Toggle Note Editor visibility
    const noteBtn = e.target.closest('.btn-note');
    if (noteBtn) {
      const id = parseInt(noteBtn.dataset.id, 10);
      const noteBox = document.getElementById(`note-box-${id}`);
      if (noteBox) {
        noteBox.classList.toggle('active');
        if (noteBox.classList.contains('active')) {
          const textarea = noteBox.querySelector('textarea');
          if (textarea) textarea.focus();
        }
      }
    }
  });

  // 2. Score Input change
  scheduleContainer.addEventListener('input', (e) => {
    if (e.target.classList.contains('score-field')) {
      const id = parseInt(e.target.dataset.id, 10);
      const val = e.target.value.trim();
      const task = state.schedule.find(t => t.id === id);
      if (task) {
        task.score = val;
        saveState();
        renderSubjectCards();
      }
    }
  });

  // 3. Note Textarea change
  scheduleContainer.addEventListener('change', (e) => {
    if (e.target.classList.contains('note-textarea')) {
      const id = parseInt(e.target.dataset.id, 10);
      const val = e.target.value.trim();
      const task = state.schedule.find(t => t.id === id);
      if (task) {
        task.notes = val;
        saveState();
        const noteBtn = document.querySelector(`.btn-note[data-id="${id}"]`);
        if (noteBtn) {
          if (val) noteBtn.classList.add('has-note');
          else noteBtn.classList.remove('has-note');
        }
        showToast('Đã lưu ghi chú', 'success');
      }
    }
  });
}

function toggleTaskCompleted(taskId) {
  const task = state.schedule.find(t => t.id === taskId);
  if (!task) return;

  task.completed = !task.completed;
  saveState();

  // Re-render metrics & subject cards
  renderMetrics();
  renderSubjectCards();

  // Update DOM card directly for fast UX
  const card = document.getElementById(`day-row-${taskId}`);
  if (card) {
    if (task.completed) {
      card.classList.add('completed');
      const cb = card.querySelector('.day-checkbox');
      if (cb) {
        cb.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
      }
      showToast(`Hoàn thành: ${task.title}!`, 'success');
    } else {
      card.classList.remove('completed');
      const cb = card.querySelector('.day-checkbox');
      if (cb) cb.innerHTML = '';
      showToast(`Chưa hoàn thành: ${task.title}`, 'info');
    }
  }
}

// ==========================================
// SETTINGS MODAL LOGIC
// ==========================================
function populateSettingsModal() {
  document.getElementById('input-user-name').value = state.userName || '';
  document.getElementById('input-exam-date').value = state.examTargetDate || '2026-11-14';
  document.getElementById('toggle-extended-schedule').checked = !!state.showExtended;

  const subjectsList = document.getElementById('modal-subjects-list');
  subjectsList.innerHTML = '';

  state.subjects.forEach(sub => {
    const item = document.createElement('div');
    item.className = 'subject-toggle-item';
    item.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px;">
        <span class="subject-tag" style="background:${sub.bgLight}; color:${sub.color};">
          ${sub.id}
        </span>
        <input type="text" class="form-control subject-name-edit" data-id="${sub.id}" value="${sub.name}" style="padding:4px 8px; font-size:13px; max-width:260px;">
      </div>
      <label class="toggle-switch">
        <input type="checkbox" class="subject-toggle-input" data-id="${sub.id}" ${sub.active ? 'checked' : ''}>
        <span class="toggle-slider"></span>
      </label>
    `;
    subjectsList.appendChild(item);
  });
}

function saveSettingsFromModal() {
  const newName = document.getElementById('input-user-name').value.trim();
  const newDate = document.getElementById('input-exam-date').value;
  const isExtended = document.getElementById('toggle-extended-schedule').checked;

  state.userName = newName || 'Vũ Đức Hoàng';
  state.examTargetDate = newDate || '2026-11-14';
  state.showExtended = isExtended;

  // Update subjects active state & names
  document.querySelectorAll('.subject-toggle-input').forEach(checkbox => {
    const id = checkbox.dataset.id;
    const sub = state.subjects.find(s => s.id === id);
    if (sub) {
      sub.active = checkbox.checked;
    }
  });

  document.querySelectorAll('.subject-name-edit').forEach(input => {
    const id = input.dataset.id;
    const sub = state.subjects.find(s => s.id === id);
    if (sub && input.value.trim()) {
      sub.name = input.value.trim();
    }
  });

  saveState();
  document.getElementById('settings-modal').classList.remove('active');
  renderApp();
  showToast('Đã lưu cấu hình mới!', 'success');
}

// ==========================================
// EXPORT & IMPORT BACKUP (JSON)
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
    // Clear input
    e.target.value = '';
  };
  reader.readAsText(file);
}

// ==========================================
// TOAST NOTIFICATIONS
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
