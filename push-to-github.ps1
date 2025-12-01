# SLEM Multi Service - GitHub Push Script (PowerShell)
# This script initializes git and pushes the code to GitHub

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "SLEM Multi Service - GitHub Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Configure Git
Write-Host "Step 1: Configuring Git..." -ForegroundColor Yellow
git config --global user.email "netbiz0925@gmail.com"
git config --global user.name "slemmultiservice"
Write-Host "Git configured successfully!" -ForegroundColor Green
Write-Host ""

# Initialize repository
Write-Host "Step 2: Initializing Git repository..." -ForegroundColor Yellow
git init
Write-Host "Repository initialized!" -ForegroundColor Green
Write-Host ""

# Add all files
Write-Host "Step 3: Adding files to staging area..." -ForegroundColor Yellow
git add .
Write-Host "Files added!" -ForegroundColor Green
Write-Host ""

# Initial commit
Write-Host "Step 4: Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: SLEM Multi Service website with all features"
Write-Host "Commit created!" -ForegroundColor Green
Write-Host ""

# Rename branch to main
Write-Host "Step 5: Setting up main branch..." -ForegroundColor Yellow
git branch -M main
Write-Host "Branch set to main!" -ForegroundColor Green
Write-Host ""

# Add remote
Write-Host "Step 6: Adding remote repository..." -ForegroundColor Yellow
git remote add origin https://github.com/Slemmultiservice/slemmultiservice.git
Write-Host "Remote added!" -ForegroundColor Green
Write-Host ""

# Push to GitHub
Write-Host "Step 7: Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "NOTE: You may be prompted to enter your GitHub credentials" -ForegroundColor Magenta
Write-Host "If using 2FA, you'll need to use a Personal Access Token" -ForegroundColor Magenta
Write-Host "Generate one at: https://github.com/settings/tokens" -ForegroundColor Magenta
Write-Host ""
git push -u origin main

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to: https://github.com/Slemmultiservice/slemmultiservice" -ForegroundColor White
Write-Host "2. Add GitHub Secrets:" -ForegroundColor White
Write-Host "   - VITE_GEMINI_API_KEY (Settings > Secrets and variables > Actions)" -ForegroundColor White
Write-Host "3. Enable GitHub Pages:" -ForegroundColor White
Write-Host "   - Settings > Pages > Deploy from a branch > gh-pages" -ForegroundColor White
Write-Host ""
Write-Host "Your site will be available at:" -ForegroundColor Cyan
Write-Host "https://slemmultiservice.github.io/slemmultiservice/" -ForegroundColor Green
Write-Host ""
