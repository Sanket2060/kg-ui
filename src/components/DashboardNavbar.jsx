import React from "react";
import search from "../assets/search.png";
import rings from "../assets/rings.png";
import moon2 from "../assets/moon2.png";
function DashboardNavbar() {
  return (
    <div className="w-full h-56 mt-10 px-14 font-Poppins text-[#30455E] font-medium">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="text-2xl">Sandesh Ghimire</div>
          <div className="text-sm">mr.kashyapsandesh@gmail.com</div>
        </div>
        <div className="flex">
          <div className="w-52 h-10 border-2 border-[#E2E7ED] flex items-center p-2 rounded-xl mr-8">
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
        <div className="flex">
          <div className="w-fit  rounded-xl mr-12">
            <select className=" block appearance-none w-full h-10 bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500">
              <option value="" disabled selected>
                Province
              </option>
              <option>Bagmati</option>
              <option>Gandaki</option>
              <option>Lumbini</option>
              <option>Karnali</option>
              <option>Sudurpashchim</option>
              <option>Madhesh</option>
              <option>Province 1</option>
            </select>
          </div>
          <div className="w-fit rounded-xl mr-12">
            <select className=" block appearance-none w-full  h-10 bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500">
              <option value="" disabled selected>
                Muncipality
              </option>
              <option>Bagmati</option>
              <option>Gandaki</option>
              <option>Lumbini</option>
              <option>Karnali</option>
              <option>Sudurpashchim</option>
              <option>Madhesh</option>
              <option>Province 1</option>
            </select>
          </div>
          <div className="w-fit rounded-xl">
            <select className=" block appearance-none w-full  h-10 bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500">
              <option value="" disabled selected>
                Ward
              </option>
              <option>Bagmati</option>
              <option>Gandaki</option>
              <option>Lumbini</option>
              <option>Karnali</option>
              <option>Sudurpashchim</option>
              <option>Madhesh</option>
              <option>Province 1</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
