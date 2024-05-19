import React from "react";
import map from "../assets/map.png";
import Input from "./Input";

function ContactUs() {
  return (
    <div className="services font-Poppins text-[#30455E] mx-5 lg:mx-10 mb-20">
      <div className="text-center font-semibold text-xl largemobiles:text-2xl lg:text-3xl mb-10">
        Contact Us
      </div>
      <div className="contactus-content flex flex-col lg:flex-row justify-around items-center">
        <div className="rounded-md mb-8 lg:mb-0 lg:mr-5 lg:w-[40%]">
          <img src={map} alt="Map" className="rounded-3xl w-full max-w-[300px] largemobiles:max-w-[400px] lg:max-w-none lg:h-[520px]" />
        </div>
        <form className="flex flex-col justify-between w-full max-w-[400px] largemobiles:max-w-[500px] lg:max-w-none lg:w-[40%]">
          <div className="name flex flex-col lg:flex-row mb-4 lg:mb-8">
            <div className="firstname mr-0 lg:mr-4 mb-4 lg:mb-0 w-full">
              <div>First Name</div>
              <Input placeholder="Sandesh" special="w-full h-16" name="firstname" />
            </div>
            <div className="lastname w-full">
              <div>Last Name</div>
              <Input placeholder="Ghimire" special="w-full h-16" name="lastname" />
            </div>
          </div>
          <div className="email mb-4 w-full">
            <div>Email Address</div>
            <Input placeholder="sandeshghimire202@gmail.com" special="w-full h-16" name="email" />
          </div>
          <div className="mobile mb-4 w-full">
            <div>Mobile No.</div>
            <Input placeholder="9862383881" special="w-full h-16" name="mobile" />
          </div>
          <div className="message w-full">
            <div>Message</div>
            <Input placeholder="Hey! I am Sandesh Ghimire" special="w-full h-44" name="message" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
