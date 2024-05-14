import React from "react";
import Sideboard from "../components/Sideboard";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardMain from "../components/DashboardMain";
function Dashboard() {
  return (
    <div className="flex w-screen">
      <Sideboard />
      <div className="w-[80%]">
        <DashboardNavbar />
        <DashboardMain/>
      </div>
    </div>
  );
}

export default Dashboard;
