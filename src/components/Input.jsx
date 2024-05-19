import React from "react";
import { useForm } from "react-hook-form";
function Input({ placeholder, special, name, type = "text",patternValue,patternMessage }) {
  const { register, formState } = useForm();
  const { errors } = formState;
 
  return (
    <>
      <input
        type={type}
        name={name}
        id=""
        placeholder={placeholder}
        className={`${special} px-4 py-2 rounded-2xl border-2 border-[#30455E] focus:outline-none mb-4 mt-2`}
        {...register(`${name}`, {
          required: `${name} is required`,
          pattern: {
            value: `${patternValue}`,
            message: `${patternMessage}`,
          },
        })}
      />
{errors[name] && <p>{errors[name].message}</p>}    </>
  );
}

export default Input;
