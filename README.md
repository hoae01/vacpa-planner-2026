# 📚 VACPA Planner 2026

> 🌐 **TRUY CẬP ỨNG DỤNG ONLINE TẠI ĐÂY:**  
> 👉 **[https://hoae01.github.io/vacpa-planner-2026/](https://hoae01.github.io/vacpa-planner-2026/)**

Ứng dụng web cá nhân hóa dành riêng cho **Vũ Đức Hoàng** để quản lý tiến độ ôn thi Chứng chỉ Kiểm toán viên (CPA / VACPA 2026), bám sát 100% tài liệu **Planner ôn thi 6 môn VACPA**.

---

## 🚀 Cách mở ứng dụng để TỰ ĐỘNG LƯU VĨNH VIỄN VÀO MÁY

Để đảm bảo kết quả học tập, dấu tick và ghi chú **không bao giờ bị mất** khi tắt trình duyệt, bạn hãy mở theo cách sau:

👉 **Click đúp vào file `Mo_App_VACPA.bat`** (ở ngay thư mục ngoài `Ho so thi KTV 2026` hoặc trong thư mục `vacpa-planner`).

Khi mở bằng file này:
1. Ứng dụng sẽ tự động kích hoạt máy chủ lưu trữ dữ liệu nội bộ.
2. Tự động mở trình duyệt tại `http://localhost:8080/index.html`.
3. Mọi thao tác tích chọn hoàn thành, ghi chú hay điểm thi sẽ được **ghi trực tiếp thành tệp `vacpa_data.json` trên ổ cứng máy tính của bạn**.
4. Góc trên ứng dụng sẽ hiện biểu tượng: `🟢 Đã kết nối tệp đĩa cứng (vacpa_data.json)`.

> ⚠️ **Lưu ý quan trọng:** Nếu bạn mở trực tiếp bằng cách click đúp file `index.html` (chạy giao thức `file:///`), các trình duyệt hiện đại (như Edge, Chrome) thường áp dụng cơ chế bảo mật sandbox và xóa bộ nhớ tạm khi tắt cửa sổ. Vì vậy, hãy luôn dùng file **`Mo_App_VACPA.bat`** để sử dụng!

---

## 🌟 Các tính năng nổi bật

### 1. Đồng hồ đếm ngược & Chỉ số thông minh (Dashboard Metrics)
- **Đếm ngược đến ngày thi**: Tự động tính số ngày còn lại đến mốc thi dự kiến **14/11/2026** (hoặc ngày bạn tự tùy chỉnh trong cấu hình).
- **Tổng tiến độ lộ trình**: Tỷ lệ % hoàn thành toàn bộ lộ trình và số buổi đã học.
- **Tiến độ Giai đoạn 1 (Lý thuyết)**: Theo dõi 30 ngày bao phủ lý thuyết.
- **Tiến độ Giai đoạn 2 (Luyện đề)**: Theo dõi 23 ngày giải đề (Bộ A, Bộ B, Đề hỗn hợp 1 & 2).

### 2. Bao phủ 4 phần A/B/C/D & Điểm luyện đề của 6 môn
- Thẻ trực quan cho 6 môn:
  - **PL**: Pháp luật về kinh tế và Luật doanh nghiệp
  - **TC**: Tài chính và quản lý tài chính
  - **TH**: Thuế và quản lý thuế
  - **KT**: Kế toán tài chính, kế toán quản trị
  - **KI**: Kiểm toán và dịch vụ bảo đảm
  - **PT**: Phân tích hoạt động tài chính
- Tự động sáng xanh các mốc **Phần A (25%)**, **Phần B (50%)**, **Phần C (75%)**, **Phần D (100%)** khi bạn tick hoàn thành bài học của môn đó.
- Cập nhật tức thì điểm số làm **Bộ đề A** và **Bộ đề B** vào từng môn tương ứng.

### 3. Lộ trình chi tiết từng ngày (Checklist)
- **Đánh dấu hoàn thành**: Chỉ cần nhấn vào ô vuông checkbox của từng ngày. Thẻ bài học sẽ chuyển trạng thái và thanh tiến độ tự động tăng lên.
- **Nhập điểm thi thử**: Các ngày luyện đề (22/10 - 03/11, 05/11, 08/11) có ô nhập điểm trực tiếp (ví dụ: `8.5/10`, `75/100`).
- **Ghi chú nhanh**: Nhấn biểu tượng cây bút để mở ô ghi chép lý do sai sót, công thức dễ nhầm hoặc kiến thức cần xem lại.
- **Bộ lọc đa chiều**:
  - Theo Giai đoạn: *Tất cả*, *Lý thuyết*, *Luyện đề*, *Nối dài (7 ngày)*.
  - Theo Môn: Lọc nhanh theo từng môn hoặc các buổi ôn vòng tổng hợp.
  - Theo Trạng thái: *Hôm nay*, *Chưa xong*, *Đã xong*.

### 4. Tùy biến & Cài đặt (Cấu hình)
- **Quản lý danh sách môn**: Bạn có thể bật hoặc tắt từng môn nếu thi theo diện Sát hạch KTV nước ngoài (ACCA) hoặc thi đủ 6 môn.
- **Kích hoạt 7 ngày nối dài (14/11 - 20/11)**: Theo trang 1 và 7 của Planner PDF, bạn có thể bật phương án này nếu ngày thi dời sau 14/11 để luyện đề đủ 30 + 30 ngày.
- **Thay đổi ngày thi & Tên thí sinh**.

### 5. An toàn dữ liệu & Sao lưu (Backup/Restore)
- Dữ liệu được **tự động lưu vào trình duyệt (LocalStorage)** mỗi khi bạn thao tác.
- Nút **Sao lưu**: Tải về tệp `vacpa_planner_backup_YYYY-MM-DD.json` để cất giữ an toàn.
- Nút **Phục hồi**: Chọn tệp JSON đã lưu để tải lại dữ liệu khi đổi máy tính hoặc xóa dữ liệu duyệt web.

---

## 🎨 Giao diện & Chế độ Sáng / Tối
- Mặc định sử dụng **Chế độ Tối (Dark Mode)** sang trọng, dịu mắt khi học bài buổi tối.
- Có nút chuyển sang **Chế độ Sáng (Light Mode)** ở góc trên bên phải thanh tiêu đề.
