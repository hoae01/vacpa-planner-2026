@echo off
chcp 65001 >nul
title VACPA Planner 2026
echo ===================================================
echo     DANG KHOI DONG VACPA PLANNER 2026...
echo ===================================================
echo.
cd /d "%~dp0"

:: Start python server in background if not already running
netstat -ano | findstr :8080 >nul
if %errorlevel% neq 0 (
    echo [1/2] Dang khoi dong may chu luu tru du lieu...
    start /b python server.py >nul 2>&1
    timeout /t 1 /nobreak >nul
) else (
    echo [1/2] May chu luu tru da san sang!
)

echo [2/2] Dang mo ung dung tren trinh duyet...
start http://localhost:8080/index.html

echo.
echo ===================================================
echo     UNG DUNG DA DUOC MO THANH CONG!
echo     Du lieu hoc cua ban se duoc tu dong luu
echo     vao tep vacpa_data.json tren may tinh.
echo ===================================================
timeout /t 3 >nul
exit
