#!/usr/bin/env bash
set -euo pipefail

###############################################################################
# 1. Download compact Vosk models at runtime (≈ 80 MB total, 300 MB RAM)
###############################################################################
mkdir -p models

# ── Indian English ───────────────────────────────────────────────────────────
if [ ! -d models/en-in ]; then
  echo "⇣  Downloading Vosk en-IN model (0.4)…"
  curl -L -o /tmp/en.zip \
       https://alphacephei.com/vosk/models/vosk-model-small-en-in-0.4.zip
  unzip -q /tmp/en.zip -d models
  mv models/vosk-model-small-en-in-0.4 models/en-in
fi

# ── Hindi ────────────────────────────────────────────────────────────────────
if [ ! -d models/hi-in ]; then
  echo "⇣  Downloading Vosk hi model (0.22)…"
  curl -L -o /tmp/hi.zip \
       https://alphacephei.com/vosk/models/vosk-model-small-hi-0.22.zip
  unzip -q /tmp/hi.zip -d models
  mv models/vosk-model-small-hi-0.22 models/hi-in
fi

###############################################################################
# 2. Ensure a .env file exists so dotenv doesn’t throw ENOENT on Render
###############################################################################
[ -f .env ] || touch .env

###############################################################################
# 3. Launch both servers (Render exposes only $PORT; Python runs internally)
###############################################################################
echo "🚀  Starting Vosk STT WebSocket on :2700"
python stt_server.py &

echo "🚀  Starting Node.js API on :${PORT:-3000}"
exec node server.js