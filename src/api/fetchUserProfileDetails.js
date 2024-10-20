import axios from "axios";
import { login } from "@/features/user/authSlice"; // Assuming `login` is the Redux action to update user data
import { useDispatch } from "react-redux";

const fetchUserProfileDetails = async () => {
  try {
    const dispatch = useDispatch(); // Get the dispatch method from Redux

    const userDetailsResponse = await axios.get(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/getDetails/fetchUserProfileDetails`,
      { withCredentials: true }
    );
    console.log("Fetched user profile details successfully.");
    // Dispatch the login action with the fetched user profile data
    dispatch(login(userDetailsResponse.data.userProfile));

    console.log("User profile details updated successfully.");
  } catch (error) {
    console.error("Error fetching user profile details:", error);
  }
};

export default fetchUserProfileDetails;
