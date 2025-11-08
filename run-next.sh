#!/bin/bash
# Script to run Next.js with local node_modules priority
cd "$(dirname "$0")"
export NODE_PATH="$(pwd)/node_modules:${NODE_PATH}"
exec node_modules/.bin/next "$@"

