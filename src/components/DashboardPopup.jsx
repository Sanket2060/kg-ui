import React, { useEffect, useState } from "react";
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
import axios  from "axios";

const DashboardPopup = ({ isOpen, onClose, message }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [wards, setWards] = useState([]);

  const [selectedProvinceId, setSelectedProvinceId] = useState("");
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [selectedMunicipalityId, setSelectedMunicipalityId] = useState("");
  const [selectedWardNo, setSelectedWardNo] = useState("");

  // Fetch the list of provinces when the component mounts
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2000/api/v1/province",
          {
            headers: { accept: "application/json" },
          }
        );
        console.log(response.data.province);
        console.log("wrong ur")
        setProvinces(response.data.provinces || []);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  // Fetch districts for the selected province
  useEffect(() => {
    if (selectedProvinceId) {
      const fetchDistricts = async () => {
        try {
          const response = await axios.get(
            `http://localhost:2000/api/v1/province/${selectedProvinceId}/districts`,
            {
              headers: { accept: "application/json" },
            }
          );
          setDistricts(response.data || []);
          setSelectedDistrictId(""); // Reset district selection when province changes
        } catch (error) {
          console.error("Error fetching districts:", error);
        }
      };

      fetchDistricts();
    } else {
      // Clear districts if no province is selected
      setDistricts([]);
      setSelectedDistrictId(""); // Reset district selection
    }
  }, [selectedProvinceId]);

  // Fetch municipalities for the selected district
  useEffect(() => {
    if (selectedDistrictId) {
      const fetchMunicipalities = async () => {
        try {
          const response = await axios.get(
            `http://localhost:2000/api/v1/district/${selectedDistrictId}/municipalities`,
            {
              headers: { accept: "application/json" },
            }
          );
          setMunicipalities(response.data || []);
          setSelectedMunicipalityId(""); // Reset municipality selection when district changes
        } catch (error) {
          console.error("Error fetching municipalities:", error);
        }
      };

      fetchMunicipalities();
    } else {
      // Clear municipalities if no district is selected
      setMunicipalities([]);
      setSelectedMunicipalityId(""); // Reset municipality selection
    }
  }, [selectedDistrictId]);

  // Fetch wards for the selected municipality
  useEffect(() => {
    if (selectedMunicipalityId) {
      const fetchWards = async () => {
        try {
          const response = await axios.get(
            `http://localhost:2000/api/v1/municipality/${selectedMunicipalityId}/wards`,
            {
              headers: { accept: "application/json" },
            }
          );
          setWards(response.data || []);
          console.log(response.data);
          setSelectedWardNo(""); // Reset ward selection when municipality changes
        } catch (error) {
          console.error("Error fetching wards:", error);
        }
      };

      fetchWards();
    } else {
      // Clear wards if no municipality is selected
      setWards([]);
      setSelectedWardNo(""); // Reset ward selection
    }
  }, [selectedMunicipalityId]);

  // Handle province change
  const handleProvinceChange = (event) => {
    setSelectedProvinceId(event.target.value);
  };

  // Handle district change
  const handleDistrictChange = (event) => {
    setSelectedDistrictId(event.target.value);
  };

  // Handle municipality change
  const handleMunicipalityChange = (event) => {
    setSelectedMunicipalityId(event.target.value);
  };

  // Handle ward change
  const handleWardChange = (event) => {
    setSelectedWardNo(event.target.value);
  };
  // const provinceOptions = [
  //   { value: "province1", label: "Province 1" },
  //   { value: "province2", label: "Province 2" },
  //   { value: "province3", label: "Province 3" },
  //   // Add more options as needed
  // ];

  // // Define municipality options
  // const districtOptions = [
  //   { value: "District1", label: "District 1" },
  //   { value: "District2", label: "District 2" },
  //   { value: "District3", label: "District 3" },
  //   // Add more options as needed
  // ];
  // const municipalityOptions = [
  //   { value: "municipality1", label: "Municipality 1" },
  //   { value: "municipality2", label: "Municipality 2" },
  //   { value: "municipality3", label: "Municipality 3" },
  //   // Add more options as needed
  // ];

  // // Define ward options
  // const wardOptions = [
  //   { value: "ward1", label: "Ward 1" },
  //   { value: "ward2", label: "Ward 2" },
  //   { value: "ward3", label: "Ward 3" },
  //   // Add more options as needed
  // ];
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
                    onChange={handleProvinceChange}
                  >
                    <option value="" disabled selected>
                      Province
                    </option>
                    {provinces.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="rounded-xl w-full">
                  <select
                    className={`text-[10px] lg:text-base xl:text-lg appearance-none w-full h-12 bg-white border border-[#E2E7ED] text-gray-700 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500`}
                    {...register("district", { required: true })}
                    type="district"
                    onChange={handleDistrictChange}
                  >
                    <option value="" disabled selected>
                      District
                    </option>
                    {districts.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="rounded-xl w-full">
                  <select
                    className={`text-[10px] lg:text-base xl:text-lg appearance-none w-full h-12 bg-white border border-[#E2E7ED] text-gray-700 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500`}
                    {...register("municipality", { required: true })}
                    type="Municipality"
                    onChange={handleMunicipalityChange}
                  >
                    <option value="" disabled selected>
                      Municipality
                    </option>
                    {municipalities.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="rounded-xl w-full ">
                  <select
                    className={`text-[10px] lg:text-base xl:text-lg appearance-none w-full h-12 bg-white border border-[#E2E7ED] text-gray-700 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500`}
                    {...register("ward", { required: true })}
                    type="Ward"
                  
                    onChange={handleWardChange}
                  >
                    <option value="" disabled selected>
                      Ward
                    </option>
                    {wards.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option}
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
