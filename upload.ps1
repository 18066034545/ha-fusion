# 确保当前目录是项目根目录
$ErrorActionPreference = "Stop"

Write-Host "正在初始化 Git 仓库..." -ForegroundColor Green
git init

Write-Host "添加所有文件..." -ForegroundColor Green
git add .

Write-Host "创建初始提交..." -ForegroundColor Green
git commit -m "Initial commit: HA Fusion Dashboard"

Write-Host "添加远程仓库..." -ForegroundColor Green
git remote add origin https://github.com/symi-daguo/ha-fusion.git

Write-Host "推送到 GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "完成!" -ForegroundColor Green 