import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-8 mt-10">
      <h4 className="text-xl font-bold">SehatSathi</h4>
      <p className="text-sm text-gray-600 mt-1 mb-4">Stay Healthy with SehatSathi</p>
      <div className="flex justify-center items-center gap-2 max-w-sm mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="border px-4 py-2 rounded w-full"
        />
        <button className="bg-teal-600 text-white px-4 py-2 rounded">Subscribe</button>
      </div>
      <p className="mt-4 text-xs text-gray-400">© 2025 SehatSathi</p>
    </footer>
  );
};

export default Footer;
