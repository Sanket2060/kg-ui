import React from "react";
import { Link } from "react-router-dom";
function Task({ taskimage, text }) {
  return (
    <Link to={`/dashboard/generateDocument/${text}`}>
    <div className="flex flex-col justify-center items-center hover:cursor-pointer">
      <div className="w-[5.6rem] h-[5.6rem]  border-[1px] mb-2 border-[#E2E7ED] rounded-xl flex justify-center items-center">
        <img src={taskimage} alt="" className="w-7 h-7" />
      </div>
      <div className="text-center">{text}</div>
    </div>
    </Link>
  );
}

export default Task;
