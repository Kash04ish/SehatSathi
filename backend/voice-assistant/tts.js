import 'dotenv/config';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function tts(text) {
  const speech = await openai.audio.speech.create({
    model: 'tts-1',
    voice: 'alloy',
    input: text,
    response_format: 'mp3'
  });
  return Buffer.from(await speech.arrayBuffer());
}
