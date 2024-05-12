import React from "react";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";
import darkmode from "../assets/darkmode.png";
function Header() {
  return (
    <>
      <header className="font-Poppins text-xl font-medium text-[#30455E] px-4">
        <div className="flex justify-end items-center h-10">
          <div className="mr-20">Police Report</div>
          <div className="mr-20">Namsari Kagaz</div>
          <div className="mr-20">Rajinama Kagaz</div>
        </div>
        <div className="h-20  flex items-center justify-between">
          <div>
            <img src={kaagazpatralogo} className="w-40" alt="" />
          </div>
          <div className="flex justify-between">
            <span className="mr-16 ">Home</span>
            <span className="mr-16 ">About</span>
            <span className="mr-16 ">Services</span>
            <span className="mr-16  w-28 h-8 border-[1px] border-[#30455E] rounded-xl flex justify-center">
              Login
            </span>
            <span className="mr-16  w-28 h-8 border-[1px] border-[#30455E] rounded-xl flex justify-center">
              Sign in
            </span>
            <span className=" w-9 mr-20 h-8 border-[1px] border-[#30455E] flex justify-center items-center rounded-lg">
              <img
                src={darkmode}
                alt="dark mode image"
                srcset=""
                className="w-6 h-6"
              />
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
