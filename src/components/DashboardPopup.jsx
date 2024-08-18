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
import axios from "axios";

const DashboardPopup = ({ isOpen, onClose, message }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [wards, setWards] = useState([]);

  // Single state object to manage selected IDs and Names
  const [selectedLocation, setSelectedLocation] = useState({
    provinceId: "",
    districtId: "",
    municipalityId: "",
    wardNo: "",
    provinceName: "",
    districtName: "",
    municipalityName: "",
  });

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
        console.log(response.data.provinces);
        setProvinces(response.data.provinces || []);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  // Fetch districts for the selected province
  useEffect(() => {
    if (selectedLocation.provinceId) {
      const fetchDistricts = async () => {
        try {
          const response = await axios.get(
            `http://localhost:2000/api/v1/province/${selectedLocation.provinceId}/districts`,
            { headers: { accept: "application/json" } }
          );
          setDistricts(response.data || []);
          console.log("district", response.data);
          setSelectedLocation((prev) => ({ ...prev, districtId: "" })); // Reset district selection when province changes
        } catch (error) {
          console.error("Error fetching districts:", error);
        }
      };

      fetchDistricts();
    } else {
      setDistricts([]);
      setSelectedLocation((prev) => ({ ...prev, districtId: "" })); // Reset district selection
    }
  }, [selectedLocation.provinceId]);

  // Fetch municipalities for the selected district
  useEffect(() => {
    if (selectedLocation.districtId) {
      const fetchMunicipalities = async () => {
        try {
          const response = await axios.get(
            `http://localhost:2000/api/v1/district/${selectedLocation.districtId}/municipalities`,
            { headers: { accept: "application/json" } }
          );
          setMunicipalities(response.data || []);
          console.log("municipality", response.data);
          setSelectedLocation((prev) => ({ ...prev, municipalityId: "" })); // Reset municipality selection when district changes
        } catch (error) {
          console.error("Error fetching municipalities:", error);
        }
      };

      fetchMunicipalities();
    } else {
      setMunicipalities([]);
      setSelectedLocation((prev) => ({ ...prev, municipalityId: "" })); // Reset municipality selection
    }
  }, [selectedLocation.districtId]);

  // Fetch wards for the selected municipality
  useEffect(() => {
    if (selectedLocation.municipalityId) {
      const fetchWards = async () => {
        try {
          const response = await axios.get(
            `http://localhost:2000/api/v1/municipality/${selectedLocation.municipalityId}/wards`,
            { headers: { accept: "application/json" } }
          );
          setWards(response.data || []);
          console.log(response.data);
          setSelectedLocation((prev) => ({ ...prev, wardNo: "" })); // Reset ward selection when municipality changes
        } catch (error) {
          console.error("Error fetching wards:", error);
        }
      };

      fetchWards();
    } else {
      setWards([]);
      setSelectedLocation((prev) => ({ ...prev, wardNo: "" })); // Reset ward selection
    }
  }, [selectedLocation.municipalityId]);

  // Handle change for province, district, municipality, and ward
  const handleLocationChange = (event, type) => {
    const { value } = event.target;
    const selectedOption =
      type === "province"
        ? provinces.find((option) => option.id == value)
        : type === "district"
          ? districts.find((option) => option.id == value)
          : municipalities.find((option) => option.id == value);

    setSelectedLocation((prev) => ({
      ...prev,
      [`${type}Id`]: value,
      [`${type}Name`]: selectedOption ? selectedOption.name : "",
    }));
  };

  const handleWardChange = (event) => {
    setSelectedLocation((prev) => ({ ...prev, wardNo: event.target.value }));
  };

  const submit = async () => {
    const { provinceName, districtName, municipalityName, wardNo } =
      selectedLocation;
    console.log("Selected Province:", provinceName);
    console.log("Selected District:", districtName);
    console.log("Selected Municipality:", municipalityName);
    console.log("Selected Ward No:", wardNo);

    if (!provinceName || !districtName || !municipalityName || !wardNo) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      localStorage.setItem("selectedProvinceName", provinceName);
      localStorage.setItem("selectedDistrictName", districtName);
      localStorage.setItem("selectedMunicipalityName", municipalityName);
      localStorage.setItem("selectedWardNo", wardNo);
      const updatedUser = await updateProfile(
        provinceName,
        districtName,
        municipalityName,
        wardNo
      );

      console.log("Profile updated:", updatedUser);
      onClose();
      dispatch(login(updatedUser?.data));
    } catch (error) {
      console.error("Error updating profile:", error);
    }
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
                <img src={cross} className="w-4 h-4" alt="" onClick={onClose} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 sm:mb-0">
                <div className="rounded-xl w-full">
                  <select
                    className={`text-[10px] lg:text-base xl:text-lg appearance-none w-full h-12 bg-white border border-[#E2E7ED] text-gray-700 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500`}
                    {...register("province", { required: true })}
                    onChange={(e) => handleLocationChange(e, "province")}
                  >
                    <option value="" disabled selected>
                      Province
                    </option>
                    {provinces.map((option, index) => (
                      <option key={index} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="rounded-xl w-full">
                  <select
                    className={`text-[10px] lg:text-base xl:text-lg appearance-none w-full h-12 bg-white border border-[#E2E7ED] text-gray-700 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500`}
                    {...register("district", { required: true })}
                    onChange={(e) => handleLocationChange(e, "district")}
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
                    onChange={(e) => handleLocationChange(e, "municipality")}
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
                <div className="rounded-xl w-full">
                  <select
                    className={`text-[10px] lg:text-base xl:text-lg appearance-none w-full h-12 bg-white border border-[#E2E7ED] text-gray-700 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500`}
                    {...register("wardNo", { required: true })}
                    onChange={handleWardChange}
                  >
                    <option value="" disabled selected>
                      Ward No
                    </option>
                    {wards.map((option) => (
                      <option key={option} value={option}>
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
