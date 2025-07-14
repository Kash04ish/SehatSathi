// import React from "react";
// import Navbar from "../components/Navbar";

// const DailyInfo = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <div className="p-6 pt-6">
//         <h1 className="text-2xl mb-6 text-center font-bold">Daily Info</h1>

//         <div className="flex flex-wrap justify-center gap-8">

//           {/* Medicine Info Card */}
//           <div className="bg-white shadow-md rounded-xl p-6 w-80 max-h-96 overflow-y-auto">
//             <h2 className="text-xl font-bold mb-2">Medicine Information</h2>
//             <p className="text-gray-500 mb-4">Upcoming medications and quick lookup.</p>
//             <div className="space-y-3">
//               <div className="flex justify-between">
//                 <div>
//                   <p className="font-semibold">Metformin</p>
//                   <p className="text-xs text-gray-500">1 tablet</p>
//                 </div>
//                 <p className="text-sm text-gray-600">8:00 AM</p>
//               </div>

//               <div className="flex justify-between">
//                 <div>
//                   <p className="font-semibold">Amlodipine</p>
//                   <p className="text-xs text-gray-500">1/2 tablet</p>
//                 </div>
//                 <p className="text-sm text-gray-600">9:00 AM</p>
//               </div>

//               <div className="flex justify-between">
//                 <div>
//                   <p className="font-semibold">Multivitamin</p>
//                   <p className="text-xs text-gray-500">1 tablet</p>
//                 </div>
//                 <p className="text-sm text-gray-600">9:00 PM</p>
//               </div>
//             </div>

//             <div className="mt-4 space-y-2">
//               <input
//                 type="text"
//                 placeholder="Search medicine..."
//                 className="w-full border rounded px-3 py-2 text-sm"
//               />
//               <button className="w-full border rounded px-3 py-2 text-sm flex items-center justify-center gap-2">
//                 <span>📷</span> Scan Medicine
//               </button>
//             </div>
//           </div>

//           {/* Mood Trends Card */}
//           <div className="bg-white shadow-md rounded-xl p-6 w-80">
//             <h2 className="text-xl font-bold mb-2 text-center">Mood Trends</h2>
//             <p className="text-gray-500 text-center mb-4">(1-5 scale)</p>
//             <div className="text-center mb-4 text-2xl">🙂 Happy</div>

//             <div className="flex items-end justify-between h-32">
//               {[3, 4, 3, 5, 4, 4, 5].map((value, idx) => (
//                 <div
//                   key={idx}
//                   className="w-6 bg-black"
//                   style={{ height: `${value * 20}px` }}
//                 ></div>
//               ))}
//             </div>
//             <div className="flex justify-between text-xs mt-2">
//               <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
//             </div>
//           </div>

//           {/* Sleep Overview Card */}
//           <div className="bg-white shadow-md rounded-xl p-6 w-80">
//             <h2 className="text-xl font-bold mb-2 text-center">Sleep Overview</h2>
//             <p className="text-gray-500 text-center mb-4">Hours of sleep per night</p>

//             <div className="flex items-end justify-between h-32">
//               {[6, 6.5, 7, 7.2, 7.5, 7, 8].map((value, idx) => (
//                 <div
//                   key={idx}
//                   className="w-6 bg-gray-400"
//                   style={{ height: `${value * 10}px` }}
//                 ></div>
//               ))}
//             </div>
//             <div className="flex justify-between text-xs mt-2">
//               <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default DailyInfo;


import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DailyInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex pt-16"> {/* pt-16 to push below navbar */}

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 pl-20">
          <h1 className="text-2xl mb-6 text-center font-medium">Daily Info</h1>

          <div className="flex flex-wrap gap-8">

            {/* Medicine Info Card */}
            <div className="bg-white shadow-md rounded-xl p-6 w-80 max-h-96 overflow-y-auto">
              <h2 className="text-xl font-bold mb-2">Medicine Information</h2>
              <p className="text-gray-500 mb-4">Upcoming medications and quick lookup.</p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">Metformin</p>
                    <p className="text-xs text-gray-500">1 tablet</p>
                  </div>
                  <p className="text-sm text-gray-600">8:00 AM</p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">Amlodipine</p>
                    <p className="text-xs text-gray-500">1/2 tablet</p>
                  </div>
                  <p className="text-sm text-gray-600">9:00 AM</p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">Multivitamin</p>
                    <p className="text-xs text-gray-500">1 tablet</p>
                  </div>
                  <p className="text-sm text-gray-600">9:00 PM</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <input
                  type="text"
                  placeholder="Search medicine..."
                  className="w-full border rounded px-3 py-2 text-sm"
                />
                <button className="w-full border rounded px-3 py-2 text-sm flex items-center justify-center gap-2">
                  <span>📷</span> Scan Medicine
                </button>
              </div>
            </div>

            {/* Mood Trends Card */}
            <div className="bg-white shadow-md rounded-xl p-6 w-80">
              <h2 className="text-xl font-bold mb-2 text-center">Mood Trends</h2>
              <p className="text-gray-500 text-center mb-4">(1-5 scale)</p>
              <div className="text-center mb-4 text-2xl">🙂 Happy</div>

              <div className="flex items-end justify-between h-32">
                {[3, 4, 3, 5, 4, 4, 5].map((value, idx) => (
                  <div
                    key={idx}
                    className="w-6 bg-black"
                    style={{ height: `${value * 20}px` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-xs mt-2">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

            {/* Sleep Overview Card */}
            <div className="bg-white shadow-md rounded-xl p-6 w-80">
              <h2 className="text-xl font-bold mb-2 text-center">Sleep Overview</h2>
              <p className="text-gray-500 text-center mb-4">Hours of sleep per night</p>

              <div className="flex items-end justify-between h-32">
                {[6, 6.5, 7, 7.2, 7.5, 7, 8].map((value, idx) => (
                  <div
                    key={idx}
                    className="w-6 bg-gray-400"
                    style={{ height: `${value * 10}px` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-xs mt-2">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyInfo;

