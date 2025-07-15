import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen fixed left-0 top-16 bg-white shadow-md p-4">
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/dashboard/family-logs"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded ${
              isActive ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Family Logs
        </NavLink>

        <NavLink
          to="/dashboard/ai-health-update"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded ${
              isActive ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          AI Health Updates
        </NavLink>

        <NavLink
          to="/dashboard/daily-info"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded ${
              isActive ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Daily Info
        </NavLink>

        <NavLink
          to="/dashboard/elder-support"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded ${
              isActive ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Elder Support
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;