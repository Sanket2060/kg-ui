import React from 'react'
import Sideboard from '../../components/Sideboard'
import DashboardNavbar from '../../components/DashboardNavbar'
import PrintingDocumentComp from '../../components/PrintingDocumentComp'
function PrintingDocument() {
  return (
    <div className="flex w-screen">
    <Sideboard />
    <div className="w-[80%]">
      <DashboardNavbar />
      <PrintingDocumentComp/>
    </div>
  </div>
)
}

export default PrintingDocument