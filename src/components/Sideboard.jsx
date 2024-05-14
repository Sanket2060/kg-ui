import React from "react";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";
import logoutbuttonimage from "../assets/logoutbuttonimage.png";
import send from "../assets/send.png";
import group from "../assets/group.png";
import pen from "../assets/pen.png";
function Sideboard() {
  return (
    <div className="font-Poppins w-[20%] h-screen border-2">
      <header className="my-6">
        <img src={kaagazpatralogo} className="w-40 h-16 ml-3" alt="" />
      </header>
      <main>
        <div className="flex justify-center items-center h-10 bg-[#6361DC] text-white">
          {/* w-80 h-9 */}
          <div className="text-start mr-6">Generate Document</div>
          <img src={send} alt="" className="w-3 h-3" />
        </div>

        <div className="flex justify-center items-center h-10 border-y-2 border-[#E2E7ED]">
          <div className="text-start mr-[7.5rem]">Kuruwa</div>
          <img src={group} alt="" />
        </div >
        <div className="flex justify-center items-center h-10 border-y-2 border-[#E2E7ED]">
          <div className="mr-20">Notary Public</div>
          <img src={pen} alt="" />
        </div>
      </main>
      <footer className="flex items-center fixed bottom-0 border-t-2 w-full py-2 pl-10">
        <div className="mr-5">Log out</div>
        <img src={logoutbuttonimage} className="w-4 h-4" alt="" srcset="" />
      </footer>
    </div>
  );
}

export default Sideboard;
