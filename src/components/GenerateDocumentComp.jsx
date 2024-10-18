import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Task from "./Task";
import Select from "./Select";
import Button from "./Button";
import InputGenerateDocument from "./Input-GenerateDocument";
import { getRequiredFields } from "../api/getRequiredFields";
import { generateDocument } from "../api/generateDocument";
import { setPdfUrl } from "../features/user/pdfFileSlice";
import task1 from "../assets/task1.png";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

function GenerateDocumentComp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const user = useSelector((state) => state.auth.userDetails);
  const [transactionUuid] = useState(uuidv4()); // Generate a unique transaction ID
  const [work, setWork] = useState("");
  const [currentFields, setCurrentFields] = useState([]);
  const documentCount = useSelector(
    (state) => state.auth.userDetails.documentCount
  ); // Assuming `documentCount` is in Redux store
  const options = [
    { value: "nagariktasifarish", label: "Nagarikta Sifarish" },
    { value: "bipadasifarishpdf", label: "Bipadapida" },
    {
      value: "chalchalanpramanitprayozan",
      label: "Chalchalan Pramanit Prayozan",
    },
    { value: "chhutjaggadartagaripau", label: "Chhut Jagga Darta Gari Pau" },
    { value: "createrahadanisifarishpdf", label: "Create Rahadani Sifarish" },
    { value: "createtarjalipdf", label: "Tarjali Sifarish" },
    {
      value: "doshropatikonaamkonagarikta",
      label: "Doshro Pati Ko Naam Ko Nagarikta",
    },
    {
      value: "nabalakparichayapatra",
      label: "Nabalak Parichaya Patra-Children writing",
    },
    {
      value: "nabalikparichayapatraparentwriting",
      label: "Nabalik Parichaya Patra-Parent Writing",
    },
    {
      value: "patikonaamtharsamsodhitnagarikta",
      label: "Patiko Naam Thar Samsodhit Nagarikta",
    },
    { value: "photopramanitgaripau", label: "Photo Pramanit Garipau" },
    {
      value: "puranorahadaniharainayakoprapti",
      label: "Purano Rahadani Harai Naya Ko Prapti",
    },
    { value: "purjakopratilipi", label: "Purja Ko Pratilipi" },
    {
      value: "rahadanisifarishbibidkaran",
      label: "Rahadani Sifaris Bibid Karan",
    },
  ];

  const onWorkChange = async (work) => {
    console.log("Work is:", work);
    const Fields = await getRequiredFields(work, user);
    setWork(work);
    setCurrentFields(Fields);
  };

  const placeholderTexts = {
    parentName: "Ram Bahadur",
    wardno: "12",
    fullName: "Sandesh Ghimire",
    municipality: "Pokhara",
    parent: "",
  };

  const submitGenerationDetails = async (data) => {
    const response = await generateDocument({ ...data, work, user });
    if (response) {
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

  // Function to generate the signature
  const generateSignature = () => {
    const secretKey = "8gBm/:&EnhH.1/q"; // Replace with your actual secret key
    const payload = {
      total_amount: "5",
      transaction_uuid: transactionUuid,
      product_code: "EPAYTEST",
    };
    const stringToSign = `total_amount=${payload.total_amount},transaction_uuid=${payload.transaction_uuid},product_code=${payload.product_code}`;

    // Create the HMAC SHA256 hash
    const hash = CryptoJS.HmacSHA256(stringToSign, secretKey);

    // Return the hash in Base64 format
    return CryptoJS.enc.Base64.stringify(hash); // Convert to Base64 format
  };

  return (
    <div className="font-Poppins text-base mx-2 lg:ml-24 lg:mr-48 flex flex-col">
      <div className="flex lg:justify-between lg:items-center flex-col lg:flex-row">
        <div className="flex">
          <div className="w-[5.6rem] flex-col">
            <Task taskimage={task1} text="" />
          </div>
          <div className="mx-2 items-center flex">Lekhapadi</div>
        </div>
        <div className="flex items-center">
          <div className="flex lg:w-[29rem] px-4 rounded-xl py-2 border-[1px] border-[#E2E7ED] justify-center items-center">
            {locationInfo.selectedProvinceName}/
            {locationInfo.selectedDistrictName}/
            {locationInfo.selectedMunicipalityName}/
            {locationInfo.selectedWardNo}
          </div>
        </div>
      </div>

      {documentCount >= 10 ? (
        <div className="text-center mt-10">
          <p className="text-red-600 mb-4">
            You have generated {documentCount} documents. Please pay 5 rupees
            for each additional document.
          </p>
          <form
            action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
            method="POST"
          >
            <input type="hidden" id="amount" name="amount" value="5" required />
            <input
              type="hidden"
              id="tax_amount"
              name="tax_amount"
              value="0"
              required
            />
            <input
              type="hidden"
              id="total_amount"
              name="total_amount"
              value="5"
              required
            />
            <input
              type="hidden"
              id="transaction_uuid"
              name="transaction_uuid"
              value={transactionUuid}
              required
            />
            <input
              type="hidden"
              id="product_code"
              name="product_code"
              value="EPAYTEST"
              required
            />
            <input
              type="hidden"
              id="product_service_charge"
              name="product_service_charge"
              value="0"
              required
            />
            <input
              type="hidden"
              id="product_delivery_charge"
              name="product_delivery_charge"
              value="0"
              required
            />
            <input
              type="hidden"
              id="success_url"
              name="success_url"
              value="https://esewa.com.np"
              required
            />
            <input
              type="hidden"
              id="failure_url"
              name="failure_url"
              value="https://google.com"
              required
            />
            <input
              type="hidden"
              id="signed_field_names"
              name="signed_field_names"
              value="total_amount,transaction_uuid,product_code"
              required
            />
            <input
              type="hidden"
              id="signature"
              name="signature"
              value={generateSignature()}
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mt-4"
            >
              Pay from eSewa
            </button>
          </form>
        </div>
      ) : (
        <form
          className="lg:ml-24"
          onSubmit={handleSubmit(submitGenerationDetails)}
        >
          <div className="mb-5">Select Required Documents</div>
          <div className="mb-5">
            <Select
              options={options}
              onChange={onWorkChange}
              placeholder="Select Work"
              required
            />
          </div>
          {currentFields.map((field, index) => (
            <InputGenerateDocument
              key={index}
              name={field.name}
              register={register}
              placeholder={placeholderTexts[field.name]}
              required={field.required}
            />
          ))}
          <Button type="submit" text="Generate Document" />
        </form>
      )}
    </div>
  );
}

export default GenerateDocumentComp;
