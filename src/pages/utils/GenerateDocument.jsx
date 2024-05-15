import React from 'react'
import GenerateDocumentComp from '../../components/GenerateDocumentComp'
import Sideboard from '../../components/Sideboard'
import DashboardNavbar from '../../components/DashboardNavbar'

function GenerateDocument() {
  return (
    <div className="flex w-screen h-screen">
    <div className="md:w-[30%]  lg:w-[20%] h-full">
     <Sideboard />
    </div>
    <div className=" md:w-[70%] lg:w-[80%] xl:w-[80%] h-full">
      <DashboardNavbar />
      <GenerateDocumentComp/>
    </div>
  </div>
)
}

export default GenerateDocument