/**
 * VACPA Planner 2026 - Study & Exercise Database
 * Tích hợp trọn bộ 7 Chuyên đề Bộ Tài chính 2026, Ngân hàng Lý thuyết A/B/C/D & Ngân hàng Bài tập Luyện đề
 */

const MATERIALS_CATALOG = [
  {
    "id": "CD1",
    "code": "PL",
    "title": "Chuyên đề 1: Pháp luật về kinh tế và Luật doanh nghiệp",
    "shortTitle": "Pháp luật kinh tế & DN",
    "fileName": "CD1_Phap_Luat_2026.pdf",
    "fileSize": "1.87 MB",
    "pages": 181,
    "author": "Bộ Tài chính - Hội đồng thi Kiểm toán viên, Kế toán viên 2026",
    "partsCount": 7,
    "color": "#f59e0b",
    "description": "Bao quát toàn diện Luật Doanh nghiệp 2020 (sửa đổi 2025), Luật Đầu tư mới 2025/2026, Luật Hợp đồng KD-TM, Luật Cạnh tranh, Giải quyết tranh chấp thương mại, Luật Phục hồi - Phá sản mới 2025/2026 và Luật Lao động.",
    "tableOfContents": [
      {
        "part": "Phần 1",
        "title": "Pháp luật về doanh nghiệp (Thành lập, các loại hình DN, tổ chức lại, giải thể)",
        "page": 1
      },
      {
        "part": "Phần 2",
        "title": "Pháp luật đầu tư (Luật Đầu tư số 143/2025/QH15)",
        "page": 45
      },
      {
        "part": "Phần 3",
        "title": "Pháp luật về hợp đồng trong lĩnh vực kinh doanh, thương mại",
        "page": 76
      },
      {
        "part": "Phần 4",
        "title": "Pháp luật về cạnh tranh",
        "page": 92
      },
      {
        "part": "Phần 5",
        "title": "Pháp luật về giải quyết tranh chấp kinh doanh thương mại (Trọng tài, Tòa án)",
        "page": 103
      },
      {
        "part": "Phần 6",
        "title": "Pháp luật phục hồi, phá sản (Luật Phục hồi, phá sản số 142/2025/QH15)",
        "page": 121
      },
      {
        "part": "Phần 7",
        "title": "Pháp luật về lao động",
        "page": 165
      }
    ]
  },
  {
    "id": "CD2",
    "code": "TC",
    "title": "Chuyên đề 2: Tài chính và Quản lý tài chính nâng cao",
    "shortTitle": "Tài chính nâng cao",
    "fileName": "CD2_Tai_Chinh_2026.pdf",
    "fileSize": "1.79 MB",
    "pages": 145,
    "author": "Bộ Tài chính - Hội đồng thi Kiểm toán viên, Kế toán viên 2026",
    "partsCount": 12,
    "color": "#0284c7",
    "description": "Trang bị kiến thức tổng hợp và toàn diện về QTTCDN: Giá trị thời gian của tiền, rủi ro - lợi nhuận, định giá chứng khoán, dự báo tài chính, quyết định đầu tư vốn (NPV, IRR), chi phí vốn (WACC), hệ thống đòn bẩy, quản trị VLĐ và bài tập tự luận thực hành có đáp án.",
    "tableOfContents": [
      {
        "part": "Chương I",
        "title": "Vai trò và mục tiêu của quản trị tài chính doanh nghiệp",
        "page": 2
      },
      {
        "part": "Chương II",
        "title": "Giá trị thời gian của tiền (PV, FV, PVA, FVA, dòng tiền không đều)",
        "page": 5
      },
      {
        "part": "Chương III",
        "title": "Rủi ro và tỷ suất sinh lời (Độ lệch chuẩn, CAPM, Beta)",
        "page": 10
      },
      {
        "part": "Chương IV",
        "title": "Định giá trái phiếu và cổ phiếu",
        "page": 17
      },
      {
        "part": "Chương V",
        "title": "Dự báo nhu cầu tài chính doanh nghiệp (Phương pháp tỷ lệ % doanh thu)",
        "page": 26
      },
      {
        "part": "Chương VI",
        "title": "Quyết định đầu tư vốn của doanh nghiệp (NPV, IRR, PI, Payback)",
        "page": 30
      },
      {
        "part": "Chương VII",
        "title": "Nguồn vốn của doanh nghiệp (Nợ vay, vốn chủ sở hữu, thuê tài chính)",
        "page": 44
      },
      {
        "part": "Chương VIII",
        "title": "Chi phí sử dụng vốn của doanh nghiệp (Chi phí nợ, vốn CSH, WACC)",
        "page": 58
      },
      {
        "part": "Chương IX",
        "title": "Hệ thống đòn bẩy trong doanh nghiệp (DOL, DFL, DTL)",
        "page": 68
      },
      {
        "part": "Chương X",
        "title": "Quản trị vốn kinh doanh của doanh nghiệp (Tồn kho EOQ, công nợ, tiền)",
        "page": 74
      },
      {
        "part": "Chương XI",
        "title": "Phân phối lợi nhuận của doanh nghiệp (Chính sách cổ tức)",
        "page": 88
      },
      {
        "part": "Chương XII",
        "title": "Định giá doanh nghiệp (Tài sản thuần, DCF, P/E)",
        "page": 98
      },
      {
        "part": "Bài tập",
        "title": "Hệ thống bài tập tài chính doanh nghiệp tham khảo & Lời giải mẫu",
        "page": 117
      }
    ]
  },
  {
    "id": "CD3",
    "code": "TH",
    "title": "Chuyên đề 3: Thuế và Quản lý thuế nâng cao",
    "shortTitle": "Thuế & Quản lý thuế",
    "fileName": "CD3_Thue_2026.pdf",
    "fileSize": "3.50 MB",
    "pages": 263,
    "author": "Bộ Tài chính - Hội đồng thi Kiểm toán viên, Kế toán viên 2026",
    "partsCount": 9,
    "color": "#ef4444",
    "description": "Nắm vững chuyên sâu các sắc thuế chủ yếu trong hệ thống thuế Việt Nam: Thuế GTGT, Thuế TTĐB, Thuế XNK, Thuế TNDN, Thuế TNCN (Luật mới 109/2025/QH15), Thuế Nhà thầu và Luật Quản lý thuế.",
    "tableOfContents": [
      {
        "part": "Chương 1",
        "title": "Những vấn đề chung về thuế và hệ thống thuế Việt Nam",
        "page": 1
      },
      {
        "part": "Chương 2",
        "title": "Thuế Giá trị gia tăng (GTGT) - Đối tượng, thuế suất, khấu trừ & hoàn thuế",
        "page": 11
      },
      {
        "part": "Chương 3",
        "title": "Thuế Tiêu thụ đặc biệt (TTĐB)",
        "page": 63
      },
      {
        "part": "Chương 4",
        "title": "Thuế Xuất khẩu, thuế Nhập khẩu",
        "page": 87
      },
      {
        "part": "Chương 5",
        "title": "Thuế Thu nhập doanh nghiệp (TNDN) - Doanh thu, chi phí được trừ, ưu đãi thuế",
        "page": 105
      },
      {
        "part": "Chương 6",
        "title": "Thuế Thu nhập cá nhân (TNCN) - Luật Thuế TNCN mới số 109/2025/QH15",
        "page": 172
      },
      {
        "part": "Chương 7",
        "title": "Thuế Tài nguyên và các khoản thuế, phí khác",
        "page": 224
      },
      {
        "part": "Chương 8",
        "title": "Kế hoạch hóa thuế & Quản lý rủi ro về thuế trong doanh nghiệp",
        "page": 240
      },
      {
        "part": "Chương 9",
        "title": "Quy định về dịch vụ làm thủ tục về thuế và tư vấn thuế (Đại lý thuế)",
        "page": 252
      }
    ]
  },
  {
    "id": "CD4",
    "code": "KT",
    "title": "Chuyên đề 4: Kế toán tài chính, kế toán quản trị nâng cao",
    "shortTitle": "Kế toán nâng cao",
    "fileName": "CD4_Ke_Toan_2026.pdf",
    "fileSize": "3.51 MB",
    "pages": 412,
    "author": "Bộ Tài chính - Hội đồng thi Kiểm toán viên, Kế toán viên 2026",
    "partsCount": 6,
    "color": "#10b981",
    "description": "Cập nhật Chế độ Kế toán doanh nghiệp mới theo Thông tư số 99/2025/TT-BTC, Luật Kế toán sửa đổi (Luật 56/2024), 26 Chuẩn mực Kế toán Việt Nam VAS và chuẩn mực quốc tế IFRS, Lập và trình bày BCTC hợp nhất (TT 202/2014) và Kế toán quản trị chuyên sâu.",
    "tableOfContents": [
      {
        "part": "Phần 1",
        "title": "Một số quy định chung của Luật Kế toán và các văn bản hướng dẫn",
        "page": 1
      },
      {
        "part": "Phần 2",
        "title": "Chuẩn mực Báo cáo tài chính quốc tế (IFRS) và Chuẩn mực Kế toán VN (VAS)",
        "page": 13
      },
      {
        "part": "Phần 3",
        "title": "Kế toán tài chính doanh nghiệp theo Thông tư số 99/2025/TT-BTC",
        "page": 76
      },
      {
        "part": "Phần 4",
        "title": "Phương pháp lập và trình bày Báo cáo tài chính (TT 99/2025/TT-BTC)",
        "page": 205
      },
      {
        "part": "Phần 5",
        "title": "Báo cáo tài chính hợp nhất (Theo Thông tư 202/2014/TT-BTC)",
        "page": 280
      },
      {
        "part": "Phần 6",
        "title": "Kế toán quản trị nâng cao (Phân loại chi phí, điểm hòa vốn, tính giá thành)",
        "page": 395
      }
    ]
  },
  {
    "id": "CD5",
    "code": "KI",
    "title": "Chuyên đề 5: Kiểm toán và dịch vụ bảo đảm nâng cao",
    "shortTitle": "Kiểm toán nâng cao",
    "fileName": "CD5_Kiem_Toan_2026.pdf",
    "fileSize": "3.20 MB",
    "pages": 356,
    "author": "Bộ Tài chính - Hội đồng thi Kiểm toán viên, Kế toán viên 2026",
    "partsCount": 3,
    "color": "#8b5cf6",
    "description": "Trọng tâm môn thi: Chuẩn mực đạo đức nghề nghiệp kiểm toán viên (Phần A, B, C), Hệ thống chuẩn mực kiểm toán Việt Nam (VSA), đánh giá rủi ro RoMM, thử nghiệm kiểm soát và thử nghiệm cơ bản, lấy mẫu kiểm toán, các loại ý kiến trên Báo cáo kiểm toán (VSA 700, 705, 706).",
    "tableOfContents": [
      {
        "part": "Phần 1",
        "title": "Tổng quan về kiểm toán, dịch vụ bảo đảm & Chuẩn mực đạo đức nghề nghiệp",
        "page": 1
      },
      {
        "part": "Phần 2",
        "title": "Hệ thống chuẩn mực kiểm toán Việt Nam (VSA) và quy trình kiểm toán BCTC",
        "page": 148
      },
      {
        "part": "Phần 3",
        "title": "Thực hành kiểm toán các khoản mục chủ yếu trên Báo cáo tài chính",
        "page": 320
      }
    ]
  },
  {
    "id": "CD6",
    "code": "PT",
    "title": "Chuyên đề 6: Phân tích hoạt động tài chính nâng cao",
    "shortTitle": "Phân tích HĐTC",
    "fileName": "CD6_Phan_Tich_HDTC_2026.pdf",
    "fileSize": "2.03 MB",
    "pages": 150,
    "author": "Bộ Tài chính - Hội đồng thi Kiểm toán viên, Kế toán viên 2026",
    "partsCount": 2,
    "color": "#06b6d4",
    "description": "Trang bị phương pháp phân tích tài chính doanh nghiệp: Phân tích khái quát tình hình tài chính, phân tích cân đối tài sản - nguồn vốn, phân tích tình hình tài trợ (NWC, WCR, NT), khả năng thanh toán, khả năng tạo tiền (CF), hiệu suất sử dụng vốn, phân tích DuPont và dự báo rủi ro.",
    "tableOfContents": [
      {
        "part": "Phần I",
        "title": "Tổng quan về phân tích hoạt động tài chính doanh nghiệp & Phương pháp phân tích",
        "page": 2
      },
      {
        "part": "Phần II",
        "title": "Nội dung phân tích chuyên sâu các khía cạnh hoạt động tài chính",
        "page": 29
      },
      {
        "part": "Mục 2.1",
        "title": "Phân tích khái quát tình hình tài chính doanh nghiệp",
        "page": 29
      },
      {
        "part": "Mục 2.2",
        "title": "Phân tích tình hình huy động và sử dụng vốn (Nguồn vốn & Tài sản)",
        "page": 44
      },
      {
        "part": "Mục 2.3",
        "title": "Phân tích tình hình tài trợ và bảo đảm vốn (Vốn lưu động ròng NWC)",
        "page": 70
      },
      {
        "part": "Mục 2.4",
        "title": "Phân tích tình hình công nợ và khả năng thanh toán",
        "page": 78
      },
      {
        "part": "Mục 2.5",
        "title": "Phân tích khả năng tạo tiền và lưu chuyển tiền tệ (LCTT)",
        "page": 92
      },
      {
        "part": "Mục 2.6",
        "title": "Phân tích kết quả hoạt động kinh doanh",
        "page": 101
      },
      {
        "part": "Mục 2.7",
        "title": "Phân tích hiệu suất sử dụng vốn và khả năng sinh lời (Mô hình DuPont)",
        "page": 112
      },
      {
        "part": "Mục 2.8",
        "title": "Phân tích rủi ro tài chính và dự báo nhu cầu tài chính",
        "page": 138
      }
    ]
  },
  {
    "id": "CD7",
    "code": "TA",
    "title": "Chuyên đề 7: Ngoại ngữ (Tiếng Anh chuyên ngành)",
    "shortTitle": "Tiếng Anh chuyên ngành",
    "fileName": "CD7_Tieng_Anh_2026.pdf",
    "fileSize": "572 KB",
    "pages": 25,
    "author": "Bộ Tài chính - Hội đồng thi Kiểm toán viên, Kế toán viên 2026",
    "partsCount": 7,
    "color": "#ec4899",
    "description": "Nội dung và cấu trúc đề thi Tiếng Anh trình độ C: Các chức năng giao tiếp, ngữ pháp trọng tâm, chủ điểm đọc hiểu Báo cáo tài chính, dịch thuật thuật ngữ kế toán - kiểm toán và đề thi mẫu có đáp án chi tiết.",
    "tableOfContents": [
      {
        "part": "Phần I",
        "title": "Các chức năng ngôn ngữ giao tiếp",
        "page": 1
      },
      {
        "part": "Phần II",
        "title": "Các vấn đề ngữ pháp cơ bản",
        "page": 11
      },
      {
        "part": "Phần III",
        "title": "Các chủ điểm cho bài đọc, dịch, viết chuyên ngành kế toán kiểm toán",
        "page": 15
      },
      {
        "part": "Phần IV-VI",
        "title": "Nội dung, hình thức thi và dạng thức ra đề thi Anh văn trình độ C",
        "page": 16
      },
      {
        "part": "Phần VII",
        "title": "Mẫu đề thi và lời giải chi tiết bài thi Anh văn trình độ C",
        "page": 18
      }
    ]
  },
  {
    "id": "PLANNER",
    "code": "PLANNER",
    "title": "Planner Ôn thi 6 môn VACPA 2026",
    "shortTitle": "Planner ôn thi (PDF)",
    "fileName": "Planner_on_thi_6_mon_VACPA.pdf",
    "fileSize": "92 KB",
    "pages": 7,
    "author": "Vũ Đức Hoàng (Lập ngày 22/09/2026)",
    "partsCount": 7,
    "color": "#38bdf8",
    "description": "Văn bản kế hoạch gốc: Lộ trình 30 ngày lý thuyết + 23 ngày luyện đề + 7 ngày nối dài tùy chọn, quy tắc phân bổ 150 phút/buổi, phương pháp làm trước chữa sau.",
    "tableOfContents": [
      {
        "part": "Trang 1",
        "title": "Lộ trình tổng thể & Nguyên tắc điều chỉnh",
        "page": 1
      },
      {
        "part": "Trang 2",
        "title": "Lý thuyết - Nửa đầu (22/09 - 06/10)",
        "page": 2
      },
      {
        "part": "Trang 3",
        "title": "Lý thuyết - Nửa sau (07/10 - 21/10)",
        "page": 3
      },
      {
        "part": "Trang 4",
        "title": "Luyện đề - Đợt 1 Bộ A (22/10 - 02/11)",
        "page": 4
      },
      {
        "part": "Trang 5",
        "title": "Luyện đề - Đợt 2 Bộ B & Thi thử hỗn hợp (03/11 - 13/11)",
        "page": 5
      },
      {
        "part": "Trang 6",
        "title": "Bảng theo dõi 6 môn & Nhật ký sửa lỗi",
        "page": 6
      },
      {
        "part": "Trang 7",
        "title": "Phương án đủ 60 ngày (7 ngày nối dài)",
        "page": 7
      }
    ]
  },
  {
    "id": "TB04",
    "code": "TB04",
    "title": "Thông báo số 04/HĐT ngày 10/07/2026 của Hội đồng thi",
    "shortTitle": "Thông báo số 04 BTC",
    "fileName": "Thong_bao_04_Hoi_dong_thi_2026.pdf",
    "fileSize": "54 KB",
    "pages": 1,
    "author": "Hội đồng thi Kiểm toán viên, Kế toán viên hành nghề năm 2026",
    "partsCount": 1,
    "color": "#a855f7",
    "description": "Thông báo chính thức về việc phát hành tài liệu hướng dẫn ôn tập phục vụ kỳ thi KTV và Kế toán viên năm 2026 của Bộ Tài chính.",
    "tableOfContents": [
      {
        "part": "Trang 1",
        "title": "Nội dung thông báo số 04 ngày 10/07/2026",
        "page": 1
      }
    ]
  }
];

