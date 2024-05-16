import React, { useState } from "react";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";
import logoutbuttonimage from "../assets/logoutbuttonimage.png";
import send from "../assets/send.png";
import group from "../assets/group.png";
import pen from "../assets/pen.png";
import { Link } from "react-router-dom";

function Sideboard() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="font-Poppins h-full border-2 sm:text-[10px] md:text-sm">
      <header className="py-6 h-[13%]">
        <img src={kaagazpatralogo} className="w-40 h-16 ml-3" alt="" />
      </header>
      <main className="h-[87%] flex flex-col justify-between">
        <div className="flex flex-col justify-between">
          <Link to="/dashboard/lekhapadi" onClick={() => handleLinkClick("lekhapadi")}>
            <div
              className={`flex items-center pl-10 h-10 border-t-2 border-[#E2E7ED]  ${
                activeLink === "lekhapadi" ? "bg-[#6361DC] text-white" : "bg-white text-black"
              }`}
            >
              <div className="text-start mr-4">Generate Document</div>
              <img src={send} alt="" className="w-3 h-3" />
            </div>
          </Link>
          <Link to="/dashboard/kuruwa" onClick={() => handleLinkClick("kuruwa")}>
            <div
              className={`flex items-center pl-10 h-10 border-t-2 border-[#E2E7ED] ${
                activeLink === "kuruwa" ? "bg-[#6361DC] text-white" : "bg-white text-black"
              }`}
            >
              <div className="text-start mr-[6.5rem]">Kuruwa</div>
              <img src={group} alt="" className="w-3 h-3" />
            </div>
          </Link>
          <Link to="/dashboard/notarypublic" onClick={() => handleLinkClick("notarypublic")}>
            <div
              className={`flex items-center pl-10 h-10 border-y-2 border-[#E2E7ED] ${
                activeLink === "notarypublic" ? "bg-[#6361DC] text-white" : "bg-white text-black"
              }`}
            >
              <div className="mr-16">Notary Public</div>
              <img src={pen} alt="" className="w-3 h-3" />
            </div>
          </Link>
        </div>
        <div className="flex items-center pl-10 border-t-2 w-full py-2 hover:cursor-pointer">
          <div className="mr-5">Log out</div>
          <img src={logoutbuttonimage} className="w-4 h-4" alt="" />
        </div>
      </main>
    </div>
  );
}

export default Sideboard;
