import React, { useRef } from "react";
import Task from "./Task";
import task1 from "../assets/task1.png";
import Button from "./Button";
import PdfComp from "../PdfComp";
import { useSelector } from "react-redux";

function PrintingDocumentComp() {
  const pdfFile = useSelector((state) => state.pdf.pdfUrl);
  const pdfIframeRef = useRef(null);
  
  const handlePrint = async () => {
    try {
      const response = await fetch(pdfFile);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = url;
      document.body.appendChild(iframe);

      iframe.onload = function () {
        iframe.contentWindow.print();
      };
    } catch (error) {
      console.error("Error printing PDF:", error);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(pdfFile);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `document.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
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
            Lumbini Province/sainamaina Municipality/ Ward-6
          </div>
        </div>
      </div>
      <div className="lg:ml-24 mt-10">
        <div className="flex flex-wrap">
          {pdfFile && (
            <div className="flex w-full ">
              <div className="">
                <PdfComp pdfFile={pdfFile} />
              </div>
              <div className="flex  justify-end items-end mt-10 gap-3">
                <Button
                  text="Print"
                  special="w-44 h-10 rounded-xl mb-4"
                  onClick={handlePrint}
                />
                <Button
                  text="Download"
                  special="w-44 h-10 rounded-xl mb-4"
                  onClick={handleDownload}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PrintingDocumentComp;
