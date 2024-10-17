import React from "react";
import { useState, useEffect } from "react";
import Profile from "../Profile";
import Sideboard from "@/components/Sideboard";
import DocumentHistory from "@/components/DocumentHistory";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
function ProfileLayout() {
  const user = useSelector((state) => state.auth.userDetails);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const getDocumentHistory = async () => {
      try {
        // Assuming your API endpoint for getting document history is '/api/documents/history'
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/documents/${user?.id}`,
          { withCredentials: true }
        );

        // Assuming the API returns data in the format { success: true, documents: [...] }
        if (response.data.success) {
          console.log("Document History:", response.data.documents);
          console.log("type of response",typeof response.data.documents)
          setDocuments(response.data.documents); // Set documents here
        } else {
          console.error(
            "Error fetching document history:",
            response.data.error
          );
        }
      } catch (error) {
        console.error("API call error:", error);
      }
    };
    getDocumentHistory();
  }, [user]);

  useEffect(() => {
    console.log(documents);
  }, [documents]);

  useEffect(() => {
    setPopupOpen(true);
  }, []);

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="flex w-screen h-screen">
      <div className=" h-full">
        <Sideboard />
      </div>
      <div className=" h-full w-full overflow-auto">
        <Profile />
        <DocumentHistory documents={documents} />
      </div>
      {/* <DashboardPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        message="This is an informational popup."
      /> */}
    </div>
  );
}

export default ProfileLayout;
