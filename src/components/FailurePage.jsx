import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const FailurePage = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg max-w-md p-8 text-center">
        <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Transaction Unsuccessful
        </h1>
        <p className="text-gray-700 mb-6">
          Unfortunately, your transaction could not be completed. Please try
          again later or contact support if the issue persists.
        </p>

        <button
          onClick={handleGoToDashboard}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default FailurePage;
