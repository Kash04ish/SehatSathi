import { Link } from "react-router-dom";
import scan from '../assets/medsc.png';

const Scanner = () => {
  return (
    <div className="font-sans text-gray-800">
  
      {/* MAIN SECTION */}
      <main className="max-w-7xl mx-auto p-4 md:flex gap-6">
        {/* LEFT: Upload + Audio Cards */}
        <div className="flex-1 space-y-6">
          {/* Upload Area */}
          <section className="border rounded-md p-4 bg-white">
            <h3 className="text-lg font-semibold">Upload Medicine Strip</h3>
            <p className="text-sm text-gray-500 mb-4">Capture or upload an image of your medicine for details.</p>
            <div className="border border-dashed rounded-md h-60 flex items-center justify-center text-gray-400 text-sm bg-gray-50">
              <span>📷 Upload/Drag & Drop image here</span>
            </div>
            <button className="bg-orange-500 text-white mt-4 px-6 py-2 rounded hover:bg-orange-600">
              Scan Medicine →
            </button>
          </section>

          {/* AI Voice Cards */}
          <section className="flex gap-4 overflow-x-auto pb-4">
            <div className="min-w-[250px] bg-purple-50 rounded-lg p-4 shadow-sm">
                <div className="text-center font-bold italic text-2xl text-pink-700 mb-4 leading-tight">
                Aapka Apna <br /> Baton Wala Doctor
                </div>
                <h4 className="font-semibold text-sm mb-2 text-left">Scan Medicine</h4>
                <img
                src={scan}
                alt="Altrocin Strip"
                className="rounded shadow w-full h-32 object-contain"
                />
                <p className="text-xs text-gray-700 mt-2">
                Yē Altrocin, oi Waite pill 😐<br />
                <span className="text-gray-500">Duuk water 2 h</span>
                </p>
            </div>

            {/* Card 2: Motivation */}
            <div className="min-w-[250px] bg-purple-50 rounded-lg p-4 shadow-sm text-center flex flex-col justify-between">
                <h4 className="font-semibold text-sm mb-2 text-purple-700">Aap Akele Nahi Hain</h4>
                <p className="text-xs text-gray-700 mb-2">
                "चिंता मत कीजिए। सही समय, सही दवा!"
                </p>
                <button className="border rounded px-4 py-1 text-sm hover:bg-purple-100 transition">
                ▶️ Play Voice
                </button>
            </div>
            </section>

        </div>

        {/* RIGHT PANEL */}
        <aside className="w-full md:w-80 space-y-6 mt-6 md:mt-0">
          {/* Scanned Details */}
          <section className="border rounded-md p-4 bg-white">
            <h4 className="text-md font-semibold">Scanned Details & Explanation</h4>
            <p className="text-sm mt-2"><strong>OCR Result:</strong> <br /> Upload a medicine strip image to get started.</p>
            <p className="text-sm mt-2"><strong>AI Explanation:</strong><br /> The AI will provide a voice-based explanation and warnings here.</p>
            <button className="bg-red-100 text-red-600 px-3 py-1 mt-3 rounded hover:bg-red-200 text-sm">
              🔊 Play Voice Explanation
            </button>
          </section>

          {/* Dietary Intake */}
          <section className="border rounded-md p-4 bg-white">
            <h4 className="text-md font-semibold">Dietary Intake & Precautions</h4>
            <p className="text-sm mt-2"><strong>AI Result:</strong><br />
              User: "Aam aur dahi khaya."<br />
              Medicine: Levofloxacin<br />
              Response: "Dahi ke baad ye dawa na lein. 1 ghanta ruk jaye."
            </p>
            <p className="text-sm mt-2 text-gray-600">The AI will provide a voice-based explanation here.</p>
            <button className="bg-red-100 text-red-600 px-3 py-1 mt-3 rounded hover:bg-red-200 text-sm">
              🔊 Play Voice Explanation
            </button>
          </section>

          {/* Scan History */}
          <section className="border rounded-md p-4 bg-white">
            <h4 className="text-md font-semibold mb-2">Recent Scans & Health Tips</h4>
            <ul className="text-sm space-y-3">
              <li>
                <strong>Amoxicillin 250mg</strong><br />
                <span className="text-xs text-gray-500">Antibiotic. Take with food to prevent stomach upset. Finish the full course.</span>
                <div className="text-right text-xs text-gray-400">2024-03-10</div>
              </li>
              <li>
                <strong>Multivitamin Daily</strong><br />
                <span className="text-xs text-gray-500">Supports overall health and immunity. Best taken in the morning.</span>
                <div className="text-right text-xs text-gray-400">2024-03-08</div>
              </li>
              <li>
                <strong>Digene Gel</strong><br />
                <span className="text-xs text-gray-500">Antacid. For indigestion and heartburn relief. Shake well before use.</span>
                <div className="text-right text-xs text-gray-400">2024-03-05</div>
              </li>
            </ul>
            <button className="mt-4 text-sm text-orange-600 hover:underline">View All Scans</button>
          </section>
        </aside>
      </main>

    </div>
  );
};

export default Scanner;
