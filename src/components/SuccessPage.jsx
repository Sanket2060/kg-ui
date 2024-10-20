// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import axios from "axios";
// // import { v4 as uuidv4 } from "uuid";
// // import CryptoJS from "crypto-js";

// // const SuccessPage = () => {
// //   const user = useSelector((state) => state.auth.userDetails);
// //   const tokens = user?.user?.documentTokens || 0; // Fallback to 0 if tokens are undefined
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const handleTransaction = async () => {
// //       const query = new URLSearchParams(window.location.search);
// //       const base64Response = query.get("data");

// //       if (base64Response) {
// //         try {
// //           const decodedString = atob(base64Response);
// //           const parsedData = JSON.parse(decodedString);

// //           console.log("Transaction Data:", parsedData);

// //           if (!verifyResponseSignature(parsedData)) {
// //             throw new Error("Invalid signature. Possible tampering detected.");
// //           }

// //           await addNewTransaction(parsedData);
// //         } catch (err) {
// //           setError(err.message || "Failed to process payment data.");
// //         }
// //       } else {
// //         setError("No payment data found.");
// //       }
// //       setLoading(false);
// //     };

// //     handleTransaction();
// //   }, []);

// //   const verifyResponseSignature = (responseData) => {
// //     const { signature, signed_field_names } = responseData;
// //     const fields = signed_field_names.split(",");
// //     const valuesToSign = fields
// //       .map((field) => `${field}=${responseData[field]}`)
// //       .join(",");

// //     const secretKey = "8gBm/:&EnhH.1/q"; // Your actual secret key
// //     const generatedSignature = CryptoJS.HmacSHA256(valuesToSign, secretKey);
// //     const base64Signature = CryptoJS.enc.Base64.stringify(generatedSignature);

// //     return base64Signature === signature;
// //   };

// //   const addNewTransaction = async (transactionData) => {
// //     try {
// //       const response = await axios.post(
// //         `${import.meta.env.VITE_REACT_APP_BASE_URL}/transaction/addNewTransaction`,
// //         transactionData,
// //         { withCredentials: true }
// //       );
// //       console.log("Transaction response", response);
// //     } catch (error) {
// //       throw new Error("Failed to process transaction");
// //     }
// //   };

// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div className="text-red-500">{error}</div>;

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10">
// //       <div className="bg-white shadow-lg rounded-lg max-w-md p-8 text-center">
// //         <div className="flex justify-center mb-6">
// //           <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
// //             <svg
// //               className="w-12 h-12 text-green-600"
// //               xmlns="http://www.w3.org/2000/svg"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               stroke="currentColor"
// //               strokeWidth="2"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M5 13l4 4L19 7"
// //               />
// //             </svg>
// //           </div>
// //         </div>

// //         <h1 className="text-2xl font-bold text-green-600 mb-4">
// //           Payment Successful!
// //         </h1>
// //         <p>Your payment has been successfully processed.</p>
// //         <p>You currently have {tokens} document generation token(s).</p>

// //         {tokens > 0 ? (
// //           <button
// //             onClick={navigate("/dashboard/lekhapadi")}
// //             className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
// //           >
// //             Generate Document
// //           </button>
// //         ) : (
// //           <p className="mt-4 text-red-500">
// //             You don't have enough tokens to generate a document.
// //           </p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SuccessPage;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import CryptoJS from "crypto-js";

// const SuccessPage = () => {
//   const user = useSelector((state) => state.auth.userDetails);
//   const tokens = user?.user?.documentTokens || 0;
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [transactionProcessed, setTransactionProcessed] = useState(false);
//   const [hasSentRequest, setHasSentRequest] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleTransaction = async () => {
//       if (hasSentRequest) return; // Prevent further requests

//       const query = new URLSearchParams(window.location.search);
//       const base64Response = query.get("data");

//       if (base64Response) {
//         try {
//           const decodedString = atob(base64Response);
//           const parsedData = JSON.parse(decodedString);

//           console.log("Transaction Data:", parsedData);

//           // Step 1: Check if transaction already processed
//           const checkTransactionStatus = await checkTransaction(parsedData);

//           if (checkTransactionStatus) {
//             setError("Token for this transaction already added.");
//           } else {
//             // Step 2: Proceed if not already processed
//             if (!verifyResponseSignature(parsedData)) {
//               throw new Error(
//                 "Invalid signature. Possible tampering detected."
//               );
//             }

//             // Step 3: Add the new transaction
//             await addNewTransaction(parsedData);
//             setTransactionProcessed(true);
//           }

//           setHasSentRequest(true); // Ensure no further requests
//         } catch (err) {
//           setError(err.message || "Failed to process payment data.");
//         }
//       } else {
//         setError("No payment data found.");
//       }
//       setLoading(false);
//     };

//     handleTransaction();
//   }, [hasSentRequest]); // Ensure only one request per load

//   const checkTransaction = async (transactionData) => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_REACT_APP_BASE_URL}/transaction/checkTransactionStatus`,
//         { transaction_uuid: transactionData.transaction_uuid },
//         { withCredentials: true }
//       );
//       return response.data.transactionAlreadyExists;
//     } catch (error) {
//       console.error("Error checking transaction status:", error);
//       return false;
//     }
//   };

//   const verifyResponseSignature = (responseData) => {
//     const { signature, signed_field_names } = responseData;
//     const fields = signed_field_names.split(",");
//     const valuesToSign = fields
//       .map((field) => `${field}=${responseData[field]}`)
//       .join(",");

//     const secretKey = "8gBm/:&EnhH.1/q"; // Your actual secret key
//     const generatedSignature = CryptoJS.HmacSHA256(valuesToSign, secretKey);
//     const base64Signature = CryptoJS.enc.Base64.stringify(generatedSignature);

//     return base64Signature === signature;
//   };

//   const addNewTransaction = async (transactionData) => {
//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_REACT_APP_BASE_URL}/transaction/addNewTransaction`,
//         transactionData,
//         { withCredentials: true }
//       );
//       console.log("Transaction added successfully:", response);
//     } catch (error) {
//       throw new Error("Error saving transaction");
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10">
//       <div className="bg-white shadow-lg rounded-lg max-w-md p-8 text-center">
//         <div className="flex justify-center mb-6">
//           <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
//             <svg
//               className="w-12 h-12 text-green-600"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           </div>
//         </div>

//         <h1 className="text-2xl font-bold text-green-600 mb-4">
//           Payment Successful!
//         </h1>
//         <p>Your payment has been successfully processed.</p>
//         <p>You currently have {tokens} document generation token(s).</p>

//         {tokens > 0 ? (
//           <button
//             onClick={() => navigate("/dashboard/lekhapadi")}
//             className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
//           >
//             Generate Document
//           </button>
//         ) : (
//           <p className="mt-4 text-red-500">
//             You don't have enough tokens to generate a document.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SuccessPage;
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import { login } from "@/features/user/authSlice"; // Assuming `login` is the Redux action to update user data
import { toast } from "react-toastify";

const SuccessPage = () => {
  const user = useSelector((state) => state.auth.userDetails);
  const tokens = user?.user?.documentTokens || 0; // Fallback to 0 if tokens are undefined
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get the dispatch method from Redux

  // Use a ref to ensure the effect runs only once
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return; // Ensure the function runs only once
    hasFetched.current = true;

    const handleTransaction = async () => {
      const query = new URLSearchParams(window.location.search);
      const base64Response = query.get("data");

      if (base64Response) {
        try {
          const decodedString = atob(base64Response);
          const parsedData = JSON.parse(decodedString);

          console.log("Transaction Data:", parsedData);

          if (!verifyResponseSignature(parsedData)) {
            throw new Error("Invalid signature. Possible tampering detected.");
          }

          await addNewTransaction(parsedData);
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
        } catch (err) {
          setError(err.message || "Failed to process payment data.");
        }
      } else {
        setError("No payment data found.");
      }
      setLoading(false);
    };

    handleTransaction();
  }, []); // Empty dependency array ensures it runs only on mount

  const verifyResponseSignature = (responseData) => {
    const { signature, signed_field_names } = responseData;
    const fields = signed_field_names.split(",");
    const valuesToSign = fields
      .map((field) => `${field}=${responseData[field]}`)
      .join(",");

    const secretKey = "8gBm/:&EnhH.1/q"; // Your actual secret key
    const generatedSignature = CryptoJS.HmacSHA256(valuesToSign, secretKey);
    const base64Signature = CryptoJS.enc.Base64.stringify(generatedSignature);

    return base64Signature === signature;
  };

  const addNewTransaction = async (transactionData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/transaction/addNewTransaction`,
        transactionData,
        { withCredentials: true }
      );
      console.log("Transaction response", response);
      toast.success(response.data.message);
    } catch (error) {
      throw new Error("Failed to process transaction");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg max-w-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <p>Your payment has been successfully processed.</p>
        <p>You currently have {tokens} document generation token(s).</p>

        {tokens > 0 ? (
          <button
            onClick={() => navigate("/dashboard/lekhapadi")}
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Generate Document
          </button>
        ) : (
          <p className="mt-4 text-red-500">
            You don't have enough tokens to generate a document.
          </p>
        )}
      </div>
    </div>
  );
};

export default SuccessPage;
