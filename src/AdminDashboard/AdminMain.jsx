

// export default AdminMain
import { useState } from "react";

import { Fa500Px, FaAddressBook, FaParagraph, FaRegNewspaper, FaUser, FaUsersCog } from "react-icons/fa";
import Chartcom  from "./components/Chartcom";
import UserTable from "./components/UserTable";
import CountCom from "./components/CountCom";

const AdminMain= () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex mt-5 p-15 h-screen flex-col lg:flex-row bg-[#fcfeff] w-full">
      <div className="flex-grow flex flex-col w-full">
        <div className="w-full h-full flex flex-col">
          <div
            id="upper"
            className="flex items-center my-5 justify-start pl-4 md:pl-20 w-full h-24 gap-4 md:gap-10  "
          >
            
          </div>
          {/**middle */}
          <div
            id="middle"
            className="flex flex-col md:flex-row gap-4 md:gap-24 h-auto w-full  justify-center p-4 md:p-0"
          >
            <CountCom
              name=" total users"
              icons={<FaUsersCog className="h-5 w-8" />}
              bigicon={<FaUser className="h-10 w-12" />}
            />
            <CountCom
              name="Kuruwa"
              icons={<FaUser className="h-5 w-8" />}
              bigicon={<FaUsersCog className="h-10 w-12" />}
            />
            <CountCom
              name="Kagazpatra"
              icons={<FaRegNewspaper className="h-5 w-8" />}
              bigicon={<FaRegNewspaper className="h-10 w-12" />}
            />
          </div>
          {/**lower */}
          <div
            id="lower"
            className=" mt-5 p-10 flex flex-col gap-5 justify-center items-center   w-full "
          >
            <div className="w-full">
              <Chartcom />
            </div>
            <div className="w-full flex justify-center flex-col items-center ">
              <h1 className="text-xl font-bold py-5">A list of recent users</h1>
              <UserTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;

