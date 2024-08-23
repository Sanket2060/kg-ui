import React from 'react'
import { FaParagraph, FaUsersCog } from 'react-icons/fa';
import Kuruwa from './Kuruwa';
import UserTable from './components/UserTable';
import KuruwaChart from './components/KuruwaChart';

const KagazPatraUser = () => {
  return (
    <div className="w-full h-full flex p-10">
      <div className="">
        <div
          id="middle"
          className="flex flex-col md:flex-row gap-4 md:gap-24 h-auto w-full  justify-center p-4 md:p-0"
        >
          <div className="flex flex-col w-full md:w-96 h-auto rounded-2xl">
            <div className="flex bg-slate-200 h-20 justify-between items-center px-4 rounded-t-2xl">
              <span className="text-slate-900 font-semibold text-lg">
                Total users
              </span>
              <div className="bg-white w-32 h-14 flex flex-row justify-between items-center px-5">
                <FaUsersCog className="h-5 w-8" />
                <div className="border-l-[1px] border-gray-500 h-14"></div>
                <FaParagraph className="h-5 w-8" />
              </div>
            </div>
            <div className="flex bg-[#ED6C6C] h-32 justify-between items-center px-10 rounded-b-2xl">
              <FaUsersCog className="h-10 w-12" />
              <span className="font-bold text-lg">224k</span>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-96 h-auto">
            <div className="flex bg-slate-200 h-20 justify-between items-center px-4 rounded-t-2xl">
              <span className="text-slate-900 font-semibold text-lg">
                Kuruwa
              </span>
              <div className="bg-white w-32 h-14 flex flex-row justify-between items-center px-5">
                <FaUsersCog className="h-5 w-8" />
                <div className="border-l-[1px] border-gray-500 h-14"></div>
                <FaParagraph className="h-5 w-8" />
              </div>
            </div>
            <div className="flex bg-[#ED6C6C] h-32 justify-between items-center px-10 rounded-b-2xl">
              <FaUsersCog className="h-10 w-12" />
              <span className="font-bold text-lg">224k</span>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-96 h-auto">
            <div className="flex bg-slate-200 h-20 justify-between items-center px-4 rounded-t-2xl">
              <span className="text-slate-900 font-semibold text-lg">
                Total users
              </span>
              <div className="bg-white w-32 h-14 flex flex-row justify-between items-center px-5">
                <FaUsersCog className="h-5 w-8" />
                <div className="border-l-[1px] border-gray-500 h-14"></div>
                <FaParagraph className="h-5 w-8" />
              </div>
            </div>
            <div className="flex bg-[#ED6C6C] h-32 justify-between items-center px-10 rounded-b-2xl">
              <FaUsersCog className="h-10 w-12" />
              <span className="font-bold text-lg">224k</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-10 gap-5">
          <div className=''>
            {" "}
            <KuruwaChart />
          </div>
          <div>
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KagazPatraUser
