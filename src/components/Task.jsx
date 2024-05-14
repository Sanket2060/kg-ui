import React from 'react'

function Task({taskimage,text}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='w-24 h-24  border-[1px] mb-2 border-[#E2E7ED] rounded-xl flex justify-center items-center'>
            <img src={taskimage} alt="" className='w-7 h-7'/>
        </div>
        <div>{text}</div>
     </div>
  )
}

export default Task