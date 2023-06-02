#!/usr/bin/env sh

set -eu

server_env=$1

# TODO: update this for test/prod deployment if different
if [[ $server_env = 'development' ]]; then
    node server.js
else
    # only building and then mounting the volume over to nginx
    # yarn run build # && yarn run build:start
    node server.js
fi