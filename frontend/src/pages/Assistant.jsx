// import { Link } from "react-router-dom";

// const Assistant = () => {
//   return (
//     <div className="font-sans text-gray-800 min-h-screen bg-white">

//       {/* MAIN CONTENT */}
//       <main className="max-w-7xl mx-auto p-4 md:flex gap-6">
//         {/* LEFT: Chat */}
//         <section className="flex-1 bg-white border rounded-md p-4 mb-6 md:mb-0">
//           <h2 className="text-xl font-semibold mb-4">Live Voice Interaction</h2>

//           {/* Chat messages */}
//           <div className="space-y-4">
//             {/* Assistant */}
//             <div className="flex items-start gap-2">
//               <img src="https://i.imgur.com/dpAfa6k.png" alt="Assistant" className="w-8 h-8 rounded-full" />
//               <div className="bg-gray-100 p-3 rounded-md">
//                 <p>Namaste! SehatSathi here. How can I help you manage your health today?</p>
//               </div>
//             </div>

//             {/* User Messages */}
//             <div className="flex items-start gap-2 justify-end">
//               <div className="bg-teal-100 p-3 rounded-md max-w-md">
//                 <p>मम्मी ने बोले दवाई कब खाया था क्या पता?</p>
//               </div>
//               <img src="https://i.imgur.com/lC3pE3C.png" alt="User" className="w-8 h-8 rounded-full" />
//             </div>

//             <div className="flex items-start gap-2 justify-end">
//               <div className="bg-teal-100 p-3 rounded-md max-w-md">
//                 <p>नमस्ते! आपने सुबह की दवाई Dolo 650 कब समय 9:00 बजे ली थी, क्या आपको दें?</p>
//               </div>
//               <img src="https://i.imgur.com/lC3pE3C.png" alt="User" className="w-8 h-8 rounded-full" />
//             </div>

//             {/* Assistant Response */}
//             <div className="flex items-start gap-2">
//               <img src="https://i.imgur.com/dpAfa6k.png" alt="Assistant" className="w-8 h-8 rounded-full" />
//               <div className="bg-white border p-3 rounded-md">
//                 <p><strong>Medicine Logged</strong></p>
//                 <p className="text-sm text-gray-600">बहुत अच्छी! मैंने अभी दवाई का सेवन लॉग कर दिया है।<br />
//                   <span className="text-gray-500 italic">Dolo 650 (morning dose) : Confirmed</span>
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-2">
//               <img src="https://i.imgur.com/dpAfa6k.png" alt="Assistant" className="w-8 h-8 rounded-full" />
//               <div className="bg-gray-100 p-3 rounded-md">
//                 <p>और आपके नाश्ते के बारे में क्या बता पाए?</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-2">
//               <img src="https://i.imgur.com/dpAfa6k.png" alt="Assistant" className="w-8 h-8 rounded-full" />
//               <div className="bg-gray-100 p-3 rounded-md">
//                 <p>आपको दोपहर 2 बजे अपनी और दवाई की खुराक याद रखना मत भूलिएगा?</p>
//               </div>
//             </div>
//           </div>

//           {/* Input */}
//           <div className="flex items-center gap-2 border-t pt-4 mt-6">
//             <button className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
//               🎤
//             </button>
//             <input
//               type="text"
//               placeholder="Type your message or use voice..."
//               className="flex-1 border px-4 py-2 rounded-md"
//             />
//             <button className="border px-3 py-1 rounded-md text-sm">हिंदी</button>
//           </div>
//         </section>

//         {/* RIGHT: Snippets + Actions */}
//         <aside className="w-full md:w-80 space-y-6">
//           {/* Timeline */}
//           <div className="bg-white border rounded-md p-4">
//             <h3 className="text-lg font-semibold mb-4">Daily Health Timeline Snippets</h3>
//             <ul className="space-y-3 text-sm">
//               <li className="flex justify-between items-start">
//                 <div>
//                   <p><strong>Medicine Logged</strong></p>
//                   <p className="text-gray-500 text-xs">Dolo 650 (morning dose)</p>
//                 </div>
//                 <span className="text-gray-400 text-xs">10:03 AM</span>
//               </li>
//               <li className="flex justify-between items-start">
//                 <div>
//                   <p><strong>Meal Recorded</strong></p>
//                   <p className="text-gray-500 text-xs">Lunch (Rice, Dal, Sabzi)</p>
//                 </div>
//                 <span className="text-gray-400 text-xs">12:45 PM</span>
//               </li>
//               <li className="flex justify-between items-start">
//                 <div>
//                   <p><strong>Sleep Goal</strong></p>
//                   <p className="text-gray-500 text-xs">Reached 7.5 hours</p>
//                 </div>
//                 <span className="text-gray-400 text-xs">07:00 AM</span>
//               </li>
//               <li className="flex justify-between items-start">
//                 <div>
//                   <p><strong>Next Medicine Due</strong></p>
//                   <p className="text-gray-500 text-xs">Multivitamin (evening dose)</p>
//                 </div>
//                 <span className="text-gray-400 text-xs">08:00 PM</span>
//               </li>
//             </ul>
//           </div>

//           {/* Quick Actions */}
//           <div className="bg-white border rounded-md p-4">
//             <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
//             <div className="flex flex-wrap gap-2 text-sm">
//               <button className="border px-3 py-1 rounded hover:bg-gray-100">Log Medicine</button>
//               <button className="border px-3 py-1 rounded hover:bg-gray-100">Log Meal</button>
//               <button className="border px-3 py-1 rounded hover:bg-gray-100">Call Family</button>
//               <button className="border px-3 py-1 rounded hover:bg-gray-100">New Chat Topic</button>
//             </div>
//           </div>

