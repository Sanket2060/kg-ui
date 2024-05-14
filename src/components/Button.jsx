import React from 'react'

function Button({special,text}) {
  return (
<button className={`${special} bg-[#6361DC] text-white flex justify-center items-center rounded-2xl`}>{text}</button>
)
}

export default Button