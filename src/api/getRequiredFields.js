import axios from "axios";
import { getEnglishProvinceAndDistrict } from "./getEnglishProvinceAndDistrict";
export const getRequiredFields = async (work, user) => {
  try {
    console.log("Work from getRequiredFields",work);
    let response;
    if (user) {
     console.log("user",user);
     let { englishProvince, englishDistrict } = getEnglishProvinceAndDistrict(`${user.province}`, `${user.district}`); // Translate Nepali province and district to English
      response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/template-fields/${englishProvince}/${englishDistrict}/${work}`
      );
    }
    console.log(response);
    return response.data.requiredFields;
  } catch (error) {
    console.log("Error at retrieving required Fields", error);
  }
};
