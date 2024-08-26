import React from "react";

const Card = ({
  title,
  price,
  thc,
  cbd,
  strain,
  cultivar,
  genetics,
  status,
  image,
}) => {
  return (
    <div
      className="border border-gray-300 rounded-2xl w-64 overflow-hidden"
      style={{ fontFamily: "Sora, sans-serif" }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover" 
      />
      <div className="p-4 bg-[#62C3C64D] rounded-b-xl">
        {" "}
        {/* Background color applied here */}
        <div
          className={`mb-2 text-right text-sm font-medium ${
            status === "nicht lieferbar" ? "text-red-500" : "text-green-500"
          }`}
        >
          {status}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded">
            THC {thc}
          </span>
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded">
            CBD {cbd}
          </span>
        </div>
        <div className="text-gray-600 mt-2 text-sm">
          <div>{strain}</div>
          <div>{cultivar}</div>
          <div>{genetics}</div>
        </div>
        <div className="text-teal-600 text-lg font-bold mt-4">{price} €</div>
        <button className="mt-4 w-full bg-yellow-400 text-white py-2 rounded">
          In den Warenkorb
        </button>
      </div>
    </div>
  );
};

export default Card;
