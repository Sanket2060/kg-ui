import React, { useState } from "react";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";
import logoutbuttonimage from "../assets/logoutbuttonimage.png";
import send from "../assets/send.png";
import group from "../assets/group.png";
import pen from "../assets/pen.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { logout } from "../features/user/authSlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
function Sideboard() {
  const [activeLink, setActiveLink] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = async () => {
    try {
      // const response = await axios.post(
      //   "http://localhost:9005/users/logout",
      //   {},
      //   {
      //     withCredentials: true, // Include credentials (cookies) in the request
      //   }
      // );
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log("Error at logging user out:", error);
    }
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setShowMenu(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="font-Poppins h-full w-14 sm:w-[18] md:w-[20vw] md:min-w-[16rem]  border-2 sm:text-[10px] md:text-sm relative">
      <header className="py-6 h-[13%] flex justify-between items-center px-3 md:px-0">
        <img
          src={kaagazpatralogo}
          className="md:block hidden w-40 h-16"
          alt=""
        />
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {showMenu ? (
            <HiX size={24} />
          ) : (
            <div className="flex  items-center">
              <HiMenu size={24} />
            </div>
          )}
        </button>
      </header>
      <main className="h-[87%] flex flex-col justify-between">
        <div className="flex flex-col justify-between md:hidden">
          {showMenu && (
            <div>
              <Link
                to="/dashboard/lekhapadi"
                onClick={() => handleLinkClick("lekhapadi")}
              >
                <div
                  className={`flex items-center pl-10 h-10 border-t-2 border-[#E2E7ED] ${
                    activeLink === "lekhapadi"
                      ? "bg-[#6361DC] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <div className="text-start mr-4">Generate Document</div>
                  <img src={send} alt="" className="w-3 h-3" />
                </div>
              </Link>
              <Link
                to="/dashboard/kuruwa"
                onClick={() => handleLinkClick("kuruwa")}
              >
                <div
                  className={`flex items-center pl-10 h-10 border-t-2 border-[#E2E7ED] ${
                    activeLink === "kuruwa"
                      ? "bg-[#6361DC] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <div className="text-start mr-[6.5rem]">Kuruwa</div>
                  <img src={group} alt="" className="w-3 h-3" />
                </div>
              </Link>
              <Link
                to="/dashboard/notarypublic"
                onClick={() => handleLinkClick("notarypublic")}
              >
                <div
                  className={`flex items-center pl-10 h-10 border-y-2 border-[#E2E7ED] ${
                    activeLink === "notarypublic"
                      ? "bg-[#6361DC] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <div className="mr-16">Notary Public</div>
                  <img src={pen} alt="" className="w-3 h-3" />
                </div>
              </Link>
            </div>
          )}
        </div>
        <div className="hidden md:flex flex-col justify-between">
          <Link
            to="/dashboard/lekhapadi"
            onClick={() => handleLinkClick("lekhapadi")}
          >
            <div
              className={`flex items-center pl-10 h-10 border-t-2  border-[#E2E7ED] ${
                activeLink === "lekhapadi"
                  ? "bg-[#6361DC] text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="text-start mr-4">Generate Document</div>
              <img src={send} alt="hbjh" className="w-3 h-3 " />
            </div>
          </Link>
          <Link
            to="/dashboard/kuruwa"
            onClick={() => handleLinkClick("kuruwa")}
          >
            <div
              className={`flex items-center pl-10 h-10 border-t-2 border-[#E2E7ED] ${
                activeLink === "kuruwa"
                  ? "bg-[#6361DC] text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="text-start mr-[6.5rem]">Kuruwa</div>
              <img src={group} alt="" className="w-3 h-3" />
            </div>
          </Link>
          <Link
            to="/dashboard/notarypublic"
            onClick={() => handleLinkClick("notarypublic")}
          >
            <div
              className={`flex items-center pl-10 h-10 border-y-2 border-[#E2E7ED] ${
                activeLink === "notarypublic"
                  ? "bg-[#6361DC] text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="mr-16">Notary Public</div>
              <img src={pen} alt="" className="w-3 h-3" />
            </div>
          </Link>
        </div>
        <div className="hidden md:block">
          <div
            className="flex  items-center pl-10 border-t-2 w-full py-2 hover:cursor-pointer"
            onClick={logoutUser}
          >
            <div className="mr-5">Log out</div>
            <img src={logoutbuttonimage} className="w-4 h-4" alt="" />
          </div>
        </div>
      </main>
      {showMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <div className="bg-white h-full w-3/4 md:w-1/4 p-6">
            <img src={kaagazpatralogo} className="w-60  mr-2" alt="" />
            <div className="flex flex-col justify-between h-[85vh]">
              <div>
                <Link
                  to="/dashboard/lekhapadi"
                  onClick={() => handleLinkClick("lekhapadi")}
                >
                  <div
                    className={`flex items-center pl-10 h-10 border-t-2 border-[#E2E7ED] ${
                      activeLink === "lekhapadi"
                        ? "bg-[#6361DC] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <div className="text-start mr-4">Generate Document</div>
                    <img src={send} alt="" className="w-3 h-3" />
                  </div>
                </Link>
                <Link
                  to="/dashboard/kuruwa"
                  onClick={() => handleLinkClick("kuruwa")}
                >
                  <div
                    className={`flex items-center pl-10 h-10 border-t-2 border-[#E2E7ED] ${
                      activeLink === "kuruwa"
                        ? "bg-[#6361DC] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <div className="text-start mr-[6.5rem]">Kuruwa</div>
                    <img src={group} alt="" className="w-3 h-3" />
                  </div>
                </Link>
                <Link
                  to="/dashboard/notarypublic"
                  onClick={() => handleLinkClick("notarypublic")}
                >
                  <div
                    className={`flex items-center pl-10 h-10 border-y-2 border-[#E2E7ED] ${activeLink === "notarypublic" ? "bg-[#6361DC] text-white" : "bg-white text-black"}`}
                  >
                    <div className="mr-16">Notary Public</div>
                    <img src={pen} alt="" className="w-3 h-3" />
                  </div>
                </Link>
              </div>
              <div className="flex items-center pl-10 border-t-2 w-full py-2 hover:cursor-pointer" onClick={logoutUser}>
                <div className="mr-5" >
                  Log out
                </div>
                <img src={logoutbuttonimage} className="w-4 h-4" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Sideboard;
