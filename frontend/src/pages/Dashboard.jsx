import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex flex-1 pt-16">
        {/* Sidebar Fixed */}
        <div className="w-64 fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-md">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default DashboardLayout;
