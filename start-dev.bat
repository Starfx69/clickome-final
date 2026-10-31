@echo off
echo ========================================================
echo   Starting Clickome.co Latest Dev Server (Port 4000)
echo ========================================================
cd /d "%~dp0"

:: Free port 4000 if occupied by older background processes
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :4000 ^| findstr LISTENING') do (
    echo Terminating stale process on port 4000 (PID %%a)...
    taskkill /F /PID %%a >nul 2>&1
)

echo Starting dev server...
start http://localhost:4000/
npm.cmd run dev
