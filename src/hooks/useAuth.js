// useAuth.js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login as loginAction, logout as logoutAction } from "../features/user/authslice.js";
import axios from "axios";

const useAuth = () => {
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState(null);
  const { isLoggedIn, accessToken, refreshToken } = useSelector(state => state.auth);

  const login = async ({ email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:9005/api/v1/users/login",
        { email, password },
        { withCredentials: true }
      );
      const { accessToken, refreshToken } = response.data;
      dispatch(loginAction({ accessToken, refreshToken }));
      setLoginError(null); // Clear any existing errors
    } catch (error) {
      setLoginError(error?.response?.data?.message || "An error occurred");
    }
  };

  const logout = () => {
    dispatch(logoutAction());
    setLoginError(null); // Clear any existing errors
  };

  return {
    isLoggedIn,
    accessToken,
    refreshToken,
    login,
    logout,
    loginError,
  };
};

export default useAuth;
