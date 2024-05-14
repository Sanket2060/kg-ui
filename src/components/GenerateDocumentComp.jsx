import React from "react";
import Task from "./Task";
import task1 from "../assets/task1.png";
import Select from "./Select";
import Button from "./Button";
function GenerateDocumentComp() {
  return (
    <div className="font-Poppins text-base ml-24 mr-48 flex ">
      <div className="w-[5.6rem]">
        <Task taskimage={task1} text="" />
      </div>
      <div className="w-full ml-6 ">
        <div className="flex items-center justify-between h-20 mb-5">
          <div className="">Lekhapadi</div>
          <div className="w-[29rem] rounded-xl h-10 border-[1px] border-[#E2E7ED] flex justify-center items-center">
            Lumbini Province/sainamaina Municipality/ Ward-6
          </div>
        </div>
        <div className="mb-5">Select Required Documents</div>
        <div className="mb-5">
          <Select type="Rajinama Sifarish" special="w-72"/>
        </div>
        <div className="w-full h-64 border-[1px] border-black rounded-md mb-6">

        </div>
        <div className="flex justify-end">
        <Button text="Generate" special="w-44 h-10 rounded-xl"/>
        </div>
      </div>
    </div>
  );
}

export default GenerateDocumentComp;
