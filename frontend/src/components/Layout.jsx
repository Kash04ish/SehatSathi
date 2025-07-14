import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-16 p-6 overflow-y-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

