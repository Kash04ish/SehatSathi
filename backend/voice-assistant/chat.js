// import OpenAI from 'openai';
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// export async function chat(userText = '') {
//   const { choices } = await openai.chat.completions.create({
//     model: 'gpt-4o-mini',
//     messages: [
//       { role: 'system', content: 'You are a concise, helpful voice assistant.' },
//       { role: 'user',   content: userText }
//     ]
//   });
//   return choices[0].message.content.trim();
// }
// chat.js
import fs from 'fs';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env');
console.log("❗️ Checking .env path:", envPath);
console.log(">>> RAW FILE CONTENT:\n", fs.readFileSync(envPath, 'utf8'));
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config();
console.log("Loaded OpenAI key:", process.env.OPENAI_API_KEY?.slice(0, 10)); 
import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function chat(userText = '') {
  const { choices } = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a concise, helpful voice assistant.' },
      { role: 'user', content: userText }
    ]
  });

  return choices[0].message.content.trim();
}
