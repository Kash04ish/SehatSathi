// import Sidebar from "../components/Sidebar";
// import Section from "../components/Section";

// function Dashboard() {
//   return (
//     <div className="flex bg-white min-h-screen text-gray-800">
//       <Sidebar />
//       <main className="flex-1 p-6 overflow-auto scroll-smooth space-y-14">

//         {/* Family Dashboard */}
//         <Section id="family-dashboard" title="Family Dashboard">
//           <div className="flex flex-col md:flex-row items-start gap-6">
//             <img
//               src="https://via.placeholder.com/200x200.png?text=SehatSathi+Avatar"
//               alt="Avatar"
//               className="rounded-xl border w-48"
//             />
//             <div>
//               <h2 className="text-2xl font-semibold mt-2">Namaste, Dadaji</h2>
//             </div>
//             <div className="bg-red-50 border border-red-200 p-4 rounded shadow w-80">
//               <h3 className="font-semibold text-red-800 mb-2">🚨 Emergency alerts via SMS/call will go to:</h3>
//               <ul className="space-y-2 text-sm">
//                 <li>👨 Papa – +91 98765 43210</li>
//                 <li>🧔 Tauji – +91 91234 56789</li>
//                 <li>👦 Beta – +91 89012 34567</li>
//               </ul>
//             </div>
//           </div>
//         </Section>

//         {/* AI Health Updates */}
//         <Section id="ai-health-updates" title="AI Health Updates">
//           <div className="space-y-4">
//             <details open className="bg-red-50 px-4 py-3 rounded shadow">
//               <summary className="font-semibold text-gray-700">Health Snapshot</summary>
//               <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
//                 <li>२ में से ३ दवाइयाँ ली गई — Calpol 8 घंटे के अंतर में ली गई है</li>
//                 <li>AI सुझाव: “सर्दी जुखाम है, दिन में ३ बार पेरासिटामोल दी गई”</li>
//                 <li>“अंकल को बार-बार भूलना – स्मृति का परीक्षण करें”</li>
//                 <li className="italic">“आपको वही बात ३ बार बताई – डॉक्टर से मिलना चाहिए?”</li>
//               </ul>
//             </details>

//             <details className="bg-purple-50 px-4 py-3 rounded shadow">
//               <summary className="font-semibold text-gray-700">Mood & Activity Suggestions</summary>
//               <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
//                 <li>🎵 गीता और भक्ति 10 मिनट सुनिए — आत्मा को शांति मिलेगी</li>
//                 <li>🚶 टहल कर पानी पीने की आदत — बॉडी हाइड्रेट रहे</li>
//               </ul>
//             </details>

//             <details className="bg-gray-100 px-4 py-3 rounded shadow">
//               <summary className="font-semibold text-gray-700">Proactive Health Tips</summary>
//               <p className="mt-2 text-sm">💡 स्वस्थ जीवनशैली अपनाएं — रोज़ टहलें, हल्का भोजन करें</p>
//             </details>

//             <details className="bg-gray-100 px-4 py-3 rounded shadow">
//               <summary className="font-semibold text-gray-700">Health Progress Tracker</summary>
//               <p className="mt-2 text-sm text-gray-500">📊 Coming soon...</p>
//             </details>
//           </div>
//         </Section>

//         {/* Daily Info */}
//         <Section id="daily-info" title="Daily Info">
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="bg-white p-4 shadow rounded text-sm space-y-2 max-h-72 overflow-y-auto">
//               <h4 className="font-semibold text-base mb-2">💊 Medicine Information</h4>
//               <p><strong>Metformin</strong><br />1 tablet — 8:00 AM</p>
//               <p><strong>Amlodipine</strong><br />½ tablet — 9:00 AM</p>
//               <p><strong>Multivitamin</strong><br />1 tablet — 9:00 PM</p>
//               <input
//                 type="text"
//                 placeholder="Search medicine..."
//                 className="w-full mt-2 p-1 border rounded text-sm"
//               />
//               <button className="mt-2 w-full bg-gray-100 text-sm p-1 rounded hover:bg-gray-200">
//                 🔍 Scan Medicine
//               </button>
//             </div>
//             <div className="bg-white p-4 shadow rounded text-sm">
//               <h4 className="font-semibold text-base mb-2">😊 Mood Trends</h4>
//               <img
//                 src="https://via.placeholder.com/150x100?text=Mood+Chart"
//                 alt="Mood Chart"
//               />
//             </div>
//             <div className="bg-white p-4 shadow rounded text-sm">
//               <h4 className="font-semibold text-base mb-2">🌙 Sleep Overview</h4>
//               <img
//                 src="https://via.placeholder.com/150x100?text=Sleep+Chart"
//                 alt="Sleep Chart"
//               />
//             </div>
//           </div>
//         </Section>

//         {/* Elder Support */}
//         <Section id="elder-support" title="Elder Support">
//           <h3 className="text-lg font-semibold mb-2">Local Events & Activities Around You</h3>
//           <p className="text-sm mb-4 text-gray-600">At home or nearby, SehatSathi is with you</p>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="bg-white p-2 shadow rounded">
//               <img src="https://via.placeholder.com/300x150?text=Mela" className="rounded" />
//               <div className="text-center mt-2 text-sm">
//                 <strong>Mela</strong><br />
//                 Every Weekend<br />
//                 Location: 250 m (XYZ)
//               </div>
//             </div>
//             <div className="bg-white p-2 shadow rounded">
//               <img src="https://via.placeholder.com/300x150?text=Health+Camp" className="rounded" />
//               <div className="text-center mt-2 text-sm">
//                 <strong>Health Camp</strong><br />
//                 Distance: 500 m<br />
//                 Location: XYZ
//               </div>
//             </div>
//             <div className="bg-white p-2 shadow rounded">
//               <img src="https://via.placeholder.com/300x150?text=Satsang" className="rounded" />
//               <div className="text-center mt-2 text-sm">
//                 <strong>Satsang</strong><br />
//                 Tomorrow<br />
//                 Location: 250 m (XYZ)
//               </div>
//             </div>
//           </div>
//         </Section>
//       </main>
//     </div>
//   );
// }

// export default Dashboard;
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";

import FamilyDashboard from "../components/dashboard/FamilyDashboard";
import AiHealthUpdates from "../components/dashboard/AIHealthUpdates";
import DailyInfo from "../components/dashboard/DailyInfo";
import ElderSupport from "../components/dashboard/ElderSupport";

export default function Dashboard() {
  return (
    <div className="flex bg-white min-h-screen text-gray-800">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto scroll-smooth space-y-14">
        <Section id="family-dashboard" title="Family Dashboard">
          <FamilyDashboard />
        </Section>
        <Section id="ai-health-updates" title="AI Health Updates">
          <AiHealthUpdates />
        </Section>
        <Section id="daily-info" title="Daily Info">
          <DailyInfo />
        </Section>
        <Section id="elder-support" title="Elder Support">
          <ElderSupport />
        </Section>
      </main>
    </div>
  );
}
