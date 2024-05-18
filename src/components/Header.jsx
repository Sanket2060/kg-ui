import React, { useState } from "react";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";
import darkmode from "../assets/darkmode.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header({ openPopupRegister, openPopupLogin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="font-Poppins text-xl font-medium text-[#30455E] px-4">
        <div className="lg:flex hidden justify-end items-center h-10 *:hover:cursor-pointer">
          <div className="mr-20">Police Report</div>
          <div className="mr-20">Namsari Kagaz</div>
          <div className="mr-20">Rajinama Kagaz</div>
        </div>
        <div className="h-20 flex items-center justify-between border-t-[1px]">
          <div>
            <img src={kaagazpatralogo} className="w-40" alt="" />
          </div>
          <div className="justify-between *:hover:cursor-pointer hidden lg:flex">
            <Link to="/">
              <span className="mr-16">Home</span>
            </Link>
            <Link to="/about">
              <span className="mr-16">About</span>
            </Link>
            <Link to="/services">
              <span className="mr-16">Services</span>
            </Link>
            <span
              className="mr-16 w-28 h-8 border-[1px] border-[#30455E] rounded-xl flex justify-center"
              onClick={openPopupLogin}
            >
              Login
            </span>
            <span
              className="mr-16 w-28 h-8 border-[1px] border-[#30455E] rounded-xl flex justify-center"
              onClick={openPopupRegister}
            >
              Sign in
            </span>
            <span className="w-9 mr-20 h-8 border-[1px] border-[#30455E] flex justify-center items-center rounded-lg">
              <img src={darkmode} alt="dark mode image" className="w-6 h-6" />
            </span>
          </div>
          <div className="lg:hidden mr-4 hover:cursor-pointer">
            <GiHamburgerMenu size={30} onClick={toggleMenu} />
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50">
            <AiOutlineClose
              size={30}
              className="absolute top-4 right-4 hover:cursor-pointer"
              onClick={toggleMenu}
            />
            <span className="mb-4 w-9 h-8 border-[1px] border-[#30455E] flex justify-center items-center rounded-lg hover:cursor-pointer">
              <img src={darkmode} alt="dark mode image" className="w-6 h-6" />
            </span>
            <Link to="/" className="mb-4" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="mb-4" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/services" className="mb-4" onClick={toggleMenu}>
              Services
            </Link>
            <span
              className="mb-4 w-28 h-8  border-[1px] border-[#30455E] rounded-xl flex justify-center items-center cursor-pointer"
              onClick={() => {
                openPopupLogin();
                toggleMenu();
              }}
            >
              Login
            </span>
            <span
              className="mb-4 w-28 h-8 border-[1px] border-[#30455E] rounded-xl flex justify-center items-center cursor-pointer"
              onClick={() => {
                openPopupRegister();
                toggleMenu();
              }}
            >
              Sign in
            </span>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;