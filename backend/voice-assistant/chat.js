// // feature/hindi-support
// // chat.js – bilingual (Hindi / English)
// // -----------------------------------------------------------------------------

// import fs from 'fs';
// import path from 'path';

// const envPath = path.resolve(process.cwd(), '.env');
// console.log("❗️ Checking .env path:", envPath);
// console.log(">>> RAW FILE CONTENT:\n", fs.readFileSync(envPath, 'utf8'));
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(process.cwd(), '.env') });
// dotenv.config();
// console.log("Loaded OpenAI key:", process.env.OPENAI_API_KEY?.slice(0, 10)); 
// import OpenAI from 'openai';
// dotenv.config();

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// /**
//  * Very lightweight language detector: checks for any Devanagari code points.
//  * Returns 'hi' for Hindi, 'en' otherwise.
//  */
// function detectLang(str = '') {
//   return /[\u0900-\u097F]/.test(str) ? 'hi' : 'en';
// }

// /**
//  * Send user text to OpenAI Chat Completion and return assistant answer
//  * in the same language (Hindi or English).
//  */
// export async function chat(userText = '') {
//   const lang = detectLang(userText);

//   const systemPrompt =
//     lang === 'hi'
//       ? 'आप एक संक्षिप्त, सहायक वॉयस असिस्टेंट हैं। अपने सभी उत्तर **हिंदी** में दीजिए। यदि उपयोगकर्ता भाषा बदलता है तो उसका अनुसरण कीजिये।'
//       : 'You are a concise, helpful voice assistant. If the user switches language, follow the user.';

//   const completion = await openai.chat.completions.create({
//     model: 'gpt-4o-mini',
//     messages: [
//       { role: 'system', content: systemPrompt },
//       { role: 'user',   content: userText }
//     ]
//   });

//   return completion.choices[0].message.content.trim();
//       { role: 'system', content: 'You are a concise, helpful voice assistant.' },
//       { role: 'user', content: userText }
//     ]
//   });

//   return choices[0].message.content.trim();
// }
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';

// Load .env
const envPath = path.resolve(process.cwd(), '.env');
console.log("❗️ Checking .env path:", envPath);
console.log(">>> RAW FILE CONTENT:\n", fs.readFileSync(envPath, 'utf8'));
dotenv.config({ path: envPath });

console.log("Loaded OpenAI key:", process.env.OPENAI_API_KEY?.slice(0, 10));

// Initialize OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Very lightweight language detector: checks for any Devanagari code points.
 * Returns 'hi' for Hindi, 'en' otherwise.
 */
function detectLang(str = '') {
  return /[\u0900-\u097F]/.test(str) ? 'hi' : 'en';
}

/**
 * Send user text to OpenAI Chat Completion and return assistant answer
 * in the same language (Hindi or English).
 */
export async function chat(userText = '') {
  const lang = detectLang(userText);

  const systemPrompt = lang === 'hi'
    ? 'आप एक संक्षिप्त, सहायक वॉयस असिस्टेंट हैं। अपने सभी उत्तर **हिंदी** में दीजिए। यदि उपयोगकर्ता भाषा बदलता है तो उसका अनुसरण कीजिये।'
    : 'You are a concise, helpful voice assistant. If the user switches language, follow the user.';

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userText }
      ]
    });

    return completion.choices[0].message.content.trim();
  } catch (err) {
    console.error("❌ OpenAI chat failed:", err);
    return "⚠️ I'm having trouble responding right now.";
  }
}
