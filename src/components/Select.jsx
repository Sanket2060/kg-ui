import React from "react";

function Select({ type, special = "", options }) {
  return (
    <div className="rounded-xl w-full">
      <select
        className={`text-[10px] lg:text-base xl:text-lg appearance-none w-full h-12 bg-white border border-[#E2E7ED] text-gray-700 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500 ${special}`}
      >
        <option value="" disabled selected>
          {type}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
