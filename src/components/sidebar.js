import React from "react";

const Sidebar = () => {
  return (
    <div
      className="w-64 bg-white p-4 border-r border-gray-200 mr-28"
      style={{ height: "100vh", fontFamily: "Sora, sans-serif" }}
    >
      <h2 className="text-lg font-semibold text-teal-600 mb-4">Filter</h2>

      {/* Preis Section */}
      <div className="mb-6">
        <h3 className="text-base font-medium text-gray-700">Preis</h3>
        <div className="flex items-center">
          <input
            type="range"
            min="5"
            max="10"
            className="w-full h-2 bg-teal-100 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="flex justify-between text-gray-500 mt-2">
          <span>5 €</span>
          <span>10 €</span>
        </div>
      </div>

      {/* Hersteller Section */}
      <div>
        <h3 className="text-base font-medium text-gray-700">Hersteller</h3>
        <ul className="text-gray-600">
          <li>
            <input type="checkbox" className="mr-2" /> ADREXpharma
          </li>
          <li>
            <input type="checkbox" className="mr-2" /> Aurora
          </li>
          <li>
            <input type="checkbox" className="mr-2" checked /> Avaay
          </li>
          <li>
            <input type="checkbox" className="mr-2" checked /> Bedrocan
          </li>
          <li>
            <input type="checkbox" className="mr-2" /> Cannamedical
          </li>
        </ul>
      </div>

      <button className="mt-4 w-full text-center text-teal-500 font-medium border-t border-teal-200 pt-2">
        mehr anzeigen
      </button>

      {/* THC Gehalt Section */}
      <div className="mb-6">
        <h3 className="text-base font-medium text-gray-700">THC Gehalt</h3>
        <div className="flex items-center">
          <input
            type="range"
            min="5"
            max="10"
            className="w-full h-2 bg-teal-100 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="flex justify-between text-gray-500 mt-2">
          <span>11%</span>
          <span>18%</span>
        </div>
      </div>

      {/* CBD Gehalt Section */}
      <div className="mb-6">
        <h3 className="text-base font-medium text-gray-700">CBD Gehalt</h3>
        <div className="flex items-center">
          <input
            type="range"
            min="5"
            max="10"
            className="w-full h-2 bg-teal-100 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="flex justify-between text-gray-500 mt-2">
          <span>1%</span>
          <span>5%</span>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-base font-medium text-gray-700">Genetik</h3>
        <div className="flex justify-between mt-2 space-x-[10px]">
          <button
            className="bg-teal-500 text-white w-[80.67px] h-[28px] 
                 px-[10px] py-[4px] rounded-tl-[4px] rounded-tr-[0px] 
                 rounded-br-[0px] rounded-bl-[0px]"
          >
            Indica
          </button>
          <button
            className="bg-teal-100 text-gray-700 w-[80.67px] h-[28px] 
                 px-[10px] py-[4px] rounded-tl-[4px] rounded-tr-[0px] 
                 rounded-br-[0px] rounded-bl-[0px]"
          >
            Sativa
          </button>
          <button
            className="bg-teal-100 text-gray-700 w-[80.67px] h-[28px] 
                 px-[10px] py-[4px] rounded-tl-[4px] rounded-tr-[0px] 
                 rounded-br-[0px] rounded-bl-[0px]"
          >
            Hybrid
          </button>
        </div>
      </div>

      {/* Bestrahlung Section */}
      <div className="mb-6">
        <h3 className="text-base font-medium text-gray-700">Bestrahlung</h3>
        <div className="flex justify-between mt-2 space-x-[10px]">
          <button
            className="bg-teal-500 text-white w-[80.67px] h-[28px] 
                 px-[10px] py-[4px] rounded-tl-[4px] rounded-tr-[0px] 
                 rounded-br-[0px] rounded-bl-[0px]"
          >
            bestrahlt
          </button>
          <button
            className="bg-teal-100 text-gray-700 w-[80.67px] h-[28px] 
                 px-[10px] py-[4px] rounded-tl-[4px] rounded-tr-[0px] 
                 rounded-br-[0px] rounded-bl-[0px]"
          >
            nicht bestrahlt
          </button>
        </div>
      </div>

      {/* Terpene Section */}
      <div className="mb-6">
        <h3 className="text-base font-medium text-gray-700 flex justify-between items-center cursor-pointer">
          Terpene
          <span className="text-gray-500">&#9662;</span>
        </h3>
       
      </div>

      {/* Reset Filter */}
      <button className="mt-4 w-full text-center text-teal-500 font-medium border-t border-teal-200 pt-2">
        alle Filter zurücksetzen
      </button>
    </div>
  );
};

export default Sidebar;
