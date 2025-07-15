import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 mt-6 overflow-y-auto">
        <div className="bg-orange-100 rounded-2xl shadow-md p-8 flex flex-col items-center w-full mb-6">
          <div className="bg-orange-400 text-white px-4 py-3 rounded-t-2xl w-full text-center font-bold text-xl">
            SehatSathi
          </div>
          <img
            src="/dadaji.png"
            alt="Dadaji"
            className="w-36 h-36 rounded-full mt-6"
          />
          <p className="text-xl font-semibold mt-6">Namaste, Dadaji</p>
          
          <p className="mt-4 text-lg text-gray-700 text-center italic">
            "Sehat ka saathi, har pal aapke saath – चलिए आज की देखभाल शुरू करें!"
          </p>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
