import WebSocket from 'ws';

// const PY_WS_URL = 'ws://localhost:2700';
const PY_WS_URL = 'wss://sehatsathi-sttt-server.onrender.com';

export function initSTT(wss) {
  wss.on('connection', (clientWs) => {
    const pyWs = new WebSocket(PY_WS_URL);

    pyWs.on('message', (msg) => clientWs.send(msg));
    pyWs.on('error', (err) => { console.error('Python STT error:', err); clientWs.close(); });

    clientWs.on('message', (audioChunk) => {
      if (pyWs.readyState === WebSocket.OPEN) pyWs.send(audioChunk);
    });

    const cleanup = () => { if (pyWs.readyState === WebSocket.OPEN) pyWs.close(); };
    clientWs.on('close', cleanup);
    clientWs.on('error', cleanup);
  });

  console.log('STT proxy ready – forwarding to', PY_WS_URL);
}
