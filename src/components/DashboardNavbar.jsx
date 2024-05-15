import React from "react";
import search from "../assets/search.png";
import rings from "../assets/rings.png";
import moon2 from "../assets/moon2.png";
import Select from "./Select";
function DashboardNavbar() {
  return (
    <div className="w-full h-56 mt-10 px-14 font-Poppins text-[#30455E] font-medium">
      <div className="flex md:flex-wrap xl:flex-nowrap justify-between items-center mb-6">
        <div className="mr-10">
          <div className="text-2xl">Sandesh Ghimire</div>
          <div className="text-sm">mr.kashyapsandesh@gmail.com</div>
        </div>
        <div className="flex pt-5 lg:mt-0 w-full justify-between">
          <div className="w-52  h-10 border-2 border-[#E2E7ED] flex items-center p-2 rounded-xl mr-8">
            <img src={search} className="w-4 h-4 mr-3" alt="" />{" "}
            <input
              type="text"
              className="focus:outline-none flex-1 w-36 placeholder:text-black"
              name=""
              id=""
              placeholder="Search"
            />
            <img src={rings} className="w-4 h-4" alt="" srcset="" />
          </div>
          <div className="w-10 h-10 border-[1px] border-[#E2E7ED] p-2 rounded-xl">
            <img src={moon2} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="text-base ">
        <div className="mb-4 text-base">Select Your Location</div>
        <div className="flex flex-col md:flex-row *:sm:mr-6 *:mr-12">
          <Select type="Province" />
          <Select type="Muncipality" special="md:w-32" />
          <Select type="Ward" />
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
