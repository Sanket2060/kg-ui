import search from "../assets/search.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";
import UserProfile from "./UserProfile";
import person from "../assets/person3.png"

function DashboardNavbar() {
  const [isProfile,setIsProfile]=useState(false)
  const users = useSelector((state) => state.auth.user);
 const { isAuthenticated } = useSelector((state) => state.auth);
 console.log(users?.user);
//  const parts = users?.user.name.split(" ");

//      // Extract the first letter of the first and last parts
//      const firstInitial = parts[0].charAt(0).toUpperCase()
//     const lastInitial =
//       parts.length > 1 ? parts[parts.length - 1].charAt(0).toUpperCase() : "";

// console.log(parts[0])
// console.log(firstInitial,lastInitial)
  const provinceOptions = [
    { value: "province1", label: "Province 1" },
    { value: "province2", label: "Province 2" },
    { value: "province3", label: "Province 3" },
    // Add more options as needed
  ];

  // Define municipality options
  const muncipalityOptions = [
    { value: "municipality1", label: "Municipality 1" },
    { value: "municipality2", label: "Municipality 2" },
    { value: "municipality3", label: "Municipality 3" },
    // Add more options as needed
  ];

  // Define ward options
  const wardOptions = [
    { value: "ward1", label: "Ward 1" },
    { value: "ward2", label: "Ward 2" },
    { value: "ward3", label: "Ward 3" },
    // Add more options as needed
  ];

  const userProfileHandle=()=>{
    setIsProfile(true)

  }
  const closeProfile=()=>{
    setIsProfile(false)
  }
  return (
    <div className="w-full mb-10 mt-0 lg:px-14 md:px-10 px-4 font-Poppins text-[#30455E] font-medium border-b-[1px]">
      <div className="flex flex-wrap lg:flex-nowrap justify-between  items-center mb-6">
        <div className="mr-10 flex justify-between items-center gap-20  w-full ">
          <div className="">
            <span className=" text-center text-xl">{users?.user.name}</span>
            {/* <span>{user?.lastName || "Karki"}</span> */}
          </div>
          {/* <div className="text-sm">
            {users?.user.email || "sanketgbs.21@gmail.com"}
          </div> */}
        </div>
        <div className="flex pt-5 lg:mt-0 w-full gap-8 justify-between lg:justify-end">
          <span className=" text-3xl">
            <Link to={"/admindashboard"}>
              {isAuthenticated && users?.user.role === "SUPERADMIN" ? (
                <Button className="bg-slate-500">Admin</Button>
              ) : (
                ""
              )}
            </Link>
          </span>
          <div className="w-52  h-10 border-2 border-[#E2E7ED] flex items-center p-2 rounded-xl ">
            <img src={search} className="w-4 h-4 mr-3" alt="" />{" "}
            <input
              type="text"
              className="focus:outline-none flex-1 w-36 placeholder:text-black"
              name=""
              id=""
              placeholder="Search"
            />
           
          </div>
          <div className=" cursor-pointer" onClick={userProfileHandle}>
            <Avatar>
            <AvatarImage src={person} alt='image'/>
              {/* <AvatarFallback>
                {" "}
                {firstInitial}
                {lastInitial}
              </AvatarFallback> */}
            </Avatar>
          </div>
        </div>
      </div>
      {isProfile && <UserProfile closeuserProfile={closeProfile} />}
      {/* <div className="text-base ">
        <div className="mb-4 text-base">Select Your Location</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Select type="Province" options={provinceOptions} />
          <Select
            type="Muncipality"
            special="md:w-32"
            options={muncipalityOptions}
          />
          <Select type="Ward" options={wardOptions} />
        </div>
      </div> */}
    </div>
  );
}

export default DashboardNavbar;
