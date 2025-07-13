import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinkClasses = (path) =>
    location.pathname === path
      ? "text-teal-600 font-semibold"
      : "hover:text-teal-600";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-teal-600">
          <Link to="/">SehatSathi</Link>
        </h1>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link to="/" className={navLinkClasses("/")}>Home</Link>
          <Link to="/assistant" className={navLinkClasses("/assistant")}>Assistant</Link>
          <Link to="/scanner" className={navLinkClasses("/scanner")}>Scanner</Link>
          <Link to="/dashboard" className={navLinkClasses("/dashboard")}>Dashboard</Link>
          <Link to="/offline" className={navLinkClasses("/offline")}>Offline</Link>
        </nav>
        <div className="flex gap-4 text-sm">
          <Link to="/login" className="text-teal-600 hover:underline">Login</Link>
          <Link to="/signup" className="bg-teal-600 text-white px-4 py-1 rounded hover:bg-teal-700">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
