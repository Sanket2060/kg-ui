import React from "react";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";

function Footer() {
  return (
    <footer className="mx-10   font-Poppins">
      <div className="footer1 flex justify-around mb-10">
        <div>
          <img src={kaagazpatralogo} className="w-52" alt="" />
        </div>
        <div className="flex text-sm">
          <div className="column mr-32">
            <div className="font-semibold text-2xl mb-5">Company</div>
            <div className="mb-3">Home</div>
            <div className="mb-3">About</div>
            <div className="mb-3">Services</div>
            <div className="mb-3">Contact Us</div>
          </div>
          <div className="column mr-32">
            <div className="font-semibold text-2xl mb-5">Products</div>
            <div className="mb-3">Kuruwa</div>
            <div className="mb-3">Book your lawyer</div>
          </div>
          <div className="column mr-32">
            <div className="font-semibold text-2xl mb-5">Supports</div>
            <div className="mb-3">Help Topics</div>
            <div className="mb-3">FAQ's</div>
          </div>
          <div className="column mr-32">
            <div className="font-semibold text-2xl mb-5">Trust and issues</div>
            <div className="mb-3">Terms and conditions</div>
            <div className="mb-3">Privacy Policy</div>
            <div className="mb-3">Cookies Preferences</div>
            <div className="mb-3">Licenses</div>
            <div className="mb-3">Security</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center footer2 text-[#30455E] h-14">
        ©Copywrite claimed By Dès vu Technologies. Design and Developed By
        Kagazpatra Team.
      </div>
    </footer>
  );
}

export default Footer;
