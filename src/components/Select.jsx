import React from 'react'

function Select({type="Province",special='w-full'}) {
  return (
    <div className="w-fit  rounded-xl mr-12">
            <select className={`block appearance-none ${special} h-10 bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-gray-500`}>
              <option value="" disabled selected>
                {type}
              </option>
              <option>Bagmati</option>
              <option>Gandaki</option>
              <option>Lumbini</option>
              <option>Karnali</option>
              <option>Sudurpashchim</option>
              <option>Madhesh</option>
              <option>Province 1</option>
            </select>
          </div>
)
}

export default Select