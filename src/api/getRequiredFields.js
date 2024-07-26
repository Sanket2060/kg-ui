import axios from "axios";
export const getRequiredFields = async (work, user) => {
  try {
    let response;
    if (user) {
      // const response = await axios.get(
      //   `${import.meta.env.VITE_REACT_APP_BASE_URL}/template-fields/${user?.province}/${user?.district}/${work}`
      // );
      response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/template-fields/Gandaki/lamjung/${work}`
      );
    }
    console.log(response);
    return response.data.requiredFields;
  } catch (error) {
    console.log("Error at retrieving required Fields", error);
  }
};
