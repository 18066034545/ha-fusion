#!/usr/bin/with-contenv bashio
declare certfile
declare keyfile

bashio::config.require.ssl

if bashio::config.true 'ssl'; then
    certfile=$(bashio::config 'certfile')
    keyfile=$(bashio::config 'keyfile')

    mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.orig
    bashio::var.json \
        certfile "$certfile" \
        keyfile "$keyfile" \
        | tempio \
            -template /etc/nginx/templates/nginx.ssl.conf \
            -out /etc/nginx/nginx.conf
fi 