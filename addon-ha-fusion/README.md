# HA Fusion

一个现代化、易用且高性能的 Home Assistant 自定义仪表盘

## 安装方式

### 方式一：通过 Home Assistant 插件商店安装

1. 在 Home Assistant 中打开 Supervisor -> Add-on Store
2. 点击右上角的 ⋮ -> Repositories
3. 添加仓库地址: `https://github.com/symi-daguo/addon-ha-fusion`
4. 点击 "Add"
5. 找到 "HA Fusion" 插件并安装

### 方式二：通过 Docker 安装

```bash
docker run -d \
  --name ha-fusion \
  -p 5050:5050 \
  -v /path/to/config:/config \
  ghcr.io/symi-daguo/ha-fusion:latest
```

## 链接

- [GitHub 仓库](https://github.com/symi-daguo/ha-fusion)
- [问题反馈](https://github.com/symi-daguo/ha-fusion/issues)
