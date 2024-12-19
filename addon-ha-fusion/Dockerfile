# ha base image
ARG BUILD_FROM

# first stage, can't use alpine for building armv7
FROM registry.cn-hangzhou.aliyuncs.com/library/node:22 AS builder
WORKDIR /app

### remote
# clone, build and remove repo example data
RUN git clone --depth 1 https://github.com/symi-daguo/ha-fusion . && \
    npm config set registry https://registry.npmmirror.com && \
    npm install --verbose && \
    npm run build && \
    npm prune --omit=dev && \
    rm -rf ./data/*

# second stage
FROM ${BUILD_FROM}
WORKDIR /rootfs

# copy files to /rootfs
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/server.js .
COPY --from=builder /app/package.json .

# copy run
COPY run.sh /

# install node, symlink persistent data and chmod run
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && \
    apk add --no-cache nodejs-current && \
    ln -s /rootfs/data /data && \
    chmod a+x /run.sh

# set environment
ENV PORT=8099 \
    NODE_ENV=production \
    ADDON=true

CMD [ "/run.sh" ]
