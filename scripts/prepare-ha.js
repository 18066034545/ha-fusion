import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

// 确保目标目录存在
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// 重命名主JS文件为ha-fusion.js
const files = fs.readdirSync(path.join(distDir, '_app/immutable/entry'));
const mainJs = files.find(f => f.startsWith('app.') && f.endsWith('.js'));
if (mainJs) {
    fs.copyFileSync(
        path.join(distDir, '_app/immutable/entry', mainJs),
        path.join(distDir, 'ha-fusion.js')
    );
}

// 复制所有资源文件到根目录
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyDir(path.join(distDir, '_app/immutable/assets'), path.join(distDir, 'assets'));

// 创建 manifest.json
const manifest = {
    "domain": "ha_fusion",
    "name": "HA Fusion",
    "documentation": "https://github.com/symi-daguo/ha-fusion",
    "dependencies": [],
    "codeowners": ["@symi-daguo"],
    "requirements": [],
    "version": "2024.12.0",
    "render_readme": true,
    "homeassistant": "2024.12.0"
};

fs.writeFileSync(path.join(distDir, 'manifest.json'), JSON.stringify(manifest, null, 2)); 