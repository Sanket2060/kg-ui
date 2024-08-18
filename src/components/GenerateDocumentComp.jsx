import React, { useEffect } from "react";
import { useState } from "react";
import Task from "./Task";
import task1 from "../assets/task1.png";
import Select from "./Select";
import Button from "./Button";
import { Link } from "react-router-dom";
import InputGenerateDocument from "./Input-GenerateDocument";
import { getRequiredFields } from "../api/getRequiredFields";
import { useSelector, useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { generateDocument } from "../api/generateDocument";
import { useNavigate } from "react-router-dom";
import { setPdfUrl, clearPdfUrl } from "../features/user/pdfFileSlice";

function GenerateDocumentComp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, formState, handleSubmit, getValues } = useForm();
  const user = useSelector((state) => state.auth.userDetails);
  const userProvince = user.province;
  const [work, setWork] = useState("");
  const [currentFields, setCurrentFields] = useState([]);
  const options = [
    { value: "rajinamasifarish", label: "Rajinama Sifarish" },
    { value: "nagariktasifarish", label: "Nagarikta Sifarish" },
    { value: "option3", label: "Option 3" },
  ];

  const onWorkChange = async (work) => {
    console.log("work:", work);
    const Fields = await getRequiredFields(work, user);
    setWork(work);
    setCurrentFields(Fields);
    console.log(Fields);
  };
  const placeholderTexts = {
    parentName: "Ram Bahadur",
    wardno: "12",
    fullName: "Sandesh Ghimire",
    municipality: "Pokhara",
    parent: "",
  };
  const submitGenerationDetails = async (data) => {
    const response = await generateDocument({ ...data, work });
    if (response) {
      console.log("response", response);
      // setpdfFile(response.document.filePath);
      dispatch(setPdfUrl(response.data.document.filePath));
      navigate("/dashboard/printdocument");
    }
  };
   const [locationInfo, setLocationInfo] = useState({
     selectedProvinceName: "",
     selectedDistrictName: "",
     selectedMunicipalityName: "",
     selectedWardNo: "",
   });
   // Retrieve data from localStorage when the component mounts
   useEffect(() => {
     const province = localStorage.getItem("selectedProvinceName");
     const district = localStorage.getItem("selectedDistrictName");
     const municipality = localStorage.getItem("selectedMunicipalityName");
     const ward = localStorage.getItem("selectedWardNo");

     // Update the state with the retrieved data
     setLocationInfo({
       selectedProvinceName: province || "",
       selectedDistrictName: district || "",
       selectedMunicipalityName: municipality || "",
       selectedWardNo: ward || "",
     });
   }, []);

  return (
    <div className="font-Poppins text-base mx-2 lg:ml-24 lg:mr-48  flex flex-col ">
      <div className="flex lg:justify-between lg:items-center   flex-col lg:flex-row">
        <div className="flex ">
          <div className="w-[5.6rem] flex-col">
            <Task taskimage={task1} text="" />
          </div>
          <div className="mx-2 items-center flex ">Lekhapadi</div>
        </div>
        <div className="flex items-center">
          <div className="flex   lg:w-[29rem] px-4 rounded-xl py-2 border-[1px] border-[#E2E7ED] justify-center items-center ">
            {/* Lumbini Province/sainamaina Municipality/ Ward-6 */}
            {locationInfo.selectedProvinceName}/{locationInfo.selectedDistrictName}/{locationInfo.selectedMunicipalityName}/{locationInfo.selectedWardNo}
          </div>
        </div>
      </div>
      <form
        className=" lg:ml-24"
        onSubmit={handleSubmit(submitGenerationDetails)}
      >
        <div className="mb-5">Select Required Documents</div>
        <div className="mb-5">
          <Select
            type="Rajinama Sifarish"
            options={options}
            special="w-72"
            onChange={onWorkChange}
          />
        </div>
        {/* <div className=" min-h-[20rem] border-[1px] lg:border-black rounded-md mb-6 overflow-auto"> */}
        <div className="min-h-[20rem] lg:max-h-[20rem] border-[1px] lg:border-black rounded-md mb-6 overflow-y-auto">
          <div className=" flex ">
            <div className=" p-6 flex flex-wrap gap-2 ">
              {currentFields?.map((field) => {
                return (
                  <InputGenerateDocument
                    inputText={field}
                    placeholderText={
                      placeholderTexts[field] || `Enter ${field}`
                    }
                    {...register(field)}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            text="Generate"
            special="w-44 h-10 rounded-xl"
          />
        </div>
      </form>
    </div>
  );
}

export default GenerateDocumentComp;

//Create redux store for pdf and store from the file.REtrieve at printingdocument and send to pdfComp and use it to render it
