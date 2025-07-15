// // <<<<<<< HEAD
// import cors from 'cors';
// import 'dotenv/config';
// console.log("OPENAI_API_KEY is:", process.env.OPENAI_API_KEY);
// import express from 'express';
// import { createServer } from 'http';
// import { WebSocketServer } from 'ws';
// // =======
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';

// dotenv.config();


// import express from 'express';
// import { createServer } from 'http';
// import { WebSocketServer } from 'ws';
// // import prescriptionRoutes from './routes/prescription.js';

// // >>>>>>> 27d426cbb6ae4716e01cbc5c3eb710e15ab7904b
// import { initSTT } from './stt.js';
// import { chat }    from './chat.js';
// import { tts }     from './tts.js';

// // ─── NEW: load our prescription/reminder feature ───────────────────────────────
// import prescriptionRoutes from './routes/prescription.js';
// import reminderRoutes     from './routes/reminder.js';
// import startReminderCron  from './scheduler/reminderCron.js';
// // ───────────────────────────────────────────────────────────────────────────────

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser:    true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => {
//     console.error('❌ MongoDB connection error', err);
//     process.exit(1);
//   });

// const app  = express();
// const port = process.env.PORT || 8080;

// app.use(express.json({ limit: '2mb' }));
// // <<<<<<< HEAD
// app.use(cors());
// // =======

// // ─── MOUNT prescription & reminder routes ─────────────────────────────────────
// app.use('/api/prescription', prescriptionRoutes);
// app.use('/api/reminders',    reminderRoutes);

// // ───────────────────────────────────────────────────────────────────────────────

// // >>>>>>> 27d426cbb6ae4716e01cbc5c3eb710e15ab7904b
// app.post('/chat', async (req, res) => {
//   const answer = await chat(req.body.text || '');
//   res.json({ answer });
// });

// app.post('/tts', async (req, res) => {
//   const mp3 = await tts(req.body.text);
//   res.set('Content-Type', 'audio/mpeg').send(mp3);
// });

// const httpServer = createServer(app);
// const wss = new WebSocketServer({ server: httpServer, path: '/ws/stt' });

// initSTT(wss);

// httpServer.listen(port, () => {
//   console.log(`Voice backend running at http://localhost:${port}`);
//   // start the background job that flips due reminders to “sent”
//   startReminderCron();
// });
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

// import prescriptionRoutes from './routes/prescription.js';
import medicineInfoRoutes from './routes/medicineInfo.js';

import { initSTT } from './stt.js';
import { chat }    from './chat.js';
import { tts }     from './tts.js';

import prescriptionRoutes from './routes/prescription.js';
import reminderRoutes     from './routes/reminder.js';
import startReminderCron  from './scheduler/reminderCron.js';

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser:    true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error', err);
    process.exit(1);
  });

const app  = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json({ limit: '2mb' }));

app.use('/api/prescription', prescriptionRoutes);
app.use('/api/reminders',    reminderRoutes);

app.use('/api/med-info', medicineInfoRoutes);

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

httpServer.listen(port, () => {
  console.log(`Voice backend running at http://localhost:${port}`);
  startReminderCron();
});
