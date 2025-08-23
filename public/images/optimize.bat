@echo off
echo ========================================
echo   Image Optimization Tool
echo   Dr. Jan Duffy Website
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if dependencies are installed
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install dependencies!
        pause
        exit /b 1
    )
)

echo Starting image optimization...
echo.

REM Run optimization
npm run optimize

echo.
echo ========================================
echo   Optimization Complete!
echo ========================================
echo.
echo Check the 'optimized' folder for results
echo.
pause
