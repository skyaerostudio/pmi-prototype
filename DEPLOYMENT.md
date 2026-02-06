# 🚀 GitHub Pages Deployment Guide

Your PMI Prototype is ready to be published! I've set up automatic deployment using GitHub Actions.

## ✅ What's Been Done

- Created GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Committed and pushed the workflow to your repository
- Your code is ready for deployment

## 📋 Next Steps (Manual Setup Required)

To complete the deployment, you need to enable GitHub Pages in your repository settings:

### Step 1: Go to Repository Settings
1. Open your browser and go to: https://github.com/YOUR_USERNAME/pmi-prototype
2. Click on **Settings** tab (top right)

### Step 2: Enable GitHub Pages
1. In the left sidebar, click **Pages** (under "Code and automation")
2. Under **Source**, select **GitHub Actions** from the dropdown
3. Click **Save**

### Step 3: Wait for Deployment
1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once complete, your site will be live!

## 🌐 Your Site URL

After deployment completes, your site will be available at:

```
https://YOUR_USERNAME.github.io/pmi-prototype/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 🔄 Automatic Updates

From now on, every time you push changes to the `main` branch, your site will automatically redeploy!

## 🛠️ Troubleshooting

**If the workflow fails:**
- Check the Actions tab for error messages
- Ensure GitHub Pages is set to "GitHub Actions" as the source
- Make sure the repository is public (or you have GitHub Pro for private repos)

**If you see 404:**
- Wait a few minutes after the first deployment
- Check that the workflow completed successfully
- Verify the Pages settings are correct

## 📝 Notes

- The site is a static HTML/CSS/JS site, so no build step is needed
- All files in the repository root will be served
- The `index.html` file will be the homepage
