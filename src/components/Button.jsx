import React from "react";

function Button({ special, text, type = "submit" }) {
  return (
    <button
      type={type}
      className={`${special} bg-[#6361DC] text-white flex justify-center items-center rounded-2xl`}
    >
      {text}
    </button>
  );
}

export default Button;
