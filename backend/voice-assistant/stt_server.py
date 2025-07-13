
import asyncio
import json
import os
import sys
from vosk import Model, KaldiRecognizer
import websockets
from websockets.exceptions import ConnectionClosedOK

MODEL_PATH = os.getenv("VOSK_MODEL_PATH", "./models/en-in")
SAMPLE_RATE = 16000
WS_PORT = 2700

if not os.path.exists(MODEL_PATH):
    print(f"Model path not found: {MODEL_PATH}", file=sys.stderr)
    sys.exit(1)

model = Model(MODEL_PATH)

async def handler(ws):
    rec = KaldiRecognizer(model, SAMPLE_RATE)
    try:
        async for msg in ws:
            if rec.AcceptWaveform(msg):
                data = json.loads(rec.Result())
                try:
                    await ws.send(json.dumps({
                        "text": data.get("text", ""),
                        "final": True
                    }))
                except ConnectionClosedOK:
                    break
            else:
                data = json.loads(rec.PartialResult())
                try:
                    await ws.send(json.dumps({
                        "text": data.get("partial", ""),
                        "final": False
                    }))
                except ConnectionClosedOK:
                    break
    except ConnectionClosedOK:
        
        pass

async def main():
    async with websockets.serve(handler, "0.0.0.0", WS_PORT):
        print(f"Python STT WS running on ws://localhost:{WS_PORT}")
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    asyncio.run(main())
