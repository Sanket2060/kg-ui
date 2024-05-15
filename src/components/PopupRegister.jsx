import React from "react";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";
import Input from "./Input";
import Button from "./Button";
import cross from "../assets/cross.png";
const PopupRegister = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 font-Poppins">
          {/* yo line le kasari purai select garexa?? */}

          <div className="bg-white relative rounded-lg w-[90%] md:w-[60%] h-[95%] px-14 flex flex-col items-center overflow-scroll">
            <div className="flex justify-end absolute right-5 top-5 hover:cursor-pointer" onClick={onClose}>
              <img src={cross} className="w-4 h-4" alt="" srcset=""/>
            </div>
            <img src={kaagazpatralogo} className="w-96 h-34" alt="" srcset="" />
            <div className="text-[#6361DC] text-base">Register new account</div>
            <form className="flex flex-col items-center mb-6 w-full">
              <div className="name flex flex-col sm:flex-row justify-between w-full">
                <div className="firstname w-full sm:w-[40%] ">
                  <div>First Name</div>
                  <Input
                    placeholder="Sandesh"
                    special="w-full  h-16"
                    name="firstname"
                  />
                </div>
                <div className="lastname w-full sm:w-[40%]">
                  <div>Last Name</div>
                  <Input
                    placeholder="Ghimire"
                    special="w-full h-16"
                    name="lastname"
                  />
                </div>
              </div>
              <div className="email w-full">
                <div>Email Address</div>
                <Input
                  placeholder="sandeshghimire202@gmail.com"
                  special="w-full h-16"
                  name="email"
                  type="email"
                />
              </div>
              <div className="mobile w-full">
                <div>Mobile No.</div>
                <Input
                  placeholder="+9779862383881"
                  special="w-full h-16"
                  name="mobile"
                />
              </div>
              <div className="password w-full">
                <div>password</div>
                <Input
                  placeholder="**********"
                  special="w-full h-16"
                  name="password"
                />
              </div>{" "}
              <div className="confirmpassword w-full">
                <div>confirm Password</div>
                <Input
                  placeholder="***********"
                  special="w-full h-16"
                  name="confirmpassword"
                  type="password"
                />
              </div>
              <Button text="Register" special="w-80 h-16 largemobiles:w-80 mobile:w-60" />
            </form>
            <div className="font-semibold mb-10">Already Have an account ? <span className="text-[#6361DC]"> Log in</span></div>
          </div>
        </div>
      )}
    </>
  );
};
export default PopupRegister;
