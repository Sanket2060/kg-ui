import React from "react";
import task1 from "../assets/task1.png";
import task2 from "../assets/task2.png";
import task3 from "../assets/task3.png";
import task4 from "../assets/task4.png";
import task5 from "../assets/task5.png";
import task6 from "../assets/task6.png";
import task7 from "../assets/task7.png";
import task8 from "../assets/task8.png";
import Task from "./Task.jsx";

function DashboardMain() {
  return (
    <div className="font-Poppins text-base font-medium md:mx-16 lg:mx-20 xl:mx-28 ">
      <div className="grid grid-cols-3 md:grid-cols-2  xl:grid-cols-4 gap-y-6 h-fit">
        <Task taskimage={task1} text="Lekhapadi" />
        <Task taskimage={task2} text="Police Report"/>
        <Task taskimage={task3} text="Yatayat Karyalaya"/>
        <Task taskimage={task4} text="Woda Karyalaya"/>
        <Task taskimage={task5} text="Nagarpalika"/>
        <Task taskimage={task6} text="Karmachari Sanchya kosh"/>
        <Task taskimage={task7} text="Yatayat Karyalaya"/>
        <Task taskimage={task8} text="Woda Karyalaya" />
      </div>
    </div>
  );
}

export default DashboardMain;