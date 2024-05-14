import React from 'react'
import Sideboard from '../components/Sideboard'
import DashboardNavbar from '../components/DashboardNavbar'
function Dashboard() {
  return (
    <div className='flex'>
      <Sideboard/>
      <DashboardNavbar/>
    </div>
)
}

export default Dashboard