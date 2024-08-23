import React from "react";

function Button({ special, text, type = "submit",onClick }) {
  return (
    <button
      type={type}
      className={`${special} bg-[#6361DC] text-white flex justify-center items-center rounded-2xl w-28 h-9`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