const THEORY_BANK = {
  "PL": {
    "subjectId": "PL",
    "subjectName": "Pháp luật về kinh tế và Luật doanh nghiệp",
    "officialPdf": "CD1_Phap_Luat_2026.pdf",
    "parts": {
      "A": {
        "part": "A",
        "milestone": "25% đề cương",
        "days": [
          "23/09",
          "07/10"
        ],
        "title": "Phần A: Những vấn đề chung về Doanh nghiệp & Các loại hình Doanh nghiệp",
        "pdfPages": "Trang 1 - 44 (Chuyên đề 1)",
        "overview": "Nắm vững quy định pháp luật về thành lập doanh nghiệp, quyền thành lập và quản lý doanh nghiệp, thời hạn và tài sản góp vốn, và đặc điểm pháp lý của 4 loại hình doanh nghiệp: TNHH 1TV, TNHH 2TV trở lên, Công ty Cổ phần, Công ty Hợp danh và Doanh nghiệp tư nhân.",
        "keyTakeaways": [
          "Quyền thành lập và quản lý DN (Điều 17 Luật DN 2020): Cán bộ, công chức, viên chức; sĩ quan quân đội, công an; người chưa thành niên, người bị hạn chế NLHVDS... KHÔNG có quyền thành lập và quản lý DN. Người chỉ bị cấm thành lập/quản lý vẫn ĐƯỢC QUYỀN góp vốn, mua cổ phần vào công ty CP, TNHH, HD (trừ trường hợp pháp luật về phòng chống tham nhũng, cán bộ công chức quy định khác).",
          "Thời hạn góp vốn thành lập công ty TNHH và CP: Đúng và đủ trong thời hạn 90 NGÀY kể từ ngày được cấp GCN ĐKDN (không kể thời gian vận chuyển, nhập khẩu tài sản góp vốn). Nếu không góp đủ, DN phải đăng ký giảm vốn điều lệ trong thời hạn 30 ngày tiếp theo.",
          "Công ty Cổ phần: Tối thiểu 03 cổ đông, không hạn chế tối đa. Vốn điều lệ chia thành các phần bằng nhau gọi là cổ phần. Cổ đông chỉ chịu trách nhiệm về các khoản nợ trong phạm vi số vốn đã góp. Được quyền phát hành cổ phần các loại, trái phiếu.",
          "Các loại cổ phần trong CTCP: Cổ phần phổ thông (bắt buộc phải có), Cổ phần ưu đãi (Ưu đãi biểu quyết - chỉ cổ đông sáng lập và tổ chức được CP ủy quyền mới được nắm giữ, hiệu lực tối đa 03 năm; Ưu đãi cổ tức; Ưu đãi hoàn lại). Lưu ý: Cổ đông sở hữu CP ưu đãi cổ tức và ưu đãi hoàn lại KHÔNG CÓ QUYỀN BIỂU QUYẾT, dự họp ĐHĐCĐ.",
          "Đại hội đồng cổ đông: Cuộc họp ĐHĐCĐ được tiến hành khi có số cổ đông dự họp đại diện trên 50% tổng số phiếu biểu quyết (lần 1); lần 2: từ 33% trở lên; lần 3: không phụ thuộc số cổ đông dự họp.",
          "Công ty TNHH 2TV trở lên: Số lượng thành viên từ 02 đến 50 thành viên. Chuyển nhượng phần vốn góp: Phải chào bán cho các thành viên còn lại theo tỷ lệ vốn góp; chỉ được chuyển nhượng cho người ngoài nếu các thành viên còn lại không mua hoặc không mua hết trong thời hạn 30 NGÀY.",
          "Công ty Hợp danh: Ít nhất 02 thành viên hợp danh là cá nhân, chịu trách nhiệm vô hạn bằng toàn bộ tài sản của mình về các nghĩa vụ của công ty. Thành viên góp vốn chỉ chịu trách nhiệm hữu hạn trong phạm vi số vốn cam kết góp.",
          "Doanh nghiệp tư nhân: Do một cá nhân làm chủ, tự chịu trách nhiệm bằng toàn bộ tài sản của mình. Chủ DNTN không được đồng thời là chủ hộ kinh doanh, thành viên hợp danh của công ty hợp danh."
        ],
        "newRegulations": [
          "Cập nhật Luật sửa đổi, bổ sung một số điều của Luật Doanh nghiệp (Luật 76/2025/QH15): Đơn giản hóa thủ tục đăng ký kinh doanh trực tuyến qua Cổng thông tin quốc gia; chuẩn hóa cơ chế người đại diện theo pháp luật và trách nhiệm công bố thông tin đối với doanh nghiệp có vốn nhà nước."
        ],
        "pitfalls": [
          "BẪY 1: Cổ đông sở hữu cổ phần ưu đãi cổ tức hoặc ưu đãi hoàn lại tưởng là có quyền biểu quyết -> SAI! Chỉ cổ phần phổ thông và cổ phần ưu đãi biểu quyết mới có quyền biểu quyết.",
          "BẪY 2: Nhầm lẫn giữa quyền 'thành lập/quản lý DN' với quyền 'góp vốn/mua cổ phần'. Công chức nhà nước không được thành lập, quản lý công ty TNHH/CP nhưng được mua cổ phần công ty cổ phần (trừ trường hợp liên quan trực tiếp đến ngành nghề mình quản lý).",
          "BẪY 3: Thời hạn góp vốn là 90 ngày kể từ ngày cấp GCN ĐKDN, KHÔNG PHẢI kể từ ngày nộp hồ sơ!"
        ],
        "flashcards": [
          {
            "q": "Thời hạn góp vốn khi thành lập công ty TNHH và CTCP là bao lâu?",
            "a": "90 ngày kể từ ngày được cấp Giấy chứng nhận đăng ký doanh nghiệp (không tính thời gian vận chuyển, làm thủ tục hải quan tài sản góp vốn)."
          },
          {
            "q": "Số lượng thành viên tối đa của Công ty TNHH 2TV trở lên là bao nhiêu?",
            "a": "Tối đa 50 thành viên."
          },
          {
            "q": "Cổ phần ưu đãi biểu quyết có hiệu lực trong bao lâu đối với cổ đông sáng lập?",
            "a": "Hiệu lực trong 03 năm kể từ ngày công ty được cấp GCN ĐKDN. Sau 3 năm, CP ưu đãi biểu quyết của CĐSL chuyển đổi thành CP phổ thông."
          },
          {
            "q": "Chủ doanh nghiệp tư nhân có được thành lập công ty TNHH 1TV không?",
            "a": "Được thành lập công ty TNHH (vì TNHH chịu trách nhiệm hữu hạn), nhưng KHÔNG được làm chủ DNTN khác hoặc thành viên hợp danh công ty hợp danh."
          }
        ]
      },
      "B": {
        "part": "B",
        "milestone": "50% đề cương",
        "days": [
          "29/09",
          "13/10"
        ],
        "title": "Phần B: Tổ chức lại, Giải thể Doanh nghiệp & Pháp luật về Đầu tư",
        "pdfPages": "Trang 45 - 75 (Chuyên đề 1)",
        "overview": "Quy chế pháp lý về chia, tách, sáp nhập, hợp nhất doanh nghiệp; điều kiện và thủ tục giải thể doanh nghiệp; Luật Đầu tư mới 2025/2026 (Luật 143/2025/QH15) về ngành nghề cấm và có điều kiện, hình thức đầu tư và thủ tục cấp Giấy chứng nhận đăng ký đầu tư.",
        "keyTakeaways": [
          "Tổ chức lại doanh nghiệp: Chia công ty (công ty bị chia chấm dứt tồn tại; các công ty mới liên đới chịu trách nhiệm về các khoản nợ chưa thanh toán); Tách công ty (công ty bị tách không chấm dứt tồn tại; cùng công ty mới liên đới chịu nghĩa vụ nợ); Hợp nhất công ty (các công ty bị hợp nhất chấm dứt tồn tại); Sáp nhập công ty (công ty bị sáp nhập chấm dứt tồn tại, công ty nhận sáp nhập kế thừa toàn bộ quyền và nghĩa vụ).",
          "Giải thể doanh nghiệp: Các trường hợp giải thể: Hết thời hạn ghi trong Điều lệ; Theo nghị quyết/quyết định của chủ sở hữu DN; Không còn đủ số lượng thành viên tối thiểu trong 06 tháng liên tục mà không làm thủ tục chuyển đổi loại hình; Bị thu hồi GCN ĐKDN.",
          "Điều kiện tiên quyết để giải thể: Doanh nghiệp chỉ được giải thể khi BẢO ĐẢM THANH TOÁN HẾT CÁC KHOẢN NỢ và nghĩa vụ tài sản khác, và không trong quá trình giải quyết tranh chấp tại Tòa án hoặc Trọng tài.",
          "Thứ tự thanh toán nợ khi giải thể: 1. Nợ lương, trợ cấp thôi việc, BHXH, BHYT, BHTN; 2. Nợ thuế; 3. Các khoản nợ khác; 4. Phần còn lại chia cho các thành viên/cổ đông.",
          "Luật Đầu tư số 143/2025/QH15: 08 ngành, nghề cấm đầu tư kinh doanh (ma túy, hóa chất độc hại, mẫu vật hoang dã, mại dâm, mua bán người/bộ phận cơ thể, sinh sản vô tính trên người, pháo nổ, dịch vụ đòi nợ).",
          "Các hình thức đầu tư: Đầu tư thành lập tổ chức kinh tế; Đầu tư góp vốn, mua cổ phần, phần vốn góp; Thực hiện dự án đầu tư; Đầu tư theo hình thức hợp đồng BCC.",
          "Giấy chứng nhận đăng ký đầu tư (IRC): Bắt buộc đối với dự án của nhà đầu tư nước ngoài; tổ chức kinh tế có vốn ĐTNN nắm giữ trên 50% vốn điều lệ."
        ],
        "newRegulations": [
          "Luật Đầu tư 143/2025/QH15 (hiệu lực từ 01/03/2026): Phân cấp mạnh mẽ thẩm quyền chấp thuận chủ trương đầu tư cho UBND cấp tỉnh; cắt giảm danh mục ngành nghề đầu tư kinh doanh có điều kiện; quy định rõ cơ chế ưu đãi đặc biệt cho các dự án công nghệ bán dẫn, trí tuệ nhân tạo và kinh tế xanh."
        ],
        "pitfalls": [
          "BẪY 1: Nhầm lẫn giữa 'Chia' và 'Tách' công ty: Chia công ty thì công ty gốc CHẤM DỨT tồn tại. Tách công ty thì công ty gốc VẪN TỒN TẠI.",
          "BẪY 2: Doanh nghiệp mất khả năng thanh toán nợ không được giải thể mà phải chuyển sang thực hiện thủ tục PHÁ SẢN!"
        ],
        "flashcards": [
          {
            "q": "Điều kiện quan trọng nhất để doanh nghiệp được làm thủ tục giải thể tự nguyện?",
            "a": "Phải thanh toán hết tất cả các khoản nợ và nghĩa vụ tài sản, không trong quá trình giải quyết tranh chấp tại Tòa án hoặc Trọng tài."
          },
          {
            "q": "Thứ tự ưu tiên thanh toán số 1 khi giải thể doanh nghiệp là gì?",
            "a": "Nợ lương, trợ cấp thôi việc, bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp của người lao động."
          },
          {
            "q": "Tổ chức kinh tế có vốn ĐTNN nắm giữ bao nhiêu % vốn điều lệ thì phải áp dụng điều kiện đầu tư như NĐT nước ngoài?",
            "a": "Trên 50% vốn điều lệ (theo Luật Đầu tư mới)."
          }
        ]
      },
      "C": {
        "part": "C",
        "milestone": "75% đề cương",
        "days": [
          "07/10",
          "15/10"
        ],
        "title": "Phần C: Pháp luật Hợp đồng trong KD-TM & Pháp luật Cạnh tranh",
        "pdfPages": "Trang 76 - 102 (Chuyên đề 1)",
        "overview": "Nắm vững nguyên tắc giao kết hợp đồng kinh doanh thương mại, thời điểm có hiệu lực, các trường hợp hợp đồng vô hiệu, các chế tài thương mại (buộc thực hiện, phạt vi phạm, bồi thường thiệt hại) và các hành vi hạn chế cạnh tranh.",
        "keyTakeaways": [
          "Khái niệm hợp đồng thương mại: Thỏa thuận giữa các bên có mục đích sinh lợi, ít nhất một bên có tư cách thương nhân.",
          "Thời điểm có hiệu lực của hợp đồng: Theo thỏa thuận của các bên; nếu không có thỏa thuận thì có hiệu lực từ thời điểm bên sau cùng ký vào hợp đồng hoặc bên đề nghị nhận được chấp nhận giao kết hợp đồng.",
          "Chế tài Phạt vi phạm hợp đồng (Điều 301 Luật Thương mại 2005): Mức phạt vi phạm do các bên thỏa thuận, nhưng KHÔNG QUÁ 8% giá trị phần nghĩa vụ hợp đồng bị vi phạm (trừ trường hợp phạt đối với dịch vụ giám định thương mại cấp chứng thư sai do lỗi vô ý thì không quá 10 lần thù lao dịch vụ giám định).",
          "Chế tài Bồi thường thiệt hại: Căn cứ phát sinh trách nhiệm bồi thường: 1. Có hành vi vi phạm hợp đồng; 2. Có thiệt hại thực tế; 3. Có mối quan hệ nhân quả giữa hành vi vi phạm và thiệt hại; 4. Có lỗi của bên vi phạm (trừ các trường hợp miễn trách nhiệm).",
          "Mối quan hệ giữa Phạt vi phạm và Bồi thường thiệt hại: Nếu các bên chỉ thỏa thuận phạt vi phạm mà không thỏa thuận bồi thường thì CHỈ ĐƯỢC PHẠT; Nếu có thỏa thuận cả hai hoặc chỉ thỏa thuận bồi thường thì bên bị vi phạm ĐƯỢC CẢ PHẠT VÀ ĐƯỢC BỒI THƯỜNG.",
          "Các trường hợp miễn trách nhiệm đối với hành vi vi phạm: 1. Do sự kiện bất khả kháng; 2. Hoàn toàn do lỗi của bên kia; 3. Do thực hiện quyết định của cơ quan nhà nước có thẩm quyền; 4. Có thỏa thuận miễn trừ trong hợp đồng.",
          "Pháp luật Cạnh tranh (Luật Cạnh tranh 2018): Các thỏa thuận hạn chế cạnh tranh bị cấm tuyệt đối (Ấn định giá, phân chia thị trường, hạn chế sản lượng giữa các doanh nghiệp trên cùng thị trường liên quan - thỏa thuận ngang); Lạm dụng vị trí thống trị thị trường (doanh nghiệp có thị phần từ 30% trở lên trên thị trường liên quan hoặc có sức mạnh thị trường đáng kể)."
        ],
        "newRegulations": [
          "Quy định về giám sát tập trung kinh tế: Ngưỡng thông báo tập trung kinh tế theo tổng tài sản, tổng doanh thu (trên 3.000 tỷ đồng) hoặc giá trị giao dịch theo Nghị định 35/2020/NĐ-CP."
        ],
        "pitfalls": [
          "BẪY KINH ĐIỂN VỀ MỨC PHẠT VI PHẠM: Bộ luật Dân sự 2015 cho phép các bên tự do thỏa thuận mức phạt KHÔNG BỊ GIỚI HẠN; nhưng LUẬT THƯƠNG MẠI 2005 khống chế mức phạt TỐI ĐA 8% giá trị phần nghĩa vụ bị vi phạm. Trong đề thi KTV, nếu là quan hệ giữa các thương nhân về kinh tế thì ÁP DỤNG LUẬT THƯƠNG MẠI (TỐI ĐA 8%)!",
          "BẪY TÍNH MỨC PHẠT: 8% tính trên 'phần nghĩa vụ hợp đồng BỊ VI PHẠM', KHÔNG PHẢI tính trên 'tổng giá trị toàn bộ hợp đồng'!"
        ],
        "flashcards": [
          {
            "q": "Mức phạt vi phạm hợp đồng thương mại tối đa theo Luật Thương mại 2005 là bao nhiêu?",
            "a": "Tối đa 8% giá trị phần nghĩa vụ hợp đồng bị vi phạm (Điều 301 LTM 2005)."
          },
          {
            "q": "Nếu hợp đồng chỉ ghi điều khoản phạt vi phạm 10%, xử lý thế nào?",
            "a": "Điều khoản phạt vượt quá 8% bị coi là vô hiệu một phần. Tòa án/Trọng tài chỉ chấp nhận mức phạt tối đa 8% phần nghĩa vụ bị vi phạm."
          },
          {
            "q": "Một doanh nghiệp được coi là có vị trí thống trị thị trường khi có thị phần bao nhiêu?",
            "a": "Thị phần từ 30% trở lên trên thị trường liên quan, hoặc có sức mạnh thị trường đáng kể theo Luật Cạnh tranh 2018."
          }
        ]
      },
      "D": {
        "part": "D",
        "milestone": "100% đề cương",
        "days": [
          "14/10",
          "20/10"
        ],
        "title": "Phần D: Giải quyết Tranh chấp Thương mại, Luật Phục hồi Phá sản & Luật Lao động",
        "pdfPages": "Trang 103 - 181 (Chuyên đề 1)",
        "overview": "Thủ tục giải quyết tranh chấp bằng Trọng tài thương mại và Tòa án; cập nhật Luật Phục hồi, phá sản mới số 142/2025/QH15; các quy định cốt lõi của Bộ luật Lao động về tiền lương, chấm dứt HĐLĐ và kỷ luật lao động.",
        "keyTakeaways": [
          "Giải quyết tranh chấp bằng Trọng tài thương mại (Luật TTTM 2010): Điều kiện: Phải có thỏa thuận trọng tài bằng văn bản (lập trước hoặc sau khi xảy ra tranh chấp). Nếu có thỏa thuận trọng tài hợp pháp, Tòa án phải từ chối thụ lý. Phán quyết của Trọng tài có GIÁ TRỊ CHUNG THẨM, không bị kháng cáo, có hiệu lực thi hành ngay.",
          "Giải quyết tranh chấp tại Tòa án: Tòa án nhân dân cấp huyện giải quyết sơ thẩm các tranh chấp KD-TM có giá trị nhỏ / giữa cá nhân có ĐKKD; TAND cấp tỉnh giải quyết sơ thẩm các vụ việc có đương sự hoặc tài sản ở nước ngoài, hoặc vụ việc phức tạp.",
          "Thời hiệu khởi kiện tranh chấp thương mại: Thông thường là 02 NĂM kể từ thời điểm quyền và lợi ích hợp pháp bị xâm phạm (theo Luật Thương mại 2005) hoặc 03 năm theo BLDS 2015.",
          "Luật Phục hồi, phá sản mới số 142/2025/QH15 (hiệu lực 01/03/2026): Doanh nghiệp mất khả năng thanh toán là doanh nghiệp không thực hiện nghĩa vụ thanh toán khoản nợ trong thời hạn 03 THÁNG kể từ ngày đến hạn thanh toán.",
          "Điểm mới nổi bật Luật 142/2025/QH15: Thủ tục phục hồi độc lập (Chương II) cho phép doanh nghiệp chủ động lập phương án phục hồi dưới sự giám sát của Tòa án và Quản tài viên trước khi bị áp dụng thủ tục phá sản, bảo vệ tối đa khả năng duy trì hoạt động liên tục.",
          "Thứ tự phân chia tài sản khi Tòa án tuyên bố phá sản: 1. Chi phí phá sản; 2. Nợ lương, trợ cấp thôi việc, BHXH, BHYT đối với người lao động; 3. Khoản nợ phát sinh sau khi mở thủ tục phá sản nhằm phục hồi HĐKD; 4. Nghĩa vụ tài chính đối với Nhà nước; các khoản nợ không có bảo đảm phải trả cho chủ nợ.",
          "Pháp luật Lao động: Hợp đồng lao động có 02 loại: Không xác định thời hạn và Xác định thời hạn (tối đa 36 tháng, chỉ được ký tối đa 2 lần liên tiếp). Tiền lương làm thêm giờ: Ngày thường: ít nhất 150%; Ngày nghỉ hàng tuần: ít nhất 200%; Ngày lễ, Tết, ngày nghỉ có hưởng lương: ít nhất 300%."
        ],
        "newRegulations": [
          "Luật Phục hồi, phá sản số 142/2025/QH15 chính thức thay thế Luật Phá sản 2014 từ ngày 01/03/2026. Tên gọi mới nhấn mạnh ưu tiên 'Phục hồi' doanh nghiệp trước 'Phá sản'. Bổ sung cơ chế giải quyết phá sản giản lược đối với doanh nghiệp siêu nhỏ."
        ],
        "pitfalls": [
          "BẪY TRỌNG TÀI: Phán quyết trọng tài KHÔNG THỂ bị kháng cáo lên Tòa án để xét xử lại nội dung. Tòa án chỉ xem xét 'hủy phán quyết trọng tài' nếu có vi phạm nghiêm trọng về tố tụng hoặc vi phạm nguyên tắc cơ bản của pháp luật VN.",
          "BẪY THỜI HẠN MẤT KHẢ NĂNG THANH TOÁN: Đúng 03 THÁNG kể từ ngày đến hạn thanh toán, không phải 6 tháng hay 1 năm!"
        ],
        "flashcards": [
          {
            "q": "Doanh nghiệp mất khả năng thanh toán theo Luật Phục hồi, phá sản khi nào?",
            "a": "Khi không thực hiện nghĩa vụ thanh toán khoản nợ trong thời hạn 03 tháng kể từ ngày đến hạn thanh toán."
          },
          {
            "q": "Phán quyết của Trọng tài thương mại có bị kháng cáo lên Tòa án cấp phúc thẩm không?",
            "a": "Không. Phán quyết trọng tài là chung thẩm, có hiệu lực thi hành ngay đối với các bên."
          },
          {
            "q": "Mức tiền lương làm thêm giờ vào ngày nghỉ Lễ, Tết được tính tối thiểu bao nhiêu %?",
            "a": "Ít nhất bằng 300% đơn giá tiền lương hoặc tiền lương thực trả theo công việc đang làm (chưa kể tiền lương ngày lễ, tết có hưởng lương)."
          }
        ]
      }
    }
  },
  "TC": {
    "subjectId": "TC",
    "subjectName": "Tài chính và Quản lý tài chính nâng cao",
    "officialPdf": "CD2_Tai_Chinh_2026.pdf",
    "parts": {
      "A": {
        "part": "A",
        "milestone": "25% đề cương",
        "days": [
          "24/09",
          "08/10"
        ],
        "title": "Phần A: Giá trị Thời gian của Tiền, Rủi ro & Tỷ suất sinh lời",
        "pdfPages": "Trang 1 - 16 (Chuyên đề 2)",
        "overview": "Nắm vững bản chất và công thức tính Giá trị thời gian của tiền (FV, PV, chuỗi tiền tệ đều cuối kỳ, đầu kỳ, chuỗi tiền vô hạn) và Đo lường rủi ro - tỷ suất sinh lời, Mô hình định giá tài sản vốn CAPM.",
        "keyTakeaways": [
          "Giá trị thời gian của tiền: 1 đồng ngày hôm nay có giá trị hơn 1 đồng trong tương lai vì cơ hội sinh lời và lạm phát.",
          "Chuỗi tiền tệ đều cuối kỳ (Ordinary Annuity): Giá trị tương lai FVA = A * [((1+r)^n - 1) / r]; Giá trị hiện tại PVA = A * [(1 - (1+r)^(-n)) / r].",
          "Chuỗi tiền tệ đều đầu kỳ (Annuity Due): FVA_due = FVA * (1+r); PVA_due = PVA * (1+r).",
          "Chuỗi tiền tệ vô hạn (Perpetuity): PV = A / r. Nếu tăng trưởng đều với tốc độ g: PV = A1 / (r - g).",
          "Đo lường rủi ro riêng lẻ: Tỷ suất sinh lời kỳ vọng E(R) = Tổng (Pi * Ri); Phương sai = Tổng (Pi * (Ri - E(R))^2); Độ lệch chuẩn = Căn bậc hai của Phương sai; Hệ số biến thiên CV = Độ lệch chuẩn / E(R) (dùng để so sánh rủi ro khi 2 khoản đầu tư có mức sinh lời kỳ vọng khác nhau).",
          "Mô hình CAPM: Tỷ suất sinh lời đòi hỏi của nhà đầu tư: Re = Rf + Beta * (Rm - Rf). Trong đó: Rf là tỷ suất phi rủi ro (lãi suất trái phiếu chính phủ); Rm là tỷ suất sinh lời thị trường; (Rm - Rf) là phần bù rủi ro thị trường (Equity Risk Premium); Beta đo lường rủi ro hệ thống của cổ phiếu so với thị trường."
        ],
        "formulas": [
          {
            "name": "FV tiền đơn",
            "expr": "FV = PV * (1 + r)^n"
          },
          {
            "name": "PV tiền đơn",
            "expr": "PV = FV / (1 + r)^n"
          },
          {
            "name": "PVA (Hiện tại chuỗi đều cuối kỳ)",
            "expr": "PVA = A * [1 - (1 + r)^(-n)] / r"
          },
          {
            "name": "FVA (Tương lai chuỗi đều cuối kỳ)",
            "expr": "FVA = A * [(1 + r)^n - 1] / r"
          },
          {
            "name": "Mô hình CAPM",
            "expr": "Re = Rf + Beta * (Rm - Rf)"
          },
          {
            "name": "Hệ số biến thiên",
            "expr": "CV = sigma / E(R)"
          }
        ],
        "pitfalls": [
          "BẪY 1: Nhầm lẫn giữa chuỗi tiền tệ đầu kỳ và cuối kỳ. Tiền thuê nhà/bảo hiểm trả đầu kỳ phải nhân thêm (1+r)!",
          "BẪY 2: Khi so sánh 2 dự án có độ lệch chuẩn khác nhau, không được vội kết luận dự án có độ lệch chuẩn lớn hơn là rủi ro hơn, mà phải tính Hệ số biến thiên CV = sigma / E(R) nếu E(R) của 2 dự án khác nhau!"
        ],
        "flashcards": [
          {
            "q": "Công thức tính giá trị hiện tại của dòng tiền đều vô hạn tăng trưởng với tốc độ g?",
            "a": "PV = CF1 / (r - g) (với r > g)."
          },
          {
            "q": "Trong mô hình CAPM, đại lượng (Rm - Rf) mang ý nghĩa gì?",
            "a": "Phần bù rủi ro thị trường (Market Risk Premium), phản ánh mức sinh lời bổ sung mà nhà đầu tư đòi hỏi khi chấp nhận đầu tư vào danh mục thị trường thay vì tài sản phi rủi ro."
          },
          {
            "q": "Nếu Beta của cổ phiếu = 1.5, điều đó có nghĩa là gì?",
            "a": "Khi thị trường biến động 1% thì tỷ suất sinh lời của cổ phiếu có xu hướng biến động 1.5% theo cùng chiều."
          }
        ]
      },
      "B": {
        "part": "B",
        "milestone": "50% đề cương",
        "days": [
          "30/09",
          "14/10"
        ],
        "title": "Phần B: Định giá Trái phiếu, Cổ phiếu & Dự báo Nhu cầu Tài chính",
        "pdfPages": "Trang 17 - 29 (Chuyên đề 2)",
        "overview": "Định giá trái phiếu trả lãi định kỳ và trái phiếu Zero-coupon; định giá cổ phiếu theo mô hình chiết khấu cổ tức (Gordon) và phương pháp tỷ số P/E; phương pháp dự báo nhu cầu vốn bên ngoài (AFN).",
        "keyTakeaways": [
          "Định giá trái phiếu trả lãi định kỳ: Vb = I * PVA(rd, n) + M * PV(rd, n). Trong đó I = M * C (lãi danh nghĩa hàng kỳ), M là mệnh giá, rd là tỷ suất sinh lời đòi hỏi.",
          "Quan hệ giữa giá trái phiếu và lãi suất thị trường: Nếu rd = C -> Vb = M (Bán theo mệnh giá); Nếu rd > C -> Vb < M (Bán chiết khấu); Nếu rd < C -> Vb > M (Bán phụ trội). Lãi suất thị trường tăng thì giá trái phiếu giảm!",
          "Định giá cổ phiếu ưu đãi: Vp = Dp / rp.",
          "Định giá cổ phiếu thường (Mô hình Gordon): P0 = D1 / (rs - g) = D0 * (1 + g) / (rs - g). Lưu ý: D0 là cổ tức vừa trả, D1 là cổ tức dự kiến kỳ tới!",
          "Dự báo nhu cầu vốn bổ sung từ bên ngoài (AFN - Additional Funds Needed):",
          "AFN = (A*/S0)*Delta_S - (L*/S0)*Delta_S - M*S1*(1 - d). Trong đó: A* là tài sản tăng tự động theo doanh thu; L* là nợ phải trả tự động tăng theo doanh thu (phải trả người bán, nợ lương, thuế); Delta_S là doanh thu tăng thêm; M là tỷ suất lợi nhuận sau thuế trên doanh thu (ROS); S1 là doanh thu năm kế hoạch; d là tỷ lệ trả cổ tức; (1 - d) là tỷ lệ tái đầu tư lợi nhuận."
        ],
        "formulas": [
          {
            "name": "Định giá trái phiếu",
            "expr": "Vb = I * [(1 - (1+r)^(-n)) / r] + M / (1+r)^n"
          },
          {
            "name": "Mô hình Gordon",
            "expr": "P0 = D1 / (rs - g) = D0 * (1 + g) / (rs - g)"
          },
          {
            "name": "Nhu cầu vốn ngoài (AFN)",
            "expr": "AFN = (A*/S0)*Delta_S - (L*/S0)*Delta_S - ROS*S1*(1 - d)"
          }
        ],
        "pitfalls": [
          "BẪY D0 VÀ D1: Đề bài cho 'vừa trả cổ tức 2.000đ' -> Đó là D0, phải tính D1 = D0*(1+g). Nếu đề bài cho 'cổ tức dự kiến năm tới là 2.000đ' -> Đó chính là D1, dùng luôn không nhân (1+g)!",
          "BẪY TRÁI PHIẾU TRẢ LÃI 6 THÁNG/LẦN: Phải chia lãi suất chiết khấu cho 2, nhân số kỳ n với 2, và chia khoản trả lãi I cho 2!"
        ],
        "flashcards": [
          {
            "q": "Khi lãi suất chiết khấu thị trường cao hơn lãi suất danh nghĩa trên trái phiếu, trái phiếu được bán ở mức giá nào?",
            "a": "Bán chiết khấu (thấp hơn mệnh giá, Vb < M)."
          },
          {
            "q": "Các khoản nợ nào trong Bảng CĐKT thường tăng tự động theo doanh thu trong công thức AFN?",
            "a": "Phải trả người bán, nợ lương người lao động, các khoản thuế và nợ Nhà nước (Nợ ngắn hạn chiếm dụng phi tài chính). Vay ngắn hạn ngân hàng và nợ dài hạn KHÔNG tăng tự động!"
          }
        ]
      },
      "C": {
        "part": "C",
        "milestone": "75% đề cương",
        "days": [
          "08/10",
          "16/10"
        ],
        "title": "Phần C: Quyết định Đầu tư Vốn (NPV, IRR) & Nguồn vốn Doanh nghiệp",
        "pdfPages": "Trang 30 - 57 (Chuyên đề 2)",
        "overview": "Xác định dòng tiền dự án đầu tư (CF0, OCF hàng năm, dòng tiền thu hồi cuối kỳ); các phương pháp thẩm định dự án (NPV, IRR, PI, thời gian hoàn vốn DPP); so sánh mua tài sản bằng vốn vay vs thuê tài chính.",
        "keyTakeaways": [
          "Nguyên tắc xác định dòng tiền dự án: Dòng tiền tăng thêm (Incremental Cash Flows), tính trên cơ sở sau thuế. Bỏ qua chi phí chìm (Sunk costs - ví dụ chi phí nghiên cứu thị trường đã chi trước đây); Phải tính đến chi phí cơ hội (Opportunity costs); Phải tính đến ảnh hưởng xói mòn/ăn thịt sản phẩm cũ.",
          "Dòng tiền thuần hoạt động hàng năm (OCF): OCF = (Doanh thu - Chi phí hoạt động tiền mặt - Khấu hao)*(1 - T) + Khấu hao = EBIT*(1 - T) + Khấu hao.",
          "Giá trị hiện tại thuần (NPV): NPV = Tổng [CFt / (1+r)^t] - CF0. Tiêu chuẩn: NPV > 0 chấp nhận dự án.",
          "Tỷ suất hoàn vốn nội bộ (IRR): Mức lãi suất chiết khấu làm cho NPV = 0. Tiêu chuẩn: IRR > Chi phí vốn (r) chấp nhận dự án.",
          "Chỉ số sinh lời (PI): PI = PV(dòng tiền vào) / CF0. PI > 1 chấp nhận dự án.",
          "Xung đột giữa NPV và IRR: Khi đánh giá 2 dự án loại trừ nhau (quy mô vốn khác nhau hoặc tiến độ dòng tiền khác nhau), nếu NPV chọn A mà IRR chọn B thì ƯU TIÊN CHỌN THEO NPV để tối đa hóa tài sản của cổ đông.",
          "Thuê tài chính vs Mua bằng vốn vay: So sánh giá trị hiện tại của chi phí dòng tiền ra ròng sau thuế (PV of Cash Outflow) của 2 phương án; phương án nào có PV chi phí nhỏ hơn thì chọn."
        ],
        "formulas": [
          {
            "name": "Dòng tiền OCF",
            "expr": "OCF = EBIT*(1 - T) + Khấu hao"
          },
          {
            "name": "NPV",
            "expr": "NPV = Tổng [CFt / (1+r)^t] - CF0"
          },
          {
            "name": "Chỉ số sinh lời PI",
            "expr": "PI = PV(Dòng tiền thu hồi) / CF0"
          }
        ],
        "pitfalls": [
          "BẪY CHI PHÍ LÃI VAY KHI TÍNH DÒNG TIỀN DỰ ÁN: KHÔNG ĐƯỢC trừ chi phí lãi vay vào dòng tiền OCF của dự án đầu tư, vì chi phí lãi vay đã được phản ánh trong tỷ suất chiết khấu (WACC)!",
          "BẪY THU HOÀN VỐN LƯU ĐỘNG: Vốn lưu động bổ sung đầu dự án là dòng tiền RA (-); đến cuối đời dự án phải THU HỒI lại toàn bộ là dòng tiền VÀO (+)."
        ],
        "flashcards": [
          {
            "q": "Tại sao chi phí chìm (Sunk cost) không được tính vào dòng tiền của dự án đầu tư?",
            "a": "Vì chi phí chìm đã phát sinh trong quá khứ và không thể thay đổi bất kể dự án có được chấp thuận hay không."
          },
          {
            "q": "Khi nào xảy ra xung đột giữa tiêu chuẩn NPV và IRR?",
            "a": "Khi đánh giá các dự án loại trừ nhau có quy mô vốn ban đầu chênh lệch lớn hoặc thời gian thu hồi dòng tiền rất khác nhau. Luôn ưu tiên chọn dự án có NPV lớn hơn."
          }
        ]
      },
      "D": {
        "part": "D",
        "milestone": "100% đề cương",
        "days": [
          "15/10",
          "21/10"
        ],
        "title": "Phần D: Chi phí Sử dụng Vốn (WACC), Hệ thống Đòn bẩy & Quản trị Vốn",
        "pdfPages": "Trang 58 - 145 (Chuyên đề 2)",
        "overview": "Tính toán chi phí sử dụng vốn bình quân (WACC); phân tích các loại đòn bẩy (DOL, DFL, DTL); quản trị vốn lưu động (Mô hình EOQ, quản trị tiền mặt, công nợ) và thực hành hệ thống bài tập tính toán từ trang 117-143 của Chuyên đề 2.",
        "keyTakeaways": [
          "Chi phí sử dụng vốn bình quân (WACC): WACC = wd * rd * (1 - T) + wp * rp + ws * rs. Trong đó nợ vay được nhân (1 - T) vì lãi vay là chi phí hợp lý được trừ thuế TNDN (Lá chắn thuế của nợ vay).",
          "Độ bẩy kinh doanh (DOL): Đo lường mức độ biến động của EBIT khi doanh thu Q thay đổi: DOL = Q*(P - v) / [Q*(P - v) - F] = (EBIT + F) / EBIT. Doanh nghiệp có định phí F càng cao thì DOL càng lớn, rủi ro kinh doanh càng cao.",
          "Độ bẩy tài chính (DFL): Đo lường mức độ biến động của EPS khi EBIT thay đổi: DFL = EBIT / [EBIT - I - Dp/(1 - T)]. Doanh nghiệp dùng nợ vay càng nhiều (I lớn) thì DFL càng cao, rủi ro tài chính càng lớn.",
          "Độ bẩy tổng hợp (DTL): DTL = DOL * DFL = Phần trăm thay đổi EPS / Phần trăm thay đổi Doanh thu.",
          "Sản lượng hòa vốn kinh tế: Q_hv = F / (P - v); Doanh thu hòa vốn: S_hv = F / [1 - (v / P)].",
          "Mô hình quản lý hàng tồn kho tối ưu EOQ: Q* = Căn bậc hai của [(2 * D * S) / H]. Trong đó D là nhu cầu hàng năm, S là chi phí mỗi lần đặt hàng, H là chi phí lưu kho 1 đơn vị/năm.",
          "Chính sách cổ tức: Trả cổ tức bằng tiền làm giảm tiền mặt và giảm vốn CSH; Trả cổ tức bằng cổ phiếu không làm thay đổi tổng vốn CSH (chỉ chuyển từ LNST chưa phân phối sang Vốn điều lệ), không làm thay đổi tỷ lệ sở hữu của cổ đông nhưng làm giảm giá thị trường cổ phiếu."
        ],
        "formulas": [
          {
            "name": "WACC",
            "expr": "WACC = wd*rd*(1 - T) + wp*rp + ws*rs"
          },
          {
            "name": "DOL (Đòn bẩy kinh doanh)",
            "expr": "DOL = (EBIT + F) / EBIT"
          },
          {
            "name": "DFL (Đòn bẩy tài chính)",
            "expr": "DFL = EBIT / (EBIT - I)"
          },
          {
            "name": "DTL (Đòn bẩy tổng hợp)",
            "expr": "DTL = DOL * DFL"
          },
          {
            "name": "Sản lượng hòa vốn",
            "expr": "Q_hv = F / (P - v)"
          },
          {
            "name": "Mô hình EOQ",
            "expr": "EOQ = sqrt((2 * D * S) / H)"
          }
        ],
        "pitfalls": [
          "BẪY 1: Chi phí vốn cổ phần thường rs KHÔNG ĐƯỢC nhân với (1 - T) vì cổ tức trả cho cổ đông được trích từ Lợi nhuận sau thuế!",
          "BẪY 2: Khi tính DFL, nếu công ty có cổ phiếu ưu đãi thì cổ tức ưu đãi Dp phải chia cho (1 - T) trước khi trừ ở mẫu số!"
        ],
        "flashcards": [
          {
            "q": "Tại sao chi phí sử dụng nợ vay sau thuế lại thấp hơn chi phí nợ vay trước thuế?",
            "a": "Vì chi phí lãi vay được tính vào chi phí hợp lý khi xác định thu nhập chịu thuế TNDN, tạo ra lá chắn thuế (Tax shield) làm giảm số thuế phải nộp: rd(sau thuế) = rd * (1 - T)."
          },
          {
            "q": "Nếu DOL = 2 và DFL = 1.5, khi doanh thu tăng 10% thì EPS tăng bao nhiêu %?",
            "a": "DTL = DOL * DFL = 2 * 1.5 = 3. Khi doanh thu tăng 10% thì EPS tăng = 10% * 3 = 30%."
          },
          {
            "q": "Trong mô hình EOQ, nếu nhu cầu hàng năm tăng gấp 4 lần thì quy mô mỗi lần đặt hàng tối ưu tăng mấy lần?",
            "a": "Tăng căn bậc hai của 4 = 2 lần."
          }
        ]
      }
    }
  },
  "TH": {
    "subjectId": "TH",
    "subjectName": "Thuế và Quản lý thuế nâng cao",
    "officialPdf": "CD3_Thue_2026.pdf",
    "parts": {
      "A": {
        "part": "A",
        "milestone": "25% đề cương",
        "days": [
          "25/09",
          "09/10"
        ],
        "title": "Phần A: Tổng quan về Thuế & Thuế Giá trị gia tăng (GTGT)",
        "pdfPages": "Trang 1 - 62 (Chuyên đề 3)",
        "overview": "Nắm vững bản chất, đối tượng chịu thuế và 26 nhóm đối tượng không chịu thuế GTGT; điều kiện áp dụng thuế suất 0%; phương pháp khấu trừ thuế GTGT và điều kiện khấu trừ thuế GTGT đầu vào; nguyên tắc phân bổ thuế GTGT đầu vào dùng chung.",
        "keyTakeaways": [
          "Bản chất thuế GTGT: Thuế gián thu, đánh vào người tiêu dùng cuối cùng, người nộp thuế là người cung cấp hàng hóa dịch vụ.",
          "Đối tượng không chịu thuế GTGT (Điều 5 Luật thuế GTGT): 26 nhóm, trọng tâm: Sản phẩm trồng trọt, chăn nuôi chưa chế biến do tự sản xuất bán ra hoặc khâu nhập khẩu; Dịch vụ tín dụng, cho vay; Chuyển nhượng quyền sử dụng đất; Bảo hiểm nhân thọ, BH người học; Dạy học, dạy nghề; Phần mềm máy tính; Chuyển giao công nghệ.",
          "Thuế suất 0%: Áp dụng cho hàng hóa, dịch vụ xuất khẩu. Điều kiện được khấu trừ/hoàn thuế: Có hợp đồng bán/gia công xuất khẩu; Có tờ khai hải quan; Có chứng từ thanh toán qua ngân hàng; Có hóa đơn thương mại/GTGT.",
          "Nguyên tắc khấu trừ thuế GTGT đầu vào: Thuế GTGT đầu vào của HHDV dùng cho sản xuất kinh doanh HHDV chịu thuế GTGT được khấu trừ toàn bộ. Dùng cho HHDV không chịu thuế: KHÔNG được khấu trừ (tính vào chi phí hoặc nguyên giá TSCĐ).",
          "Phân bổ thuế GTGT đầu vào dùng chung: Thuế đầu vào dùng chung cho cả HHDV chịu thuế và không chịu thuế: Phải hạch toán riêng; nếu không hạch toán riêng được thì phân bổ theo tỷ lệ % giữa doanh thu chịu thuế so với tổng doanh thu trong kỳ.",
          "Điều kiện khấu trừ thuế GTGT đầu vào: Có hóa đơn GTGT hợp pháp hoặc chứng từ nộp thuế khâu nhập khẩu; Có chứng từ thanh toán không dùng tiền mặt đối với hàng hóa, dịch vụ mua vào từng lần có giá trị từ 20 triệu đồng trở lên (đã bao gồm thuế GTGT)."
        ],
        "formulas": [
          {
            "name": "Thuế GTGT khấu trừ",
            "expr": "Thuế GTGT phải nộp = Thuế GTGT đầu ra - Thuế GTGT đầu vào được khấu trừ"
          },
          {
            "name": "Phân bổ thuế đầu vào",
            "expr": "Thuế ĐV được KT = Thuế ĐV dùng chung * (Doanh thu chịu thuế / Tổng doanh thu)"
          }
        ],
        "pitfalls": [
          "BẪY KHÁC BIỆT GIỮA THUẾ SUẤT 0% VÀ KHÔNG CHỊU THUẾ: Hàng hóa chịu thuế suất 0% ĐƯỢC KHẤU TRỪ VÀ ĐƯỢC HOÀN THUẾ đầu vào; Hàng hóa không chịu thuế KHÔNG ĐƯỢC KHẤU TRỪ và KHÔNG ĐƯỢC HOÀN thuế đầu vào!",
          "BẪY HÓA ĐƠN TRÊN 20 TRIỆU: Mua hàng nhiều lần trong cùng 1 ngày của cùng 1 nhà cung cấp có tổng giá trị từ 20 triệu đồng trở lên thì BẮT BUỘC phải thanh toán qua ngân hàng mới được khấu trừ thuế GTGT!"
        ],
        "flashcards": [
          {
            "q": "Sự khác biệt cốt lõi giữa đối tượng chịu thuế GTGT 0% và đối tượng không chịu thuế GTGT?",
            "a": "Thuế suất 0% được kê khai, khấu trừ và hoàn thuế GTGT đầu vào; Không chịu thuế GTGT thì không được khấu trừ thuế đầu vào (phải tính vào chi phí hoặc nguyên giá TSCĐ)."
          },
          {
            "q": "Điều kiện chứng từ thanh toán để được khấu trừ thuế GTGT đầu vào đối với hóa đơn từ 20 triệu đồng trở lên?",
            "a": "Phải có chứng từ thanh toán không dùng tiền mặt (thanh toán qua ngân hàng)."
          },
          {
            "q": "Chiếc ô tô 5 chỗ ngồi dùng cho giám đốc doanh nghiệp sản xuất trị giá 2.5 tỷ đồng (chưa thuế GTGT) thì thuế GTGT đầu vào được khấu trừ bao nhiêu?",
            "a": "Chỉ được khấu trừ thuế GTGT đầu vào tối đa tương ứng phần nguyên giá 1.6 tỷ đồng (= 160 triệu đồng). Phần thuế GTGT của giá trị vượt trên 1.6 tỷ không được khấu trừ (trừ DN kinh doanh vận tải, du lịch, khách sạn)."
          }
        ]
      },
      "B": {
        "part": "B",
        "milestone": "50% đề cương",
        "days": [
          "01/10",
          "15/10"
        ],
        "title": "Phần B: Thuế Tiêu thụ đặc biệt (TTĐB) & Thuế Xuất nhập khẩu",
        "pdfPages": "Trang 63 - 104 (Chuyên đề 3)",
        "overview": "Xác định đối tượng chịu thuế TTĐB, công thức tính giá tính thuế TTĐB khâu sản xuất và thương mại; nguyên tắc khấu trừ thuế TTĐB đầu vào của nguyên liệu; căn cứ tính thuế và hoàn thuế xuất nhập khẩu.",
        "keyTakeaways": [
          "Đối tượng chịu thuế TTĐB: Hàng hóa (Thuốc lá, xì gà, rượu, bia, ô tô dưới 24 chỗ ngồi, xe mô tô 2 bánh có dung tích xi lanh trên 125cm3, máy bay, du thuyền sử dụng dân dụng, xăng các loại, điều hòa nhiệt độ từ 90.000 BTU trở xuống, vàng mã); Dịch vụ (Vũ trường, massage, karaoke, casino, trò chơi điện tử có thưởng, đặt cược, golf, xổ số).",
          "Giá tính thuế TTĐB đối với hàng hóa sản xuất trong nước: Giá tính thuế TTĐB = (Giá bán chưa có thuế GTGT - Thuế BVMT) / (1 + Thuế suất thuế TTĐB).",
          "Quy định khống chế giá tính thuế TTĐB khâu thương mại liên kết: Trường hợp hàng hóa chịu thuế TTĐB được bán cho cơ sở kinh doanh thương mại là cơ sở có quan hệ liên kết thì giá tính thuế TTĐB không được thấp hơn tỷ lệ % (thường là 7%) so với giá bình quân của các cơ sở thương mại độc lập bán ra.",
          "Khấu trừ thuế TTĐB: Người nộp thuế sản xuất hàng hóa chịu thuế TTĐB từ nguyên liệu chịu thuế TTĐB được khấu trừ số thuế TTĐB đã nộp ở khâu nhập khẩu hoặc khâu mua nguyên liệu trong nước TƯƠNG ỨNG VỚI SỐ LƯỢNG NGUYÊN LIỆU XUẤT RA DÙNG ĐỂ SẢN XUẤT HÀNG HÓA CHỊU THUẾ TTĐB ĐÃ BÁN.",
          "Thuế Xuất nhập khẩu: Phương pháp tính thuế theo tỷ lệ phần trăm: Thuế XNK = Số lượng * Trị giá tính thuế đơn vị * Thuế suất; Giá tính thuế nhập khẩu: Là trị giá hải quan (thường là giá CIF); Giá tính thuế xuất khẩu: Là giá bán tại cửa khẩu xuất (giá FOB)."
        ],
        "formulas": [
          {
            "name": "Giá tính thuế TTĐB",
            "expr": "Giá tính thuế TTĐB = (Giá bán chưa thuế GTGT - Thuế BVMT) / (1 + Thuế suất TTĐB)"
          },
          {
            "name": "Thuế TTĐB phải nộp",
            "expr": "Thuế TTĐB = Giá tính thuế TTĐB * Thuế suất - Thuế TTĐB nguyên liệu được khấu trừ"
          }
        ],
        "pitfalls": [
          "BẪY MẪU SỐ GIÁ TÍNH THUẾ TTĐB: Giá tính thuế TTĐB phải chia cho (1 + Thuế suất TTĐB), rất nhiều thí sinh lấy trực tiếp giá bán chưa thuế GTGT nhân thuế suất TTĐB -> SAI NGHIÊM TRỌNG!",
          "BẪY KHẤU TRỪ THUẾ TTĐB: Chỉ được khấu trừ thuế TTĐB của nguyên liệu tương ứng với HÀNG HÓA ĐÃ XUẤT BÁN, không khấu trừ cho toàn bộ nguyên liệu mua vào hoặc tồn kho!"
        ],
        "flashcards": [
          {
            "q": "Công thức xác định giá tính thuế TTĐB của hàng hóa sản xuất trong nước bán ra?",
            "a": "Giá tính thuế TTĐB = (Giá bán chưa có thuế GTGT - Thuế BVMT nếu có) / (1 + Thuế suất thuế TTĐB)."
          },
          {
            "q": "Điều hòa nhiệt độ có công suất bao nhiêu thì thuộc đối tượng chịu thuế TTĐB?",
            "a": "Từ 90.000 BTU trở xuống."
          }
        ]
      },
      "C": {
        "part": "C",
        "milestone": "75% đề cương",
        "days": [
          "09/10",
          "17/10"
        ],
        "title": "Phần C: Thuế Thu nhập doanh nghiệp (TNDN) chuyên sâu",
        "pdfPages": "Trang 105 - 171 (Chuyên đề 3)",
        "overview": "Nắm vững căn cứ tính thuế TNDN, xác định doanh thu tính thuế, 3 điều kiện chi phí được trừ và danh mục các khoản chi phí không được trừ trọng yếu; quy tắc chuyển lỗ và ưu đãi thuế TNDN.",
        "keyTakeaways": [
          "Công thức tính thuế TNDN: Thuế TNDN phải nộp = (Thu nhập tính thuế - Trích lập quỹ KH&CN) * Thuế suất TNDN (phổ thông 20%).",
          "Xác định Thu nhập tính thuế: Thu nhập tính thuế = Thu nhập chịu thuế - Thu nhập được miễn thuế - Các khoản lỗ được kết chuyển theo quy định.",
          "Thu nhập chịu thuế: Thu nhập chịu thuế = (Doanh thu - Chi phí được trừ) + Các khoản thu nhập khác.",
          "3 Điều kiện để khoản chi được trừ khi tính thuế TNDN: 1. Khoản chi thực tế phát sinh liên quan đến hoạt động SXKD của doanh nghiệp; 2. Có đủ hóa đơn, chứng từ hợp pháp theo quy định; 3. Có chứng từ thanh toán không dùng tiền mặt đối với hóa đơn mua HHDV từng lần có giá trị từ 20 triệu đồng trở lên (giá đã bao gồm thuế GTGT).",
          "Các khoản chi phí KHÔNG ĐƯỢC TRỪ trọng điểm hay thi KTV:",
          "- Khấu hao TSCĐ không phục vụ SXKD; Khấu hao vượt định mức quy định tại TT 45/2013; Khấu hao xe ô tô chở người từ 9 chỗ ngồi trở xuống có nguyên giá vượt 1.6 tỷ đồng (phần vượt không được trừ khấu hao).",
          "- Tiền lương không ghi rõ điều kiện hưởng và mức hưởng trong HĐLĐ, Thỏa ước LĐTT hoặc Quy chế tài chính; Tiền lương của chủ DNTN, chủ công ty TNHH 1TV do cá nhân làm chủ.",
          "- Chi trang phục bằng tiền vượt quá 5 triệu đồng/người/năm (chi bằng hiện vật có hóa đơn thì không bị khống chế mức trần).",
          "- Chi phí lãi vay tương ứng với phần vốn điều lệ còn thiếu theo tiến độ cam kết góp vốn; Chi phí lãi vay vượt mức 150% lãi suất cơ bản do NHNN công bố đối với khoản vay của cá nhân/tổ chức phi tín dụng; Chi phí lãi vay vượt mức trần 30% EBITDA đối với DN có giao dịch liên kết theo Nghị định 132/2020/NĐ-CP.",
          "- Các khoản tiền phạt vi phạm hành chính (phạt thuế, vi phạm giao thông, phạt môi trường...). Lưu ý: Phạt vi phạm hợp đồng kinh tế ĐƯỢC BÙ TRỪ với thu tiền phạt vi phạm HĐKT.",
          "Quy định chuyển lỗ: Doanh nghiệp được chuyển toàn bộ và liên tục số lỗ vào thu nhập chịu thuế của những năm tiếp theo. Thời gian chuyển lỗ tối đa không quá 05 NĂM kể từ năm tiếp sau năm phát sinh lỗ."
        ],
        "formulas": [
          {
            "name": "Thuế TNDN phải nộp",
            "expr": "Thuế TNDN = (Thu nhập tính thuế - Quỹ KHCN) * Thuế suất (20%)"
          },
          {
            "name": "Thu nhập tính thuế",
            "expr": "TNTT = (Doanh thu - Chi phí được trừ + TN khác) - TN miễn thuế - Lỗ kết chuyển"
          }
        ],
        "pitfalls": [
          "BẪY TIỀN LƯƠNG CHỦ CÔNG TY TNHH 1TV DO CÁ NHÂN LÀM CHỦ: Dù có trực tiếp tham gia điều hành thì tiền lương, tiền công trả cho chủ sở hữu công ty TNHH 1TV do cá nhân làm chủ đều KHÔNG ĐƯỢC TÍNH vào chi phí được trừ khi tính thuế TNDN!",
          "BẪY PHẠT HÀNH CHÍNH VS PHẠT HỢP ĐỒNG: Phạt vi phạm hành chính KHÔNG ĐƯỢC TRỪ. Nhưng Phạt vi phạm hợp đồng kinh tế ĐƯỢC bù trừ với thu tiền phạt hợp đồng kinh tế, phần chênh lệch âm vẫn được tính vào chi phí được trừ!"
        ],
        "flashcards": [
          {
            "q": "Doanh nghiệp có vốn điều lệ còn thiếu 500 triệu đồng, trong năm đi vay ngân hàng 1 tỷ đồng với lãi suất 10%/năm (chi phí lãi vay 100 triệu). Khoản chi phí lãi vay được trừ và không được trừ là bao nhiêu?",
            "a": "Chi phí lãi vay không được trừ = 500 triệu * 10% = 50 triệu đồng (tương ứng vốn điều lệ còn thiếu). Chi phí lãi vay được trừ = 100 - 50 = 50 triệu đồng."
          },
          {
            "q": "Thời gian chuyển lỗ tối đa theo Luật thuế TNDN là bao nhiêu năm?",
            "a": "Tối đa không quá 05 năm liên tục, kể từ năm tiếp sau năm phát sinh lỗ."
          }
        ]
      },
      "D": {
        "part": "D",
        "milestone": "100% đề cương",
        "days": [
          "16/10",
          "21/10"
        ],
        "title": "Phần D: Thuế Thu nhập cá nhân (TNCN) & Quản lý thuế",
        "pdfPages": "Trang 172 - 263 (Chuyên đề 3)",
        "overview": "Cập nhật Luật thuế TNCN mới số 109/2025/QH15; phân biệt cá nhân cư trú và không cư trú; biểu thuế lũy tiến từng phần; thuế TNCN từ đầu tư vốn, chuyển nhượng vốn, chuyển nhượng BĐS; các nguyên tắc kê khai, thanh tra thuế và quản lý giá chuyển nhượng (NĐ 132/2020).",
        "keyTakeaways": [
          "Tiêu chí xác định Cá nhân cư trú: Có mặt tại Việt Nam từ 183 ngày trở lên trong 1 năm dương lịch hoặc 12 tháng liên tục; hoặc có nơi ở thường xuyên tại VN (có đăng ký thường trú hoặc thuê nhà ở tại VN từ 183 ngày trở lên). Nếu không đáp ứng thì là Cá nhân không cư trú.",
          "Phạm vi đánh thuế: Cá nhân cư trú: Chịu thuế đối với thu nhập phát sinh trong và ngoài lãnh thổ Việt Nam (Toàn cầu); Cá nhân không cư trú: Chỉ chịu thuế đối với thu nhập phát sinh tại Việt Nam.",
          "Phương pháp tính thuế từ Tiền lương, tiền công (Cá nhân cư trú có HĐLĐ từ 3 tháng trở lên): Thu nhập tính thuế = Thu nhập chịu thuế - Các khoản đóng bảo hiểm bắt buộc - Giảm trừ gia cảnh (Bản thân + Người phụ thuộc) - Đóng góp từ thiện, nhân đạo.",
          "Áp dụng Biểu thuế lũy tiến từng phần (7 bậc: 5%, 10%, 15%, 20%, 25%, 30%, 35%).",
          "Khấu trừ tại nguồn 10%: Cá nhân cư trú ký HĐLĐ dưới 3 tháng hoặc không ký HĐLĐ có tổng mức trả thu nhập từ 2.000.000 đồng/lần trở lên thì tổ chức chi trả phải khấu trừ thuế 10% trước khi trả cho cá nhân (trừ trường hợp làm cam kết thu nhập chưa đến mức chịu thuế theo mẫu).",
          "Cá nhân không cư trú: Thuế TNCN từ tiền lương, tiền công = Thu nhập chịu thuế * Thuế suất phẳng 20% (không được giảm trừ gia cảnh).",
          "Các sắc thuế TNCN khác: Thu nhập từ đầu tư vốn (cổ tức, lợi tức): Thuế suất 5%; Thu nhập từ chuyển nhượng vốn: 20% trên thu nhập tính thuế (cá nhân cư trú); Chuyển nhượng chứng khoán: 0.1% trên giá chuyển nhượng từng lần; Chuyển nhượng Bất động sản: 2% trên giá chuyển nhượng; Trúng thưởng, thừa kế, quà tặng: 10% phần vượt trên 10 triệu đồng.",
          "Luật Quản lý thuế & Chống chuyển giá: Cơ chế tự tính, tự khai, tự nộp thuế; Thời hạn nộp hồ sơ quyết toán thuế TNDN và TNCN; Quy tắc giao dịch liên kết theo Nghị định 132/2020/NĐ-CP: Chi phí lãi vay thuần được trừ tối đa không quá 30% tổng lợi nhuận thuần từ HĐKD cộng chi phí lãi vay thuần cộng chi phí khấu hao (EBITDA)."
        ],
        "newRegulations": [
          "Luật thuế TNCN mới số 109/2025/QH15: Nâng mức giảm trừ gia cảnh cho người nộp thuế và người phụ thuộc phù hợp với chỉ số lạm phát CPI và biến động mức sống; điều chỉnh khoảng cách giữa các bậc trong biểu thuế lũy tiến nhằm giảm bớt gánh nặng thuế cho người lao động thu nhập trung bình."
        ],
        "pitfalls": [
          "BẪY CỔ TỨC BẰNG CỔ PHIẾU: Khi nhận cổ tức bằng cổ phiếu, cá nhân CHƯA PHẢI NỘP THUẾ TNCN. Chỉ khi nào cá nhân CHUYỂN NHƯỢNG số cổ phiếu này thì mới phải nộp thuế TNCN từ đầu tư vốn (5%) và thuế chuyển nhượng chứng khoán (0.1%)!",
          "BẪY CÁ NHÂN KHÔNG CƯ TRÚ: Không được tính bất kỳ khoản giảm trừ gia cảnh nào, áp dụng thuế suất cố định 20% trên toàn bộ thu nhập phát sinh tại VN!"
        ],
        "flashcards": [
          {
            "q": "Tiêu chí số ngày có mặt tại Việt Nam để xác định cá nhân cư trú là bao nhiêu ngày?",
            "a": "Từ 183 ngày trở lên tính trong một năm dương lịch hoặc trong 12 tháng liên tục kể từ ngày đầu tiên có mặt tại Việt Nam."
          },
          {
            "q": "Mức thuế suất thuế TNCN đối với thu nhập từ chuyển nhượng bất động sản là bao nhiêu?",
            "a": "2% tính trên giá chuyển nhượng bất động sản từng lần."
          },
          {
            "q": "Mức trần chi phí lãi vay được trừ đối với doanh nghiệp có giao dịch liên kết theo Nghị định 132/2020/NĐ-CP là bao nhiêu?",
            "a": "Tối đa không vượt quá 30% tổng lợi nhuận thuần từ hoạt động kinh doanh cộng chi phí lãi vay thuần cộng chi phí khấu hao (30% EBITDA). Phần vượt được chuyển sang các kỳ tính thuế tiếp theo trong vòng 5 năm."
          }
        ]
      }
    }
  },
  "KT": {
    "subjectId": "KT",
    "subjectName": "Kế toán tài chính, kế toán quản trị nâng cao",
    "officialPdf": "CD4_Ke_Toan_2026.pdf",
    "parts": {
      "A": {
        "part": "A",
        "milestone": "25% đề cương",
        "days": [
          "26/09",
          "10/10"
        ],
        "title": "Phần A: Luật Kế toán 2015, Các nguyên tắc cơ bản & Hệ thống Chuẩn mực VAS/IFRS",
        "pdfPages": "Trang 1 - 75 (Chuyên đề 4)",
        "overview": "Nắm vững các quy định cốt lõi của Luật Kế toán 2015 (sửa đổi theo Luật 56/2024/QH15); 7 nguyên tắc kế toán cơ bản; định hướng áp dụng IFRS tại Việt Nam và phân loại tài sản, nợ phải trả, vốn chủ sở hữu theo khuôn mẫu kế toán.",
        "keyTakeaways": [
          "Luật Kế toán số 88/2015/QH13 & Luật số 56/2024/QH15: Đơn vị kế toán, kỳ kế toán, chứng từ kế toán điện tử, chữ ký điện tử trong kế toán, trách nhiệm của người đại diện theo pháp luật và người làm kế toán.",
          "7 Nguyên tắc kế toán cơ bản:",
          "1. Cơ sở dồn tích (Accrual basis): Nghiệp vụ kinh tế tài chính được ghi nhận tại thời điểm phát sinh, không căn cứ vào thời điểm thực tế thu hoặc chi tiền.",
          "2. Hoạt động liên tục (Going concern): BCTC phải được lập trên giả định doanh nghiệp đang và sẽ tiếp tục hoạt động trong tương lai gần (ít nhất 12 tháng tiếp theo). Nếu không liên tục, tài sản và nợ phải đánh giá lại theo giá trị thanh lý.",
          "3. Giá gốc (Historical cost): Tài sản được ghi nhận ban đầu theo giá gốc. Sau ghi nhận ban đầu, cho phép áp dụng Giá trị hợp lý (Fair value) đối với các tài sản, nợ phải trả biến động theo giá thị trường theo quy định.",
          "4. Nhất quán (Consistency): Các chính sách và phương pháp kế toán đã chọn phải được áp dụng thống nhất ít nhất trong một kỳ kế toán năm.",
          "5. Thận trọng (Prudence): Lập dự phòng nhưng không quá lớn; không đánh giá cao hơn giá trị của tài sản và thu nhập; không đánh giá thấp hơn giá trị của nợ phải trả và chi phí; doanh thu chỉ ghi nhận khi có bằng chứng chắc chắn, chi phí ghi nhận ngay khi có bằng chứng về khả năng phát sinh.",
          "6. Trọng yếu (Materiality): Thông tin là trọng yếu nếu việc bỏ sót hoặc sai lệch có thể làm thay đổi quyết định kinh tế của người sử dụng BCTC.",
          "7. Phù hợp (Matching): Việc ghi nhận doanh thu và chi phí phải phù hợp với nhau trong cùng một kỳ kế toán.",
          "Hệ thống 26 Chuẩn mực Kế toán Việt Nam (VAS) và lộ trình áp dụng Chuẩn mực Báo cáo Tài chính Quốc tế (IFRS / VFRS) tại Việt Nam."
        ],
        "newRegulations": [
          "Luật 56/2024/QH15 sửa đổi bổ sung Luật Kế toán: Hoàn thiện quy định về áp dụng giá trị hợp lý trong kế toán; chuẩn hóa quy trình lưu trữ và kiểm toán chứng từ kế toán điện tử; mở rộng cơ chế cho phép các doanh nghiệp niêm yết tự nguyện áp dụng IFRS toàn diện."
        ],
        "pitfalls": [
          "BẪY NGUYÊN TẮC THẬN TRỌNG: Thận trọng không có nghĩa là lập các quỹ dự phòng bí mật hoặc cố tình đánh giá quá thấp tài sản để trốn thuế! Thận trọng là không lạc quan quá mức nhưng phải đảm bảo tính khách quan và hợp lý.",
          "BẪY GIẢ ĐỊNH HOẠT ĐỘNG LIÊN TỤC: Khi doanh nghiệp có nguy cơ giải thể hoặc phá sản trong vòng 12 tháng tới, BCTC KHÔNG ĐƯỢC lập theo nguyên tắc hoạt động liên tục mà phải lập theo Chế độ kế toán khi không đáp ứng giả định hoạt động liên tục (ghi nhận tài sản theo giá trị thuần có thể thu hồi, nợ phải trả ghi nhận toàn bộ theo giá trị thực tế phải thanh lý)!"
        ],
        "flashcards": [
          {
            "q": "Nguyên tắc cơ sở dồn tích (Accrual basis) quy định thời điểm ghi nhận nghiệp vụ kinh tế tài chính như thế nào?",
            "a": "Ghi nhận vào thời điểm phát sinh, không căn cứ vào thời điểm thực tế thu hoặc thực tế chi tiền hoặc tương đương tiền."
          },
          {
            "q": "Nếu đơn vị kế toán thay đổi phương pháp tính giá xuất kho từ Bình quân gia quyền sang FIFO thì phải làm gì theo nguyên tắc nhất quán?",
            "a": "Phải giải trình trong Thuyết minh BCTC về lý do thay đổi và ảnh hưởng của sự thay đổi đó đến tình hình tài chính và kết quả kinh doanh của doanh nghiệp."
          }
        ]
      },
      "B": {
        "part": "B",
        "milestone": "50% đề cương",
        "days": [
          "02/10",
          "16/10"
        ],
        "title": "Phần B: Kế toán Tài chính DN theo Thông tư 99/2025/TT-BTC - Tài sản & Nguồn vốn",
        "pdfPages": "Trang 76 - 204 (Chuyên đề 4)",
        "overview": "Cập nhật Chế độ kế toán doanh nghiệp mới nhất theo Thông tư số 99/2025/TT-BTC; kế toán tiền, các khoản phải thu, trích lập dự phòng nợ khó đòi; kế toán hàng tồn kho (VAS 02) và dự phòng giảm giá HTK; kế toán TSCĐ, khấu hao và bất động sản đầu tư; kế toán trái phiếu và nợ phải trả.",
        "keyTakeaways": [
          "Thông tư số 99/2025/TT-BTC (có hiệu lực thay thế Thông tư 200/2014): Chuẩn hóa hệ thống tài khoản kế toán doanh nghiệp; nâng cao tính tương thích với IFRS; phân loại rõ ràng tài sản tài chính, công cụ nợ và công cụ vốn.",
          "Kế toán Hàng tồn kho (VAS 02): Hàng tồn kho được ghi nhận ban đầu theo giá gốc. Cuối kỳ, HTK được đánh giá theo giá thấp hơn giữa Giá gốc và Giá trị thuần có thể thực hiện được (NRV = Giá bán ước tính - Chi phí ước tính để hoàn thành sản phẩm và chi phí bán hàng). Nếu NRV < Giá gốc: Phải trích lập dự phòng giảm giá hàng tồn kho: Nợ TK 632 / Có TK 2294.",
          "Kế toán Tài sản cố định (VAS 03, VAS 04): Tiêu chuẩn ghi nhận TSCĐ: Chắc chắn thu được lợi ích kinh tế trong tương lai, nguyên giá xác định đáng tin cậy, thời gian sử dụng trên 1 năm và giá trị từ 30 triệu đồng trở lên. Các phương pháp khấu hao: Đường thẳng, Số dư giảm dần có điều chỉnh, Theo sản lượng.",
          "Chi phí sau ghi nhận ban đầu của TSCĐ: Chỉ được VỐN HÓA (ghi tăng nguyên giá TSCĐ) nếu chi phí này chắc chắn làm tăng lợi ích kinh tế trong tương lai vượt trên mức đánh giá tiêu chuẩn ban đầu (nâng cấp công suất, kéo dài tuổi thọ). Chi phí bảo dưỡng, sửa chữa định kỳ phải ghi nhận vào CHI PHÍ TRONG KỲ (TK 641, 642, 627).",
          "Bất động sản đầu tư (VAS 05): BĐS nắm giữ nhằm mục đích thu lợi từ việc cho thuê hoặc chờ tăng giá để bán (không dùng cho SXKD hoặc bán trong kỳ hoạt động thông thường). BĐSĐT nắm giữ chờ tăng giá KHÔNG TRÍCH KHẤU HAO mà chỉ đánh giá tổn thất.",
          "Kế toán Trái phiếu phát hành: Ghi nhận theo mệnh giá (TK 34311), Chiết khấu trái phiếu (TK 34312 - ghi giảm nợ), Phụ trội trái phiếu (TK 34313 - ghi tăng nợ). Phân bổ chiết khấu/phụ trội vào chi phí tài chính hàng kỳ theo phương pháp đường thẳng hoặc lãi suất thực tế."
        ],
        "formulas": [
          {
            "name": "Giá trị thuần có thể thực hiện (NRV)",
            "expr": "NRV = Giá bán ước tính - Chi phí hoàn thành - Chi phí bán hàng"
          },
          {
            "name": "Mức trích dự phòng HTK",
            "expr": "Mức dự phòng = Lượng tồn kho * (Giá gốc đơn vị - NRV đơn vị)"
          }
        ],
        "pitfalls": [
          "BẪY DỰ PHÒNG GIẢM GIÁ HÀNG TỒN KHO: Việc lập dự phòng phải tính theo TỪNG MẶT HÀNG riêng lẻ, không được tính gộp bù trừ giữa mặt hàng có giá tăng với mặt hàng có giá giảm!",
          "BẪY BẤT ĐỘNG SẢN ĐẦU TƯ: BĐS đầu tư cho thuê thì CÓ trích khấu hao; nhưng BĐS đầu tư nắm giữ CHỜ TĂNG GIÁ thì KHÔNG trích khấu hao!"
        ],
        "flashcards": [
          {
            "q": "Nguyên tắc đánh giá hàng tồn kho cuối kỳ kế toán theo VAS 02 là gì?",
            "a": "Ghi nhận theo giá thấp hơn giữa Giá gốc và Giá trị thuần có thể thực hiện được (NRV)."
          },
          {
            "q": "Bút toán trích lập dự phòng giảm giá hàng tồn kho cuối kỳ?",
            "a": "Nợ TK 632 (Giá vốn hàng bán) / Có TK 2294 (Dự phòng giảm giá hàng tồn kho)."
          }
        ]
      },
      "C": {
        "part": "C",
        "milestone": "75% đề cương",
        "days": [
          "10/10",
          "18/10"
        ],
        "title": "Phần C: Doanh thu, Chi phí đi vay, Thuế hoãn lại & Lập BCTC",
        "pdfPages": "Trang 205 - 279 (Chuyên đề 4)",
        "overview": "5 điều kiện ghi nhận doanh thu bán hàng (VAS 14); ghi nhận doanh thu nhận trước (TK 3387); vốn hóa chi phí đi vay (VAS 16); thuế TNDN hoãn lại (VAS 17); phương pháp lập Báo cáo tình hình tài chính, Báo cáo kết quả HĐKD và Báo cáo lưu chuyển tiền tệ theo Thông tư 99/2025/TT-BTC.",
        "keyTakeaways": [
          "5 Điều kiện ghi nhận Doanh thu bán hàng (VAS 14): 1. Đã chuyển giao phần lớn rủi ro và lợi ích gắn liền với quyền sở hữu sản phẩm; 2. Không còn nắm giữ quyền quản lý như người sở hữu hoặc quyền kiểm soát hàng hóa; 3. Doanh thu được xác định tương đối chắc chắn; 4. Doanh nghiệp đã hoặc sẽ thu được lợi ích kinh tế; 5. Xác định được chi phí liên quan đến giao dịch bán hàng.",
          "Doanh thu nhận trước (TK 3387): Khách hàng trả tiền trước cho nhiều kỳ (tiền thuê nhà nhận trước, tiền cung cấp dịch vụ viễn thông). Nguyên tắc: Ghi nhận vào TK 3387; định kỳ phân bổ dần sang doanh thu bán hàng/dịch vụ (TK 511) tương ứng với phần dịch vụ đã thực hiện.",
          "Kế toán Chi phí đi vay (VAS 16): Chi phí đi vay liên quan trực tiếp đến việc đầu tư xây dựng hoặc sản xuất tài sản dở dang cần một thời gian đủ dài (từ 12 tháng trở lên) để đưa vào sử dụng thì ĐƯỢC VỐN HÓA (tính vào nguyên giá tài sản - TK 241). Chi phí đi vay phát sinh trong thời gian tạm dừng thi công KHÔNG ĐƯỢC VỐN HÓA mà phải hạch toán vào chi phí tài chính.",
          "Thuế TNDN hoãn lại (VAS 17): Phát sinh do chênh lệch tạm thời giữa Giá trị ghi sổ trên BCTC và Cơ sở tính thuế của tài sản/nợ phải trả. Chênh lệch tạm thời chịu thuế -> Ghi nhận Thuế TNDN hoãn lại phải trả (Có TK 347); Chênh lệch tạm thời được khấu trừ -> Ghi nhận Tài sản thuế TNDN hoãn lại (Nợ TK 243).",
          "Phương pháp lập Báo cáo lưu chuyển tiền tệ (LCTT):",
          "- Phương pháp trực tiếp: Dòng tiền vào/ra phản ánh trực tiếp theo nghiệp vụ tiền (Tiền thu từ bán hàng, tiền chi trả người bán, tiền chi trả người lao động, tiền nộp thuế...).",
          "- Phương pháp gián tiếp (chỉ áp dụng cho HĐKD): Khởi đầu từ Lợi nhuận trước thuế, điều chỉnh: 1. Các khoản chi phí phi tiền tệ (Khấu hao TSCĐ, Dự phòng); 2. Các khoản lãi/lỗ thuộc hoạt động đầu tư và tài chính (Lãi bán TSCĐ, lãi vay, cổ tức); 3. Biến động vốn lưu động (Tăng/giảm các khoản phải thu, hàng tồn kho, các khoản phải trả)."
        ],
        "formulas": [
          {
            "name": "Dòng tiền HĐKD gián tiếp",
            "expr": "CFO = LNTT + Khấu hao + Dự phòng + Chi phí lãi vay - Lãi bán TSCĐ - Tăng Phải thu - Tăng Tồn kho + Tăng Phải trả - Thuế TNDN đã nộp"
          }
        ],
        "pitfalls": [
          "BẪY ĐIỀU CHỈNH LƯU CHUYỂN TIỀN TỆ GIÁN TIẾP: Hàng tồn kho TĂNG thì dòng tiền GIẢM (mang dấu âm); Khoản phải trả TĂNG thì dòng tiền TĂNG (mang dấu dương)!",
          "BẪY LÃI BÁN TÀI SẢN CỐ ĐỊNH: Lãi bán TSCĐ nằm trong LNTT nhưng thuộc DÒNG TIỀN ĐẦU TƯ, vì vậy ở phần lưu chuyển tiền HĐKD phải TRỪ RA (-) để tránh tính trùng!"
        ],
        "flashcards": [
          {
            "q": "Khi nào chi phí đi vay được vốn hóa vào giá trị tài sản dở dang theo VAS 16?",
            "a": "Khi chi phí đi vay phát sinh liên quan trực tiếp đến việc đầu tư xây dựng hoặc sản xuất tài sản dở dang cần một thời gian đủ dài (trên 12 tháng) để có thể đưa vào sử dụng hoặc bán."
          },
          {
            "q": "Chênh lệch tạm thời được khấu trừ làm phát sinh khoản mục nào trên Bảng cân đối kế toán?",
            "a": "Tài sản thuế thu nhập hoãn lại (TK 243)."
          }
        ]
      },
      "D": {
        "part": "D",
        "milestone": "100% đề cương",
        "days": [
          "17/10",
          "21/10"
        ],
        "title": "Phần D: Báo cáo Tài chính Hợp nhất (TT 202) & Kế toán Quản trị",
        "pdfPages": "Trang 280 - 412 (Chuyên đề 4)",
        "overview": "Nguyên tắc và các bút toán hợp nhất BCTC theo Thông tư 202/2014/TT-BTC; loại trừ khoản đầu tư công ty con tại ngày mua, xác định Lợi thế thương mại (Goodwill) và Lợi ích cổ đông không kiểm soát (NCI); loại trừ giao dịch nội bộ; kế toán quản trị: phân loại chi phí, điểm hòa vốn CVP và phương pháp tính giá thành phân bước.",
        "keyTakeaways": [
          "Báo cáo tài chính hợp nhất (Thông tư 202/2014/TT-BTC): Công ty mẹ phải lập BCTC hợp nhất để bao gồm tất cả các công ty con (nắm giữ trên 50% quyền biểu quyết trực tiếp hoặc gián tiếp, hoặc có quyền kiểm soát chi phối).",
          "Bút toán loại trừ khoản đầu tư tại ngày mua: Nợ Vốn đầu tư của CSH, Nợ Thặng dư vốn cổ phần, Nợ Lợi nhuận sau thuế chưa phân phối (tính theo GTHL của công ty con); Nợ Lợi thế thương mại (Goodwill); Có Khoản đầu tư vào công ty con (trên sổ mẹ); Có Lợi ích của cổ đông không kiểm soát (NCI).",
          "Lợi thế thương mại (Goodwill) = Giá phí hợp nhất kinh doanh - Phần sở hữu của công ty mẹ trong Giá trị hợp lý tài sản thuần của công ty con tại ngày mua. Lợi thế thương mại được phân bổ dần vào chi phí quản lý doanh nghiệp theo phương pháp đường thẳng trong thời gian tối đa không quá 10 năm.",
          "Loại trừ các giao dịch nội bộ trong tập đoàn:",
          "- Giao dịch bán hàng nội bộ: Loại trừ Doanh thu bán hàng nội bộ và Giá vốn hàng bán nội bộ; Nếu hàng nội bộ chưa bán ra ngoài (còn tồn kho cuối kỳ) thì phải loại trừ LÃI CHƯA THỰC HIỆN trong giá trị hàng tồn kho cuối kỳ.",
          "- Giao dịch bán TSCĐ nội bộ: Loại trừ lãi/lỗ chưa thực hiện từ bán TSCĐ và điều chỉnh khấu hao lũy kế tương ứng.",
          "- Cổ tức nội bộ: Loại trừ doanh thu hoạt động tài chính từ cổ tức nhận được từ công ty con.",
          "Kế toán quản trị - Phân tích Mối quan hệ Chi phí - Khối lượng - Lợi nhuận (CVP):",
          "- Số dư đảm phí (Contribution Margin - CM) = Doanh thu - Biến phí = Q * (P - v).",
          "- Tỷ lệ số dư đảm phí (CMR) = CM / Doanh thu = (P - v) / P.",
          "- Sản lượng hòa vốn = Tổng định phí / Số dư đảm phí đơn vị = F / (P - v).",
          "- Doanh thu hòa vốn = Tổng định phí / Tỷ lệ số dư đảm phí = F / CMR.",
          "- Doanh thu để đạt mức lợi nhuận mục tiêu = (Định phí + Lợi nhuận mục tiêu) / CMR.",
          "Phương pháp tính giá thành phân bước (Process Costing): Áp dụng cho quy trình sản xuất qua nhiều giai đoạn chế biến liên tục (Phân xưởng 1 -> Phân xưởng 2 -> Thành phẩm). Có 2 phương án: Phương án có tính nửa thành phẩm (kết chuyển tuần tự giá thành NTP qua từng bước) và Phương án không tính nửa thành phẩm (kết chuyển song song chi phí từng bước vào giá thành thành phẩm)."
        ],
        "formulas": [
          {
            "name": "Lợi thế thương mại (Goodwill)",
            "expr": "Goodwill = Giá phí hợp nhất - (% Sở hữu * GTHL tài sản thuần ngày mua)"
          },
          {
            "name": "Số dư đảm phí (CM)",
            "expr": "CM = Doanh thu - Tổng biến phí = Q * (P - v)"
          },
          {
            "name": "Doanh thu hòa vốn",
            "expr": "S_hv = F / CMR = F / [1 - (v/P)]"
          }
        ],
        "pitfalls": [
          "BẪY PHÂN BỔ GOODWILL: Theo quy định kế toán Việt Nam (TT 202), Lợi thế thương mại phân bổ tối đa 10 năm. Nhưng theo IFRS 3, Goodwill KHÔNG phân bổ hàng năm mà chỉ đánh giá tổn thất (Impairment test)!",
          "BẪY LÃI CHƯA THỰC HIỆN NỘI BỘ: Nếu công ty mẹ bán cho con (xuôi chiều) thì lãi chưa thực hiện ảnh hưởng 100% đến lợi nhuận của mẹ. Nếu công ty con bán cho mẹ (ngược chiều) thì lãi chưa thực hiện phải phân bổ cho cả công ty mẹ và cổ đông không kiểm soát NCI theo tỷ lệ sở hữu!"
        ],
        "flashcards": [
          {
            "q": "Công thức xác định Lợi thế thương mại (Goodwill) tại ngày mua theo Thông tư 202?",
            "a": "Goodwill = Giá phí hợp nhất kinh doanh - Phần sở hữu của bên mua trong Giá trị hợp lý của tài sản thuần có thể xác định được của bên bị mua."
          },
          {
            "q": "Thời gian phân bổ tối đa của Lợi thế thương mại vào chi phí theo chế độ kế toán Việt Nam?",
            "a": "Tối đa không quá 10 năm kể từ ngày mua."
          },
          {
            "q": "Công thức tính Doanh thu hòa vốn theo phương pháp Số dư đảm phí?",
            "a": "Doanh thu hòa vốn = Tổng định phí / Tỷ lệ số dư đảm phí = F / [(P - v) / P]."
          }
        ]
      }
    }
  },
  "KI": {
    "subjectId": "KI",
    "subjectName": "Kiểm toán và dịch vụ bảo đảm nâng cao",
    "officialPdf": "CD5_Kiem_Toan_2026.pdf",
    "parts": {
      "A": {
        "part": "A",
        "milestone": "25% đề cương",
        "days": [
          "27/09",
          "11/10"
        ],
        "title": "Phần A: Tổng quan Kiểm toán & Chuẩn mực Đạo đức nghề nghiệp KTV",
        "pdfPages": "Trang 1 - 147 (Chuyên đề 5)",
        "overview": "Nắm vững bản chất các loại hình kiểm toán (Kiểm toán BCTC, tuân thủ, hoạt động); 5 nguyên tắc đạo đức cơ bản; 5 nguy cơ đe dọa tính độc lập và các biện pháp bảo vệ theo Chuẩn mực đạo đức nghề nghiệp kế toán, kiểm toán Việt Nam.",
        "keyTakeaways": [
          "5 Nguyên tắc đạo đức nghề nghiệp cơ bản của KTV (Thông tư 70/2015/TT-BTC):",
          "1. Tính chính trực (Integrity): Thẳng thắn, trung thực trong tất cả các mối quan hệ chuyên môn và kinh doanh.",
          "2. Tính khách quan (Objectivity): Không cho phép sự thiên vị, xung đột lợi ích hoặc bất cứ ảnh hưởng bất hợp lý nào chi phối các xét đoán chuyên môn.",
          "3. Năng lực chuyên môn và tính thận trọng (Professional Competence and Due Care): Duy trì kiến thức và kỹ năng chuyên môn ở mức cần thiết; hành động một cách thận trọng, phù hợp với các chuẩn mực nghề nghiệp.",
          "4. Tính bảo mật (Confidentiality): Tôn trọng tính bảo mật của thông tin thu thập được; không tiết lộ cho bên thứ ba khi chưa có sự đồng ý hợp lệ trừ khi có quyền hoặc nghĩa vụ pháp lý phải công bố.",
          "5. Tư cách nghề nghiệp (Professional Behavior): Tuân thủ pháp luật và các quy định có liên quan; tránh mọi hành vi làm giảm uy tín nghề nghiệp.",
          "5 Nguy cơ đe dọa tính độc lập và việc tuân thủ đạo đức:",
          "- Nguy cơ tư lợi (Self-interest threat): Có lợi ích tài chính trực tiếp hoặc gián tiếp trọng yếu vào khách hàng; phụ thuộc quá lớn vào phí dịch vụ của 1 khách hàng; lo sợ mất khách hàng.",
          "- Nguy cơ tự kiểm tra (Self-review threat): Kiểm toán lại công việc do chính mình hoặc công ty kiểm toán của mình đã thực hiện trước đó (ví dụ: vừa làm dịch vụ ghi sổ kế toán, lập BCTC vừa nhận kiểm toán BCTC đó; vừa làm tư vấn định giá vừa kiểm toán).",
          "- Nguy cơ bào chữa (Advocacy threat): Đóng vai trò là người đại diện hoặc thúc đẩy quyền lợi cho khách hàng kiểm toán trong các vụ kiện tụng tranh chấp.",
          "- Nguy cơ thân quen (Familiarity threat): Kiểm toán viên có người thân ruột thịt (bố mẹ, vợ chồng, con cái) là thành viên HĐQT, Ban Giám đốc hoặc Kế toán trưởng của khách hàng; KTV trưởng nhóm kiểm toán cho một khách hàng trong thời gian quá dài (trên 5-7 năm liên tục).",
          "- Nguy cơ bị đe dọa (Intimidation threat): Bị khách hàng đe dọa sa thải, thay thế hoặc kiện tụng nếu không đưa ra ý kiến chấp nhận toàn phần.",
          "Biện pháp bảo vệ (Safeguards): Rút khỏi nhóm kiểm toán; Cử KTV độc lập khác soát xét chất lượng cuộc kiểm toán; Luân chuyển KTV hành nghề định kỳ."
        ],
        "pitfalls": [
          "BẪY ĐẠO ĐỨC NGHỀ NGHIỆP: Nếu công ty kiểm toán đã cung cấp dịch vụ 'ghi sổ kế toán và lập Báo cáo tài chính' cho khách hàng thì TUYỆT ĐỐI KHÔNG ĐƯỢC nhận kiểm toán BCTC của khách hàng đó (Nguy cơ tự kiểm tra nghiêm trọng không có biện pháp bảo vệ nào khả thi)!",
          "BẪY NGUY CƠ THÂN QUEN: KTV có người yêu hoặc bạn thân làm nhân viên kế toán bình thường thì có bị coi là vi phạm độc lập không? Cần xét đoán xem vị trí đó có 'ảnh hưởng trực tiếp và trọng yếu' đến BCTC hay không. Nếu là Kế toán trưởng thì BẮT BUỘC phải rút KTV đó khỏi nhóm kiểm toán."
        ],
        "flashcards": [
          {
            "q": "5 nguyên tắc đạo đức nghề nghiệp cơ bản của kiểm toán viên là gì?",
            "a": "1. Tính chính trực; 2. Tính khách quan; 3. Năng lực chuyên môn và tính thận trọng; 4. Tính bảo mật; 5. Tư cách nghề nghiệp."
          },
          {
            "q": "Khi kiểm toán viên sở hữu cổ phiếu của công ty khách hàng kiểm toán thì phát sinh nguy cơ nào?",
            "a": "Nguy cơ tư lợi (Self-interest threat). KTV phải bán toàn bộ cổ phiếu trước khi tham gia cuộc kiểm toán hoặc rút khỏi nhóm kiểm toán."
          },
          {
            "q": "Việc vừa thực hiện dịch vụ lập BCTC vừa nhận kiểm toán BCTC cho cùng một khách hàng tạo ra nguy cơ nào lớn nhất?",
            "a": "Nguy cơ tự kiểm tra (Self-review threat)."
          }
        ]
      },
      "B": {
        "part": "B",
        "milestone": "50% đề cương",
        "days": [
          "03/10",
          "17/10"
        ],
        "title": "Phần B: Chuẩn mực VSA - Lập Kế hoạch, Đánh giá Rủi ro & Xác định Mức trọng yếu",
        "pdfPages": "Trang 148 - 230 (Chuyên đề 5)",
        "overview": "Quy trình lập kế hoạch kiểm toán (VSA 300); tìm hiểu đơn vị và đánh giá rủi ro có sai sót trọng yếu (VSA 315); mô hình rủi ro kiểm toán; xác định mức trọng yếu tổng thể, mức trọng yếu thực hiện và ngưỡng sai sót không đáng kể (VSA 320).",
        "keyTakeaways": [
          "Mô hình Rủi ro Kiểm toán (Audit Risk Model - VSA 200 & 315):",
          "AR = RoMM * DR = IR * CR * DR.",
          "- Rủi ro kiểm toán (AR - Audit Risk): Rủi ro KTV đưa ra ý kiến kiểm toán không thích hợp khi BCTC còn có những sai sót trọng yếu (KTV thường duy trì AR ở mức thấp chấp nhận được, ví dụ 5%).",
          "- Rủi ro có sai sót trọng yếu (RoMM): Rủi ro BCTC tồn tại sai sót trọng yếu trước khi kiểm toán. Tồn tại ở 2 cấp độ: Cấp độ tổng thể BCTC và Cấp độ cơ sở dẫn liệu. Gồm 2 thành phần:",
          "  + Rủi ro tiềm tàng (IR - Inherent Risk): Rủi ro tiềm ẩn do bản chất của khoản mục hoặc môi trường kinh doanh (ví dụ: tiền mặt dễ mất cắp; hàng công nghệ dễ lỗi thời; các ước tính kế toán phức tạp có tính chủ quan cao).",
          "  + Rủi ro kiểm soát (CR - Control Risk): Rủi ro hệ thống kiểm soát nội bộ (KSNB) của đơn vị không ngăn chặn hoặc không phát hiện và sửa chữa kịp thời các sai sót.",
          "- Rủi ro phát hiện (DR - Detection Risk): Rủi ro các thủ tục kiểm toán do KTV thực hiện không phát hiện được sai sót trọng yếu. Lưu ý: DR là rủi ro DUY NHẤT mà KTV có thể kiểm soát và thay đổi được. Khi RoMM được đánh giá là CAO thì KTV phải thiết lập DR ở mức THẤP (tăng phạm vi kiểm toán, tăng cỡ mẫu, chọn KTV có kinh nghiệm hơn, thực hiện thủ tục gần hoặc tại ngày kết thúc kỳ kế toán).",
          "Mức trọng yếu trong kiểm toán (VSA 320):",
          "- Mức trọng yếu tổng thể (Overall Materiality): Sai sót được coi là trọng yếu nếu việc sai sót đó có thể ảnh hưởng đến quyết định kinh tế của người sử dụng BCTC. Xác định bằng Benchmark * % (ví dụ: 5% - 10% LNTT; 0.5% - 1% Doanh thu; 1% - 2% Tổng tài sản).",
          "- Mức trọng yếu thực hiện (Performance Materiality - PM): Giá trị do KTV ấn định ở mức THẤP HƠN mức trọng yếu tổng thể (thường từ 50% đến 75% mức trọng yếu tổng thể) nhằm giảm thiểu khả năng tổng hợp các sai sót nhỏ không được sửa vượt quá mức trọng yếu tổng thể.",
          "- Ngưỡng sai sót có thể bỏ qua (Clearly Trivial Threshold): Mức sai sót nhỏ đến mức không cần tổng hợp (thường khoảng 3% - 5% PM)."
        ],
        "formulas": [
          {
            "name": "Mô hình rủi ro kiểm toán",
            "expr": "AR = RoMM * DR = IR * CR * DR"
          },
          {
            "name": "Rủi ro phát hiện cần đạt",
            "expr": "DR = AR / (IR * CR)"
          }
        ],
        "pitfalls": [
          "BẪY QUAN HỆ GIỮA RoMM VÀ DR: RoMM và DR có mối quan hệ NGHỊCH BIẾN! Khi đánh giá RoMM càng cao thì KTV phải chấp nhận mức DR càng thấp -> Phải làm nhiều thủ tục kiểm toán hơn, thu thập nhiều bằng chứng hơn.",
          "BẪY MỨC TRỌNG YẾU: Mức trọng yếu và bằng chứng kiểm toán có mối quan hệ NGHỊCH BIẾN. Mức trọng yếu càng thấp thì khối lượng công việc và số lượng bằng chứng kiểm toán cần thu thập càng LỚN!"
        ],
        "flashcards": [
          {
            "q": "Trong mô hình rủi ro kiểm toán AR = IR * CR * DR, thành phần rủi ro nào là do kiểm toán viên kiểm soát được?",
            "a": "Rủi ro phát hiện (Detection Risk - DR). KTV kiểm soát DR thông qua việc thiết kế nội dung, lịch trình và phạm vi các thủ tục kiểm toán."
          },
          {
            "q": "Mức trọng yếu thực hiện (Performance Materiality) có mục đích gì?",
            "a": "Được thiết lập thấp hơn mức trọng yếu tổng thể để hạn chế rủi ro tổng hợp của các sai sót không được điều chỉnh và không được phát hiện vượt quá mức trọng yếu của toàn bộ BCTC."
          }
        ]
      },
      "C": {
        "part": "C",
        "milestone": "75% đề cương",
        "days": [
          "11/10",
          "19/10"
        ],
        "title": "Phần C: Chuẩn mực VSA - Bằng chứng Kiểm toán, Cơ sở Dẫn liệu & Thủ tục Kiểm toán",
        "pdfPages": "Trang 231 - 319 (Chuyên đề 5)",
        "overview": "Các cơ sở dẫn liệu (Assertions) theo VSA 315; tính thích hợp và đầy đủ của bằng chứng kiểm toán (VSA 500); thử nghiệm kiểm soát (TOC) và thử nghiệm cơ bản (ST); thủ tục gửi thư xác nhận (VSA 505) và thủ tục phân tích (VSA 520).",
        "keyTakeaways": [
          "Cơ sở dẫn liệu (Assertions - VSA 315):",
          "- Đối với các nhóm giao dịch và sự kiện trong kỳ: Tính hiện hữu/phát sinh (Occurrence), Tính đầy đủ (Completeness), Tính chính xác (Accuracy), Đúng kỳ (Cut-off), Phân loại (Classification).",
          "- Đối với số dư các tài khoản cuối kỳ: Sự hiện hữu (Existence), Quyền và nghĩa vụ (Rights and Obligations), Tính đầy đủ (Completeness), Đánh giá và phân bổ (Valuation and Allocation).",
          "Bằng chứng kiểm toán (VSA 500):",
          "- Tính đầy đủ (Sufficiency): Thước đo về số lượng bằng chứng kiểm toán.",
          "- Tính thích hợp (Appropriateness): Thước đo về chất lượng bằng chứng (độ tin cậy và sự phù hợp).",
          "- Thứ bậc độ tin cậy của bằng chứng: Bằng chứng từ bên ngoài độc lập > Bằng chứng nội bộ đơn vị; Bằng chứng nội bộ khi có KSNB tốt > KSNB yếu kém; Bằng chứng KTV trực tiếp thu thập (kiểm kê, quan sát) > Bằng chứng gián tiếp do đơn vị cung cấp; Bằng chứng dạng văn bản/điện tử > Bằng chứng lời nói; Bản gốc > Bản photo/scan.",
          "7 Thủ tục thu thập bằng chứng kiểm toán: 1. Kiểm tra tài liệu; 2. Kiểm tra vật chất (Kiểm kê); 3. Quan sát; 4. Phỏng vấn; 5. Xác nhận từ bên ngoài (Thư xác nhận); 6. Tính toán lại; 7. Thủ tục phân tích.",
          "Thư xác nhận từ bên ngoài (VSA 505):",
          "- Thư xác nhận dạng khẳng định: Người nhận bắt buộc phải trả lời trực tiếp cho KTV (đồng ý hoặc không đồng ý số dư). Cho bằng chứng có độ tin cậy cao nhất.",
          "- Thư xác nhận dạng phủ định: Người nhận chỉ trả lời nếu không đồng ý với số dư. Chỉ áp dụng khi: RoMM thấp, KSNB tốt, số dư gồm nhiều khoản nhỏ, tỷ lệ sai sót dự kiến rất thấp.",
          "Thử nghiệm kiểm soát (Test of Controls - TOC): Đánh giá tính hữu hiệu trong thiết kế và vận hành của hệ thống kiểm soát nội bộ. KTV chỉ thực hiện TOC khi có ý định dựa vào sự hữu hiệu của KSNB.",
          "Thử nghiệm cơ bản (Substantive Tests - ST): Thủ tục kiểm toán nhằm phát hiện các sai sót trọng yếu ở cấp độ cơ sở dẫn liệu (gồm Thủ tục phân tích cơ bản và Kiểm tra chi tiết nghiệp vụ, số dư)."
        ],
        "pitfalls": [
          "BẪY HƯỚNG KIỂM TRA ĐẦY ĐỦ VS HIỆN HỮU: Để kiểm tra tính HIỆN HỮU (Occurrence/Existence) của doanh thu/tài sản -> Chọn mẫu từ Sổ sách kế toán đối chiếu ngược về Chứng từ gốc. Để kiểm tra tính ĐẦY ĐỦ (Completeness) của chi phí/nợ phải trả -> Chọn mẫu từ Chứng từ gốc (Phiếu giao hàng, Biên bản nghiệm thu) đối chiếu xuôi vào Sổ sách kế toán!",
          "BẪY THƯ XÁC NHẬN PHỦ ĐỊNH KHÔNG TRẢ LỜI: Nếu gửi thư xác nhận dạng khẳng định mà không nhận được phản hồi -> Phải thực hiện THỦ TỤC THAY THẾ (kiểm tra chứng từ thu tiền sau ngày kết thúc niên độ). Nếu gửi dạng phủ định mà không nhận được phản hồi thì coi như người nhận đồng ý với số dư."
        ],
        "flashcards": [
          {
            "q": "Để kiểm tra cơ sở dẫn liệu 'Tính đầy đủ' của nợ phải trả người bán, KTV phải chọn mẫu kiểm tra theo hướng nào?",
            "a": "Chọn mẫu từ các chứng từ gốc độc lập (như Phiếu nhập kho, Biên bản nghiệm thu, Hóa đơn của người bán) rồi đối chiếu vào Sổ nhật ký mua hàng và Sổ cái để xem có bị bỏ sót không."
          },
          {
            "q": "Bằng chứng nào có độ tin cậy cao hơn: Thư xác nhận số dư tài khoản ngân hàng gửi trực tiếp cho KTV hay Giấy báo có do khách hàng cung cấp?",
            "a": "Thư xác nhận ngân hàng gửi trực tiếp cho KTV có độ tin cậy cao hơn vì bắt nguồn từ bên thứ ba độc lập và gửi trực tiếp cho KTV."
          }
        ]
      },
      "D": {
        "part": "D",
        "milestone": "100% đề cương",
        "days": [
          "18/10",
          "21/10"
        ],
        "title": "Phần D: Báo cáo Kiểm toán (VSA 700, 705, 706) & Các Khoản mục Trọng yếu",
        "pdfPages": "Trang 320 - 356 (Chuyên đề 5)",
        "overview": "Cấu trúc Báo cáo kiểm toán chuẩn mực (VSA 700); phân biệt 4 loại ý kiến kiểm toán (VSA 705); đoạn Vấn đề cần nhấn mạnh và Vấn đề khác (VSA 706); thực hành kiểm toán các khoản mục chu trình Bán hàng - Thu tiền, Mua hàng - Thanh toán và Hàng tồn kho.",
        "keyTakeaways": [
          "4 Loại Ý kiến Kiểm toán trên Báo cáo Kiểm toán:",
          "1. Ý kiến Chấp nhận toàn phần (Unmodified Opinion - Báo cáo 'sạch'): BCTC đã được lập và trình bày trung thực, hợp lý trên các khía cạnh trọng yếu phù hợp với khuôn khổ kế toán áp dụng.",
          "2. Ý kiến Ngoại trừ (Qualified Opinion): Được đưa ra khi:",
          "  - Dựa trên bằng chứng thu thập được, KTV kết luận các sai sót là trọng yếu nhưng KHÔNG LAN TỎA (Material but not pervasive); HOẶC",
          "  - KTV không thể thu thập đầy đủ bằng chứng kiểm toán thích hợp, nhưng ảnh hưởng có thể có là trọng yếu nhưng KHÔNG LAN TỎA.",
          "3. Ý kiến Trái ngược (Adverse Opinion): Được đưa ra khi dựa trên bằng chứng thu thập được, KTV kết luận các sai sót là VỪA TRỌNG YẾU VỪA LAN TỎA (Material and Pervasive) đối với toàn bộ BCTC (BCTC bị bóp méo nghiêm trọng).",
          "4. Từ chối đưa ra ý kiến (Disclaimer of Opinion): Được đưa ra khi KTV không thể thu thập đầy đủ bằng chứng kiểm toán thích hợp do bị giới hạn phạm vi kiểm toán nghiêm trọng, và KTV kết luận ảnh hưởng có thể có của các sai sót chưa được phát hiện là VỪA TRỌNG YẾU VỪA LAN TỎA.",
          "Đoạn 'Vấn đề cần nhấn mạnh' (Emphasis of Matter - VSA 706):",
          "- Mục đích: Thu hút sự chú ý của người đọc vào một vấn đề đã được trình bày hoặc thuyết minh thích hợp trong BCTC mà theo xét đoán của KTV là cơ bản để người sử dụng hiểu được BCTC.",
          "- Ví dụ: Sự kiện không chắc chắn liên quan đến vụ kiện tụng trọng yếu chưa phán quyết; Sự kiện thiên tai hỏa hoạn xảy ra sau ngày kết thúc niên độ; Áp dụng chuẩn mực kế toán mới sớm hơn quy định.",
          "- LƯU Ý SỐNG CÒN: Đoạn 'Vấn đề cần nhấn mạnh' KHÔNG LÀM THAY ĐỔI ý kiến kiểm toán!",
          "Đoạn 'Vấn đề khác' (Other Matter - VSA 706): Trình bày vấn đề không được phản ánh trong BCTC nhưng liên quan đến trách nhiệm của KTV hoặc việc hiểu về báo cáo kiểm toán (ví dụ: BCTC năm trước do công ty kiểm toán khác kiểm toán)."
        ],
        "pitfalls": [
          "BẪY PHÂN BIỆT Ý KIẾN TRÁI NGƯỢC VS TỪ CHỐI ĐƯA RA Ý KIẾN: Cả 2 đều áp dụng khi sai sót 'Vừa trọng yếu vừa lan tỏa'. Khác biệt là: Ý kiến trái ngược là do KTV ĐÃ THU THẬP ĐƯỢC BẰNG CHỨNG chứng minh BCTC sai nghiêm trọng; còn Từ chối đưa ra ý kiến là do KTV KHÔNG THU THẬP ĐƯỢC BẰNG CHỨNG do bị giới hạn phạm vi!",
          "BẪY VẤN ĐỀ CẦN NHẤN MẠNH: Thí sinh hay nhầm đoạn Emphasis of Matter là một dạng ý kiến kiểm toán không phải chấp nhận toàn phần -> SAI! Vấn đề cần nhấn mạnh chỉ được đưa ra khi BCTC đã thuyết minh đầy đủ, và ý kiến kiểm toán vẫn là CHẤP NHẬN TOÀN PHẦN (hoặc ngoại trừ vì lý do khác)."
        ],
        "flashcards": [
          {
            "q": "Khi BCTC có sai sót trọng yếu nhưng không lan tỏa đối với tổng thể BCTC thì KTV đưa ra loại ý kiến nào?",
            "a": "Ý kiến kiểm toán ngoại trừ (Qualified Opinion)."
          },
          {
            "q": "Sự khác biệt giữa Ý kiến Trái ngược (Adverse) và Từ chối đưa ra ý kiến (Disclaimer)?",
            "a": "Ý kiến trái ngược: KTV đã có bằng chứng về sai sót vừa trọng yếu vừa lan tỏa. Từ chối ý kiến: KTV bị giới hạn phạm vi kiểm toán nên không thu thập được bằng chứng mà ảnh hưởng có thể vừa trọng yếu vừa lan tỏa."
          },
          {
            "q": "Đoạn 'Vấn đề cần nhấn mạnh' (Emphasis of Matter) có làm thay đổi ý kiến kiểm toán không?",
            "a": "Không. Ý kiến kiểm toán không bị thay đổi vì vấn đề này đã được đơn vị trình bày và thuyết minh thích hợp trong BCTC."
          }
        ]
      }
    }
  },
  "PT": {
    "subjectId": "PT",
    "subjectName": "Phân tích hoạt động tài chính nâng cao",
    "officialPdf": "CD6_Phan_Tich_HDTC_2026.pdf",
    "parts": {
      "A": {
        "part": "A",
        "milestone": "25% đề cương",
        "days": [
          "28/09",
          "12/10"
        ],
        "title": "Phần A: Tổng quan Phân tích HĐTC & Hệ thống Phương pháp Phân tích",
        "pdfPages": "Trang 1 - 28 (Chuyên đề 6)",
        "overview": "Mục tiêu phân tích tài chính; hệ thống báo cáo kế toán phục vụ phân tích; các phương pháp phân tích: so sánh, thay thế liên hoàn, phương pháp số chênh lệch và phân tích dự đoán.",
        "keyTakeaways": [
          "Ý nghĩa và mục tiêu phân tích HĐTC: Giúp chủ sở hữu, nhà đầu tư, ngân hàng và ban quản lý đánh giá sức khỏe tài chính, hiệu quả kinh doanh và rủi ro tài chính của doanh nghiệp.",
          "Phương pháp So sánh: So sánh bằng số tuyệt đối (đánh giá quy mô biến động) và số tương đối (tỷ lệ tăng trưởng, tỷ trọng cơ cấu); Điều kiện so sánh: Phải thống nhất về thời gian, không gian, phương pháp tính toán và đơn vị đo lường.",
          "Phương pháp Thay thế liên hoàn: Áp dụng khi chỉ tiêu phân tích là tích số hoặc thương số của các nhân tố (Q = a * b * c). Nguyên tắc: Xác định mức độ ảnh hưởng của từng nhân tố theo trình tự sắp xếp cố định (nhân tố số lượng trước, nhân tố chất lượng sau).",
          "Phương pháp Số chênh lệch: Dạng rút gọn của thay thế liên hoàn khi các nhân tố có mối quan hệ tích số. Ảnh hưởng của nhân tố thứ k = Chênh lệch của nhân tố k * Giá trị thực tế của các nhân tố đứng trước * Giá trị kỳ gốc của các nhân tố đứng sau."
        ],
        "formulas": [
          {
            "name": "Thay thế liên hoàn (Q = a*b*c)",
            "expr": "Delta_Q(a) = (a1 - a0)*b0*c0; Delta_Q(b) = a1*(b1 - b0)*c0; Delta_Q(c) = a1*b1*(c1 - c0)"
          }
        ],
        "pitfalls": [
          "BẪY THỨ TỰ SẮP XẾP NHÂN TỐ: Trong phương pháp thay thế liên hoàn, nếu thay đổi trật tự sắp xếp nhân tố thì kết quả ảnh hưởng của từng nhân tố sẽ bị sai lệch. Luôn luôn đặt nhân tố số lượng (quy mô) trước nhân tố chất lượng!"
        ],
        "flashcards": [
          {
            "q": "Nguyên tắc cơ bản khi áp dụng phương pháp thay thế liên hoàn để phân tích nhân tố là gì?",
            "a": "Xác định rõ mối quan hệ toán học giữa các nhân tố với chỉ tiêu phân tích, sắp xếp các nhân tố theo trật tự logic (số lượng trước, chất lượng sau) và lần lượt thay thế giá trị kỳ gốc bằng giá trị kỳ phân tích."
          }
        ]
      },
      "B": {
        "part": "B",
        "milestone": "50% đề cương",
        "days": [
          "04/10",
          "18/10"
        ],
        "title": "Phần B: Phân tích Quy mô, Cơ cấu & Tình hình Cân bằng Tài chính (NWC, WCR)",
        "pdfPages": "Trang 29 - 77 (Chuyên đề 6)",
        "overview": "Phân tích biến động quy mô và tỷ trọng cơ cấu tài sản, nguồn vốn; phân tích mối quan hệ cân đối tài sản và nguồn vốn; các chỉ tiêu cân bằng tài chính căn bản: Vốn lưu động ròng (NWC), Nhu cầu vốn lưu động (WCR) và Ngân quỹ ròng (NT).",
        "keyTakeaways": [
          "Phân tích cơ cấu tài sản và nguồn vốn:",
          "- Hệ số nợ (D/A) = Nợ phải trả / Tổng nguồn vốn; Hệ số tự tài trợ (E/A) = Vốn CSH / Tổng nguồn vốn. D/A + E/A = 1.",
          "- Hệ số nợ trên vốn CSH (D/E) = Nợ phải trả / Vốn CSH (đo lường mức độ đòn bẩy tài chính).",
          "Phân tích Cân bằng tài chính (Trọng tâm thi KTV):",
          "1. Vốn lưu động ròng (Net Working Capital - NWC):",
          "   NWC = Nguồn vốn dài hạn - Tài sản dài hạn = (Vốn CSH + Nợ dài hạn) - Tài sản dài hạn.",
          "   Cách tính thứ hai: NWC = Tài sản ngắn hạn - Nợ ngắn hạn.",
          "   - NWC > 0: Nguồn vốn dài hạn tài trợ cho toàn bộ TSDH và còn dư để tài trợ một phần TSNH (An toàn tài chính cao).",
          "   - NWC < 0: Nợ ngắn hạn phải tài trợ cho cả Tài sản dài hạn (Rủi ro thanh khoản rất cao).",
          "2. Nhu cầu vốn lưu động (Working Capital Requirement - WCR):",
          "   WCR = (Hàng tồn kho + Khoản phải thu ngắn hạn) - Nợ ngắn hạn phi tài chính (Phải trả người bán, nợ lương, thuế...).",
          "3. Ngân quỹ ròng (Net Treasury - NT):",
          "   NT = NWC - WCR = Tiền và tương đương tiền - Vay ngắn hạn ngân hàng.",
          "   - NT > 0: Doanh nghiệp thặng dư ngân quỹ, chủ động thanh toán.",
          "   - NT < 0: Doanh nghiệp bị thiếu hụt ngân quỹ, phải phụ thuộc vào vay ngắn hạn ngân hàng để bù đắp."
        ],
        "formulas": [
          {
            "name": "Vốn lưu động ròng (NWC)",
            "expr": "NWC = Nguồn vốn dài hạn - TSDH = TSNH - Nợ ngắn hạn"
          },
          {
            "name": "Nhu cầu vốn lưu động (WCR)",
            "expr": "WCR = (HTK + Phải thu ngắn hạn) - Nợ ngắn hạn chiếm dụng"
          },
          {
            "name": "Ngân quỹ ròng (NT)",
            "expr": "NT = NWC - WCR = Tiền - Vay ngắn hạn"
          }
        ],
        "pitfalls": [
          "BẪY TÍNH NWC: NWC tính từ TSNH trừ Nợ ngắn hạn, hoặc Nguồn vốn dài hạn trừ TSDH. Cả hai cách phải ra kết quả bằng nhau. Nếu không bằng nhau là bạn đã nhầm lẫn khoản mục!",
          "BẪY WCR: Nợ ngắn hạn phi tài chính (chiếm dụng) KHÔNG bao gồm vay ngắn hạn ngân hàng!"
        ],
        "flashcards": [
          {
            "q": "Nếu Vốn lưu động ròng (NWC) âm (< 0), điều đó phản ánh trạng thái tài chính nào của doanh nghiệp?",
            "a": "Doanh nghiệp đang sử dụng một phần nguồn vốn ngắn hạn (nợ ngắn hạn) để tài trợ cho tài sản dài hạn. Đây là trạng thái tài chính mạo hiểm, rủi ro thanh khoản cao."
          },
          {
            "q": "Mối quan hệ giữa NWC, WCR và Ngân quỹ ròng NT được xác định bằng công thức nào?",
            "a": "NT = NWC - WCR."
          }
        ]
      },
      "C": {
        "part": "C",
        "milestone": "75% đề cương",
        "days": [
          "12/10",
          "20/10"
        ],
        "title": "Phần C: Phân tích Khả năng Thanh toán & Phân tích Dòng tiền LCTT",
        "pdfPages": "Trang 78 - 111 (Chuyên đề 6)",
        "overview": "Hệ thống các chỉ tiêu thanh toán (Tổng quát, Hiện hành, Nhanh, Tức thời, Khả năng trả lãi); phân tích chất lượng lợi nhuận và khả năng tạo tiền từ Báo cáo lưu chuyển tiền tệ.",
        "keyTakeaways": [
          "Hệ thống chỉ số đo lường khả năng thanh toán:",
          "1. Hệ số khả năng thanh toán tổng quát = Tổng tài sản / Tổng nợ phải trả. (> 1 đảm bảo khả năng trả nợ).",
          "2. Hệ số khả năng thanh toán hiện hành (Current Ratio - CR) = Tài sản ngắn hạn / Nợ ngắn hạn. (Chuẩn mực thông thường >= 1.5 - 2.0).",
          "3. Hệ số khả năng thanh toán nhanh (Quick Ratio - QR) = (Tài sản ngắn hạn - Hàng tồn kho) / Nợ ngắn hạn = (Tiền + Đầu tư ngắn hạn + Phải thu) / Nợ ngắn hạn. (Chuẩn mực >= 0.8 - 1.0).",
          "4. Hệ số khả năng thanh toán tức thời (Cash Ratio) = (Tiền và các khoản tương đương tiền) / Nợ ngắn hạn. (Phản ánh năng lực thanh toán ngay lập tức các khoản nợ đến hạn).",
          "5. Hệ số khả năng thanh toán lãi vay (Interest Coverage Ratio - ICR) = EBIT / Chi phí lãi vay I. (> 1 đảm bảo khả năng trả lãi; càng cao rủi ro phá sản càng thấp).",
          "Phân tích Báo cáo Lưu chuyển tiền tệ:",
          "- 3 Dòng tiền: Dòng tiền hoạt động kinh doanh (OCF), Dòng tiền hoạt động đầu tư (ICF), Dòng tiền hoạt động tài chính (FCF).",
          "- Doanh nghiệp lành mạnh, tăng trưởng bền vững thường có: OCF > 0; ICF < 0 (tiếp tục đầu tư mở rộng TSCĐ); FCF có thể âm hoặc dương (trả nợ vay, trả cổ tức).",
          "- Tỷ lệ chất lượng lợi nhuận = Dòng tiền thuần từ HĐKD (OCF) / Lợi nhuận sau thuế. Nếu tỷ lệ này < 1 trong nhiều năm liên tục, doanh nghiệp có nguy cơ ghi nhận doanh thu ảo, lợi nhuận nằm trên giấy tờ chưa thu được tiền thực tế."
        ],
        "formulas": [
          {
            "name": "Current Ratio (Thanh toán hiện hành)",
            "expr": "CR = Tài sản ngắn hạn / Nợ ngắn hạn"
          },
          {
            "name": "Quick Ratio (Thanh toán nhanh)",
            "expr": "QR = (TSNH - Hàng tồn kho) / Nợ ngắn hạn"
          },
          {
            "name": "Interest Coverage Ratio (Thanh toán lãi vay)",
            "expr": "ICR = EBIT / Chi phí lãi vay I"
          }
        ],
        "pitfalls": [
          "BẪY HÀNG TỒN KHO TRONG QUICK RATIO: Phải loại trừ toàn bộ Hàng tồn kho (và chi phí trả trước ngắn hạn) ra khỏi TSNH vì HTK có tính thanh khoản thấp nhất và có thể bị ứ đọng, hỏng hóc!",
          "BẪY LÃI TRƯỚC THUẾ VÀ LÃI VAY (EBIT): Khi tính ICR, tử số phải là EBIT (Lợi nhuận trước thuế + Chi phí lãi vay), KHÔNG ĐƯỢC lấy Lợi nhuận sau thuế hay Lợi nhuận gộp!"
        ],
        "flashcards": [
          {
            "q": "Tại sao khi tính hệ số thanh toán nhanh (Quick Ratio) phải loại trừ hàng tồn kho?",
            "a": "Vì hàng tồn kho là tài sản có tính thanh khoản thấp nhất trong tài sản ngắn hạn, cần thời gian để tiêu thụ và chuyển đổi thành tiền, đồng thời có rủi ro giảm giá hoặc lỗi thời."
          },
          {
            "q": "Dấu hiệu nào trên Báo cáo LCTT cho thấy chất lượng lợi nhuận của doanh nghiệp đang ở mức thấp?",
            "a": "Lợi nhuận sau thuế dương rất cao nhưng Dòng tiền thuần từ hoạt động kinh doanh (OCF) lại liên tục âm hoặc thấp hơn nhiều so với LNST."
          }
        ]
      },
      "D": {
        "part": "D",
        "milestone": "100% đề cương",
        "days": [
          "19/10",
          "21/10"
        ],
        "title": "Phần D: Hiệu suất Hoạt động, Mô hình DuPont & Dự báo Rủi ro Tài chính",
        "pdfPages": "Trang 112 - 150 (Chuyên đề 6)",
        "overview": "Các chỉ số vòng quay tài sản (Hàng tồn kho, Phải thu, Phải trả, Chu kỳ tiền mặt CCC); phân tích khả năng sinh lời (ROA, ROE, ROS) và Mô hình DuPont 3 nhân tố, 5 nhân tố; nhận diện và dự báo rủi ro kiệt quệ tài chính.",
        "keyTakeaways": [
          "Phân tích Hiệu suất hoạt động (Vòng quay tài sản):",
          "- Vòng quay hàng tồn kho (ITO) = Giá vốn hàng bán / Hàng tồn kho bình quân; Số ngày 1 vòng quay HTK (DIO) = 360 / ITO.",
          "- Vòng quay khoản phải thu (RTO) = Doanh thu thuần / Phải thu khách hàng bình quân; Kỳ thu tiền bình quân (DSO) = 360 / RTO.",
          "- Vòng quay khoản phải trả (PTO) = Doanh số mua chịu (hoặc GVHB) / Phải trả người bán BQ; Kỳ trả tiền bình quân (DPO) = 360 / PTO.",
          "- Chu kỳ chuyển đổi tiền mặt (Cash Conversion Cycle - CCC) = DIO + DSO - DPO. (CCC càng ngắn hiệu quả quản trị vốn lưu động càng cao).",
          "- Vòng quay tổng tài sản (ATO) = Doanh thu thuần / Tổng tài sản bình quân.",
          "Phân tích Khả năng sinh lời và Mô hình DuPont (Trọng tâm đề thi KTV hàng năm):",
          "1. Tỷ suất sinh lời trên doanh thu (ROS) = Lợi nhuận sau thuế / Doanh thu thuần.",
          "2. Tỷ suất sinh lời trên tổng tài sản (ROA) = Lợi nhuận sau thuế / Tổng tài sản bình quân = ROS * ATO.",
          "3. Tỷ suất sinh lời trên vốn chủ sở hữu (ROE) - Mô hình DuPont 3 nhân tố:",
          "   ROE = (LNST / Doanh thu) * (Doanh thu / Tổng tài sản) * (Tổng tài sản / Vốn CSH)",
          "   ROE = Tỷ suất lợi nhuận ròng (ROS) * Vòng quay tổng tài sản (ATO) * Đòn bẩy tài chính (FL).",
          "   - ROS: Đo lường hiệu quả quản lý chi phí và chiến lược giá bán.",
          "   - ATO: Đo lường hiệu suất sử dụng tài sản tạo ra doanh thu.",
          "   - FL (Equity Multiplier): Đo lường mức độ sử dụng đòn bẩy nợ vay để khuếch đại tỷ suất sinh lời cho cổ đông.",
          "Mô hình DuPont 5 nhân tố: ROE = (LNST / EBT) * (EBT / EBIT) * (EBIT / Doanh thu) * (Doanh thu / Tổng tài sản) * (Tổng tài sản / Vốn CSH). Phản ánh gánh nặng thuế, gánh nặng lãi vay, biên lợi nhuận hoạt động, vòng quay tài sản và đòn bẩy tài chính."
        ],
        "formulas": [
          {
            "name": "Chu kỳ chuyển đổi tiền (CCC)",
            "expr": "CCC = DIO + DSO - DPO"
          },
          {
            "name": "ROA",
            "expr": "ROA = ROS * ATO = (LNST / Doanh thu) * (Doanh thu / Tổng TS)"
          },
          {
            "name": "Mô hình DuPont 3 nhân tố",
            "expr": "ROE = ROS * ATO * FL = (LNST/Doanh thu) * (Doanh thu/Tổng TS) * (Tổng TS/Vốn CSH)"
          }
        ],
        "pitfalls": [
          "BẪY TỬ SỐ VÒNG QUAY HÀNG TỒN KHO: Tử số của Vòng quay HTK BẮT BUỘC là Giá vốn hàng bán (COGS), KHÔNG ĐƯỢC lấy Doanh thu thuần!",
          "BẪY TỔNG TÀI SẢN VÀ VỐN CSH BÌNH QUÂN: Trong các chỉ tiêu ROA, ROE, ATO, mẫu số phải là GIÁ TRỊ BÌNH QUÂN = (Đầu năm + Cuối năm) / 2, không lấy riêng số cuối năm trừ khi đề bài yêu cầu cụ thể!"
        ],
        "flashcards": [
          {
            "q": "3 nhân tố cấu thành nên Tỷ suất sinh lời trên vốn CSH (ROE) trong mô hình DuPont 3 bước là gì?",
            "a": "1. Tỷ suất lợi nhuận ròng trên doanh thu (ROS); 2. Vòng quay tổng tài sản (ATO); 3. Hệ số đòn bẩy tài chính (Hệ số nhân vốn CSH = Tổng tài sản / Vốn CSH)."
          },
          {
            "q": "Công thức tính Chu kỳ chuyển đổi tiền mặt (Cash Conversion Cycle - CCC)?",
            "a": "CCC = Số ngày tồn kho bình quân (DIO) + Kỳ thu tiền bình quân (DSO) - Kỳ trả tiền bình quân (DPO)."
          }
        ]
      }
    }
  },
  "TA": {
    "subjectId": "TA",
    "subjectName": "Ngoại ngữ (Tiếng Anh chuyên ngành)",
    "officialPdf": "CD7_Tieng_Anh_2026.pdf",
    "parts": {
      "A": {
        "part": "A",
        "milestone": "25% đề cương",
        "days": [
          "Lý thuyết chung"
        ],
        "title": "Phần A: Cấu trúc Đề thi & Thuật ngữ Kế toán Căn bản (Accounting Fundamentals)",
        "pdfPages": "Trang 1 - 10 (Chuyên đề 7)",
        "overview": "Nắm vững dạng thức đề thi Tiếng Anh trình độ C theo Chuyên đề 7 Bộ Tài chính (Part I: Reading 40 điểm; Part II: Writing 40 điểm; Multiple choice); từ vựng chuyên ngành báo cáo tài chính.",
        "keyTakeaways": [
          "Dạng thức đề thi Tiếng Anh KTV Bộ Tài chính: Thời gian thi 120 phút. Gồm 2 phần chính: Đọc hiểu (Reading) và Viết (Writing/Translation).",
          "Bảng từ vựng thuật ngữ Báo cáo tài chính (Statement of Financial Position):",
          "- Assets: Current assets (Cash and cash equivalents, Accounts receivable, Inventories, Short-term prepayments); Non-current assets (Property, plant and equipment - PPE, Intangible assets, Investment property, Long-term financial investments).",
          "- Liabilities: Current liabilities (Accounts payable, Short-term borrowings, Accrued expenses, Taxes payable); Non-current liabilities (Long-term borrowings, Bonds issued, Deferred tax liabilities).",
          "- Equity: Share capital, Share premium, Retained earnings, Other reserves.",
          "- Accounting Equation: Assets = Liabilities + Equity."
        ],
        "flashcards": [
          {
            "q": "What is the primary English term for 'Tài sản cố định hữu hình'?",
            "a": "Property, Plant and Equipment (PPE) hoặc Tangible Fixed Assets."
          },
          {
            "q": "Translate into Vietnamese: 'Accounts Payable' and 'Accounts Receivable'?",
            "a": "Accounts Payable = Phải trả người bán (Nợ phải trả); Accounts Receivable = Phải thu khách hàng (Tài sản)."
          }
        ]
      },
      "B": {
        "part": "B",
        "milestone": "50% đề cương",
        "days": [
          "Lý thuyết chung"
        ],
        "title": "Phần B: Thuật ngữ Báo cáo Kết quả KD & Lưu chuyển Tiền tệ (P&L & Cash Flow)",
        "pdfPages": "Trang 11 - 15 (Chuyên đề 7)",
        "overview": "Từ vựng và cấu trúc câu trong Báo cáo thu nhập toàn diện (Income Statement / P&L) và Báo cáo lưu chuyển tiền tệ (Statement of Cash Flows); các cụm từ ngữ pháp hay thi.",
        "keyTakeaways": [
          "Statement of Profit or Loss (Income Statement):",
          "- Revenue / Turnover: Doanh thu bán hàng và cung cấp dịch vụ.",
          "- Cost of Goods Sold (COGS): Giá vốn hàng bán.",
          "- Gross Profit: Lợi nhuận gộp (= Revenue - COGS).",
          "- Operating Expenses: Chi phí hoạt động (Selling expenses, General and Administrative expenses - G&A).",
          "- Operating Profit (EBIT): Lợi nhuận từ hoạt động kinh doanh.",
          "- Finance Income / Finance Costs: Doanh thu tài chính / Chi phí tài chính (Interest expense).",
          "- Profit before Tax (PBT) -> Income Tax Expense -> Profit after Tax (PAT / Net Income).",
          "Statement of Cash Flows:",
          "- Cash flows from operating activities (CFO): Dòng tiền từ hoạt động kinh doanh.",
          "- Cash flows from investing activities (CFI): Dòng tiền từ hoạt động đầu tư.",
          "- Cash flows from financing activities (CFF): Dòng tiền từ hoạt động tài chính."
        ],
        "flashcards": [
          {
            "q": "Translate into English: 'Lợi nhuận gộp' và 'Giá vốn hàng bán'?",
            "a": "Gross Profit and Cost of Goods Sold (COGS)."
          },
          {
            "q": "What does CFO stand for in Statement of Cash Flows?",
            "a": "Cash Flows from Operating activities (Lưu chuyển tiền thuần từ hoạt động kinh doanh)."
          }
        ]
      },
      "C": {
        "part": "C",
        "milestone": "75% đề cương",
        "days": [
          "Lý thuyết chung"
        ],
        "title": "Phần C: Thuật ngữ Kiểm toán & Chuẩn mực Quốc tế (Auditing & IFRS)",
        "pdfPages": "Trang 16 - 20 (Chuyên đề 7)",
        "overview": "Các thuật ngữ kiểm toán theo chuẩn mực quốc tế ISA/VSA; các loại ý kiến kiểm toán bằng tiếng Anh và cấu trúc bài dịch chuyên ngành.",
        "keyTakeaways": [
          "Auditing Terminology:",
          "- True and fair view: Trình bày trung thực và hợp lý.",
          "- Materiality / Material misstatement: Tính trọng yếu / Sai sót trọng yếu.",
          "- Inherent Risk (IR), Control Risk (CR), Detection Risk (DR).",
          "- Audit evidence (Sufficient and appropriate): Bằng chứng kiểm toán đầy đủ và thích hợp.",
          "- Audit opinions: Unmodified opinion (Chấp nhận toàn phần); Qualified opinion (Ngoại trừ); Adverse opinion (Trái ngược); Disclaimer of opinion (Từ chối đưa ra ý kiến).",
          "- Emphasis of Matter paragraph: Đoạn vấn đề cần nhấn mạnh.",
          "- Key Audit Matters (KAM): Các vấn đề kiểm toán quan trọng."
        ],
        "flashcards": [
          {
            "q": "Translate into English: 'Ý kiến kiểm toán ngoại trừ'?",
            "a": "Qualified audit opinion."
          },
          {
            "q": "What is the English phrase for 'Đoạn vấn đề cần nhấn mạnh' in an auditor's report?",
            "a": "Emphasis of Matter paragraph."
          }
        ]
      },
      "D": {
        "part": "D",
        "milestone": "100% đề cương",
        "days": [
          "Lý thuyết chung"
        ],
        "title": "Phần D: Mẫu Đề thi & Lời giải Chi tiết Đề thi Tiếng Anh Trình độ C",
        "pdfPages": "Trang 21 - 25 (Chuyên đề 7)",
        "overview": "Đề thi mẫu trọn vẹn và đáp án giải thích chi tiết trích xuất từ Phần VII Chuyên đề 7 của Bộ Tài chính.",
        "keyTakeaways": [
          "Bí quyết làm bài thi Tiếng Anh trình độ C Bộ Tài chính:",
          "1. Phần trắc nghiệm ngữ pháp: Ưu tiên ôn tập câu bị động (Passive voice), mệnh đề quan hệ (Relative clauses), câu điều kiện (Conditionals) và giới từ đi kèm động từ tài chính.",
          "2. Phần đọc hiểu chuyên ngành: Đọc câu hỏi trước để định vị từ khóa trong đoạn văn; chú ý các từ chỉ sự biến động như increase, decrease, fluctuate, surge, plummet.",
          "3. Phần dịch Việt - Anh: Giữ đúng thuật ngữ chuẩn IFRS/IAS, sử dụng cấu trúc câu đơn giản, rõ ràng, tránh dịch word-by-word."
        ],
        "flashcards": [
          {
            "q": "Translate into Vietnamese: 'The financial statements give a true and fair view of the financial position of the company'?",
            "a": "Báo cáo tài chính phản ánh trung thực và hợp lý tình hình tài chính của công ty."
          }
        ]
      }
    }
  }
};

