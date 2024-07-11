import React from "react";
import Sideboard from "../components/Sideboard";
import DashboardNavbar from "../components/DashboardNavbar";
import { Outlet } from "react-router-dom";
import DashboardPopup from "../components/DashboardPopup";
import { useState,useEffect } from "react";
function DashboardLayout() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    setPopupOpen(true);
  }, []);

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="flex w-screen h-screen">
      <div className=" h-full">
        <Sideboard />
      </div>
      <div className=" h-full w-full overflow-auto">
        <DashboardNavbar />
        <Outlet /> {/* This is where the nested routes will be rendered */}
      </div>
      <DashboardPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        message="This is an informational popup."
      />
    </div>
  );
}

export default DashboardLayout;
