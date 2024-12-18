# ha-fusion

[English](README.md) | [简体中文](README.zh-CN.md)

一个现代化、易用且高性能的 [Home Assistant](https://www.home-assistant.io/) 自定义仪表盘，基于 [matt8707/ha-fusion](https://github.com/matt8707/ha-fusion) 项目改进。

<https://www.youtube.com/watch?v=D8mWruSuPOM>

[![预览](/static/preview.png)](https://www.youtube.com/watch?v=D8mWruSuPOM)

如果您觉得这个项目有用，请给这个仓库点个 🌟！

---

## 📣 版本说明

这是一个基于原版 ha-fusion 改进的版本，增加了以下特性：

- 完整的中文支持
- 更多本地化特性
- 预设户型模板系统
  - 两室一厅
  - 三室两厅
  - 别墅户型
- 智能分区管理
  - 照明控制
  - 窗帘控制
  - 空调控制
  - 监控系统
  - 音乐系统
  - 场景模式
  - 传感器监测
- 优化的用户界面
  - 全屏模式
  - 界面切换
  - 更好的移动端支持

---

## 安装说明

### Docker 安装

如果您使用的是 "容器" 或 "核心" 安装方式，可以通过 Docker 安装 ha-fusion：

1. **Docker Compose 文件**：将修改后的 [docker-compose.yml](https://github.com/18066034545/ha-fusion/blob/main/docker-compose.yml) 文件放在合适的目录中。

2. **创建容器**：
   在终端中运行以下命令来启动容器：

   ```bash
   cd path/to/docker-compose.yml
   docker-compose up -d ha-fusion
   ```

#### 更新

要更新到最新版本的 ha-fusion，运行以下命令：

```bash
docker-compose pull ha-fusion
docker-compose up -d ha-fusion
```

<details>
<summary>
   <b>其他安装方式</b>
</summary>

如果不使用 docker-compose，更新容器需要额外的步骤。每次更新时，都需要先停止当前容器，删除它，拉取新镜像，然后重新执行 docker run 命令。

```bash
docker run -d \
  --name ha-fusion \
  --network bridge \
  -p 5050:5050 \
  -v /path/to/ha-fusion:/app/data \
  -e TZ=Asia/Shanghai \
  -e HASS_URL=http://192.168.1.241:8123 \
  --restart always \
  ghcr.io/18066034545/ha-fusion
```

</details>

---

### Windows 11 下的 Docker 安装和部署

1. **安装 Docker Desktop**
   - 访问 [Docker Desktop 官网](https://www.docker.com/products/docker-desktop/)
   - 下载 Windows 版本的 Docker Desktop
   - 双击安装包进行安装
   - 安装完成后重启电脑
   - 启动 Docker Desktop 并等待其完全启动（托盘图标变为运行状态）

2. **创建项目目录**
   ```powershell
   # 创建项目目录
   mkdir C:\ha-fusion
   cd C:\ha-fusion
   
   # 创建数据目录
   mkdir data
   ```

3. **创建 docker-compose.yml 文件**
   在 `C:\ha-fusion` 目录下创建 `docker-compose.yml` 文件，内容如下：
   ```yaml
   version: '3'
   services:
     ha-fusion:
       container_name: ha-fusion
       image: ghcr.io/18066034545/ha-fusion
       ports:
         - "5050:5050"
       volumes:
         - ./data:/app/data
       environment:
         - TZ=Asia/Shanghai
         - HASS_URL=http://192.168.2.12:8123
       restart: always
   ```
   
   > 提示：
   > 1. 这里使用的是您的 Home Assistant 实际地址 `http://192.168.2.12:8123`
   > 2. 请确保您的电脑能够访问这个地址（可以在浏览器中测试）
   > 3. 如果您的 Home Assistant 启用了 SSL，请使用 `https://` 开头

4. **启动前检查**
   在启动容器前，请确保：
   - 能够在浏览器中访问 `http://192.168.2.12:8123`
   - Docker Desktop 已经启动
   - 5050 端口未被其他程序占用

5. **启动容器**
   ```powershell
   # 在 PowerShell 中执行以下命令
   cd C:\ha-fusion
   docker-compose up -d
   ```

6. **验证安装**
   - 打开浏览器访问 `http://localhost:5050`
   - 如果能看到 ha-fusion 的界面，说明安装成功

7. **常用命令**
   ```powershell
   # 查看容器状态
   docker ps
   
   # 查看容器日志
   docker logs ha-fusion
   
   # 停止容器
   docker-compose down
   
   # 更新到最新版本
   docker-compose pull ha-fusion
   docker-compose up -d
   ```

8. **故障排除**
   - 如果无法访问界面，检查防火墙是否允许 5050 端口
   - 确保 Docker Desktop 正在运行
   - 检查 Home Assistant 地址是否正确且可访问
   - 查看容器日志以获取详细错误信息

---

## 使用说明

### 户型模板

ha-fusion 提供了多个预设的户型模板，帮助您快速配置智能家居空间：

1. **两室一厅**
   - 适合小家庭
   - 包含客厅、主卧、次卧等基础空间
   - 配备基础的智能控制功能

2. **三室两厅**
   - 适合中等家庭
   - 额外包含书房空间
   - 更完整的智能控制系统

3. **别墅户型**
   - 适合大户型
   - 包含影音室、健身房等功能空间
   - 完整的智能家居解决方案

每个房间都预设了以下功能区：
- 照明控制
- 窗帘控制
- 空调控制
- 监控系统（可选）
- 音乐系统（可选）
- 场景模式
- 传感器监测

### URL 参数

这些功能仅在插件配置中暴露端口或使用 Docker 时有效。注意：使用 Ingress 时，无法读取 URL 参数。

#### 视图

要在页面加载时设置特定视图，添加 "view" 参数。例如，如果您有一个 "卧室" 视图，在 URL 后添加查询字符串 `?view=Bedroom`。

#### 菜单

要禁用菜单按钮，在 URL 后添加查询字符串 `?menu=false`。这在您想避免仪表盘被意外更改时很有用，比如在壁挂式平板电脑上。

---

## 键盘快捷键

| 按键                | 描述     |
| ------------------- | -------- |
| **f**               | 过滤     |
| **esc**             | 退出     |
| **cmd + s**         | 保存     |
| **cmd + z**         | 撤销     |
| **cmd + shift + z** | 重做     |

---

## 调试

要调试任何错误，如果您使用的是插件，请查看 "日志" 标签页；如果使用 Docker，请使用 `docker logs ha-fusion` 命令。要检查前端问题，请打开浏览器的控制台。

---

## 开发

要开始为项目做贡献，您需要先安装 node。同时建议安装 pnpm。如果您不熟悉 Svelte，建议先完成 <https://learn.svelte.dev> 的教程。

```bash
# 前置条件 (macos)
brew install node pnpm

# 安装
git clone https://github.com/18066034545/ha-fusion.git
cd ha-fusion
pnpm install

# 环境配置
cp .env.example .env
code .env

# 服务器
npm run dev -- --open

# 依赖管理
pnpm outdated
pnpm update

# 代码检查
npm run check
npm run lint
npm run format
``` 