import React from "react";
import Task from "./Task";
import task1 from "../assets/task1.png";
import Select from "./Select";
import Button from "./Button";
import document from "../assets/document.png";
function PrintingDocumentComp() {
  return (
    <div className="font-Poppins text-base mx-2 lg:ml-24 lg:mr-48  flex flex-col ">
      <div className="flex lg:justify-between lg:items-center   flex-col lg:flex-row">
        <div className="flex ">
          <div className="w-[5.6rem] flex-col">
            <Task taskimage={task1} text="" />
          </div>
          <div className="mx-2 items-center flex ">Lekhapadi</div>
        </div>
        <div className="flex items-center">
          <div className="flex   lg:w-[29rem] px-4 rounded-xl py-2 border-[1px] border-[#E2E7ED] justify-center items-center ">
            Lumbini Province/sainamaina Municipality/ Ward-6
          </div>
        </div>
      </div>
      <div className=" lg:ml-24 ">
        <div className="mb-5">Select Required Documents</div>

        <div className="flex flex-wrap">
          <img src={document} alt="" className="w-80 h-[30rem] mr-8" />
          <div className="flex mt-10 self-end *:mr-9 ">
            <Button text="Print" special="w-44 h-10 rounded-xl" />
            <Button
              text="Download"
              special="md:w-44 h-10 rounded-xl text-[#000000] bg-white  border border-[#E2E7ED]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintingDocumentComp;