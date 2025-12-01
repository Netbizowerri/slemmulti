@echo off
REM SLEM Multi Service - GitHub Push Script
REM This script initializes git and pushes the code to GitHub

echo ========================================
echo SLEM Multi Service - GitHub Setup
echo ========================================
echo.

REM Configure Git
echo Step 1: Configuring Git...
git config --global user.email "netbiz0925@gmail.com"
git config --global user.name "slemmultiservice"
echo Git configured successfully!
echo.

REM Initialize repository
echo Step 2: Initializing Git repository...
git init
echo Repository initialized!
echo.

REM Add all files
echo Step 3: Adding files to staging area...
git add .
echo Files added!
echo.

REM Initial commit
echo Step 4: Creating initial commit...
git commit -m "Initial commit: SLEM Multi Service website with all features"
echo Commit created!
echo.

REM Rename branch to main
echo Step 5: Setting up main branch...
git branch -M main
echo Branch set to main!
echo.

REM Add remote
echo Step 6: Adding remote repository...
git remote add origin https://github.com/Slemmultiservice/slemmultiservice.git
echo Remote added!
echo.

REM Push to GitHub
echo Step 7: Pushing to GitHub...
echo NOTE: You may be prompted to enter your GitHub credentials
echo If using 2FA, you'll need to use a Personal Access Token
echo Generate one at: https://github.com/settings/tokens
echo.
git push -u origin main

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Go to: https://github.com/Slemmultiservice/slemmultiservice
echo 2. Add GitHub Secrets:
echo    - VITE_GEMINI_API_KEY (Settings > Secrets and variables > Actions)
echo 3. Enable GitHub Pages:
echo    - Settings > Pages > Deploy from a branch > gh-pages
echo.
echo Your site will be available at:
echo https://slemmultiservice.github.io/slemmultiservice/
echo.
pause
