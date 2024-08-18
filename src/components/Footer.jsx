// import React from "react";
// import kaagazpatralogo from "../assets/kaagazpatralogo.png";

// function Footer() {
//   return (
//     <footer className="mx-10   font-Poppins">
//       <div className="footer1 flex flex-col xl:flex-row xl:justify-around mb-10 min-w-52">
//         <div className="flex justify-center xl:block mb-10">
//           <img src={kaagazpatralogo} className="min-w-52 w-52" alt="" />
//         </div>
//         <div className="flex flex-wrap mobile:flex-col largemobiles:flex-row mobile:flex-nowrap md:flex-nowrap  largemobiles:gap-x-14 largemobiles:gap-y-7 sm:content-between  md:gap-x-0 justify-around text-sm *:hover:cursor-pointer w-full largemobiles:h-[400px]">
//           <div className="column2">
//             <div className="font-semibold text-2xl mb-5">Company</div>
//             <div className="mb-3">Home</div>
//             <div className="mb-3">About</div>
//             <div className="mb-3">Services</div>
//             <div className="mb-3">Contact Us</div>
//           </div>
//           <div className="column">
//             <div className="font-semibold text-2xl mb-5">Products</div>
//             <div className="mb-3">Kuruwa</div>
//             <div className="mb-3">Book your lawyer</div>
//           </div>
//           <div className="column ">
//             <div className="font-semibold text-2xl mb-5">Supports</div>
//             <div className="mb-3">Help Topics</div>
//             <div className="mb-3">FAQ's</div>
//           </div>
//           <div className="column ">
//             <div className="font-semibold text-2xl mb-5">Trust and issues</div>
//             <div className="mb-3">Terms and conditions</div>
//             <div className="mb-3">Privacy Policy</div>
//             <div className="mb-3">Cookies Preferences</div>
//             <div className="mb-3">Licenses</div>
//             <div className="mb-3">Security</div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center items-center footer2 text-[#30455E] h-14">
//         ©Copywrite claimed By Dès vu Technologies. Design and Developed By
//         Kagazpatra Team.
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";

function Footer() {
  return (
    <footer className="mx-0 font-Poppins bg-[#f7f8fe] border-t-[1px]">
      <div className="footer1 flex flex-col xl:flex-row xl:justify-around mb-10 pt-4">
        <div className="flex justify-center xl:block mb-10">
          <img src={kaagazpatralogo} className="min-w-52 w-52" alt="" />
        </div>
        <div className="flex flex-wrap flex-col  md:flex-row largemobiles:gap-y-7 md:gap-y-0 lg:gap-x-14 justify-around text-sm w-full largemobiles:h-auto">
          <div className="column2 mb-7 largemobiles:mb-0">
            <div className="font-semibold text-2xl mb-5">Company</div>
            <div className="mb-3 hover:cursor-pointer">Home</div>
            <div className="mb-3 hover:cursor-pointer">About</div>
            <div className="mb-3 hover:cursor-pointer">Services</div>
            <div className="mb-3 hover:cursor-pointer">Contact Us</div>
          </div>
          <div className="column mb-7 largemobiles:mb-0">
            <div className="font-semibold text-2xl mb-5">Products</div>
            <div className="mb-3 hover:cursor-pointer">Kuruwa</div>
            <div className="mb-3 hover:cursor-pointer">Book your lawyer</div>
          </div>
          <div className="column mb-7 largemobiles:mb-0">
            <div className="font-semibold text-2xl mb-5">Supports</div>
            <div className="mb-3 hover:cursor-pointer">Help Topics</div>
            <div className="mb-3 hover:cursor-pointer">FAQ's</div>
          </div>
          <div className="column mb-7 largemobiles:mb-0">
            <div className="font-semibold text-2xl mb-5">Trust and issues</div>
            <div className="mb-3 hover:cursor-pointer">
              Terms and conditions
            </div>
            <div className="mb-3 hover:cursor-pointer">Privacy Policy</div>
            <div className="mb-3 hover:cursor-pointer">Cookies Preferences</div>
            <div className="mb-3 hover:cursor-pointer">Licenses</div>
            <div className="mb-3 hover:cursor-pointer">Security</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center footer2 text-[#30455E] h-14 border-t-[1px]">
        ©Copywrite claimed By Dès vu Technologies. Design and Developed By
        Kagazpatra Team.
      </div>
    </footer>
  );
}

export default Footer;
