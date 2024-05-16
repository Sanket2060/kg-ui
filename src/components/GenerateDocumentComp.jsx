import React from "react";
import Task from "./Task";
import task1 from "../assets/task1.png";
import Select from "./Select";
import Button from "./Button";
import { Link } from "react-router-dom";
function GenerateDocumentComp() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

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
          <Select type="Rajinama Sifarish" options={options} special="w-72"/>
        </div>
        <div className="w-full h-64 border-[1px] border-black rounded-md mb-6">

        </div>
        <Link to='/dashboard/printdocument'>
        <div className="flex justify-end">
        <Button text="Generate" special="w-44 h-10 rounded-xl"/>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default GenerateDocumentComp;
