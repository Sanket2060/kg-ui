import React from "react";

function Input({ placeholder, special,name,type='text' }) {
  return (
    <>
      <input
        type={type}
        name={name}
        id=""
        placeholder={placeholder}
        className={`${special} px-4 py-2 rounded-2xl border-2 border-[#30455E] focus:outline-none mb-4 mt-2`}
      />
    </>
  );
}

export default Input;
