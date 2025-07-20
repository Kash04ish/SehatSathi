#!/usr/bin/env bash
set -e

# ────────────────────────────────────────────────
# Download compact Vosk models at runtime
# en-IN 0.4  ≈ 36 MB   •   hi 0.22  ≈ 42 MB
# ────────────────────────────────────────────────
mkdir -p models

# Indian-English (unchanged: 0.4 is still the newest small model)
if [ ! -d models/en-in ]; then
  curl -L -o /tmp/en.zip \
       https://alphacephei.com/vosk/models/vosk-model-small-en-in-0.4.zip
  unzip -q /tmp/en.zip -d models
  mv models/vosk-model-small-en-in-0.4 models/en-in
fi

# Hindi (newest small model is 0.22 — was 0.4 in the earlier script)
if [ ! -d models/hi-in ]; then
  curl -L -o /tmp/hi.zip \
       https://alphacephei.com/vosk/models/vosk-model-small-hi-0.22.zip
  unzip -q /tmp/hi.zip -d models
  mv models/vosk-model-small-hi-0.22 models/hi-in
fi

# ────────────────────────────────────────────────
# Launch both servers inside the same Render Web Service
# ────────────────────────────────────────────────
python stt_server.py &      # WebSocket STT on ws://localhost:2700
node   server.js            # Express API on $PORT (set by Render)