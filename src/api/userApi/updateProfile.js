import axios from "axios";

export   const  updateProfile = async (province, district, municipality, ward) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/profile/1`,
      {
        province,
        district,
        municipality,
        ward,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log("error at updating Profile", error);
  }
};
