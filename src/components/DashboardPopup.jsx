import React from "react";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";
import cross from "../assets/cross.png";
import Button from "./Button";
import Select from "./Select";
import Services from "./Services";
import policereport from "../assets/policereport.png";
import irddocument from "../assets/irddocument.png";

const DashboardPopup = ({ isOpen, onClose, message }) => {
  const provinceOptions = [
    { value: "province1", label: "Province 1" },
    { value: "province2", label: "Province 2" },
    { value: "province3", label: "Province 3" },
    // Add more options as needed
  ];

  // Define municipality options
  const districtOptions = [
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
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 font-Poppins">
          <div className="bg-white relative rounded-lg py-9 px-8 w-[90%] md:w-[60%] h-[62%] flex flex-col items-start font-medium">
            <div className="text-base ">
              <div className="mb-4 text-base">Select Your Location</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                <Select
                  type="Province"
                  options={provinceOptions}
                  special="w-full"
                />
                <Select
                  type="District"
                  options={districtOptions}
                  special="w-full"
                />
                <Select type="Ward" options={wardOptions} special="w-full" />
              </div>
            </div>
            <div className=" services font-Poppins text-[#30455E] mb-12 w-full">
              <div className="text-center  font-semibold text-[28px] leading-[72px] mt-8 mb-5">
                Services
              </div>
              <div className="flex flex-wrap justify-between md:justify-around">
                <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/5 md:mb-8 lg:mb-0 mb-8  lg:flex-nowrap">
                  <img src={policereport} className="w-28 h-24" alt="" />
                  <div className="mt-3 text-center">Police Report</div>
                </div>
                <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/5 md:mb-8 lg:mb-0 mb-8  lg:flex-nowrap">
                  <img src={irddocument} alt="" className="w-28 h-24" />
                  <div className="mt-3 text-center">IRD Document</div>
                </div>
                <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/5 md:mb-8 lg:mb-0 mb-8  lg:flex-nowrap">
                  <img src={irddocument} alt="" className="w-28 h-24" />
                  <div className="mt-3 text-center">Malpot Document</div>
                </div>

                {/* For small screens: Single items */}
                <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/5 md:mb-8 lg:mb-0 mb-8  lg:flex-nowrap">
                  <img src={irddocument} alt="" className="w-28 h-24" />
                  <div className="mt-3 text-center">Municipality Document</div>
                </div>
                <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/5 md:mb-8 lg:mb-0 mb-8  lg:flex-nowrap">
                  <img src={irddocument} alt="" className="w-28 h-24" />
                  <div className="mt-3 text-center">Ward Document</div>
                </div>
              </div>
            </div>
            <div className="flex w-full  justify-end" onClick={onClose}>
              <Button text="Submit" special="w-40 h-9 rounded-xl p-2" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardPopup;
