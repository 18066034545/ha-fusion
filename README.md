# ha-fusion

[English](README.md) | [简体中文](README.zh-CN.md)

A modern, easy-to-use and performant custom [Home Assistant](https://www.home-assistant.io/) dashboard, improved based on [matt8707/ha-fusion](https://github.com/matt8707/ha-fusion).

<https://www.youtube.com/watch?v=D8mWruSuPOM>

[![preview](/static/preview.png)](https://www.youtube.com/watch?v=D8mWruSuPOM)

If you find this project useful, be sure to 🌟 this repository!

---

## 📣 Features

This is an improved version of ha-fusion with the following features:

- Full Chinese language support
- Enhanced localization features
- Pre-built house templates
  - 2 Bedroom 1 Living Room
  - 3 Bedroom 2 Living Room
  - Villa Layout
- Smart zone management
  - Lighting control
  - Curtain control
  - AC control
  - Camera system
  - Music system
  - Scene modes
  - Sensor monitoring
- Enhanced UI/UX
  - Fullscreen mode
  - Interface switching
  - Better mobile support

---

## Installation

### Docker Installation

For "Container" or "Core" installation methods, ha-fusion can be installed via Docker:

1. **Docker Compose File**: Place your edited copy of the [docker-compose.yml](https://github.com/18066034545/ha-fusion/blob/main/docker-compose.yml) file in a suitable directory.

2. **Create Container**:
   Run the following commands in your terminal to start the container:

   ```bash
   cd path/to/docker-compose.yml
   docker-compose up -d ha-fusion
   ```

#### Update

To update to the latest version of ha-fusion, run the following commands:

```bash
docker-compose pull ha-fusion
docker-compose up -d ha-fusion
```

---

### Windows 11 Docker Installation Guide

1. **Install Docker Desktop**
   - Visit [Docker Desktop Website](https://www.docker.com/products/docker-desktop/)
   - Download Windows version
   - Install and restart computer
   - Launch Docker Desktop and wait for it to start

2. **Create Project Directory**
   ```powershell
   # Create project directory
   mkdir C:\ha-fusion
   cd C:\ha-fusion
   
   # Create data directory
   mkdir data
   ```

3. **Create docker-compose.yml**
   Create `docker-compose.yml` in `C:\ha-fusion` with:
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
         - HASS_URL=http://YOUR_HA_IP:8123
       restart: always
   ```
   
   > Note:
   > 1. Replace with your Home Assistant address
   > 2. Ensure you can access this address
   > 3. Use `https://` if SSL is enabled

4. **Pre-launch Check**
   Ensure:
   - Home Assistant is accessible
   - Docker Desktop is running
   - Port 5050 is available

5. **Launch Container**
   ```powershell
   cd C:\ha-fusion
   docker-compose up -d
   ```

6. **Verify Installation**
   - Open browser and visit `http://localhost:5050`
   - You should see the ha-fusion interface

7. **Common Commands**
   ```powershell
   # Check container status
   docker ps
   
   # View logs
   docker logs ha-fusion
   
   # Stop container
   docker-compose down
   
   # Update to latest version
   docker-compose pull ha-fusion
   docker-compose up -d
   ```

8. **Troubleshooting**
   - Check firewall settings for port 5050
   - Ensure Docker Desktop is running
   - Verify Home Assistant address
   - Check container logs for details

---

## Usage Guide

### House Templates

ha-fusion provides multiple pre-built house templates to help you quickly configure your smart home:

1. **2 Bedroom 1 Living Room**
   - Suitable for small families
   - Basic rooms and functions
   - Essential smart controls

2. **3 Bedroom 2 Living Room**
   - Suitable for medium families
   - Additional study room
   - Complete smart control system

3. **Villa Layout**
   - Suitable for large homes
   - Entertainment and function rooms
   - Comprehensive smart home solution

Each room comes with:
- Lighting control
- Curtain control
- AC control
- Camera system (optional)
- Music system (optional)
- Scene modes
- Sensor monitoring

### URL Parameters

These features only work when exposing a port in the configuration or using Docker. Note that query strings cannot be read when using Ingress.

#### View

To set a particular view when the page loads, add the "view" parameter. For example, if you have a "Bedroom" view, append the query string `?view=Bedroom` to the URL.

#### Menu

To disable the menu button, append the query string `?menu=false` to the URL. This is useful for wall-mounted tablets.

---

## Keyboard Shortcuts

| Key                 | Description |
| ------------------- | ----------- |
| **f**               | filter      |
| **esc**             | exit        |
| **cmd + s**         | save        |
| **cmd + z**         | undo        |
| **cmd + shift + z** | redo        |

---

## Debug

To debug any errors, check the "Log" tab if you're using the addon, or use `docker logs ha-fusion` for Docker setups. To inspect frontend issues, open the browser's console.

---

## Development

To begin contributing to the project, you'll first need to install node. It's also recommended to install pnpm. If you're unfamiliar with Svelte, consider doing the tutorial at <https://learn.svelte.dev>

```bash
# prerequisites (macos)
brew install node pnpm

# install
git clone https://github.com/18066034545/ha-fusion.git
cd ha-fusion
pnpm install

# environment
cp .env.example .env
code .env

# server
npm run dev -- --open

# dependencies
pnpm outdated
pnpm update

# lint
npm run check
npm run lint
npm run format
```
