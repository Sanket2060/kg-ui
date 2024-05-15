import React from 'react'

function Person({name,place,backgroundImage}) {
  return (
    <div className="person  rounded-md flex flex-col text-xl largemobiles:text-lg items-center">
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-32 h-32  bg-cover bg-center rounded-md mb-4"
    ></div>
    <div className="name text-xl largemobiles:text-lg md:text-xl leading-[30px]">{name}</div>
    <div className="address text-sm largemobiles:text-[12px] md:text-sm leading-[21px]">{place}</div>
  </div>
)
}

export default Person