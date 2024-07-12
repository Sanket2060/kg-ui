// authActions.js
import axios from "axios";
import { login, logout } from "./authSlice.js";
export const fetchUserData = (navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/getDetails/fetchUserProfileDetails`,
        {
          withCredentials: true,
        }
      );
      dispatch(login(response.data.userProfile));
      navigate('/dashboard');
    } catch (error) {
      console.log("error at authActions",error);
      dispatch(logout());
    }
  };
};
