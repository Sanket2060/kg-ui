import React from "react";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";
import Input from "./Input";
import Button from "./Button";
import cross from "../assets/cross.png";
const PopupLogin = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 font-Poppins">
          {/* yo line le kasari purai select garexa?? */}

          <div className="bg-white relative rounded-lg py-14 px-14 w-[90%] md:w-[60%] h-[95%] flex flex-col items-center font-medium">
            <div className="flex justify-end absolute right-5 top-5 hover:cursor-pointer" onClick={onClose}>
              <img src={cross} className="w-4 h-4" alt="" srcset="" />
            </div>
            <img src={kaagazpatralogo} className="w-96 h-34" alt="" srcset="" />
            <div className="text-[#6361DC] text-base mt-1 font-semibold">Login your account</div>
            <form className="flex flex-col items-center mt-6 mb-6 w-full">
              <div className="email w-full">
                <div>Email Address</div>
                <Input
                  placeholder="sandeshghimire202@gmail.com"
                  special="w-full h-16"
                  name="email"
                />
              </div>
              
              <div className="password w-full">
                <div>password</div>
                <Input
                  placeholder="*************"
                  special="w-full h-16"
                  name="password"
                />
              <div className="text-[#6361DC] font-semibold mb-6">Forget password?</div>
              </div>
              <Button text="Login" special="largemobiles:w-80 mobile:w-60 h-16" />
            </form>
            <div className="font-semibold mb-10">
              Not Register Yet?{" "}
              <span className="text-[#6361DC]">Sign In</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupLogin;
