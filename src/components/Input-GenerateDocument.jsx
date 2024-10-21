import React, { useEffect } from "react";
import { forwardRef } from "react";
import { EntoanyTextField } from "entoany";
import { useState } from "react";

const InputGenerateDocument = forwardRef(
  ({
    inputText,
    placeholderText,
    onChange,
    onBlur,
    value,
    name,
    ref,
    optionalClass,
    ...rest
  }) => {
    const [enteredText, setEnteredText] = useState(value || "");
    const [selectedText, setSelectedText] = useState("");

    const handleEnteredTextChange = (text) => {
      setEnteredText(text);
      onChange({ target: { name, value: text } }); // Update form value
    };

    const handleSelectedTextChange = (selectedValue) => {
      setSelectedText(selectedValue);
      onChange({ target: { name, value: selectedValue } }); // Update form value
    };

    useEffect(() => {
      console.log("entered text:", enteredText);
      console.log("selected text:", selectedText);
    }, [enteredText, selectedText]);

    InputGenerateDocument.displayName = inputText;

    return (
      <div className="mb-2 md:px-6">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor={inputText}
        >
          Your {inputText}{optionalClass ? "" : "*"}
        </label>
        <EntoanyTextField
          preferredLanguage="ne" // Example preferred language setting
          hintText={placeholderText} // Example hint text
          onEnteredTextChange={handleEnteredTextChange}
          onSelectedTextChange={handleSelectedTextChange}
          {...rest}
        />
      </div>
    );
  }
);

export default InputGenerateDocument;
