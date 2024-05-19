// authActions.js
import axios from 'axios';
import { login, logout } from './authslice.js';

export const fetchUserData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:9005/api/v1/getUsersDetails', {
        withCredentials: true,
      });
      console.log("Data fetched from backend:",response);
      dispatch(login(response.data));
    } catch (error) {
      dispatch(logout());
    }
  };
};
