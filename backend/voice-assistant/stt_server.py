#!/usr/bin/env python3
"""
stt_server.py – WebSocket wrapper around Vosk for English & Hindi

* Defaults to English model at ./models/en-in
* Optional Hindi model at ./models/hi-in
* Client MAY send a JSON control packet as the very first message:
      {"lang": "hi"}          # or "en"
  If so, that model will be used for the remainder of the connection.
* Subsequent messages must be raw PCM 16-bit little-endian mono at 16 kHz.
* Server streams back JSON packets:
      {"text": "<partial>", "final": false}
      {"text": "<final>",  "final": true}
"""

import asyncio
import json
import os
import sys
from typing import Dict, Optional

from vosk import Model, KaldiRecognizer
import websockets
from websockets.exceptions import ConnectionClosedOK

DEFAULT_MODEL_PATH = os.getenv("VOSK_MODEL_PATH", "./models/en-in")
EXTRA_MODELS: Dict[str, str] = {
    "hi": "./models/hi-in",
    "en": DEFAULT_MODEL_PATH,   # alias for clarity
}

SAMPLE_RATE = 16000
# WS_PORT = int(os.getenv("STT_WS_PORT", "2700"))
WS_PORT = int(os.getenv("PORT", "2700"))


# Pre-load default model; others will lazy-load on demand
if not os.path.exists(DEFAULT_MODEL_PATH):
    print(f"Model path not found: {DEFAULT_MODEL_PATH}", file=sys.stderr)
    sys.exit(1)

_cached_models: Dict[str, Model] = {"en": Model(DEFAULT_MODEL_PATH)}

def get_model(lang: str) -> Model:
    """Return (and cache) Vosk Model for given language code."""
    if lang not in _cached_models:
        path = EXTRA_MODELS.get(lang)
        if not path or not os.path.exists(path):
            print(f"Falling back to English – model not found for {lang}", file=sys.stderr)
            return _cached_models["en"]
        _cached_models[lang] = Model(path)
    return _cached_models[lang]

async def send_result(ws, text: str, final: bool):
    """Utility to send recognizer result JSON."""
    await ws.send(json.dumps({"text": text, "final": final}))

async def handle_connection(ws):
    # ---- Optional language control packet ----------------------------------
    try:
        first_msg = await ws.recv()
    except ConnectionClosedOK:
        return

    chosen_lang: str = "en"
    recogniser: Optional[KaldiRecognizer] = None

    if isinstance(first_msg, (bytes, bytearray)):
        # No control packet – treat as audio chunk and use default model
        recogniser = KaldiRecognizer(get_model("en"), SAMPLE_RATE)
        await process_audio_stream(ws, recogniser, first_msg)
        return

    # first message was text → try to parse JSON
    try:
        cfg = json.loads(first_msg)
        if isinstance(cfg, dict) and cfg.get("lang") in EXTRA_MODELS:
            chosen_lang = cfg["lang"]
            recogniser = KaldiRecognizer(get_model(chosen_lang), SAMPLE_RATE)
        else:
            recogniser = KaldiRecognizer(get_model("en"), SAMPLE_RATE)
    except json.JSONDecodeError:
        recogniser = KaldiRecognizer(get_model("en"), SAMPLE_RATE)

    # Now process remaining audio chunks
    await process_audio_stream(ws, recogniser)

async def process_audio_stream(ws, recogniser: KaldiRecognizer, first_chunk: bytes = None):
    """Read raw PCM chunks from websocket, stream partial & final results."""
    try:
        if first_chunk is not None:
            if recogniser.AcceptWaveform(first_chunk):
                result = json.loads(recogniser.Result())
                await send_result(ws, result.get("text", ""), True)
            else:
                partial = json.loads(recogniser.PartialResult())
                await send_result(ws, partial.get("partial", ""), False)

        async for msg in ws:
            if recogniser.AcceptWaveform(msg):
                result = json.loads(recogniser.Result())
                await send_result(ws, result.get("text", ""), True)
            else:
                partial = json.loads(recogniser.PartialResult())
                await send_result(ws, partial.get("partial", ""), False)
    except ConnectionClosedOK:
        pass

async def main():
    async with websockets.serve(handle_connection, "0.0.0.0", WS_PORT, max_size=None):
        print(f"🗣️  STT WS (multi-lingual) running on ws://localhost:{WS_PORT}")
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    asyncio.run(main())
