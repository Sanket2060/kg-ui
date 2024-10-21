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
import axios from "axios";
import { login } from "@/features/user/authSlice"; // Assuming `login` is the Redux action to update user data
import DashboardPopup from "./DashboardPopup";
import { toast } from "react-toastify";

function GenerateDocumentComp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const user = useSelector((state) => state.auth.userDetails);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [transactionUuid] = useState(uuidv4()); // Generate a unique transaction ID
  const [work, setWork] = useState("");
  const [currentFields, setCurrentFields] = useState([]);
  const documentCount = useSelector(
    (state) => state.auth.userDetails.documentCount
  ); // Assuming `documentCount` is in Redux store
  const documentTokens = useSelector(
    (state) => state.auth.userDetails.user.documentTokens
  );

  useEffect(() => {
    console.log("current fields", currentFields);
  }, [currentFields]);
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

  const handleClosePopup = async () => {
    try {
      const userDetailsResponse = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/getDetails/fetchUserProfileDetails`,
        { withCredentials: true }
      );
      console.log("Fetched user profile details successfully.");
      // Dispatch the login action with the fetched user profile data
      dispatch(login(userDetailsResponse.data.userProfile));

      console.log("User profile details updated successfully.");
      setShowPopup(false);
    } catch (error) {
      console.error("Error fetching user profile details:", error);
      setShowPopup(false);
    }
  };

  const placeholderTexts = {
    parentName: "Ram Bahadur",
    wardno: "12",
    fullName: "Sandesh Ghimire",
    municipality: "Pokhara",
    parent: "",
  };

  const submitGenerationDetails = async (data) => {
    console.log(
      "province,district,municipality,wardno",
      user.province,
      user.district,
      user.municipality,
      user.ward
    );
    if (!user.province || !user.district || !user.municipality || !user.ward) {
      toast.warn(
        "Please fill the province,district,municipality and wardno to generate document"
      );
      setShowPopup(true); // Show popup when validation fails
      return;
    }
    const response = await generateDocument({ ...data, work, user });
    if (response) {
      try {
        const userDetailsResponse = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/getDetails/fetchUserProfileDetails`,
          { withCredentials: true }
        );
        console.log("Fetched user profile details successfully.");
        // Dispatch the login action with the fetched user profile data
        dispatch(login(userDetailsResponse.data.userProfile));

        console.log("User profile details updated successfully.");
      } catch (error) {
        console.error("Error fetching user profile details:", error);
      }
      dispatch(setPdfUrl(response.data.document.filePath));
      navigate("/dashboard/printdocument");
    }
  };

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
      {showPopup && (
        <DashboardPopup
          isOpen={true}
          onClose={handleClosePopup}
          message="Please fill all required fields."
          specialClass="hidden"
        />
      )}
      <div className="flex lg:justify-between lg:items-center flex-col lg:flex-row">
        <div className="flex">
          <div className="w-[5.6rem] flex-col">
            <Task taskimage={task1} text="" />
          </div>
          <div className="mx-2 items-center flex">Lekhapadi</div>
        </div>
        <div className="flex items-center">
          <div className="flex lg:w-[29rem] px-4 rounded-xl py-2 border-[1px] border-[#E2E7ED] justify-center items-center">
            {user.province || null}/{user.district || null}/
            {user.municipality || null}/{user.ward || null}
          </div>
        </div>
      </div>

      {documentCount > 10 && documentTokens === 0 ? (
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
              value="http://localhost:3000/success"
              required
            />
            <input
              type="hidden"
              id="failure_url"
              name="failure_url"
              value="http://localhost:3000/failure"
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
              type="Select a work"
              options={options}
              special="w-72"
              onChange={onWorkChange}
            />
          </div>
          {!user?.province?.trim() ||
          !user?.district?.trim() ||
          !user?.municipality?.trim() ||
          !user?.ward?.toString().trim() ? (
            <>
              <div className="min-h-[20rem] lg:max-h-[20rem] border-[1px] border-gray-300 lg:border-gray-400 bg-gray-100 rounded-md mb-6 p-6 flex flex-col justify-center items-center shadow-lg">
                <p className="text-gray-700 font-medium text-lg mb-4 text-center">
                  You haven't set your province, district, municipality, or ward
                  yet.
                </p>
                <button
                  onClick={() => setShowPopup(true)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Set Now
                </button>
              </div>
            </>
          ) : (
            <div className="min-h-[20rem] lg:max-h-[20rem] border-[1px] lg:border-black rounded-md mb-6 overflow-y-auto">
              <div className="p-6 flex flex-wrap gap-2">
                {currentFields?.requiredFields?.map((field) => (
                  <InputGenerateDocument
                    key={field}
                    inputText={field}
                    placeholderText={
                      placeholderTexts[field] || `Enter ${field}`
                    }
                    {...register(field)} // Pass register props to the component
                  />
                ))}
                {currentFields?.optionalFields?.map((field) => (
                  <InputGenerateDocument
                    key={field}
                    inputText={field}
                    placeholderText={
                      placeholderTexts[field] || `Enter ${field}`
                    }
                    optionalClass={true}
                    {...register(field)} // Pass register props to the component
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <Button
              type="submit"
              text="Generate"
              special="w-44 h-10 rounded-xl"
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default GenerateDocumentComp;
