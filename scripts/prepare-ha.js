import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.join(__dirname, '../build');
const haDir = path.join(__dirname, '../dist');

// 确保目标目录存在
if (!fs.existsSync(haDir)) {
    fs.mkdirSync(haDir, { recursive: true });
}

// 复制构建文件到 dist 目录
fs.cpSync(buildDir, haDir, { recursive: true });

// 创建 manifest.json
const manifest = {
    "domain": "ha_fusion",
    "name": "HA Fusion",
    "documentation": "https://github.com/your-username/ha-fusion",
    "dependencies": [],
    "codeowners": [],
    "requirements": [],
    "version": "2024.10.0"
};

fs.writeFileSync(path.join(haDir, 'manifest.json'), JSON.stringify(manifest, null, 2)); 