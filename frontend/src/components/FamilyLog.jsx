import React from "react";

const FamilyLog = () => {
  return (
    <div className="flex justify-center px-8 mt-9 py-10">
      <div className="bg-orange-100 p-6 rounded-2xl shadow-md w-[28rem]">
        <h2 className="bg-orange-400 text-white px-4 py-3 rounded-t-2xl font-semibold text-center text-lg w-full">
          Family Log In
        </h2>

        <div className="p-4 space-y-4">
          <p className="flex items-center text-base">
            <span className="text-red-500 mr-2 text-lg">⚠️</span> Emergency alerts via SMS/call will go to:
          </p>
          <div className="space-y-3 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
            {[
              { name: "Papa", phone: "+91 98765 43210", avatar: "/papa.png" },
              { name: "Tauji", phone: "+91 91234 56789", avatar: "/tauji.png" },
              { name: "Beta", phone: "+91 89012 34567", avatar: "/beta.png" },
            ].map((person, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 bg-white p-3 rounded shadow-sm"
              >
                <img src={person.avatar} alt={person.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-medium text-base">{person.name}</p>
                  <p className="text-xs text-gray-500">{person.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyLog;
