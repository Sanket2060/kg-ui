import React from "react";
import womenwriter from "../assets/womenwriter.png";
function Main() {
  return (
    <>
      <div className="w-full h-[750px] relative flex justify-center items-center font-Poppins">
        <div class="w-80 h-80 absolute top-0 left-0 rounded-br-full bg-gradient-to-b from-white to-purple-500"></div>
        <div class="w-80 h-80 absolute right-0 bottom-0 rounded-tl-full bg-gradient-to-br from-white to-purple-500"></div>
        <div className="content flex flex-col items-center">
          <div className="font-semibold text-5xl mb-4">
            Be Your{" "}
            <span
              className="text-[#6361DC]
            "
            >
              Kagazpatra
            </span>{" "}
            Writer
          </div>
          <div className="text-[#30455E] text-xl mb-8">
            No Hassel, No Queue, No Fee
          </div>
          <button className="w-32 h-10 text-[#30455E] border-[1px] border-[#30455E] rounded-[0.6rem] text-xl">
            Generate
          </button>
          <img
            src={womenwriter}
            className="w-[500px] h-[500px] absolute bottom-0 right-36"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Main;