//           {/* Alert */}
//           <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 text-sm text-yellow-800 rounded-md">
//             <strong>Alert:</strong> Ramu Kaka missed his evening medicine. Alert sent to Amit.
//           </div>
//         </aside>
//       </main>
      
//       </div>
//   );
// };

// export default Assistant;

import React, { useState, useRef } from "react";

const Assistant = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Namaste! SehatSathi here. How can I help you manage your health today?" }
  ]);
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const wsRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const sendToChat = async (text) => {
    setMessages(prev => [...prev, { from: "user", text }]);
    setInputText("");

    const res = await fetch("http://localhost:8080/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    const data = await res.json();

    setMessages(prev => [...prev, { from: "bot", text: data.answer }]);

    const ttsRes = await fetch("http://localhost:8080/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: data.answer })
    });
    const audioBlob = await ttsRes.blob();
    const audioURL = URL.createObjectURL(audioBlob);
    new Audio(audioURL).play();
  };

  const handleMicClick = async () => {
    console.log("🎤 handleMicClick called");
    if (isRecording) {
      // Stop recording
      mediaRecorderRef.current?.stop();
      wsRef.current?.close();
      setIsRecording(false);
      return;
    }

    console.log("🎤 Starting WebSocket connection...");
    wsRef.current = new WebSocket("ws://localhost:8080/ws/stt");

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;

    wsRef.current.onerror = (err) => console.error("❌ WebSocket error:", err);
    recorder.onerror = (err) => console.error("❌ Recorder error:", err);

    wsRef.current.onopen = () => {
      console.log("✅ WebSocket connected. Setting up audio stream...");
      setIsRecording(true);
      recorder.onstart = () => console.log("🎬 Recorder started");
      recorder.ondataavailable = (e) => console.log("📤 Chunk data available", e.data.size);

      recorder.ondataavailable = async (e) => {
        if (e.data.size > 0 && wsRef.current.readyState === WebSocket.OPEN) {
          const buffer = await e.data.arrayBuffer();
          wsRef.current.send(buffer);
          console.log("🎧 Sent audio chunk to server");
        }
      };

      recorder.start(250);
    };

    wsRef.current.onmessage = async (event) => {
      const transcript = event.data;
      console.log("📥 Transcript from STT:", transcript);

      setMessages(prev => [...prev, { from: "user", text: transcript }]);
      await sendToChat(transcript);

      // Optional: auto stop after message
      recorder.stop();
      stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    };
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen bg-white">
      <main className="max-w-7xl mx-auto p-4 md:flex gap-6">
        <section className="flex-1 bg-white border rounded-md p-4 mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Live Voice Interaction</h2>

          <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-2 ${msg.from === "user" ? "justify-end" : ""}`}>
                {msg.from === "bot" && (
                  <img src="https://i.imgur.com/dpAfa6k.png" alt="Bot" className="w-8 h-8 rounded-full" />
                )}
                <div className={`p-3 rounded-md max-w-md ${msg.from === "user" ? "bg-teal-100" : "bg-gray-100"}`}>
                  <p>{msg.text}</p>
                </div>
                {msg.from === "user" && (
                  <img src="https://i.imgur.com/lC3pE3C.png" alt="User" className="w-8 h-8 rounded-full" />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t pt-4 mt-6">
            <button
              onClick={handleMicClick}
              className={`${
                isRecording ? "bg-red-600" : "bg-teal-600"
              } text-white rounded-full w-10 h-10 flex items-center justify-center text-lg`}
              title={isRecording ? "Stop" : "Start Voice"}
            >
              🎤
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message or use voice..."
              className="flex-1 border px-4 py-2 rounded-md"
              onKeyDown={(e) => e.key === "Enter" && sendToChat(inputText)}
            />

            <button className="border px-8 py-2 rounded-md text-md" onClick={() => sendToChat(inputText)}>
              Ask
            </button>
            <select className="border px-8 py-2 rounded" aria-label="Select Language">
              <option>English</option>
              <option>Hindi</option>
              <option>Gujarati</option>
              <option>Marathi</option>
              <option>Bengali</option>
            </select>
          </div>
        </section>

        <aside className="w-full md:w-80 space-y-6">
          <div className="bg-white border rounded-md p-4">
            <h3 className="text-lg font-semibold mb-4">Daily Health Timeline Snippets</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-start">
                <div><p><strong>Medicine Logged</strong></p><p className="text-gray-500 text-xs">Dolo 650</p></div>
                <span className="text-gray-400 text-xs">10:03 AM</span>
              </li>
              <li className="flex justify-between items-start">
                <div><p><strong>Meal Recorded</strong></p><p className="text-gray-500 text-xs">Lunch</p></div>
                <span className="text-gray-400 text-xs">12:45 PM</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border rounded-md p-4">
            <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <button className="border px-3 py-1 rounded hover:bg-gray-100">Log Medicine</button>
              <button className="border px-3 py-1 rounded hover:bg-gray-100">Log Meal</button>
              <button className="border px-3 py-1 rounded hover:bg-gray-100">Call Family</button>
              <button className="border px-3 py-1 rounded hover:bg-gray-100">New Chat Topic</button>
            </div>
          </div>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 text-sm text-yellow-800 rounded-md">
            <strong>Alert:</strong> Ramu Kaka missed his evening medicine.
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Assistant;
