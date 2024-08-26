import Image from "next/image";
import React from "react";

function Header1() {
  return (
    <header
      className="flex justify-center items-center p-4 bg-white shadow w-70"
      style={{ fontFamily: "Sora, sans-serif" }}
    >
      {/* Search Bar */}
      <div className="flex items-center bg-blue-100 p-2 mr-16 rounded-full">
        <input
          type="text"
          placeholder="Suchen"
          className="bg-transparent focus:outline-none text-gray-600 pl-2"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3.5a7.5 7.5 0 006.15 12.15z"
          />
        </svg>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4 text-teal-600 font-semibold">
        {" "}
        
        <a href="#" className="hover:text-teal-400">
          Rezept einlösen
        </a>
        <a href="#" className="hover:text-teal-400">
          Live Bestand
        </a>
        <a href="#" className="hover:text-teal-400">
          Videosprechstunde
        </a>
        <a href="#" className="hover:text-teal-400">
          FAQs
        </a>
        <a href="#" className="hover:text-teal-400">
          Kontakt
        </a>
      </div>

      {/* Cart and Sign In Button */}
      <div className="flex items-center mx-16 space-x-2">
        {" "}
        {/* Adjusted space-x-4 to space-x-2 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-teal-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l1.6-8H5.4M7 13L5.4 5M7 13h10l-1.6 8H8.6M7 13L8.6 21M7 13l-2 5.6M5 6h14M12 5v.01M12 18a3 3 0 100-6 3 3 0 000 6z"
          />
        </svg>
        <button className="bg-lime-200 text-teal-600 font-semibold px-4 py-2 rounded-full">
          Anmelden
        </button>
      </div>
    </header>
  );
}

export default Header1;
