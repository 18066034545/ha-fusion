# ha-fusion

[English](README.md) | [简体中文](README.zh-CN.md)

A modern, user-friendly, and high-performance [Home Assistant](https://www.home-assistant.io/) custom dashboard, improved based on the [matt8707/ha-fusion](https://github.com/matt8707/ha-fusion) project.

<https://www.youtube.com/watch?v=D8mWruSuPOM>

[![Preview](/static/preview.png)](https://www.youtube.com/watch?v=D8mWruSuPOM)

If you find this project useful, please give it a 🌟!

---

## 📣 Features

This is an improved version of the original ha-fusion, with the following additional features:

- Complete Chinese language support
- Enhanced localization features
- Pre-set floor plan templates
  - Two-bedroom layout
  - Three-bedroom layout
  - Villa layout
- Smart zone management
  - Lighting control
  - Curtain control
  - AC control
  - Surveillance system
  - Music system
  - Scene modes
  - Sensor monitoring
- Optimized user interface
  - Full-screen mode
  - Interface switching
  - Better mobile support

### Latest Optimizations

- Improved component architecture
  - Enhanced template selection logic
  - Optimized top navigation layout
  - Better component reusability
- Performance improvements
  - Reduced unnecessary re-renders
  - Optimized state management
  - Enhanced loading performance
- Better type definitions
  - Added TypeScript type checking
  - Enhanced code reliability
  - Improved development experience

---

## Installation

### Add-on Installation

1. **Add Add-on Repository**
   - In Home Assistant, go to "Settings" -> "Add-ons" -> "Add-on Store"
   - Click the three dots in the top right corner, select "Repositories"
   - Add repository URL: `https://github.com/symi-daguo/addon-ha-fusion`
   - Click "Add"

2. **Install Add-on**
   - Find "HA Fusion" in the Add-on Store
   - Click "Install"
   - Wait for installation to complete
   - Start the Add-on

3. **Configuration**
   - In the Add-on configuration page, you can set the following options:
     - `ssl`: Enable/disable SSL
     - `certfile`: SSL certificate file path
     - `keyfile`: SSL key file path
   - Save configuration and restart Add-on

4. **Access**
   - After installation, you can access it by:
     - Clicking "Open Web UI"
     - Or visiting `http://your-ha-ip:5050`

### Docker Installation

If you're using the "Container" or "Core" installation method, you can install ha-fusion via Docker:

1. **Docker Compose File**: Place the modified [docker-compose.yml](https://github.com/symi-daguo/ha-fusion/blob/main/docker-compose.yml) file in an appropriate directory.

2. **Create Container**:
   Run the following commands in your terminal to start the container:

   ```bash
   cd path/to/docker-compose.yml
   docker-compose up -d ha-fusion
   ```

#### Update

To update to the latest version of ha-fusion, run:

```bash
docker-compose pull ha-fusion
docker-compose up -d ha-fusion
```

---

### Docker Installation on Windows 11

1. **Install Docker Desktop**
   - Visit [Docker Desktop website](https://www.docker.com/products/docker-desktop/)
   - Download Docker Desktop for Windows
   - Double-click the installer
   - Restart your computer after installation
   - Launch Docker Desktop and wait for it to start completely

2. **Create Project Directory**
   ```powershell
   # Create project directory
   mkdir C:\ha-fusion
   cd C:\ha-fusion
   
   # Create data directory
   mkdir data
   ```

3. **Create docker-compose.yml File**
   Create a `docker-compose.yml` file in `C:\ha-fusion` with the following content:
   ```yaml
   version: '3'
   services:
     ha-fusion:
       container_name: ha-fusion
       image: ghcr.io/symi-daguo/ha-fusion
       ports:
         - "5050:5050"
       volumes:
         - ./data:/app/data
       environment:
         - TZ=Asia/Shanghai
         - HASS_URL=http://192.168.2.12:8123
       restart: always
   ```
   
   > Note:
   > 1. Use your actual Home Assistant address
   > 2. Ensure your computer can access this address
   > 3. If your Home Assistant has SSL enabled, use `https://` prefix

4. **Pre-launch Check**
   Before starting the container, ensure:
   - Home Assistant is accessible
   - Docker Desktop is running
   - Port 5050 is not in use

5. **Start Container**
   ```powershell
   cd C:\ha-fusion
   docker-compose up -d
   ```

6. **Verify Installation**
   - Open browser and visit `http://localhost:5050`
   - If you see the ha-fusion interface, installation is successful

7. **Common Commands**
   ```powershell
   # Check container status
   docker ps
   
   # View container logs
   docker logs ha-fusion
   
   # Stop container
   docker-compose down
   
   # Update to latest version
   docker-compose pull ha-fusion
   docker-compose up -d
   ```

8. **Troubleshooting**
   - If interface is not accessible, check if firewall allows port 5050
   - Ensure Docker Desktop is running
   - Verify Home Assistant address is correct and accessible
   - Check container logs for detailed error information

---

## Usage Guide

### Floor Plan Templates

ha-fusion provides multiple pre-set floor plan templates to help you quickly configure your smart home space:

1. **Two-bedroom Layout**
   - Suitable for small families
   - Includes basic rooms and functions
   - Basic smart control features

2. **Three-bedroom Layout**
   - Suitable for medium-sized families
   - Additional study room space
   - More complete smart control system

3. **Villa Layout**
   - Suitable for large homes
   - Includes media room, gym, and other functional spaces
   - Complete smart home solution

Each room comes with the following pre-set function areas:
- Lighting control
- Curtain control
- AC control
- Surveillance system (optional)
- Music system (optional)
- Scene modes
- Sensor monitoring

### URL Parameters

These features are only effective when ports are exposed in configuration or when using Docker. Note: URL parameters cannot be read when using Ingress.

#### Views

To set a specific view on page load, add the "view" parameter. For example, if you have a "Bedroom" view, add the query string `?view=Bedroom` to the URL.

#### Menu

To disable the menu button, add the query string `?menu=false` to the URL. This is particularly useful for wall-mounted tablets.

---

## Keyboard Shortcuts

| Key                 | Description |
| ------------------ | ----------- |
| **f**              | Filter      |
| **esc**            | Exit        |
| **cmd + s**        | Save        |
| **cmd + z**        | Undo        |
| **cmd + shift + z**| Redo        |

---

## Debugging

To debug any errors, check the "Logs" tab if you're using the add-on, or use `docker logs ha-fusion` if using Docker. To check frontend issues, open your browser's console.

---

## Development

To start contributing to the project, you'll need to have node installed. Installing pnpm is also recommended. If you're not familiar with Svelte, it's recommended to complete the tutorial at <https://learn.svelte.dev>.

```bash
# Prerequisites (macos)
brew install node pnpm

# Installation
git clone https://github.com/symi-daguo/ha-fusion.git
cd ha-fusion
pnpm install

# Environment setup
cp .env.example .env
code .env

# Server
npm run dev -- --open

# Dependencies
pnpm outdated
pnpm update

# Code checks
npm run check
npm run lint
npm run format
```
