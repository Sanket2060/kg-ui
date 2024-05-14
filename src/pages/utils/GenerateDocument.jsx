import React from 'react'
import GenerateDocumentComp from '../../components/GenerateDocumentComp'
import Sideboard from '../../components/Sideboard'
import DashboardNavbar from '../../components/DashboardNavbar'

function GenerateDocument() {
  return (
    <div className="flex w-screen">
    <Sideboard />
    <div className="w-[80%]">
      <DashboardNavbar />
      <GenerateDocumentComp/>
    </div>
  </div>
)
}

export default GenerateDocument