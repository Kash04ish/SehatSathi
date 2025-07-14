// import React, { useState } from "react";
// import Layout from "../components/Layout";

// const AIHealthUpdate = () => {
//   const [openSection, setOpenSection] = useState(["health", "mood"]);

//   const toggleSection = (section) => {
//     setOpenSection((prev) =>
//       prev.includes(section)
//         ? prev.filter((s) => s !== section)
//         : [...prev, section]
//     );
//   };

//   return (
//      <Layout showSidebar={true} showFooter={false}>
      
//         <h1 className="text-2xl mb-4 font-semibold text-center">AI Health Updates</h1>

//         <div className="bg-gray-100 mb-4 rounded-md overflow-hidden">
//           <div
//             className="flex justify-between items-center bg-gray-200 px-4 py-2 cursor-pointer"
//             onClick={() => toggleSection("health")}
//           >
//             <h2 className="font-bold text-lg">Health Snapshot</h2>
//             <span className="text-xl">{openSection.includes("health") ? "−" : "+"}</span>
//           </div>

//           {openSection.includes("health") && (
//             <div className="p-4 bg-gray-50 text-sm space-y-2">
//               <p>💊 "2 में से 3 दवाइयाँ ली गई — Calpol 8 बजे लेना बाकी है"</p>
//               <p>🩺 AI सुझाव: "गर्मी ज़्यादा है, दिन में 3 बार पानी ज़रूर पिएं"</p>
//               <p>📍 "आपके शरीर में 38°C तापमान है – धूप से बचें"</p>
//               <p>👥 "आपने वही बात 3 बार दोहराई – डॉक्टर से मिलना चाहिए?" <span className="text-xs text-gray-500">(Memory repetition – early dementia alert)</span></p>
//             </div>
//           )}
//         </div>

//         <div className="bg-gray-100 mb-4 rounded-md overflow-hidden">
//           <div
//             className="flex justify-between items-center bg-gray-200 px-4 py-2 cursor-pointer"
//             onClick={() => toggleSection("mood")}
//           >
//             <h2 className="font-bold text-lg">Mood & Activity Suggestions</h2>
//             <span className="text-xl">{openSection.includes("mood") ? "−" : "+"}</span>
//           </div>

//           {openSection.includes("mood") && (
//             <div className="p-4 bg-gray-50 text-sm space-y-2">
//               <p>🦶 उठिए और सिर्फ़ 10 कदम चलिए — आपका साथी हौसला बढ़ाएगा।</p>
//               <p>🍵 एक कप चाय या पानी की याद — थोड़ा तरोताज़ा हो जाइए।</p>
//               <p>🗣️ SehatSaathi से हल्की-फुल्की बातचीत करें — मन हल्का लगेगा।</p>
//             </div>
//           )}
//         </div>

//         <div className="bg-gray-100 mb-4 rounded-md overflow-hidden">
//           <div
//             className="flex justify-between items-center bg-gray-200 px-4 py-2 cursor-pointer"
//             onClick={() => toggleSection("tips")}
//           >
//             <h2 className="font-bold text-lg">Proactive Health Tips</h2>
//             <span className="text-xl">{openSection.includes("tips") ? "−" : "+"}</span>
//           </div>

//           {openSection.includes("tips") && (
//             <div className="p-4 bg-gray-50 text-sm space-y-2">
//               <p>🌿 ज्यादा फल और सब्ज़ियाँ खाइए।</p>
//               <p>🚰 दिन में कम से कम 8 गिलास पानी।</p>
//             </div>
//           )}
//         </div>

//         <div className="bg-gray-100 mb-4 rounded-md overflow-hidden">
//           <div
//             className="flex justify-between items-center bg-gray-200 px-4 py-2 cursor-pointer"
//             onClick={() => toggleSection("progress")}
//           >
//             <h2 className="font-bold text-lg">Health Progress Tracker</h2>
//             <span className="text-xl">{openSection.includes("progress") ? "−" : "+"}</span>
//           </div>

//           {openSection.includes("progress") && (
//             <div className="p-4 bg-gray-50 text-sm space-y-2">
//               <p>📊 BP Logs: Normal</p>
//               <p>💓 Heart Rate: Stable</p>
//             </div>
//           )}
//         </div>
      
