import axios from "axios";

export const generateDocument = async ({
  parentName,
  wardno,
  fullName,
  municipality,
  parent,
  work,
}) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/genpdf/Gandaki/Kaski/${work}`,
      {
        data: {
          parentName,
          wardno,
          fullName,
          municipality,
          parent,
        },
      },
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log("Error at generating document ", error.response.data.error);
  }
};
