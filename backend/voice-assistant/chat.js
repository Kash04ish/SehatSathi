import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function chat(userText = '') {
  const { choices } = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a concise, helpful voice assistant.' },
      { role: 'user',   content: userText }
    ]
  });
  return choices[0].message.content.trim();
}