//     </Layout>
//   );
// };

// export default AIHealthUpdate;


import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AIHealthUpdate = () => {
  const [openSection, setOpenSection] = useState(["health", "mood"]);

  const toggleSection = (section) => {
    setOpenSection((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 "> {/* pt-16 to avoid navbar overlap */}
      <Navbar />
      
      <div className="p-6">
        <h1 className="text-2xl mb-4 font-semibold text-center">AI Health Updates</h1>

        {/** Health Snapshot */}
        <div className="bg-gray-100 mb-4 rounded-md overflow-hidden">
          <div
            className="flex justify-between items-center bg-gray-200 px-4 py-2 cursor-pointer"
            onClick={() => toggleSection("health")}
          >
            <h2 className="font-bold text-lg">Health Snapshot</h2>
            <span className="text-xl">{openSection.includes("health") ? "−" : "+"}</span>
          </div>

          {openSection.includes("health") && (
            <div className="p-4 bg-gray-50 text-sm space-y-2">
              <p>💊 "2 में से 3 दवाइयाँ ली गई — Calpol 8 बजे लेना बाकी है"</p>
              <p>🩺 AI सुझाव: "गर्मी ज़्यादा है, दिन में 3 बार पानी ज़रूर पिएं"</p>
              <p>📍 "आपके शरीर में 38°C तापमान है – धूप से बचें"</p>
              <p>👥 "आपने वही बात 3 बार दोहराई – डॉक्टर से मिलना चाहिए?" <span className="text-xs text-gray-500">(Memory repetition – early dementia alert)</span></p>
            </div>
          )}
        </div>

        {/** Mood & Activity Suggestions */}
        <div className="bg-gray-100 mb-4 rounded-md overflow-hidden">
          <div
            className="flex justify-between items-center bg-gray-200 px-4 py-2 cursor-pointer"
            onClick={() => toggleSection("mood")}
          >
            <h2 className="font-bold text-lg">Mood & Activity Suggestions</h2>
            <span className="text-xl">{openSection.includes("mood") ? "−" : "+"}</span>
          </div>

          {openSection.includes("mood") && (
            <div className="p-4 bg-gray-50 text-sm space-y-2">
              <p>🦶 उठिए और सिर्फ़ 10 कदम चलिए — आपका साथी हौसला बढ़ाएगा।</p>
              <p>🍵 एक कप चाय या पानी की याद — थोड़ा तरोताज़ा हो जाइए।</p>
              <p>🗣️ SehatSaathi से हल्की-फुल्की बातचीत करें — मन हल्का लगेगा।</p>
            </div>
          )}
        </div>

        {/** Proactive Tips */}
        <div className="bg-gray-100 mb-4 rounded-md overflow-hidden">
          <div
            className="flex justify-between items-center bg-gray-200 px-4 py-2 cursor-pointer"
            onClick={() => toggleSection("tips")}
          >
            <h2 className="font-bold text-lg">Proactive Health Tips</h2>
            <span className="text-xl">{openSection.includes("tips") ? "−" : "+"}</span>
          </div>

          {openSection.includes("tips") && (
            <div className="p-4 bg-gray-50 text-sm space-y-2">
              <p>🌿 ज्यादा फल और सब्ज़ियाँ खाइए।</p>
              <p>🚰 दिन में कम से कम 8 गिलास पानी।</p>
            </div>
          )}
        </div>

        {/** Progress Tracker */}
        <div className="bg-gray-100 mb-4 rounded-md overflow-hidden">
          <div
            className="flex justify-between items-center bg-gray-200 px-4 py-2 cursor-pointer"
            onClick={() => toggleSection("progress")}
          >
            <h2 className="font-bold text-lg">Health Progress Tracker</h2>
            <span className="text-xl">{openSection.includes("progress") ? "−" : "+"}</span>
          </div>

          {openSection.includes("progress") && (
            <div className="p-4 bg-gray-50 text-sm space-y-2">
              <p>📊 BP Logs: Normal</p>
              <p>💓 Heart Rate: Stable</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIHealthUpdate;

