import axios from "axios";

export const generateDocument = async (props) => {
  try {
    console.log("Props:",props);
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/genpdf/bagmati/sindhuli/${props?.work}`,
      {
        data: props, // Wrapping 'props' inside 'data'
      },
              {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log("Error at generating document ", error);
    return false;
  }
};
