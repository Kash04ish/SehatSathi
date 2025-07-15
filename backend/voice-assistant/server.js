import cors from 'cors';
import 'dotenv/config';
console.log("OPENAI_API_KEY is:", process.env.OPENAI_API_KEY);
import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { initSTT } from './stt.js';
import { chat }    from './chat.js';
import { tts }     from './tts.js';

const app  = express();
const port = process.env.PORT || 8080;

app.use(express.json({ limit: '2mb' }));
app.use(cors());
app.post('/chat', async (req, res) => {
  const answer = await chat(req.body.text || '');
  res.json({ answer });
});

app.post('/tts', async (req, res) => {
  const mp3 = await tts(req.body.text);
  res.set('Content-Type', 'audio/mpeg').send(mp3);
});

const httpServer = createServer(app);
const wss = new WebSocketServer({ server: httpServer, path: '/ws/stt' });

initSTT(wss);

httpServer.listen(port, () =>
  console.log(`Voice backend running at http://localhost:${port}`)
);
