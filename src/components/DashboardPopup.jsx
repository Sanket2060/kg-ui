import React from "react";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";
import cross from "../assets/cross.png";
import Button from "./Button";
import Select from "./Select";
import Services from "./Services";
import policereport from "../assets/policereport.png";
import irddocument from "../assets/irddocument.png";
import { useForm } from "react-hook-form";
import { updateProfile } from "../api/userApi/updateProfile.js";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user/authSlice.js";

const DashboardPopup = ({ isOpen, onClose, message }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const provinceOptions = [
    { value: "province1", label: "Province 1" },
    { value: "province2", label: "Province 2" },
    { value: "province3", label: "Province 3" },
    // Add more options as needed
  ];

  // Define municipality options
  const districtOptions = [
    { value: "District1", label: "District 1" },
    { value: "District2", label: "District 2" },
    { value: "District3", label: "District 3" },
    // Add more options as needed
  ];
  const municipalityOptions = [
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
  const submit = async ({ province, district, municipality, ward }) => {
    const updatedUser = await updateProfile(
      province,
      district,
      municipality,
      ward
    );
    console.log(updatedUser);
    onClose();
    dispatch(login(updatedUser?.data));
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 font-Poppins">
          <form
            onSubmit={handleSubmit(submit)}
            className="bg-white relative rounded-lg py-9 px-8 w-[90%] sm:w-[75%] lg:w-[70%] xl:w-[60%] h-fit flex flex-col items-start font-medium"
          >
            <div className="text-base w-full">
              <div className="mb-4 text-base flex justify-between hover:cursor-pointer">
                <div>Select Your Location</div>
                <img
                  src={cross}
                  className="w-4 h-4"
                  alt=""
                  srcset=""
                  onClick={onClose}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 sm:mb-0">
                {/* {/* <Select
                  type="Province"
                  options={provinceOptions}
                  special="w-full"
                  {...register("province", { required: true })}
                /> */}
                <div className="rounded-xl w-full">
                  <select
                    className={`text-[10px] lg:text-base xl:text-lg appearance-none w-full h-12 bg-white border border-[#E2E7ED] text-gray-700 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500`}
                    {...register("province", { required: true })}
                    type="province"
                  >
                    <option value="" disabled selected>
                      Province
                    </option>
                    {provinceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="rounded-xl w-full">
                  <select
                    className={`text-[10px] lg:text-base xl:text-lg appearance-none w-full h-12 bg-white border border-[#E2E7ED] text-gray-700 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500`}
                    {...register("district", { required: true })}
                    type="district"
                  >
                    <option value="" disabled selected>
                      District
                    </option>
                    {districtOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="rounded-xl w-full">
                  <select
                    className={`text-[10px] lg:text-base xl:text-lg appearance-none w-full h-12 bg-white border border-[#E2E7ED] text-gray-700 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500`}
                    {...register("municipality", { required: true })}
                    type="Municipality"
                  >
                    <option value="" disabled selected>
                      Municipality
                    </option>
                    {municipalityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="rounded-xl w-full ">
                  <select
                    className={`text-[10px] lg:text-base xl:text-lg appearance-none w-full h-12 bg-white border border-[#E2E7ED] text-gray-700 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500`}
                    {...register("ward", { required: true })}
                    type="Ward"
                  >
                    <option value="" disabled selected>
                      Ward
                    </option>
                    {wardOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className=" services font-Poppins text-[#30455E] w-full hidden sm:block lg:mb-7">
              <div className="text-center  font-semibold text-[28px] leading-[72px] mt-3 sm:mt-8 md:mt-4 lg:mt-8 mb-5">
                Services
              </div>
              <div className="flex flex-wrap justify-between md:justify-around sm:mb-6 md:mb-1">
                <div className="flex flex-col items-center   sm:w-1/4 lg:w-1/5  lg:mb-0 mb-8  lg:flex-nowrap sm:mr-2 md:mr-0 ">
                  <img
                    src={policereport}
                    className="w-16 h-14 sm:w-20 sm:h-16 lg:w-28 lg:h-24"
                    alt=""
                  />
                  <div className="mt-3 text-center text-sm md:text-base">
                    Police Report
                  </div>
                </div>
                <div className="flex flex-col items-center sm:w-1/4  md:w-1/4 lg:w-1/5  lg:mb-0 mb-8  lg:flex-nowrap  sm:mr-2 md:mr-0">
                  <img
                    src={irddocument}
                    alt=""
                    className="w-16 h-14 sm:w-20 sm:h-16 lg:w-28 lg:h-24"
                  />
                  <div className="mt-3 text-center text-sm md:text-base">
                    IRD Document
                  </div>
                </div>
                <div className="flex flex-col items-center sm:w-1/4  md:w-1/4 lg:w-1/5  lg:mb-0 mb-8  lg:flex-nowrap sm:mr-2 md:mr-0">
                  <img
                    src={irddocument}
                    alt=""
                    className="w-16 h-14 sm:w-20 sm:h-16 lg:w-28 lg:h-24"
                  />
                  <div className="mt-3 text-center text-sm md:text-base">
                    Malpot Document
                  </div>
                </div>

                {/* For small screens: Single items */}
                <div className="flex flex-col items-center sm:w-1/4  md:w-1/4 lg:w-1/5 lg:mb-0 mb-8  lg:flex-nowrap sm:mr-2 md:mr-0">
                  <img
                    src={irddocument}
                    alt=""
                    className="w-16 h-14 sm:w-20 sm:h-16 lg:w-28 lg:h-24"
                  />
                  <div className="mt-3 text-center text-sm md:text-base">
                    Municipality Document
                  </div>
                </div>
                <div className="flex flex-col items-center sm:w-1/4  md:w-1/4 lg:w-1/5 lg:mb-0 mb-8   lg:flex-nowrap sm:mr-2 md:mr-0">
                  <img
                    src={irddocument}
                    alt=""
                    className="w-16 h-14 sm:w-20 sm:h-16 lg:w-28 lg:h-24"
                  />
                  <div className="mt-3 text-center text-sm md:text-base">
                    Ward Document
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full  justify-center sm:justify-end">
              <Button
                text="Submit"
                special="w-40 h-9 rounded-xl p-2"
                type="submit"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default DashboardPopup;
