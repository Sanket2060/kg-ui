import { FaRegNewspaper, FaUser, FaUsersCog } from 'react-icons/fa';
import UserTable from './components/UserTable';
import KuruwaChart from './components/KuruwaChart';
import CountCom from './components/CountCom';

const KagazPatraUser = () => {
  return (
    <div className="w-full h-full flex p-10">
      <div className="">
        <h1 className="font-poppins text-center font-bold text-2xl pb-5 ">
          KagazPatra{" "}
        </h1>
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
        <div className="flex flex-row mt-10 gap-5">
          <div className="">
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
