import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {/* Left Arrow */}
      <button className="text-[#62C3C6] text-[18px] font-semibold px-3 py-1 rounded hover:bg-[#62C3C6] hover:text-white transition-colors">
        &lt; {/* This is the "<-" arrow */}
      </button>

      {/* Page Numbers */}
      <button className="text-[#045A5C] text-[18px] font-semibold px-3 py-1 rounded hover:bg-[#045A5C] hover:text-white transition-colors">
        1
      </button>
      <button className="text-[#045A5C] text-[18px] font-semibold px-3 py-1 rounded hover:bg-[#045A5C] hover:text-white transition-colors">
        2
      </button>
      <button className="text-[#045A5C] text-[18px] font-semibold px-3 py-1 rounded hover:bg-[#045A5C] hover:text-white transition-colors">
        3
      </button>

      {/* Ellipsis */}
      <span className="text-[18px] font-semibold px-3 py-1">...</span>

      {/* Last Page Number */}
      <button className="text-[#045A5C] text-[18px] font-semibold px-3 py-1 rounded hover:bg-[#045A5C] hover:text-white transition-colors">
        12
      </button>

      {/* Right Arrow */}
      <button className="text-[#62C3C6] text-[18px] font-semibold px-3 py-1 rounded hover:bg-[#62C3C6] hover:text-white transition-colors">
        &gt; {/* This is the "->" arrow */}
      </button>
    </div>
  );
};

export default Pagination;
