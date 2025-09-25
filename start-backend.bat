@echo off
echo Starting PrimeDesk Solutions BPO Backend Server...
echo.

cd /d "c:\Users\ASUS\Desktop\9bf3a729-f7d0-486f-8c76-5a1b935d0bd3\backend"

echo Installing/Updating dependencies...
call npm install

echo.
echo Starting server on http://localhost:5000
echo Backend API will be available at http://localhost:5000/api/send-email
echo.
echo IMPORTANT: Make sure to update the .env file with your actual email password!
echo.

call npm run dev