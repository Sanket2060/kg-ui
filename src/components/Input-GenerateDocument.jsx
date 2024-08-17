// import React from "react";
// import { forwardRef } from 'react';

// const InputGenerateDocument = forwardRef(({inputText,placeholderText},ref) => {
//   InputGenerateDocument.displayName = inputText;
//   return (
//     <>
//       <div className="mb-2 md:px-6">
//         <label
//           className="block font-medium text-gray-700 mb-2"
//           htmlFor={inputText}
//         >
//           Your {inputText}*
//         </label>
//         <input
//           className="max-w-56 h-12 px-3 py-2 border border-gray-300 rounded-xl"
//           type="text"
//           id={inputText}
//           name={inputText}
//           placeholder={placeholderText}
//           required
//           ref={ref}
//         />
//       </div>
//     </>
//   );
// });
// export default InputGenerateDocument++++++++++++++++++++++++++++++
import React, { useEffect } from "react";
import { forwardRef } from "react";
import { EntoanyTextField } from "entoany";
import { useState } from "react";
const InputGenerateDocument = forwardRef(
  ({ inputText, placeholderText, ...rest }, ref) => {
    const [enteredText, setEnteredText] = useState("");
    const [selectedText, setSelectedText] = useState("");
    const handleEnteredTextChange = (text) => {
      setEnteredText(text);
    };

    const handleSelectedTextChange = (selectedValue) => {
      setSelectedText(selectedValue);
    };
    useEffect(() => {
      console.log("entered text",enteredText);
      console.log("selected Text", selectedText);
    }, [enteredText,selectedText]);
    InputGenerateDocument.displayName = inputText;
    return (
      <>
        <div className="mb-2 md:px-6">
          <label
            className="block font-medium text-gray-700 mb-2"
            htmlFor={inputText}
          >
            Your {inputText}*
          </label>
          {/* <input
          className="max-w-56 h-12 px-3 py-2 border border-gray-300 rounded-xl"
          type="text"
          id={inputText}
          name={inputText}
          placeholder={placeholderText}
          required
          ref={ref}
          {...rest}
        /> */}
          <EntoanyTextField
            preferredLanguage="ne" // Example preferred language setting
            hintText="Enter text here" // Example hint text
            onEnteredTextChange={handleEnteredTextChange}
            onSelectedTextChange={handleSelectedTextChange}
          />
        </div>
      </>
    );
  }
);

export default InputGenerateDocument;
