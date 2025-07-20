#!/usr/bin/env bash
set -euo pipefail

###############################################################################
# 0. Configuration ─── choose unique, internal ports for the STT sidecar
###############################################################################
export STT_WS_PORT=${STT_WS_PORT:-2700}     # WebSocket for audio → text
export STT_HTTP_PORT=${STT_HTTP_PORT:-2701} # Tiny HTTP health endpoint

###############################################################################
# 1. Download compact Vosk models at runtime (keeps slug small)
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
# 2. Ensure a .env exists so dotenv doesn’t choke
###############################################################################
[ -f .env ] || touch .env

###############################################################################
# 3. Launch the two services
###############################################################################
echo "🚀  Starting Vosk STT WebSocket on :${STT_WS_PORT}"
python stt_server.py &    # background – shares the same process for health

echo "🚀  Starting Node.js API on :${PORT}"
exec node server.js       # foreground; keeps container alive