import React from "react";
import search from "../assets/search.png";
import rings from "../assets/rings.png";
import moon2 from "../assets/moon2.png";
import Select from "./Select";
function DashboardNavbar() {
  const provinceOptions = [
  { value: "province1", label: "Province 1" },
  { value: "province2", label: "Province 2" },
  { value: "province3", label: "Province 3" },
  // Add more options as needed
];

// Define municipality options
const muncipalityOptions = [
  { value: "municipality1", label: "Municipality 1" },
  { value: "municipality2", label: "Municipality 2" },
  { value: "municipality3", label: "Municipality 3" },
  // Add more options as needed
];

// Define ward options
const wardOptions = [
  { value: "ward1", label: "Ward 1" },
  { value: "ward2", label: "Ward 2" },
  { value: "ward3", label: "Ward 3" },
  // Add more options as needed
];
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
          <Select type="Province" options={provinceOptions} />
          <Select type="Muncipality" special="md:w-32" options={muncipalityOptions} />
          <Select type="Ward" options={wardOptions} />
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
