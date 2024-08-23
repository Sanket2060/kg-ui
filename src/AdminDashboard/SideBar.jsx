import { useState } from "react";
import kagazpatraLogo from "../assets/kaagazpatralogo.png";
import {
  FaBars,
  FaTachometerAlt,
  FaUsersCog,
  FaCogs,
  FaUser,
  FaRegNewspaper
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div
      className={`flex flex-col h-full bg-[#E2E7ED] p-5 transition-all duration-300   ${
        isOpen ? "w-64" : "w-15"
      } w-20 lg:flex`}
    >
      <div className="flex justify-between items-center">
        <img
          src={kagazpatraLogo}
          alt="Kagazpatra Logo"
          className={`${isOpen ? "w-40" : "w-16"} lg:w-40`}
        />
        <button
          onClick={toggleSidebar}
          className="text-slate-900 font-semibold h-8 w-8 
          "
        >
          <FaBars />
        </button>
      </div>
      <div
        className={`flex flex-col items-center mt-10 ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
        <ul className="flex flex-col gap-4 w-full">
          <li
            onClick={() => handleItemClick("dashboard")}
            className={`flex items-center text-slate-900 font-semibold text-lg p-2 rounded-lg cursor-pointer ${
              activeItem === "dashboard" ? "bg-white text-blue-600" : ""
            }`}
          >
            <Link to={"/admindashboard"} className="flex">
              <FaTachometerAlt className="mr-3 h-5 w-8" />
              {isOpen && <span className="lg:inline">Dashboard</span>}
            </Link>
          </li>
          <li
            onClick={() => handleItemClick("kuruwa")}
            className={`flex items-center text-slate-900 font-semibold text-lg p-2 rounded-lg cursor-pointer ${
              activeItem === "kuruwa" ? "bg-white text-blue-600" : ""
            }`}
          >
            <Link to={"/admindashboard/kuruwa"} className="flex ">
              <FaUser className="mr-3 h-5 w-8" />
              {isOpen && <span className="lg:inline">Kuruwa</span>}
            </Link>
          </li>
          <li
            onClick={() => handleItemClick("totalUsers")}
            className={`flex items-center text-slate-900 font-semibold text-lg p-2 rounded-lg cursor-pointer ${
              activeItem === "totalUsers" ? "bg-white text-blue-600" : ""
            }`}
          >
            <Link to={"/admindashboard/totalusers"} className="flex">
              <FaUsersCog className="mr-3 h-5 w-8" />
              {isOpen && <span className="lg:inline">Total Users</span>}
            </Link>
          </li>
          <li
            onClick={() => handleItemClick("kagazpatrauser")}
            className={`flex items-center text-slate-900 font-semibold text-lg p-2 rounded-lg cursor-pointer ${
              activeItem === "kagazpatrauser" ? "bg-white text-blue-600" : ""
            }`}
          >
            <Link to={"/admindashboard/kagazpatrauser"} className="flex">
              <FaRegNewspaper className="mr-3 h-5 w-8" />
              {isOpen && <span className="lg:inline"> KagazPatraUser</span>}
            </Link>
          </li>
          <li
            onClick={() => handleItemClick("settings")}
            className={`flex items-center text-slate-900 font-semibold text-lg p-2 rounded-lg cursor-pointer ${
              activeItem === "settings" ? "bg-white text-blue-600" : ""
            }`}
          >
            <Link to={"/admindashboard/setting"} className="flex">
              <FaCogs className="mr-3 h-5 w-8" />
              {isOpen && <span className="lg:inline">Settings</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
