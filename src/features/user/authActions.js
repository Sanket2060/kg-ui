// authActions.js
import axios from "axios";
import { login, logout } from "./authSlice.js";
export const fetchUserData = (navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:9005/api/v1/users/getUserDetails",
        {
          withCredentials: true,
        }
      );
      console.log("Data fetched from backend:", response.data.data);
      dispatch(login(response.data.data));
      navigate('/dashboard');
    } catch (error) {
      dispatch(logout());
    }
  };
};
