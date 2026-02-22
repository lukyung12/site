@echo off
echo Building Cathy Cleans website...
call npm run build

if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b %errorlevel%
)

echo Build completed successfully!
echo.
echo Files are ready in the dist/ folder
echo You can now deploy the contents of dist/ to your web server
echo.
echo To preview locally, run: npm run preview
pause