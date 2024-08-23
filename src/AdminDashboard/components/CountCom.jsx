import { FaParagraph, FaUsersCog } from "react-icons/fa";

const CountCom = ({icons,name,bigicon}) => {
  return (
    <div>
      <div className="flex flex-col w-full md:w-96 h-auto rounded-2xl drop-shadow-md">
        <div className="flex bg-slate-200 h-20 justify-between items-center px-4 rounded-t-2xl">
          <span className="text-slate-900 font-semibold text-lg">{name}</span>
          <div className="bg-white w-32 h-14 flex flex-row justify-between items-center px-5 rounded-sm">
            <FaUsersCog className="h-5 w-8 [#6361DC]" />
            <div className="border-l-[1px] border-gray-500 h-14"></div>
            <span className=" text-cyan-700"> {icons}</span>
          </div>
        </div>
        <div className="flex bg-[#f9f7f7] h-32 justify-between items-center px-10 rounded-b-2xl">
         
          <span className="h-10 w-12 text-cyan-700">{bigicon}</span>
          <span className="font-bold text-lg">224k</span>
        </div>
      </div>
    </div>
  );
}

export default CountCom
