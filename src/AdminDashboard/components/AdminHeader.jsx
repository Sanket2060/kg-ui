const AdminHeader = ({ isOpen }) => {
  return (
    <nav
      className={`bg-[#6361DC] text-white p-4  h-14 transition-margin duration-300 sticky top-0 z-10 ${
        isOpen ? "ml-0" : "ml-0"
      } hidden lg:flex`}
    >
      <div className="flex justify-between items-center px-8 w-full">
        <div className="absolute w-8 h-[0.5px] bg-gray-800 transform rotate-[60deg] origin-bottom-right"></div>
        <div className="absolute w-8 h-[0.5px] bg-gray-800 transform -rotate-[60deg] origin-top-right"></div>
        <div className="pl-20">Dashboard</div>
      </div>
    </nav>
  );
};

export default AdminHeader;
// import React from 'react'

// const AdminHeader = () => {
//   return (
//     <div className='bg-slate-400 h-10 w-full '>
//     headers
//     </div>
//   )
// }

// export default AdminHeader
