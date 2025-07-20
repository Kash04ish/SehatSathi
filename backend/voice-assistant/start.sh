#!/usr/bin/env bash
set -euo pipefail

###############################################################################
# 0. Configuration
###############################################################################
# WebSocket port for STT
export WS_PORT=2700
# HTTP health-check port for STT (must not collide with $PORT)
export HTTP_PORT=2701

###############################################################################
# 1. Download compact Vosk models at runtime
###############################################################################
mkdir -p models

if [ ! -d models/en-in ]; then
  echo "⇣  Downloading en-IN model…"
  curl -L -o /tmp/en.zip \
       https://alphacephei.com/vosk/models/vosk-model-small-en-in-0.4.zip
  unzip -q /tmp/en.zip -d models
  mv models/vosk-model-small-en-in-0.4 models/en-in
fi

if [ ! -d models/hi-in ]; then
  echo "⇣  Downloading hi-IN model…"
  curl -L -o /tmp/hi.zip \
       https://alphacephei.com/vosk/models/vosk-model-small-hi-0.22.zip
  unzip -q /tmp/hi.zip -d models
  mv models/vosk-model-small-hi-0.22 models/hi-in
fi

###############################################################################
# 2. Ensure a .env exists so dotenv doesn’t crash
###############################################################################
[ -f .env ] || touch .env

###############################################################################
# 3. Launch the two servers
###############################################################################
echo "🚀  Starting Vosk STT WebSocket on :${WS_PORT}"
python stt_server.py &

echo "🚀  Starting Vosk HTTP health on :${HTTP_PORT}"
# health‐check is in the same process as stt_server.py, so no extra command

echo "🚀  Starting Node.js API on :${PORT}"
exec node server.js