import React from "react";
import { useState, useEffect } from "react";
import Profile from "../Profile";
import Sideboard from "@/components/Sideboard";
import DocumentHistory from "@/components/DocumentHistory";

function ProfileLayout() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const documents = [
    {
      title: "Document 1",
      date: "2024-10-08",
      downloadLink: "http://example.com/doc1.pdf",
    },
    {
      title: "Document 2",
      date: "2024-10-09",
      downloadLink: "http://example.com/doc2.pdf",
    },
    {
        title: "Document 2",
        date: "2024-10-09",
        downloadLink: "http://example.com/doc2.pdf",
      },
      {
        title: "Document 2",
        date: "2024-10-09",
        downloadLink: "http://example.com/doc2.pdf",
      },
      {
        title: "Document 2",
        date: "2024-10-09",
        downloadLink: "http://example.com/doc2.pdf",
      },
  ];
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
