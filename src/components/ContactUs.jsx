import React from "react";
import map from "../assets/map.png";
import Input from "./Input";
function ContactUs() {
  return (
    <div className=" services font-Poppins text-[#30455E] mx-10 mb-20">
      <div className="text-center  font-semibold text-[48px] leading-[72px] mb-10">
        Contact Us
      </div>
      <div className="contactus-content flex justify-around">
        <div className="rounded-md">
          <img src={map} alt="" className="rounded-3xl w-[504px] h-[520px]" />
        </div>
        <form>
          <div className="name flex">
            <div className="firstname mr-40">
              <div>First Name</div>
              <Input placeholder="Sandesh" special='w-60 h-16' name="firstname" />
            </div>
            <div className="lastname">
              <div>Last Name</div>
              <Input placeholder="Ghimire" special='w-60 h-16' name="lastname" />
            </div>
          </div>
          <div className="email">
            <div>Email Address</div>
            <Input
              placeholder="sandeshghimire202@gmail.com"
              special='w-[643px] h-16'
              name="email"
            />
          </div>
          <div className="mobile">
            <div>Mobile No.</div>
            <Input placeholder="+9779862383881" special='w-[643px] h-16' name="mobile" />
          </div>
          <div className="message">
            <div>Message</div>
            <Input
              placeholder="Hey!I am Sandesh Ghimire"
              special='w-[643px] h-44'
              name="message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
