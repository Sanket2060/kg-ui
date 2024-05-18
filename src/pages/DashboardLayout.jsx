import React from "react";
import Sideboard from "../components/Sideboard";
import DashboardNavbar from "../components/DashboardNavbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex w-screen h-screen">
      <div className=" h-full">
        <Sideboard />
      </div>
      <div className=" h-full  overflow-auto">
        <DashboardNavbar />
        <Outlet /> {/* This is where the nested routes will be rendered */}
      </div>
    </div>
  );
}

export default DashboardLayout;