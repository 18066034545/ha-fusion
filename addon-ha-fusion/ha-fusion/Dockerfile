ARG BUILD_FROM
FROM ${BUILD_FROM}

# 设置环境变量
ENV \
    LANG="en_US.UTF-8" \
    LANGUAGE="en_US:en" \
    LC_ALL="en_US.UTF-8" \
    TERM="xterm-256color"

# 安装依赖
RUN \
    apk add --no-cache \
        nodejs \
        npm \
        git \
        nginx

# 复制 HA Fusion 文件
WORKDIR /opt
RUN git clone --depth=1 https://github.com/symi-daguo/ha-fusion .

# 设置工作目录
WORKDIR /opt/ha-fusion

# 安装依赖并构建
RUN npm install && \
    npm run build

# 复制 nginx 配置
COPY rootfs /

# 设置权限
RUN chmod a+x /etc/services.d/*/run && \
    chmod a+x /etc/cont-init.d/*

# 构建参数
ARG BUILD_ARCH
ARG BUILD_DATE
ARG BUILD_DESCRIPTION
ARG BUILD_NAME
ARG BUILD_REF
ARG BUILD_REPOSITORY
ARG BUILD_VERSION

# 标签
LABEL \
    io.hass.name="${BUILD_NAME}" \
    io.hass.description="${BUILD_DESCRIPTION}" \
    io.hass.arch="${BUILD_ARCH}" \
    io.hass.type="addon" \
    io.hass.version=${BUILD_VERSION} \
    maintainer="symi-daguo" \
    org.opencontainers.image.title="${BUILD_NAME}" \
    org.opencontainers.image.description="${BUILD_DESCRIPTION}" \
    org.opencontainers.image.vendor="Home Assistant Add-ons" \
    org.opencontainers.image.authors="symi-daguo" \
    org.opencontainers.image.licenses="MIT" \
    org.opencontainers.image.url="https://github.com/symi-daguo" \
    org.opencontainers.image.source="https://github.com/${BUILD_REPOSITORY}" \
    org.opencontainers.image.documentation="https://github.com/${BUILD_REPOSITORY}/blob/main/README.md" \
    org.opencontainers.image.created=${BUILD_DATE} \
    org.opencontainers.image.revision=${BUILD_REF} \
    org.opencontainers.image.version=${BUILD_VERSION} 