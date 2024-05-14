import React from "react";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";
import Input from "./Input";
import Button from "./Button";
import cross from "../assets/cross.png";
const PopupRegister = ({ isOpen = false, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 font-Poppins">
          {/* yo line le kasari purai select garexa?? */}

          <div className="bg-white relative rounded-lg w-[60%] h-[90%] flex flex-col items-center">
            <div className="flex justify-end absolute right-5 top-5">
              <img src={cross} className="w-4 h-4" alt="" srcset="" />
            </div>
            <img src={kaagazpatralogo} className="w-96 h-34" alt="" srcset="" />
            <div className="text-[#6361DC] text-base">Register new account</div>
            <form className="flex flex-col items-center mb-6">
              <div className="name flex">
                <div className="firstname mr-40">
                  <div>First Name</div>
                  <Input
                    placeholder="Sandesh"
                    special="w-60 h-16"
                    name="firstname"
                  />
                </div>
                <div className="lastname">
                  <div>Last Name</div>
                  <Input
                    placeholder="Ghimire"
                    special="w-60 h-16"
                    name="lastname"
                  />
                </div>
              </div>
              <div className="email">
                <div>Email Address</div>
                <Input
                  placeholder="sandeshghimire202@gmail.com"
                  special="w-[643px] h-16"
                  name="email"
                  type="email"
                />
              </div>
              <div className="mobile">
                <div>Mobile No.</div>
                <Input
                  placeholder="+9779862383881"
                  special="w-[643px] h-16"
                  name="mobile"
                />
              </div>
              <div className="password">
                <div>password</div>
                <Input
                  placeholder="**********"
                  special="w-[643px] h-16"
                  name="password"
                />
              </div>{" "}
              <div className="confirmpassword">
                <div>confirm Password</div>
                <Input
                  placeholder="***********"
                  special="w-[643px] h-16"
                  name="confirmpassword"
                  type="password"
                />
              </div>
              <Button text="Register" special="w-80 h-16" />
            </form>
            <div className="font-semibold mb-10">Already Have an account ? <span className="text-[#6361DC]"> Log in</span></div>
          </div>
        </div>
      )}
    </>
  );
};
export default PopupRegister;
