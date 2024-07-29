import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user/authSlice";
const useCheckAuthStatus = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/getDetails/fetchUserProfileDetails`,
          {
            withCredentials: true,
          }
        );
        console.log("checkAuthStatus",response);
        if (response.data.authenticated) {
          dispatch(login(response.data.userProfile));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  return loading;
};

export default useCheckAuthStatus;
