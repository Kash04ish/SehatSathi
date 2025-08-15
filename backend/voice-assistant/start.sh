#!/usr/bin/env bash
set -euo pipefail

export STT_WS_PORT=2700
export STT_HTTP_PORT=2701

mkdir -p models
if [ ! -d models/en-in ]; then
  curl -L -o /tmp/en.zip https://alphacephei.com/vosk/models/vosk-model-small-en-in-0.4.zip
  unzip -q /tmp/en.zip -d models
  mv models/vosk-model-small-en-in-0.4 models/en-in
fi
if [ ! -d models/hi-in ]; then
  curl -L -o /tmp/hi.zip https://alphacephei.com/vosk/models/vosk-model-small-hi-0.22.zip
  unzip -q /tmp/hi.zip -d models
  mv models/vosk-model-small-hi-0.22 models/hi-in
fi

[ -f .env ] || touch .env

echo "🚀  Starting Vosk STT WebSocket on :${STT_WS_PORT}"
python stt_server.py &

echo "🚀  Starting Node.js API on :${PORT}"
exec node server.js