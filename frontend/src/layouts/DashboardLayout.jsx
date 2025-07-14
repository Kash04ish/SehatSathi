import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-1 bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto ml-64">
        <Outlet /> 
      </main>
    </div>
  );
};

export default DashboardLayout;
