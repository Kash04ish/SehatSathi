import React from "react";
import Sidebar from "../components/Sidebar";
import WelcomeCard from "../components/WelcomeCard";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-center mb-8">
          <WelcomeCard />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
