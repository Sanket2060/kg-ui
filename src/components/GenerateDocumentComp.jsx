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
        <div className="mb-5">
          <Select type="Rajinama Sifarish" options={options} special="w-72" />
        </div>
        <div className=" min-h-[20rem] border-[1px] lg:border-black rounded-md mb-6 overflow-auto">
          <div className=" flex ">
            <form className=" p-6 flex flex-wrap gap-2 ">
              <div className="mb-2 md:px-6">
                <label
                  className="block font-medium text-gray-700 mb-2"
                  htmlFor="firstName"
                >
                  Your First Name*
                </label>
                <input
                  className="max-w-56 h-12 px-3 py-2 border border-gray-300 rounded-xl"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Sandesh"
                  required
                />
              </div>
              <div className="mb-2 md:px-6">
                <label
                  className="block font-medium text-gray-700 mb-2"
                  htmlFor="lastName"
                >
                  Your Last Name*
                </label>
                <input
                  className="max-w-56 h-12 px-3 py-2 border border-gray-300  rounded-xl"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Ghimire"
                  required
                />
              </div>
              <div className="mb-2 md:px-6">
                <label
                  className="block font-medium text-gray-700 mb-2"
                  htmlFor="address"
                >
                  Address*
                </label>
                <input
                  className="max-w-56  h-12 px-3 py-2 border border-gray-300 rounded-xl"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Sainamana"
                  required
                />
              </div>
              <div className="mb-2 md:px-6">
                <label
                  className="block font-medium text-gray-700 mb-2"
                  htmlFor="companyName"
                >
                  Your Company Name*
                </label>
                <input
                  className="max-w-56 h-12 px-3 py-2 border border-gray-300 rounded-xl"
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Infosys Pvt.Ltd"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <Link to="/dashboard/printdocument">
          <div className="flex justify-end">
            <Button text="Generate" special="w-44 h-10 rounded-xl" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GenerateDocumentComp;