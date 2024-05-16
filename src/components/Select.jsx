import React from "react";

function Select({ type, special = "",options }) {
  return (
    <div className=" rounded-xl">
      <select
        className={` text-[10px]  lg:text-base xl:text-lg appearance-none md:w-28 lg:w-fit ${special} h-10 bg-white border border-[#E2E7ED] text-gray-700  px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500`}
      >
        <option value="" disabled selected>
          {type}
        </option>
        {
          options.map((option)=>{
           return <option>{option.value}</option>
          })
        }
        {/* <option>Bagmati</option>
        <option>Gandaki</option>
        <option>Lumbini</option>
        <option>Karnali</option>
        <option>Sudurpashchim</option>
        <option>Madhesh</option>
        <option>Province 1</option> */}
      </select>
    </div>
  );
}

export default Select;
