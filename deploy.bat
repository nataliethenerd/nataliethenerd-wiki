@echo off
setlocal

echo Switching to main branch...
git checkout main

echo Pulling latest changes from GitHub...
git pull origin main

echo Staging changes...
git add .

echo Committing changes...
git commit -m "Updated"

echo Pushing to main branch...
git push origin main

echo Cleaning old build files...
rmdir /s /q .docusaurus build 2>nul

echo Building the Docusaurus site...
npm run build

echo Ensuring CNAME file exists in build directory...
echo wiki.nataliethenerd.com > build/CNAME

echo Deploying to GitHub Pages...
set GIT_USER=nataliethenerd
npm run deploy

echo Deployment complete! 🚀
echo.
echo Press any key to exit...
pause
