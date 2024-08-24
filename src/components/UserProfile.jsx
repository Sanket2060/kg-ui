import { FaHome, FaKey, FaLock, FaUser } from "react-icons/fa";
import {HiArrowLeftEndOnRectangle} from "react-icons/hi2"
import cross from "../assets/cross.png"
import { useDispatch } from "react-redux";
import { logout } from "@/features/user/authSlice";
import { toast } from "react-toastify";

const UserProfile = ({ closeuserProfile }) => {
   const dispatch = useDispatch();
  const logoutUser =  () => {
    
      
      dispatch(logout());
      toast.success("Logged Out Successfully");
    
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 bg-white absolute top-12 right-5 w-64 h-64">
      <span
        className=" absolute top-3 right-3 h-5 w-5 cursor-pointer "
        onClick={closeuserProfile}
      >
        {" "}
        <img src={cross} alt="cross" className=" h-5 w-5" />
      </span>
      <div className=" py-9 ">
        <span className="font-poppin text-gray-500 text-base pl-5 p-2 flex  gap-4 hover:bg-slate-400 hover:text-white cursor-pointer">
          <FaUser className="mt-1" /> Profile
        </span>
        <span className="font-poppins text-gray-500 text-base flex pl-5 p-2 gap-4 hover:bg-slate-400 hover:text-white cursor-pointer">
          {" "}
          <FaKey className="mt-1" />
          Change password
        </span>
        <span className="font-poppins text-gray-500 text-base p-2 pl-5 flex gap-4 hover:bg-slate-400 hover:text-white cursor-pointer">
          {" "}
          <FaHome className="mt-1" />
          My Account
        </span>
        <span className=" font-poppins text-gray-500 text-base p-2 pl-5 flex gap-4 hover:bg-slate-400 hover:text-white cursor-pointer">
          <FaLock className="mt-1" />
          Settings
        </span>
        <span
          className="font-poppins text-gray-500 text-base p-2 pl-5 flex gap-4 hover:bg-slate-400 hover:text-white cursor-pointer border-t-[1px] "
          onClick={logoutUser}
        >
          <HiArrowLeftEndOnRectangle className="h-8 w-8 " />
          Logout
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
