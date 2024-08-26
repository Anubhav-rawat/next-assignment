import React from "react";
import Image from "next/image";

const Header2 = () => {
  return (
    <div className="flex flex-col" style={{ fontFamily: "Sora, sans-serif" }}>
      <div className="flex justify-evenly items-center py-4 w-70">
        {/* Breadcrumb Navigation */}
        <div className="flex justify-evenly space-x-5 text-sm text-gray-500">
          <a href="#" className="hover:text-teal-500">
            Home
          </a>
          <span>→</span>
          <a href="#" className="hover:text-teal-500">
            Livebestand
          </a>
          <span>→</span>
          <a href="#" className="font-semibold text-teal-600">
            Cannabis Blüten
          </a>
        </div>

        {/* Right Side Options */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-600 space-x-2">
            <span>GKV mit Kostenübernahme?</span>
            <button className="border-2 border-teal-500 rounded-full px-4 py-1 text-teal-500 hover:bg-teal-100">
              Preisoptionen
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex justify-evenly py-4 w-70">
        {/* Left Side */}
        <div className="flex items-center">
          {/* Image with Blüten text */}
          <Image
            src="/H2.png" // Update this path with your actual image path
            alt="Blüten"
            width={150}
            height={150}
          />
        </div>

        {/* Right Side - Search and Filters */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Suchen"
              className="rounded-full pl-4 pr-8 py-2 focus:outline-none"
              style={{
                backgroundColor: "#F5F5F5",
                color: "#00BCD4",
                border: "none",
                boxShadow: "0px 0px 5px #00BCD4",
              }}
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              🔍
            </span>
          </div>

          <button
            className="flex items-center px-4 py-2 border-2 rounded-full text-gray-600"
            style={{
              borderColor: "#FFB74D",
              backgroundColor: "#B2EBF2",
              color: "#006064",
            }}
          >
            Sortieren nach{" "}
            <span className="ml-2" style={{ color: "#006064" }}>
              ▼
            </span>
          </button>

          <button
            className="flex items-center px-4 py-2 border-2 rounded-full text-gray-600"
            style={{
              borderColor: "#FFB74D",
              backgroundColor: "#B2EBF2",
              color: "#006064",
            }}
          >
            Verfügbarkeit
            <span
              className="ml-2"
              style={{
                backgroundColor: "#00BCD4",
                borderRadius: "50%",
                width: "14px",
                height: "14px",
                display: "inline-block",
              }}
            ></span>
          </button>

          <button
            className="flex items-center px-4 py-2 border-2 rounded-full text-gray-600"
            style={{
              borderColor: "#FFB74D",
              backgroundColor: "#B2EBF2",
              color: "#006064",
            }}
          >
            ≡
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header2;
