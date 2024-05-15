import React from 'react'
import Sideboard from '../../components/Sideboard'
import DashboardNavbar from '../../components/DashboardNavbar'
import PrintingDocumentComp from '../../components/PrintingDocumentComp'
function PrintingDocument() {
  return (
    <div className="flex w-screen h-screen">
      <div className="md:w-[30%]  lg:w-[20%] h-full">
       <Sideboard />
      </div>
      <div className=" md:w-[70%] lg:w-[80%] xl:w-[80%] h-full">
        <DashboardNavbar />
        <PrintingDocumentComp/>
      </div>
    </div>
)
}

export default PrintingDocument