import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SuccessPage = () => {
  const [tokens, setTokens] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get Base64 encoded response from the URL
    const query = new URLSearchParams(window.location.search);
    const base64Response = query.get('data');

    if (base64Response) {
      try {
        // Decode the Base64 string
        const decodedString = atob(base64Response);

        // Parse the decoded JSON string
        const parsedData = JSON.parse(decodedString);

        // Log the transaction data to the console for backend use
        console.log("Transaction Data:", parsedData);

        // Fetch user tokens from the backend
        const fetchUserTokens = async () => {
          try {
            // Replace with your backend endpoint to fetch user token status
            const response = await axios.get('/api/user/tokens');
            setTokens(response.data.documentTokens);
            setLoading(false);
          } catch (err) {
            setError('Error fetching token data');
            setLoading(false);
          }
        };

        fetchUserTokens();
      } catch (err) {
        setError('Failed to decode payment data.');
        setLoading(false);
      }
    } else {
      setError('No payment data found.');
      setLoading(false);
    }
  }, []);

  const handleGenerateDocument = async () => {
    try {
      const response = await axios.post('/api/generate-document', {
        userId: 1, // Replace with dynamic user ID
        documentId: 'example-document-id', // Replace with actual document ID
      });
      alert('Document generated successfully');
      navigate('/dashboard/Lekhapadi'); // Redirect to document dashboard
    } catch (error) {
      alert('Error generating document');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg max-w-md p-8 text-center">
        {/* Tailwind Payment Successful Icon */}
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
          <button onClick={handleGenerateDocument} className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
            Generate Document
          </button>
        ) : (
          <p className="mt-4 text-red-500">You don't have enough tokens to generate a document.</p>
        )}
      </div>
    </div>
  );
};

export default SuccessPage;
