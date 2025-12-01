# GitHub Repository Setup Guide

## For: SLEM MULTI SERVICE
**Repository**: https://github.com/Slemmultiservice/slemmultiservice.git
**Account**: slemmultiservice
**Email**: netbiz0925@gmail.com

## Initial Setup Steps (One-time)

### 1. Configure Git Locally
```bash
git config --global user.email "netbiz0925@gmail.com"
git config --global user.name "slemmultiservice"
```

### 2. Initialize Repository
```bash
cd c:\Users\EMMY-TECH\slem-multi-service
git init
git add .
git commit -m "Initial commit: SLEM Multi Service website"
git branch -M main
git remote add origin https://github.com/Slemmultiservice/slemmultiservice.git
git push -u origin main
```

### 3. Set GitHub Secrets
Go to: https://github.com/Slemmultiservice/slemmultiservice/settings/secrets/actions

Add the following secrets:
- **VITE_GEMINI_API_KEY**: Your Google Gemini API key

## Subsequent Pushes

```bash
cd c:\Users\EMMY-TECH\slem-multi-service
git add .
git commit -m "Your commit message"
git push origin main
```

## Useful Git Commands

- Check status: `git status`
- View commits: `git log --oneline`
- Create branch: `git checkout -b branch-name`
- Switch branch: `git checkout branch-name`
- Merge branch: `git merge branch-name`

## GitHub Pages Deployment

1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose branch: `gh-pages`
4. Save

The site will be available at: https://slemmultiservice.github.io/slemmultiservice/

## Troubleshooting

**Authentication Issues**:
- Use GitHub Personal Access Token if password fails
- Generate at: https://github.com/settings/tokens

**Large Files**:
- Node_modules is already in .gitignore
- Only source files are tracked

**Conflicts**:
```bash
git pull origin main
# Resolve conflicts
git add .
git commit -m "Resolve conflicts"
git push origin main
```
