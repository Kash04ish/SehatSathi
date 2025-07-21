## DEPLOYED LINK: https://sehat-sathi-umber.vercel.app/

# SehatSathi- Voice‑First AI Health Companion for Elderly Bharat

Whether you’re in a city or a village, getting medical tests and health advice should be simple, fast, and stress-free.
**SehatSathi** is a multilingual voice assistant that helps older adults understand medications, talk menatal & physical well being, manage prescriptions, and receive timely pill reminders - even on low-end phones and slow networks.

---

## Features
- **Voice-Based Interaction** - Users talk to the assistant instead of typing.
- **Snap & Understand Prescriptions** - Upload images to extract medicine and dosage info.
- **Smart Pill Reminders** - Cron-based engine alerts users when it’s time to take medication.
- **Bilingual Experience** - Fully functional in **Hindi** and **English** (transliteration + TTS). (More translations will be added in next phase)
- **AI Chat Support** - Built-in conversational AI for symptom checking and daily health guidance.
- **Mental Health Support** - Encourages emotional check-ins and well-being via chat.

---

## Tech Stack Overview

| Layer         | Technology / Tool                                       |
|---------------|---------------------------------------------------------|
| Frontend      | ReactJS + Tailwind CSS + Vite                           |
| Backend       | Node.js, Express.js, Python                             |
| Database      | MongoDB                                                 |
| AI Services   | OpenAI API                                              |
| STT (Voice)   | Vosk + Python WebSocket Server                          |
| TTS (Voice)   | OpenAI Text-to-Speech API                               |
| Scheduler     | 'node-cron' for time-based pill reminders               |
| Auth          | Clerk (frontend user management)                        |
| Deployment    | Vercel (frontend) + Railway / Localhost (backend)       |

---

# Run Locally

For FRONTEND: 

## Folder Map
frontend/
├── public/             
├── src/
│   ├── assets/          
│   ├── components/     
│   │   └── dashboard/
│   ├── pages/           
│   ├── App.jsx          
│   ├── main.jsx        
├── index.html          
├── tailwind.config.js   
├── vite.config.mjs     
└── package.json  

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Kash04ish/SehatSathi.git
cd SehatSathi/frontend

# Install dependencies
npm install

# Start the dev server
npm run dev
```

For BACKEND

## Tech stack

| Layer     | What we used                                                           |
| --------- | ---------------------------------------------------------------------- |
| STT       | Vosk models served via Python WebSocket (python/stt_server.py)       |
| Chat      | GPT‑4o‑mini through a thin Express wrapper (chat.js)                 |
| TTS       | OpenAI TTS endpoint (tts.js)                                         |
| Data      | MongoDB + Mongoose for users, prescriptions, reminders                 |
| Scheduler | Node‑cron job fires queries every minute (scheduler/reminderCron.js) |

---

##  Setup Instructions

```bash
# clone & install JS deps
git clone https://github.com/Kash04ish/SehatSathi.git
cd SehatSathi && npm install

# Python venv (for STT)
python -m venv .venv && source .venv/bin/activate
pip install -r python/requirements.txt

# Copy .env.sample to .env and fill keys

# Run services in two shells
python python/stt_server.py        # STT micro‑service
npm start                        # API server on :8080


Default endpoints: /chat, /tts, /api/prescription/analyze, /api/reminders.
```

---

## Folder map
backend/        Express API
  models/       Mongoose schemas
  routes/       Feature routers
  scheduler/    Cron jobs
python/         Vosk STT service


---

## Additional Feature Implemented not in this repo but tested: Local Events(Ticketmaster Integration) & Website Translate(LibreTranslate) [Not included in main repo as mentor said to just test it locally using docker as APIs weren’t free and docker needs to be on for all the time to keep site working during development and testing]

To self-host LibreTranslate API using Docker.
LibreTranslate is a free and open-source machine translation API. Hosting it locally or on your server lets you avoid rate limits and external API costs.


## How I Hosted LibreTranslate using Docker

1️. Pull the LibreTranslate Docker Image
docker pull libretranslate/libretranslate

2️. Run the LibreTranslate Docker Container
docker run -p 5000:5000 libretranslate/libretranslate

The API will be available at:
http://localhost:5000

------------------------------------------------------------------

# Nearby Events API (Ticketmaster Integration)

This API fetches *nearby events* based on user location using the *Ticketmaster Discovery API (v2)*.

It simplifies event data like title, date, venue, and image, and handles cases where no events are found.

---

## *API Endpoint*

### GET /events/nearby

Fetches events near a specific latitude and longitude.

---

## *Query Parameters*

| Parameter | Type   | Required   | Description                      |
|-----------|--------|------------|----------------------------------|
| lat       | string |      Yes   | Latitude of the location         |
| lon       | string |      Yes   | Longitude of the location        |
| radius    | string |      No    | Search radius in km (default: 10)|

---

## *Example Request*

```bash
GET /events/nearby?lat=28.6139&lon=77.2090&radius=15
```

## How It Works
1. User interacts via a chat interface.
2. Symptoms or concerns are processed by an AI engine (Gemini).
3. Relevant suggestions, advice, or links to medical professionals are provided.

---

## Use Cases
- Basic medical triage
- Mental health check-ins
- Elderly care support
- Healthcare access in remote areas

