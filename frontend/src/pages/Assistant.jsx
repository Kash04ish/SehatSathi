import React from "react";
import { Link } from "react-router-dom";

const Assistant = () => {
  return (
    <div className="font-sans text-gray-800 min-h-screen bg-white">
      {/* NAVBAR */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-teal-600">
            <Link to="/">SehatSathi</Link>
          </h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link to="/" className="hover:text-teal-600">Home</Link>
            <Link to="/assistant" className="text-teal-600 font-semibold">Assistant</Link>
            <Link to="/scanner" className="hover:text-teal-600">Scanner</Link>
            <Link to="/dashboard" className="hover:text-teal-600">Dashboard</Link>
            <Link to="/offline" className="hover:text-teal-600">Offline</Link>
          </nav>
          <div className="flex gap-4 text-sm">
            <Link to="/login" className="text-teal-600 hover:underline">Login</Link>
            <Link to="/signup" className="bg-teal-600 text-white px-4 py-1 rounded hover:bg-teal-700">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto p-4 md:flex gap-6">
        {/* LEFT: Chat */}
        <section className="flex-1 bg-white border rounded-md p-4 mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Live Voice Interaction</h2>

          {/* Chat messages */}
          <div className="space-y-4">
            {/* Assistant */}
            <div className="flex items-start gap-2">
              <img src="https://i.imgur.com/dpAfa6k.png" alt="Assistant" className="w-8 h-8 rounded-full" />
              <div className="bg-gray-100 p-3 rounded-md">
                <p>Namaste! SehatSathi here. How can I help you manage your health today?</p>
              </div>
            </div>

            {/* User Messages */}
            <div className="flex items-start gap-2 justify-end">
              <div className="bg-teal-100 p-3 rounded-md max-w-md">
                <p>मम्मी ने बोले दवाई कब खाया था क्या पता?</p>
              </div>
              <img src="https://i.imgur.com/lC3pE3C.png" alt="User" className="w-8 h-8 rounded-full" />
            </div>

            <div className="flex items-start gap-2 justify-end">
              <div className="bg-teal-100 p-3 rounded-md max-w-md">
                <p>नमस्ते! आपने सुबह की दवाई Dolo 650 कब समय 9:00 बजे ली थी, क्या आपको दें?</p>
              </div>
              <img src="https://i.imgur.com/lC3pE3C.png" alt="User" className="w-8 h-8 rounded-full" />
            </div>

            {/* Assistant Response */}
            <div className="flex items-start gap-2">
              <img src="https://i.imgur.com/dpAfa6k.png" alt="Assistant" className="w-8 h-8 rounded-full" />
              <div className="bg-white border p-3 rounded-md">
                <p><strong>Medicine Logged</strong></p>
                <p className="text-sm text-gray-600">बहुत अच्छी! मैंने अभी दवाई का सेवन लॉग कर दिया है।<br />
                  <span className="text-gray-500 italic">Dolo 650 (morning dose) : Confirmed</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <img src="https://i.imgur.com/dpAfa6k.png" alt="Assistant" className="w-8 h-8 rounded-full" />
              <div className="bg-gray-100 p-3 rounded-md">
                <p>और आपके नाश्ते के बारे में क्या बता पाए?</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <img src="https://i.imgur.com/dpAfa6k.png" alt="Assistant" className="w-8 h-8 rounded-full" />
              <div className="bg-gray-100 p-3 rounded-md">
                <p>आपको दोपहर 2 बजे अपनी और दवाई की खुराक याद रखना मत भूलिएगा?</p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t pt-4 mt-6">
            <button className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
              🎤
            </button>
            <input
              type="text"
              placeholder="Type your message or use voice..."
              className="flex-1 border px-4 py-2 rounded-md"
            />
            <button className="border px-3 py-1 rounded-md text-sm">हिंदी</button>
          </div>
        </section>

        {/* RIGHT: Snippets + Actions */}
        <aside className="w-full md:w-80 space-y-6">
          {/* Timeline */}
          <div className="bg-white border rounded-md p-4">
            <h3 className="text-lg font-semibold mb-4">Daily Health Timeline Snippets</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-start">
                <div>
                  <p><strong>Medicine Logged</strong></p>
                  <p className="text-gray-500 text-xs">Dolo 650 (morning dose)</p>
                </div>
                <span className="text-gray-400 text-xs">10:03 AM</span>
              </li>
              <li className="flex justify-between items-start">
                <div>
                  <p><strong>Meal Recorded</strong></p>
                  <p className="text-gray-500 text-xs">Lunch (Rice, Dal, Sabzi)</p>
                </div>
                <span className="text-gray-400 text-xs">12:45 PM</span>
              </li>
              <li className="flex justify-between items-start">
                <div>
                  <p><strong>Sleep Goal</strong></p>
                  <p className="text-gray-500 text-xs">Reached 7.5 hours</p>
                </div>
                <span className="text-gray-400 text-xs">07:00 AM</span>
              </li>
              <li className="flex justify-between items-start">
                <div>
                  <p><strong>Next Medicine Due</strong></p>
                  <p className="text-gray-500 text-xs">Multivitamin (evening dose)</p>
                </div>
                <span className="text-gray-400 text-xs">08:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border rounded-md p-4">
            <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <button className="border px-3 py-1 rounded hover:bg-gray-100">Log Medicine</button>
              <button className="border px-3 py-1 rounded hover:bg-gray-100">Log Meal</button>
              <button className="border px-3 py-1 rounded hover:bg-gray-100">Call Family</button>
              <button className="border px-3 py-1 rounded hover:bg-gray-100">New Chat Topic</button>
            </div>
          </div>

          {/* Alert */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 text-sm text-yellow-800 rounded-md">
            <strong>Alert:</strong> Ramu Kaka missed his evening medicine. Alert sent to Amit.
          </div>
        </aside>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-center py-8 mt-10">
        <h4 className="text-xl font-bold">SehatSathi</h4>
        <p className="text-sm text-gray-600 mt-1 mb-4">Stay Healthy with SehatSathi</p>
        <div className="flex justify-center items-center gap-2 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-4 py-2 rounded w-full"
          />
          <button className="bg-teal-600 text-white px-4 py-2 rounded">Subscribe</button>
        </div>
        <p className="mt-4 text-xs text-gray-400">© 2025 SehatSathi</p>
      </footer>
    </div>
  );
};

export default Assistant;
