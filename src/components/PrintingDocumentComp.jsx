import React from "react";
import Task from "./Task";
import task1 from "../assets/task1.png";
import Select from "./Select";
import Button from "./Button";
import document from "../assets/document.png";
function PrintingDocumentComp() {
  return (
    <div className="font-Poppins text-base ml-24 mr-48 flex mb-11 ">
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
          <Select type="Rajinama Sifarish" special="w-72" />
        </div>
        <div className="flex">
          <img src={document} alt="" className="w-80 h-[30rem] mr-8" />
          <div className="flex self-end *:mr-9">
            <Button text="Print" special="w-44 h-10 rounded-xl" />
            <Button
              text="Download"
              special="w-44 h-10 rounded-xl text-black bg-white border border-[#E2E7ED]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintingDocumentComp;