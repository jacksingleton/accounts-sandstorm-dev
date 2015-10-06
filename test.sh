#!/usr/bin/env bash

set -euo pipefail

if [ $(which chrome) ]; then
  export CHROME_BIN=chrome
elif [ $(which chromium) ]; then
  export CHROME_BIN=chromium
fi

if [ ${DEBUG-1} -ne "0" ]; then
  export DEBUG=1
  export JASMINE_DEBUG=1
  export VELOCITY_DEBUG=1
  export VELOCITY_DEBUG_MIRROR=1
fi

export JASMINE_SERVER_UNIT=0
export JASMINE_SERVER_INTEGRATION=0
export JASMINE_CLIENT_UNIT=0
export JASMINE_CLIENT_INTEGRATION=1

pkill -f meteor || true

meteor --test --release velocity:METEOR@1.1.0.2_3
