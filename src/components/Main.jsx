import React from "react";
import womenwriter from "../assets/womenwriter.png";
function Main() {
  return (
    <div className="w-full lg:h-[90vh] h-[93vh] relative font-Poppins border-y-[1px] flex justify-center items-center overflow-hidden">
      <div className="w-[40vw] md:w-80 h-[40vw] md:h-80 lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem] absolute top-0 left-0 rounded-br-full bg-gradient-to-b from-white to-purple-500"></div>
      <div className="w-[40vw] md:w-80 h-[40vw] md:h-80 lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem] absolute right-0 bottom-0 rounded-tl-full bg-gradient-to-br from-white to-purple-500"></div>
      <div className="content flex flex-col items-start sm:items-center sm:m-0 m-5 ">
        <div className="font-semibold text-5xl mb-4">
          Be Your <span className="text-[#6361DC]">Kagazpatra</span> Writer
        </div>
        <div className="text-[#30455E] text-xl mb-8 ">
          No Hassle, No Queue, No Fee
        </div>
        <button className="w-32 h-10 text-[#30455E] border-[1px] border-[#30455E] rounded-[0.6rem] text-xl">
          Generate
        </button>
      </div>
      <img
        src={womenwriter}
        className="w-96 h-96   absolute md:w-[40rem] md:h-[40rem] mt-48 md:mt-[22rem] "
        style={{ marginLeft: "calc(20vw + 16rem)" }}
        alt=""
      />
    </div>
  );
}

export default Main;