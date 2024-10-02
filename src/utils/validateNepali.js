// utils/validateNepali.js
export const isNepaliText = (text) => {
    // Regex to match Devanagari characters, which include Nepali
    const nepaliRegex = /^[\u0900-\u097F\s]+$/;
    return nepaliRegex.test(text);
  };
  