const EXERCISE_BANK = {
  "sets": [
    {
      "id": "set_a",
      "name": "Bộ đề A (90 phút/môn)",
      "description": "Luyện đề vòng 1 (22/10 - 27/10): Quét toàn bộ kiến thức trọng tâm từng môn."
    },
    {
      "id": "set_b",
      "name": "Bộ đề B (90 phút/môn)",
      "description": "Luyện đề vòng 2 (28/10 - 03/11): Đề phân hóa cao, tình huống nâng cao và bài tập tổng hợp."
    },
    {
      "id": "mixed_1",
      "name": "Đề thi thử Hỗn hợp 1 (120 phút)",
      "description": "Thi thử tổng hợp đợt 1 (05/11): Mô phỏng kỳ thi chính thức với câu hỏi liên môn."
    },
    {
      "id": "mixed_2",
      "name": "Đề thi thử Hỗn hợp 2 (120 phút)",
      "description": "Thi thử tổng hợp đợt 2 (08/11): Tổng duyệt kiến thức và tốc độ làm bài trước ngày thi."
    }
  ],
  "questions": [
    {
      "id": "PL_A_01",
      "subjectId": "PL",
      "set": "set_a",
      "type": "multiple_choice",
      "title": "Thời hạn góp vốn thành lập công ty TNHH",
      "question": "Theo quy định của Luật Doanh nghiệp 2020, các thành viên công ty TNHH hai thành viên trở lên phải góp vốn cho công ty đủ và đúng loại tài sản đã cam kết trong thời hạn nào kể từ ngày được cấp Giấy chứng nhận đăng ký doanh nghiệp?",
      "options": [
        "30 ngày",
        "60 ngày",
        "90 ngày (không kể thời gian vận chuyển, nhập khẩu tài sản góp vốn)",
        "180 ngày"
      ],
      "correctAnswer": 2,
      "explanation": "Theo Khoản 2 Điều 47 Luật Doanh nghiệp 2020: Thành viên phải góp vốn cho công ty đủ và đúng loại tài sản đã cam kết khi đăng ký thành lập doanh nghiệp trong thời hạn 90 ngày kể từ ngày được cấp Giấy chứng nhận đăng ký doanh nghiệp, không kể thời gian thực hiện nhập khẩu, thực hiện thủ tục hành chính để chuyển quyền sở hữu tài sản.",
      "legalBasis": "Khoản 2 Điều 47 Luật Doanh nghiệp 2020",
      "points": 10
    },
    {
      "id": "PL_A_02",
      "subjectId": "PL",
      "set": "set_a",
      "type": "case_study",
      "title": "Tình huống: Mức phạt vi phạm hợp đồng thương mại",
      "question": "Công ty Cổ phần Thương mại Alpha ký hợp đồng mua 500 tấn thép xây dựng của Công ty TNHH Thép Beta với tổng giá trị hợp đồng là 10 tỷ đồng. Trong hợp đồng, hai bên thỏa thuận: 'Nếu bên nào vi phạm nghĩa vụ giao hàng hoặc thanh toán thì phải chịu phạt vi phạm hợp đồng là 15% tổng giá trị hợp đồng và bồi thường toàn bộ thiệt hại thực tế phát sinh'. Đến hạn giao hàng, Beta chỉ giao được 300 tấn thép (trị giá 6 tỷ đồng), còn thiếu 200 tấn thép (trị giá 4 tỷ đồng) khiến Alpha phải mua ngoài với giá cao hơn, thiệt hại thực tế được chứng minh là 500 triệu đồng. Alpha yêu cầu Beta phải nộp phạt 1.5 tỷ đồng (15% của 10 tỷ) và bồi thường thiệt hại 500 triệu đồng. Hãy cho biết yêu cầu đòi phạt của Alpha có căn cứ pháp luật không? Mức phạt tối đa mà Alpha được hưởng là bao nhiêu?",
      "options": [
        "Được phạt 1.5 tỷ đồng theo đúng thỏa thuận hợp đồng tự do cam kết của hai bên",
        "Không được phạt vì vi phạm điều cấm của luật",
        "Chỉ được phạt tối đa 320 triệu đồng (8% của 4 tỷ đồng phần nghĩa vụ bị vi phạm) và được bồi thường 500 triệu đồng",
        "Được phạt tối đa 800 triệu đồng (8% của tổng giá trị hợp đồng 10 tỷ đồng)"
      ],
      "correctAnswer": 2,
      "explanation": "Theo Điều 301 Luật Thương mại 2005: 'Mức phạt đối với vi phạm nghĩa vụ hợp đồng hoặc tổng mức phạt đối với nhiều vi phạm do các bên thoả thuận trong hợp đồng, nhưng không quá 8% giá trị phần nghĩa vụ hợp đồng bị vi phạm, trừ trường hợp quy định tại Điều 266 của Luật này'. Trong tình huống này: Phần nghĩa vụ bị vi phạm là 200 tấn thép chưa giao, trị giá 4 tỷ đồng. Do đó, mức phạt tối đa được pháp luật bảo vệ là: 8% * 4 tỷ = 320 triệu đồng. Thỏa thuận phạt 15% của hai bên bị vô hiệu đối với phần vượt quá 8%. Đồng thời, do hai bên có thỏa thuận cả phạt vi phạm và bồi thường thiệt hại, nên Alpha vừa được nhận tiền phạt 320 triệu đồng, vừa được bồi thường thiệt hại thực tế 500 triệu đồng.",
      "legalBasis": "Điều 301 và Điều 307 Luật Thương mại 2005",
      "points": 25
    },
    {
      "id": "PL_B_01",
      "subjectId": "PL",
      "set": "set_b",
      "type": "multiple_choice",
      "title": "Điều kiện mở thủ tục phục hồi theo Luật Phục hồi, phá sản 2025/2026",
      "question": "Theo Luật Phục hồi, phá sản số 142/2025/QH15, doanh nghiệp được coi là mất khả năng thanh toán khi nào?",
      "options": [
        "Không thực hiện nghĩa vụ thanh toán khoản nợ trong thời hạn 01 tháng kể từ ngày đến hạn",
        "Không thực hiện nghĩa vụ thanh toán khoản nợ trong thời hạn 03 tháng kể từ ngày đến hạn thanh toán",
        "Tổng nợ phải trả lớn hơn tổng tài sản trên Bảng cân đối kế toán",
        "Có số lỗ lũy kế vượt quá 50% vốn điều lệ"
      ],
      "correctAnswer": 1,
      "explanation": "Theo Luật Phục hồi, phá sản mới số 142/2025/QH15: Doanh nghiệp, hợp tác xã mất khả năng thanh toán là doanh nghiệp, hợp tác xã không thực hiện nghĩa vụ thanh toán khoản nợ trong thời hạn 03 tháng kể từ ngày đến hạn thanh toán.",
      "legalBasis": "Luật Phục hồi, phá sản số 142/2025/QH15 (hiệu lực từ 01/03/2026)",
      "points": 10
    },
    {
      "id": "PL_B_02",
      "subjectId": "PL",
      "set": "set_b",
      "type": "case_study",
      "title": "Tình huống: Quyền biểu quyết của cổ đông trong Công ty Cổ phần",
      "question": "Công ty Cổ phần Xây dựng Hòa Bình có vốn điều lệ 100 tỷ đồng, gồm 80 tỷ đồng cổ phần phổ thông, 10 tỷ đồng cổ phần ưu đãi biểu quyết (do 2 cổ đông sáng lập nắm giữ từ năm thứ 2), và 10 tỷ đồng cổ phần ưu đãi cổ tức (do cổ đông tài chính nắm giữ). Tại cuộc họp Đại hội đồng cổ đông thường niên năm thứ 2 thông qua báo cáo tài chính và phương án phân phối lợi nhuận, cổ đông sở hữu cổ phần ưu đãi cổ tức yêu cầu được biểu quyết vì vấn đề này ảnh hưởng trực tiếp đến quyền lợi nhận cổ tức của mình. Yêu cầu của cổ đông này có đúng luật không?",
      "options": [
        "Đúng, vì cổ đông nào cũng có quyền biểu quyết về việc phân phối lợi nhuận",
        "Sai, vì cổ đông sở hữu cổ phần ưu đãi cổ tức không có quyền biểu quyết, dự họp ĐHĐCĐ hoặc đề cử người vào HĐQT",
        "Đúng, nhưng chỉ được tính 50% số phiếu biểu quyết",
        "Tùy thuộc vào quyết định của Chủ tịch Hội đồng quản trị tại phiên họp"
      ],
      "correctAnswer": 1,
      "explanation": "Theo Khoản 3 Điều 117 Luật Doanh nghiệp 2020: Cổ đông sở hữu cổ phần ưu đãi cổ tức KHÔNG CÓ QUYỀN BIỂU QUYẾT, dự họp Đại hội đồng cổ đông, đề cử người vào Hội đồng quản trị và Ban kiểm soát (trừ trường hợp biểu quyết về nghị quyết làm thay đổi bất lợi quyền và nghĩa vụ của cổ đông ưu đãi đó). Do đó, yêu cầu của cổ đông sở hữu cổ phần ưu đãi cổ tức là không có căn cứ pháp luật.",
      "legalBasis": "Điều 117 Luật Doanh nghiệp 2020",
      "points": 25
    },
    {
      "id": "TC_A_01",
      "subjectId": "TC",
      "set": "set_a",
      "type": "calculation",
      "title": "Tính sản lượng hòa vốn kinh tế (Trích Bài tập CD2 trang 117)",
      "question": "Công ty M sản xuất và tiêu thụ sản phẩm K với giá bán chưa thuế GTGT là 200.000 đồng/sản phẩm. Chi phí biến đổi cho một đơn vị sản phẩm là 140.000 đồng/sản phẩm. Tổng chi phí cố định kinh doanh hàng năm (chưa kể chi phí khấu hao TSCĐ) là 300 triệu đồng. Chi phí khấu hao TSCĐ hàng năm là 180 triệu đồng. Hãy tính sản lượng hòa vốn kinh tế (Q_hv) và doanh thu hòa vốn của công ty M?",
      "options": [
        "Q_hv = 5.000 sản phẩm; Doanh thu hòa vốn = 1 tỷ đồng",
        "Q_hv = 8.000 sản phẩm; Doanh thu hòa vốn = 1.6 tỷ đồng",
        "Q_hv = 6.000 sản phẩm; Doanh thu hòa vốn = 1.2 tỷ đồng",
        "Q_hv = 4.000 sản phẩm; Doanh thu hòa vốn = 800 triệu đồng"
      ],
      "correctAnswer": 1,
      "explanation": "Bước 1: Tính tổng chi phí cố định (F) = Chi phí cố định kinh doanh chưa khấu hao + Chi phí khấu hao = 300 triệu + 180 triệu = 480 triệu đồng.\nBước 2: Số dư đảm phí đơn vị (P - v) = 200.000 - 140.000 = 60.000 đồng/sản phẩm.\nBước 3: Sản lượng hòa vốn kinh tế: Q_hv = F / (P - v) = 480.000.000 / 60.000 = 8.000 sản phẩm.\nBước 4: Doanh thu hòa vốn = Q_hv * P = 8.000 * 200.000 = 1.600.000.000 đồng (1.6 tỷ đồng).",
      "legalBasis": "Chuyên đề 2 - Quản trị Tài chính Doanh nghiệp nâng cao (Trang 117-119)",
      "points": 25
    },
    {
      "id": "TC_A_02",
      "subjectId": "TC",
      "set": "set_a",
      "type": "calculation",
      "title": "Định giá Trái phiếu trả lãi định kỳ (Trích Bài tập CD2 trang 121)",
      "question": "Công ty cổ phần An Phát phát hành trái phiếu kỳ hạn 5 năm, mệnh giá 100.000 đồng/trái phiếu, lãi suất danh nghĩa 8%/năm, trả lãi định kỳ 1 năm/lần vào cuối mỗi năm. Tại thời điểm phát hành, tỷ suất sinh lời đòi hỏi của nhà đầu tư trên thị trường là 10%/năm. Hãy xác định giá trị lý thuyết (thị giá) của trái phiếu này tại thời điểm phát hành?",
      "options": [
        "100.000 đồng (Bán theo mệnh giá)",
        "92.418 đồng (Bán chiết khấu)",
        "108.250 đồng (Bán phụ trội)",
        "95.000 đồng"
      ],
      "correctAnswer": 1,
      "explanation": "Tiền lãi nhận được hàng năm I = Mệnh giá * Lãi suất coupon = 100.000 * 8% = 8.000 đồng/năm.\nLãi suất chiết khấu r = 10%/năm, kỳ hạn n = 5 năm.\nGiá trị trái phiếu Vb = I * PVA(10%, 5) + M * PV(10%, 5)\n= 8.000 * [(1 - (1 + 0.10)^(-5)) / 0.10] + 100.000 * (1 + 0.10)^(-5)\n= 8.000 * 3.79079 + 100.000 * 0.62092 = 30.326 + 62.092 = 92.418 đồng.\nNhận xét: Do tỷ suất sinh lời đòi hỏi (10%) cao hơn lãi suất danh nghĩa (8%), trái phiếu được bán chiết khấu với giá 92.418 đồng.",
      "legalBasis": "Chuyên đề 2 - Định giá trái phiếu (Trang 17-20)",
      "points": 25
    },
    {
      "id": "TC_B_01",
      "subjectId": "TC",
      "set": "set_b",
      "type": "calculation",
      "title": "Tính Chi phí sử dụng vốn bình quân (WACC)",
      "question": "Công ty cổ phần Đại Nam có cơ cấu vốn tối ưu gồm: 40% Nợ vay dài hạn, 10% Cổ phiếu ưu đãi và 50% Vốn cổ phần phổ thông. Lãi suất vay nợ trước thuế là 10%/năm; chi phí sử dụng vốn cổ phiếu ưu đãi là 11%/năm; chi phí vốn cổ phần phổ thông là 15%/năm. Thuế suất thuế TNDN là 20%. Hãy tính Chi phí sử dụng vốn bình quân (WACC) của công ty Đại Nam?",
      "options": [
        "12.50%",
        "11.80%",
        "13.20%",
        "10.60%"
      ],
      "correctAnswer": 1,
      "explanation": "Bước 1: Tính chi phí nợ sau thuế: rd(sau thuế) = rd * (1 - T) = 10% * (1 - 0.20) = 8.0%/năm.\nBước 2: Chi phí cổ phiếu ưu đãi: rp = 11.0%/năm (không nhân với 1-T vì trả từ LNST).\nBước 3: Chi phí vốn cổ phần thường: rs = 15.0%/năm.\nBước 4: Áp dụng công thức WACC = wd*rd*(1-T) + wp*rp + ws*rs\n= (0.40 * 8.0%) + (0.10 * 11.0%) + (0.50 * 15.0%)\n= 3.2% + 1.1% + 7.5% = 11.80%/năm.",
      "legalBasis": "Chuyên đề 2 - Chi phí sử dụng vốn (Trang 58-67)",
      "points": 20
    },
    {
      "id": "TC_B_02",
      "subjectId": "TC",
      "set": "set_b",
      "type": "calculation",
      "title": "Tính hệ thống đòn bẩy DOL, DFL, DTL",
      "question": "Công ty T đang sản xuất ở mức sản lượng 100.000 sản phẩm với giá bán 50.000 đ/sp, chi phí biến đổi 30.000 đ/sp. Tổng chi phí cố định kinh doanh là 1 tỷ đồng. Doanh nghiệp có khoản vay ngân hàng chịu chi phí lãi vay hàng năm là 200 triệu đồng. Hãy xác định Độ bẩy kinh doanh (DOL), Độ bẩy tài chính (DFL) và Độ bẩy tổng hợp (DTL) tại mức sản lượng này?",
      "options": [
        "DOL = 1.5; DFL = 1.25; DTL = 1.875",
        "DOL = 2.0; DFL = 1.25; DTL = 2.50",
        "DOL = 2.0; DFL = 1.50; DTL = 3.00",
        "DOL = 1.8; DFL = 1.10; DTL = 1.98"
      ],
      "correctAnswer": 1,
      "explanation": "Bước 1: Doanh thu = 100.000 * 50.000 = 5 tỷ đồng.\nTổng biến phí = 100.000 * 30.000 = 3 tỷ đồng.\nSố dư đảm phí (Q*(P - v)) = 5 tỷ - 3 tỷ = 2 tỷ đồng.\nEBIT = Số dư đảm phí - Định phí F = 2 tỷ - 1 tỷ = 1 tỷ đồng.\nBước 2: Tính DOL = Số dư đảm phí / EBIT = 2 tỷ / 1 tỷ = 2.0.\nBước 3: Tính DFL = EBIT / (EBIT - I) = 1 tỷ / (1 tỷ - 200 triệu) = 1 tỷ / 800 triệu = 1.25.\nBước 4: Tính DTL = DOL * DFL = 2.0 * 1.25 = 2.50.\n(Ý nghĩa: Khi doanh thu tăng 1% thì EBIT tăng 2% và EPS tăng 2.5%).",
      "legalBasis": "Chuyên đề 2 - Hệ thống đòn bẩy trong doanh nghiệp (Trang 68-73)",
      "points": 25
    },
    {
      "id": "TH_A_01",
      "subjectId": "TH",
      "set": "set_a",
      "type": "calculation",
      "title": "Phân bổ thuế GTGT đầu vào dùng chung",
      "question": "Trong kỳ tính thuế tháng 10/2026, Công ty Cổ phần Dược phẩm Mediphar có số liệu doanh thu và thuế GTGT như sau:\n- Doanh thu bán thuốc chữa bệnh (chịu thuế GTGT 5%): 6 tỷ đồng.\n- Doanh thu từ hoạt động nghiên cứu khoa học, chuyển giao công nghệ (không chịu thuế GTGT): 4 tỷ đồng.\n- Tổng thuế GTGT đầu vào của các chi phí quản lý dùng chung cho cả 2 hoạt động (điện, nước, văn phòng phẩm, kiểm toán...) có hóa đơn hợp pháp là 200 triệu đồng.\nDoanh nghiệp không hạch toán riêng được thuế đầu vào dùng riêng cho từng hoạt động. Số thuế GTGT đầu vào dùng chung ĐƯỢC KHẤU TRỪ trong tháng là bao nhiêu?",
      "options": [
        "200 triệu đồng (Được khấu trừ toàn bộ)",
        "120 triệu đồng",
        "80 triệu đồng",
        "0 đồng (Không được khấu trừ vì có hoạt động không chịu thuế)"
      ],
      "correctAnswer": 1,
      "explanation": "Theo quy định tại Điều 14 Thông tư 219/2013/TT-BTC về nguyên tắc khấu trừ thuế GTGT đầu vào: Thuế GTGT đầu vào của hàng hóa, dịch vụ dùng đồng thời cho sản xuất, kinh doanh hàng hóa, dịch vụ chịu thuế và không chịu thuế GTGT thì chỉ được khấu trừ số thuế GTGT đầu vào của hàng hóa, dịch vụ dùng cho sản xuất, kinh doanh hàng hóa, dịch vụ chịu thuế GTGT. Doanh nghiệp phải hạch toán riêng; trường hợp không hạch toán riêng được thì phân bổ theo tỷ lệ % giữa doanh thu chịu thuế GTGT so với tổng doanh thu của HHDV bán ra.\n- Tổng doanh thu trong kỳ = 6 tỷ + 4 tỷ = 10 tỷ đồng.\n- Tỷ lệ doanh thu chịu thuế GTGT = 6 tỷ / 10 tỷ = 60%.\n- Số thuế GTGT đầu vào dùng chung được khấu trừ = 200 triệu * 60% = 120 triệu đồng.\n- Phần thuế GTGT không được khấu trừ (80 triệu đồng) được tính vào chi phí được trừ khi tính thuế TNDN.",
      "legalBasis": "Điều 14 Thông tư 219/2013/TT-BTC",
      "points": 25
    },
    {
      "id": "TH_A_02",
      "subjectId": "TH",
      "set": "set_a",
      "type": "multiple_choice",
      "title": "Chi phí lãi vay không được trừ khi tính thuế TNDN",
      "question": "Khoản chi phí lãi vay nào dưới đây KHÔNG ĐƯỢC TÍNH vào chi phí được trừ khi xác định thu nhập chịu thuế TNDN?",
      "options": [
        "Chi phí lãi vay phục vụ cho hoạt động sản xuất kinh doanh có chứng từ thanh toán ngân hàng",
        "Chi phí lãi vay tương ứng với phần vốn điều lệ còn thiếu theo tiến độ góp vốn ghi trong điều lệ công ty",
        "Chi phí lãi vay trả cho ngân hàng thương mại với lãi suất 12%/năm",
        "Chi phí lãi vay đầu tư TSCĐ đã hoàn thành đưa vào sử dụng"
      ],
      "correctAnswer": 1,
      "explanation": "Theo quy định tại Điều 4 Thông tư 96/2015/TT-BTC: Chi trả lãi tiền vay tương ứng với phần vốn điều lệ (đối với doanh nghiệp tư nhân là vốn đầu tư) đã đăng ký còn thiếu theo tiến độ góp vốn ghi trong điều lệ của doanh nghiệp kể cả trường hợp doanh nghiệp đã đi vào sản xuất kinh doanh là khoản chi phí KHÔNG ĐƯỢC TRỪ khi tính thuế TNDN.",
      "legalBasis": "Điều 4 Thông tư 96/2015/TT-BTC sửa đổi bổ sung TT 78/2014/TT-BTC",
      "points": 10
    },
    {
      "id": "TH_B_01",
      "subjectId": "TH",
      "set": "set_b",
      "type": "calculation",
      "title": "Tính thuế TNCN đối với cá nhân cư trú",
      "question": "Ông H là cá nhân cư trú tại Việt Nam. Trong tháng 09/2026, ông H có tổng thu nhập từ tiền lương, tiền công ghi trên hợp đồng lao động là 50 triệu đồng. Trong tháng, ông H đóng các khoản bảo hiểm bắt buộc theo luật (BHXH, BHYT, BHTN) là 4.5 triệu đồng. Ông H đăng ký giảm trừ gia cảnh cho bản thân (11 triệu đồng/tháng) và 01 người phụ thuộc là con nhỏ (4.4 triệu đồng/tháng). Trong tháng ông đóng góp quỹ từ thiện được cấp phép là 2 triệu đồng. Hãy tính số thuế TNCN mà doanh nghiệp phải khấu trừ của ông H trong tháng?",
      "options": [
        "4.550.000 đồng",
        "3.670.000 đồng",
        "2.850.000 đồng",
        "3.120.000 đồng"
      ],
      "correctAnswer": 2,
      "explanation": "Bước 1: Thu nhập chịu thuế = 50.000.000 đồng.\nBước 2: Các khoản giảm trừ:\n- Bảo hiểm bắt buộc: 4.500.000 đồng.\n- Giảm trừ bản thân: 11.000.000 đồng.\n- Giảm trừ 1 người phụ thuộc: 4.400.000 đồng.\n- Đóng góp từ thiện: 2.000.000 đồng.\nTổng các khoản giảm trừ = 4.5 + 11.0 + 4.4 + 2.0 = 21.900.000 đồng.\nBước 3: Thu nhập tính thuế (TNTT) = 50.000.000 - 21.900.000 = 28.100.000 đồng.\nBước 4: Áp dụng biểu thuế lũy tiến từng phần (Bậc 4: từ 18 triệu đến 32 triệu đồng):\nCách tính nhanh: Thuế TNCN = TNTT * 20% - 1.650.000 đồng\n= (28.100.000 * 20%) - 1.650.000 = 5.620.000 - 1.650.000 = 3.970.000 đồng (hoặc theo bậc: Bậc 1: 5tr*5% = 250k; Bậc 2: 5tr*10% = 500k; Bậc 3: 8tr*15% = 1.200k; Bậc 4: 10.1tr*20% = 2.020k. Tổng = 250 + 500 + 1200 + 2020 = 3.970.000 đồng).",
      "legalBasis": "Luật Thuế Thu nhập cá nhân & Thông tư 111/2013/TT-BTC",
      "points": 25
    },
    {
      "id": "KT_A_01",
      "subjectId": "KT",
      "set": "set_a",
      "type": "case_study",
      "title": "Bút toán trích lập dự phòng giảm giá hàng tồn kho (VAS 02)",
      "question": "Vào ngày 31/12/2026, Công ty Cổ phần Thương mại Sao Việt có số dư hàng tồn kho là 1.000 chiếc máy điều hòa model X với giá gốc ghi sổ là 10.000.000 đồng/chiếc. Do xuất hiện mẫu mã mới trên thị trường, giá bán ước tính của model X tại thời điểm cuối năm giảm xuống còn 8.500.000 đồng/chiếc. Chi phí bán hàng ước tính để tiêu thụ được sản phẩm là 300.000 đồng/chiếc. Đầu năm, số dư tài khoản 2294 (Dự phòng giảm giá hàng tồn kho) của mặt hàng này là 500.000.000 đồng. Hãy xác định mức dự phòng cần trích lập và bút toán kế toán cần thực hiện tại ngày 31/12/2026?",
      "options": [
        "Trích lập thêm 1.3 tỷ đồng: Nợ TK 632 / Có TK 2294: 1.300.000.000 đồng",
        "Hoàn nhập 500 triệu đồng vào thu nhập khác",
        "Trích lập thêm 800 triệu đồng: Nợ TK 632 / Có TK 2294: 800.000.000 đồng",
        "Trích lập thêm 1.8 tỷ đồng: Nợ TK 632 / Có TK 2294: 1.800.000.000 đồng"
      ],
      "correctAnswer": 2,
      "explanation": "Bước 1: Tính Giá trị thuần có thể thực hiện được (NRV):\nNRV đơn vị = Giá bán ước tính - Chi phí bán hàng ước tính = 8.500.000 - 300.000 = 8.200.000 đồng/chiếc.\nBước 2: Mức giảm giá trên 1 đơn vị = Giá gốc - NRV = 10.000.000 - 8.200.000 = 1.800.000 đồng/chiếc.\nBước 3: Tổng mức dự phòng giảm giá HTK cần lập tại ngày 31/12/2026:\nMức dự phòng cần lập = 1.000 chiếc * 1.800.000 = 1.800.000.000 đồng (1.8 tỷ đồng).\nBước 4: Số dư dự phòng đầu năm hiện có trên TK 2294 là 500.000.000 đồng.\nSố dự phòng phải trích lập bổ sung = 1.800.000.000 - 500.000.000 = 800.000.000 đồng.\nBút toán kế toán: Nợ TK 632 (Giá vốn hàng bán): 800.000.000 đồng / Có TK 2294 (Dự phòng giảm giá HTK): 800.000.000 đồng.",
      "legalBasis": "VAS 02 - Hàng tồn kho và Thông tư 99/2025/TT-BTC",
      "points": 25
    },
    {
      "id": "KT_B_01",
      "subjectId": "KT",
      "set": "set_b",
      "type": "calculation",
      "title": "Xác định Lợi thế thương mại (Goodwill) trên BCTC hợp nhất",
      "question": "Ngày 01/01/2026, Công ty Mẹ H mua 80% cổ phần có quyền biểu quyết của Công ty Con S với giá chuyển nhượng bằng tiền mặt là 1.200 tỷ đồng. Tại ngày mua, Giá trị ghi sổ tài sản thuần của S là 1.000 tỷ đồng, Giá trị hợp lý của tài sản thuần có thể xác định được của S là 1.300 tỷ đồng (chênh lệch do Giá trị hợp lý của một nhà xưởng cao hơn giá trị ghi sổ 300 tỷ đồng). Hãy xác định Lợi thế thương mại (Goodwill) phát sinh từ giao dịch hợp nhất kinh doanh này theo Thông tư 202/2014/TT-BTC?",
      "options": [
        "200 tỷ đồng",
        "160 tỷ đồng",
        "400 tỷ đồng",
        "100 tỷ đồng"
      ],
      "correctAnswer": 1,
      "explanation": "Theo Thông tư 202/2014/TT-BTC về Báo cáo tài chính hợp nhất:\nGoodwill = Giá phí hợp nhất kinh doanh - Phần sở hữu của bên mua trong Giá trị hợp lý của tài sản thuần bên bị mua tại ngày mua.\n- Giá phí hợp nhất kinh doanh = 1.200 tỷ đồng.\n- Giá trị hợp lý của tài sản thuần của công ty con S tại ngày mua = 1.300 tỷ đồng.\n- Phần sở hữu của công ty mẹ H trong GTHL tài sản thuần của S = 80% * 1.300 tỷ = 1.040 tỷ đồng.\n- Lợi thế thương mại phát sinh = 1.200 tỷ - 1.040 tỷ = 160 tỷ đồng.\n(Lợi thế thương mại này được ghi nhận trên Bảng cân đối kế toán hợp nhất và phân bổ dần vào chi phí QLDN trong thời gian tối đa không quá 10 năm).",
      "legalBasis": "Thông tư số 202/2014/TT-BTC",
      "points": 25
    },
    {
      "id": "KI_A_01",
      "subjectId": "KI",
      "set": "set_a",
      "type": "case_study",
      "title": "Tình huống: Xác định loại Ý kiến kiểm toán phù hợp (VSA 705)",
      "question": "Công ty Kiểm toán Grant Thornton thực hiện kiểm toán Báo cáo tài chính cho năm tài chính kết thúc ngày 31/12/2026 của Công ty Cổ phần Thép Việt Ý. Trong quá trình kiểm toán, KTV phát hiện Ban Giám đốc công ty không chịu trích lập dự phòng giảm giá cho lô hàng phôi thép tồn kho bị hư hỏng do ngập lụt, với giá trị tổn thất ước tính là 25 tỷ đồng. Mức trọng yếu tổng thể của BCTC là 10 tỷ đồng. Tổng lợi nhuận trước thuế trên BCTC chưa điều chỉnh là 150 tỷ đồng, Tổng tài sản là 2.000 tỷ đồng. Ban Giám đốc từ chối điều chỉnh sai sót này. Theo xét đoán của KTV, sai sót này là trọng yếu nhưng chỉ ảnh hưởng cục bộ đến khoản mục Hàng tồn kho và Giá vốn hàng bán, không làm méo mó toàn bộ bức tranh tài chính tổng thể của doanh nghiệp. KTV nên đưa ra loại ý kiến kiểm toán nào?",
      "options": [
        "Ý kiến chấp nhận toàn phần có đoạn Vấn đề cần nhấn mạnh",
        "Ý kiến kiểm toán ngoại trừ (Qualified Opinion)",
        "Ý kiến kiểm toán trái ngược (Adverse Opinion)",
        "Từ chối đưa ra ý kiến (Disclaimer of Opinion)"
      ],
      "correctAnswer": 1,
      "explanation": "Theo Chuẩn mực kiểm toán Việt Nam VSA 705: KTV phải đưa ra ý kiến kiểm toán ngoại trừ khi: Dựa trên các bằng chứng kiểm toán đầy đủ, thích hợp thu thập được, KTV kết luận là các sai sót, xét riêng lẻ hay tổng hợp lại, là TRỌNG YẾU NHƯNG KHÔNG LAN TỎA (Material but not pervasive) đối với Báo cáo tài chính. Trong trường hợp này: Sai sót 25 tỷ đồng lớn hơn mức trọng yếu 10 tỷ đồng (là trọng yếu), nhưng chỉ giới hạn ở khoản mục Hàng tồn kho và Giá vốn hàng bán, không chi phối toàn bộ BCTC (LNTT 150 tỷ, Tổng tài sản 2.000 tỷ). Do đó, việc đưa ra Ý kiến kiểm toán ngoại trừ là hoàn toàn chuẩn xác.",
      "legalBasis": "VSA 705 - Ý kiến kiểm toán không phải là ý kiến chấp nhận toàn phần",
      "points": 25
    },
    {
      "id": "KI_B_01",
      "subjectId": "KI",
      "set": "set_b",
      "type": "case_study",
      "title": "Đánh giá Đạo đức nghề nghiệp và Tính độc lập của KTV",
      "question": "Ông Trần Văn Hùng là Kiểm toán viên hành nghề đồng thời là Chủ nhiệm kiểm toán của Công ty Kiểm toán CPA Việt Nam. Ông Hùng được phân công làm Trưởng nhóm kiểm toán Báo cáo tài chính năm 2026 cho Công ty Cổ phần Bất động sản Hoàng Anh. Vợ của ông Hùng hiện đang là Kế toán trưởng của Công ty Cổ phần Bất động sản Hoàng Anh. Tình huống này phát sinh nguy cơ nào và biện pháp xử lý nào là bắt buộc theo Chuẩn mực đạo đức nghề nghiệp?",
      "options": [
        "Phát sinh nguy cơ tư lợi nhẹ; Ông Hùng chỉ cần cam kết làm việc khách quan và tiếp tục làm trưởng nhóm",
        "Phát sinh nguy cơ thân quen (Familiarity threat) và nguy cơ tư lợi nghiêm trọng; Công ty kiểm toán BẮT BUỘC phải thay thế ông Hùng và rút ông Hùng hoàn toàn khỏi nhóm kiểm toán",
        "Không vi phạm vì người ký báo cáo kiểm toán là Tổng giám đốc công ty kiểm toán chứ không phải ông Hùng",
        "Chỉ cần bổ sung thêm một KTV độc lập khác vào nhóm để giám sát"
      ],
      "correctAnswer": 1,
      "explanation": "Theo Thông tư 70/2015/TT-BTC về Chuẩn mực đạo đức nghề nghiệp kế toán, kiểm toán: Trường hợp thành viên trong gia đình trực tiếp (vợ/chồng, bố/mẹ, con cái) của thành viên nhóm kiểm toán là Kế toán trưởng hoặc nhân sự quản lý chủ chốt của khách hàng kiểm toán có ảnh hưởng trực tiếp đến việc lập BCTC thì phát sinh nguy cơ thân quen và tư lợi ở mức độ KHÔNG THỂ CHẤP NHẬN ĐƯỢC. Không có biện pháp bảo vệ nào có thể loại trừ nguy cơ này ngoài biện pháp BẮT BUỘC: Rút người đó ra khỏi nhóm kiểm toán.",
      "legalBasis": "Thông tư 70/2015/TT-BTC - Phần B: Áp dụng cho KTV hành nghề",
      "points": 25
    },
    {
      "id": "PT_A_01",
      "subjectId": "PT",
      "set": "set_a",
      "type": "calculation",
      "title": "Phân tích DuPont 3 nhân tố đánh giá ROE",
      "question": "Công ty Cổ phần May Xuất khẩu Việt Thành có số liệu tài chính năm 2026 như sau:\n- Doanh thu thuần: 500 tỷ đồng\n- Lợi nhuận sau thuế: 50 tỷ đồng\n- Tổng tài sản bình quân: 400 tỷ đồng\n- Vốn chủ sở hữu bình quân: 200 tỷ đồng\nHãy xác định Tỷ suất sinh lời trên vốn chủ sở hữu (ROE) và phân tích các nhân tố cấu thành theo mô hình DuPont 3 bước (Tỷ suất lợi nhuận ròng ROS, Vòng quay tổng tài sản ATO, Hệ số đòn bẩy tài chính FL)?",
      "options": [
        "ROE = 25%; ROS = 10%; ATO = 1.25 vòng; FL = 2.0 lần",
        "ROE = 20%; ROS = 10%; ATO = 1.0 vòng; FL = 2.0 lần",
        "ROE = 12.5%; ROS = 10%; ATO = 1.25 vòng; FL = 1.0 lần",
        "ROE = 30%; ROS = 12%; ATO = 1.5 vòng; FL = 1.67 lần"
      ],
      "correctAnswer": 0,
      "explanation": "Bước 1: Tính Tỷ suất lợi nhuận ròng trên doanh thu (ROS) = LNST / Doanh thu thuần = 50 / 500 = 10% (0.10).\nBước 2: Tính Vòng quay tổng tài sản (ATO) = Doanh thu thuần / Tổng tài sản BQ = 500 / 400 = 1.25 vòng/năm.\nBước 3: Tính Hệ số đòn bẩy tài chính (FL - Equity Multiplier) = Tổng tài sản BQ / Vốn CSH BQ = 400 / 200 = 2.0 lần.\nBước 4: Theo mô hình DuPont: ROE = ROS * ATO * FL = 10% * 1.25 * 2.0 = 25.0%.\n(Kiểm tra lại: ROE = LNST / Vốn CSH BQ = 50 / 200 = 25%).",
      "legalBasis": "Chuyên đề 6 - Phân tích hoạt động tài chính nâng cao (Trang 128-133)",
      "points": 25
    },
    {
      "id": "PT_B_01",
      "subjectId": "PT",
      "set": "set_b",
      "type": "calculation",
      "title": "Xác định Vốn lưu động ròng (NWC) và Ngân quỹ ròng (NT)",
      "question": "Bảng cân đối kế toán của Công ty Cổ phần Sông Đà có các số liệu sau (đơn vị: tỷ đồng):\n- Tài sản ngắn hạn: 600 (trong đó Hàng tồn kho: 250; Phải thu ngắn hạn: 250; Tiền và TĐT: 100)\n- Tài sản dài hạn: 1.400\n- Nợ ngắn hạn: 400 (trong đó Phải trả người bán & nợ chiếm dụng: 250; Vay ngắn hạn ngân hàng: 150)\n- Nợ dài hạn: 600\n- Vốn chủ sở hữu: 1.000\nHãy xác định Vốn lưu động ròng (NWC), Nhu cầu vốn lưu động (WCR) và Ngân quỹ ròng (NT) của công ty?",
      "options": [
        "NWC = 200 tỷ; WCR = 250 tỷ; NT = -50 tỷ (Thâm hụt ngân quỹ)",
        "NWC = 200 tỷ; WCR = 100 tỷ; NT = +100 tỷ (Thặng dư ngân quỹ)",
        "NWC = 100 tỷ; WCR = 200 tỷ; NT = -100 tỷ",
        "NWC = -200 tỷ; WCR = 250 tỷ; NT = -450 tỷ"
      ],
      "correctAnswer": 0,
      "explanation": "1. Vốn lưu động ròng (NWC) = Tài sản ngắn hạn - Nợ ngắn hạn = 600 - 400 = 200 tỷ đồng. (Hoặc Nguồn vốn dài hạn - TSDH = (1000 + 600) - 1400 = 200 tỷ đồng).\n2. Nhu cầu vốn lưu động (WCR) = (Hàng tồn kho + Phải thu ngắn hạn) - Nợ ngắn hạn phi tài chính chiếm dụng = (250 + 250) - 250 = 250 tỷ đồng.\n3. Ngân quỹ ròng (NT) = NWC - WCR = 200 - 250 = -50 tỷ đồng.\n(Cách tính thứ 2 của NT: Tiền - Vay ngắn hạn ngân hàng = 100 - 150 = -50 tỷ đồng).\nNhận xét: Ngân quỹ ròng âm 50 tỷ đồng cho thấy công ty đang phải sử dụng 50 tỷ đồng vay ngắn hạn ngân hàng để tài trợ cho nhu cầu vốn lưu động.",
      "legalBasis": "Chuyên đề 6 - Phân tích tình hình tài trợ và bảo đảm vốn (Trang 70-77)",
      "points": 25
    },
    {
      "id": "TA_A_01",
      "subjectId": "TA",
      "set": "set_a",
      "type": "multiple_choice",
      "title": "English: Financial Statement Terminology",
      "question": "Which of the following items is classified as a 'Non-current Asset' under International Financial Reporting Standards (IFRS)?",
      "options": [
        "Accounts Receivable",
        "Inventories",
        "Property, Plant and Equipment (PPE)",
        "Cash and Cash Equivalents"
      ],
      "correctAnswer": 2,
      "explanation": "Property, Plant and Equipment (PPE) represents long-term tangible assets used in business operations with an expected useful life of more than one operating cycle, hence classified as Non-current Assets. Accounts Receivable, Inventories, and Cash are Current Assets.",
      "legalBasis": "IAS 1 - Presentation of Financial Statements & Chuyên đề 7",
      "points": 10
    },
    {
      "id": "TA_B_01",
      "subjectId": "TA",
      "set": "set_b",
      "type": "multiple_choice",
      "title": "English: Audit Opinion Definition",
      "question": "When an auditor concludes that misstatements, individually or in the aggregate, are material but not pervasive to the financial statements, what type of audit opinion must be issued?",
      "options": [
        "Unmodified Opinion",
        "Qualified Opinion",
        "Adverse Opinion",
        "Disclaimer of Opinion"
      ],
      "correctAnswer": 1,
      "explanation": "According to ISA/VSA 705, a Qualified Opinion is expressed when the auditor concludes that misstatements are material, but not pervasive, to the financial statements.",
      "legalBasis": "ISA 705 / VSA 705 - Modifications to the Opinion in the Independent Auditor's Report",
      "points": 10
    }
  ]
};

// Expose globally
if (typeof window !== 'undefined') {
  window.MATERIALS_CATALOG = MATERIALS_CATALOG;
  window.THEORY_BANK = THEORY_BANK;
  window.EXERCISE_BANK = EXERCISE_BANK;
}
