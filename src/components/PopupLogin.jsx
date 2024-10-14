import React, { useState } from "react";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";
import Input from "./Input";
import Button from "./Button";
import cross from "../assets/cross.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user/authSlice.js";
import axios from "axios";
import { toast } from "react-toastify";
const PopupLogin = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const [loginError, setLoginError] = useState("");

  const loginUser = async ({ email, password }) => {
    try {
      // First API call: login
      const loginResponse = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/login`,
        { email, password },
        { withCredentials: true } // Include credentials (cookies) in the request
      );
      setLoginError(""); // Clear login error
      // Second API call: fetch user details (only runs if the first API call succeeds)
      const userDetailsResponse = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/getDetails/fetchUserProfileDetails`,
        { withCredentials: true }
      );
      dispatch(login(userDetailsResponse.data.userProfile));
      toast.success(loginResponse.data.message); // Display success message from API response
    } catch (error) {
      if (error?.response?.data?.message) {
        setLoginError(error.response.data.message);
      } else {
        setLoginError("Something went wrong.");
      }
      dispatch(logout());
      console.log("Error:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 font-Poppins">
          <div className="bg-white relative rounded-lg py-14 px-14 w-[90%] md:w-[60%] h-[95%] flex flex-col items-center font-medium">
            <div
              className="flex justify-end absolute right-5 top-5 hover:cursor-pointer"
              onClick={onClose}
            >
              <img src={cross} className="w-4 h-4" alt="" srcset="" />
            </div>
            <img src={kaagazpatralogo} className="w-96 h-34" alt="" srcset="" />
            <div className="text-[#6361DC] text-base mt-1 font-semibold">
              Login your account
            </div>
            <form
              className="flex flex-col items-center mt-6 mb-6 w-full"
              onSubmit={handleSubmit(loginUser)}
            >
              <div className="email w-full">
                <div>Email Address</div>
                <input
                  placeholder="sandeshghimire202@gmail.com"
                  className="w-full h-16 px-4 py-2 rounded-2xl border-2 border-[#30455E] focus:outline-none mb-4 mt-2"
                  name="email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="password w-full">
                <div>Password</div>
                <input
                  type="password"
                  placeholder="*************"
                  className="w-full h-16 px-4 py-2 rounded-2xl border-2 border-[#30455E] focus:outline-none mb-4 mt-2"
                  name="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                <div className="text-[#6361DC] font-semibold mb-6">
                  Forget password?
                </div>
              </div>
              {loginError && (
                <span className="text-red-500 mb-4">{loginError}</span>
              )}
              <Button
                text="Login"
                special="largemobiles:w-80 mobile:w-60 h-16"
              />
            </form>
            <div className="font-semibold mb-10">
              Not Registered Yet?{" "}
              <span className="text-[#6361DC]">Sign In</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupLogin;
