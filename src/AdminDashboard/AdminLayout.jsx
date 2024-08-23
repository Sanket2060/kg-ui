import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar';
import AdminHeader from './components/AdminHeader';

const AdminLayout = () => {
     const [isOpen, setIsOpen] = useState(false);

     const toggleSidebar = () => {
       setIsOpen(!isOpen);
     };
    return (
      <div className=" flex flex-row w-full h-screen">
        <div className=" ">
          <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className="flex flex-col h-full w-full">
          <AdminHeader isOpen={isOpen} />
          <div className=" h-full w-full flex-grow overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    );
}

export default AdminLayout
