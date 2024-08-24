import { Fa500Px } from "react-icons/fa";
import KuruwaChart from "./components/KuruwaChart";
import UserTable from "./components/UserTable";
import Comments from "./components/Comments";

const Kuruwa = () => {
  return (
    <div className="flex flex-col w-full h-full ">
      <h1 className="font-poppins text-center font-bold text-2xl pb-5 ">
        KagazPatra{" "}
      </h1>
      <div
        id="upper"
        className="flex flex-wrap items-center my-5 justify-start pl-4 md:pl-20 w-full h-auto gap-4 md:gap-10"
      >
        <div className="bg-[#D9D9D9] h-16 w-16 md:h-20 md:w-20 justify-center items-center text-center flex rounded-full">
          <Fa500Px />
          <span>200k</span>
        </div>
        <div className="bg-[#D9D9D9] h-16 w-16 md:h-20 md:w-20 justify-center items-center text-center flex rounded-full">
          <span>
            <Fa500Px />
          </span>
          <span className="bg-blue-800 text-center text-slate-50 p-2 w-8 h-8 relative top-[-45px] left-5 rounded-full">
            5
          </span>
        </div>
        <div className="bg-[#D9D9D9] h-16 w-16 md:h-20 md:w-20 justify-center items-center text-center flex rounded-full">
          <Fa500Px />
        </div>
        <div className="bg-[#D9D9D9] h-16 w-16 md:h-20 md:w-20 justify-center items-center text-center flex rounded-full">
          <Fa500Px />
        </div>
      </div>
      <div className="h-auto w-full flex flex-col md:flex-row gap-10 justify-between px-5">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <KuruwaChart />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-10">
          <UserTable />
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Kuruwa;
