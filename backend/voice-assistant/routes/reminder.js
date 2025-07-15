import express from 'express';
import Reminder from '../models/Reminder.js';

const router = express.Router();

// GET /api/reminders/due?userId=…
router.get('/due', async (req, res, next) => {
  const now = new Date();
  const list = await Reminder.find({
    userId: req.query.userId,
    due: { $lte: now },
    sent: false
  });
  res.json({ reminders: list });
});

// POST /api/reminders/:id/ack
router.post('/:id/ack', async (req, res, next) => {
  await Reminder.findByIdAndUpdate(req.params.id, { acknowledged: true });
  res.json({ ok: true });
});

export default router;
