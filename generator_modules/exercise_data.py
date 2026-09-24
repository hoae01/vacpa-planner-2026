# -*- coding: utf-8 -*-
"""
Comprehensive Exercise & Mock Exam Bank - VACPA Planner 2026
Bộ đề A (22/10 - 27/10), Bộ đề B (28/10 - 03/11), Đề hỗn hợp 1 & 2 (05/11, 08/11)
Trích xuất từ Chuyên đề BTC 2026 và các đề thi chính thức CPA
"""

def get_exercise_bank():
    return {
        "sets": [
            {"id": "set_a", "name": "Bộ đề A (90 phút/môn)", "description": "Luyện đề vòng 1 (22/10 - 27/10): Quét toàn bộ kiến thức trọng tâm từng môn."},
            {"id": "set_b", "name": "Bộ đề B (90 phút/môn)", "description": "Luyện đề vòng 2 (28/10 - 03/11): Đề phân hóa cao, tình huống nâng cao và bài tập tổng hợp."},
            {"id": "mixed_1", "name": "Đề thi thử Hỗn hợp 1 (120 phút)", "description": "Thi thử tổng hợp đợt 1 (05/11): Mô phỏng kỳ thi chính thức với câu hỏi liên môn."},
            {"id": "mixed_2", "name": "Đề thi thử Hỗn hợp 2 (120 phút)", "description": "Thi thử tổng hợp đợt 2 (08/11): Tổng duyệt kiến thức và tốc độ làm bài trước ngày thi."}
        ],
        "questions": [
            # ==========================================
            # MÔN PL - PHÁP LUẬT
            # ==========================================
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

            # ==========================================
            # MÔN TC - TÀI CHÍNH NÂNG CAO
            # ==========================================
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

            # ==========================================
            # MÔN TH - THUẾ & QUẢN LÝ THUẾ
            # ==========================================
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

            # ==========================================
            # MÔN KT - KẾ TOÁN NÂNG CAO
            # ==========================================
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

            # ==========================================
            # MÔN KI - KIỂM TOÁN NÂNG CAO
            # ==========================================
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

            # ==========================================
            # MÔN PT - PHÂN TÍCH HOẠT ĐỘNG TÀI CHÍNH
            # ==========================================
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

            # ==========================================
            # MÔN TA - TIẾNG ANH CHUYÊN NGÀNH
            # ==========================================
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
    }
