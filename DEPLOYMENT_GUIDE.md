# SLEM Multi Service - Complete Deployment Guide

## Quick Start (Recommended)

### Option 1: Using PowerShell (Windows)
1. Open PowerShell in the project directory
2. Run: `.\push-to-github.ps1`
3. Follow the prompts

### Option 2: Using Command Prompt (Windows)
1. Open Command Prompt in the project directory
2. Run: `push-to-github.bat`
3. Follow the prompts

### Option 3: Manual Git Commands
```bash
cd c:\Users\EMMY-TECH\slem-multi-service
git config --global user.email "netbiz0925@gmail.com"
git config --global user.name "slemmultiservice"
git init
git add .
git commit -m "Initial commit: SLEM Multi Service website"
git branch -M main
git remote add origin https://github.com/Slemmultiservice/slemmultiservice.git
git push -u origin main
```

## After Initial Push

### 1. Set GitHub Secrets
GitHub needs your Gemini API key to build the site:

1. Go to: https://github.com/Slemmultiservice/slemmultiservice/settings/secrets/actions
2. Click "New repository secret"
3. Name: `VITE_GEMINI_API_KEY`
4. Value: Your actual Google Gemini API key
5. Click "Add secret"

### 2. Enable GitHub Pages
1. Go to: https://github.com/Slemmultiservice/slemmultiservice/settings/pages
2. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Click "Save"

### 3. Verify Deployment
- Go to "Actions" tab to watch the build
- Once successful, your site is at: **https://slemmultiservice.github.io/slemmultiservice/**

## For Future Updates

After making changes locally:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build your site
2. Run tests (if configured)
3. Deploy to GitHub Pages

## Troubleshooting

### Authentication Failed
**Issue**: "fatal: could not read Username"

**Solution**: 
- Use Personal Access Token instead of password
- Generate at: https://github.com/settings/tokens
- Select scopes: `repo`, `workflow`
- Use token as password when prompted

### Branch Conflicts
**Issue**: "branch 'main' already exists"

**Solution**:
```bash
git branch -D main  # Delete local main
git branch -M main  # Rename current branch to main
```

### Large Files/Slow Upload
**Issue**: Push takes a long time

**Solution**: Ensure `node_modules` and `dist` are in `.gitignore`
```bash
git rm --cached -r node_modules/
git commit -m "Remove node_modules from tracking"
git push origin main
```

### Build Failures
**Issue**: GitHub Actions build fails

**Check**:
1. Go to repository → Actions tab
2. Click failed workflow
3. Check logs for errors
4. Common cause: Missing `VITE_GEMINI_API_KEY` secret

## Project Structure in GitHub

```
slemmultiservice/
├── src/
│   ├── pages/
│   ├── components/
│   ├── services/
│   └── App.tsx
├── public/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

## Environment Variables

The `.env` file is **NOT** pushed to GitHub for security.

To add credentials to your local environment:
1. Create `.env` file in root directory
2. Add: `VITE_GEMINI_API_KEY=your_key_here`
3. GitHub Actions uses the secret you set in Settings

## Sites to Deploy To

After GitHub setup, you can also deploy to:

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```
- Auto-deploys on push to main
- Best performance
- Visit: https://vercel.com

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Firebase Hosting
```bash
npm i -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## Performance Tips

1. **Image Optimization**: Images from ibb.co are already optimized
2. **Lazy Loading**: Built into React components
3. **Code Splitting**: Vite handles automatically
4. **Caching**: GitHub Pages caches static files

## Security Checklist

- ✅ `.env` is in `.gitignore`
- ✅ Gemini API key stored as GitHub Secret
- ✅ No sensitive data in commits
- ✅ Public repository (source code is visible)

## Support

For issues:
1. Check GitHub Actions logs (Actions tab)
2. Review error messages carefully
3. Verify all secrets are set correctly
4. Ensure Node.js version matches (18.x)

---

**Deployment Status**: Ready to push! 🚀
