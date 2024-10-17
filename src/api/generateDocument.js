import axios from "axios";
import { getEnglishProvinceAndDistrict } from "./getEnglishProvinceAndDistrict";
export const generateDocument = async (props) => {
  try {
    console.log("Props:", props);
    let { englishProvince = "default", englishDistrict = "default" } =
      getEnglishProvinceAndDistrict(
        `${props.user.province}`,
        `${props.user.district}`
      ); // Translate Nepali province and district to English
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/genpdf/${englishProvince}/${englishDistrict}/${props?.work}`,
      {
        data: props, // Wrapping 'props' inside 'data'
      },
      {
        withCredentials: true,
      }
    );
    console.log("generated document response", response);
    return response;
  } catch (error) {
    console.log("Error at generating document ", error);
    return false;
  }
};
