import axios from "axios";

export const getUserDocumentCount = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log("error at updating Profile", error);
  }
};
