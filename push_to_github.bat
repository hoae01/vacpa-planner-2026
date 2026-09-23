@echo off
chcp 65001 >nul
title Day code len GitHub - VACPA Planner 2026
echo ===================================================
echo     DONG BO VA DAY CODE LEN GITHUB
echo ===================================================
echo.
cd /d "%~dp0"

set /p REPO_URL=Nhap link repository GitHub cua ban (vd: https://github.com/username/vacpa-planner-2026.git): 

if "%REPO_URL%"=="" (
    echo [LOI] Ban chua nhap link GitHub repository!
    pause
    exit /b
)

echo.
echo [1/3] Dang lien ket repository...
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

echo [2/3] Dang day code len nhanh main...
git branch -M main
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ===================================================
    echo     DA DAY CODE LEN GITHUB THANH CONG!
    echo ===================================================
    echo.
    echo Cac buoc bat link web online tren dien thoai:
    echo 1. Vao repository tren GitHub
    echo 2. Chon Settings -^> Pages
    echo 3. O muc Build and deployment -^> Branch: chon "main" va nhan Save
    echo 4. Cho khoang 1 phut, web cua ban se hoat dong tai:
    echo    https://^<username^>.github.io/vacpa-planner-2026/
    echo ===================================================
) else (
    echo.
    echo [LOI] Khong the day code. Vui long kiem tra lai quyen truy cap hoac link repository!
)

pause
