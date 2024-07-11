import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";
import Input from "./Input";
import Button from "./Button";
import cross from "../assets/cross.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const PopupRegister = ({ isOpen, onClose }) => {
  const backend_url = import.meta.env.VITE_REACT_APP_BASE_URL;
  console.log("backendurl", backend_url);
  const { register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticate = async ({
    firstName,
    lastName,
    mobile,
    email,
    password,
  }) => {
    try {
      // setLoader(true);
      console.log(email, password);
      const response = await axios.post(`${backend_url}/api/v1/auth/register`, {
        name: firstName,
        // lastName,
        email,
        password,
        // mobile,
      });
      // handle success
      navigate("/dashboard");
    } catch (error) {
      // handle error
      console.log("Error registering user",error);
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/getDetails/fetchUserProfileDetails`,
        {
          withCredentials: true,
        }
      );
      dispatch(login(response.data.userProfile));
    } catch (error) {
      console.log("Error fetching data of user", error);
      dispatch(logout()); //khali garey paxi afai logout hunxa ra??->Yes,protected route ko kamal ho
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 font-Poppins">
          <div className="bg-white relative rounded-lg w-[90%] md:w-[60%] h-[95%] px-14 flex flex-col items-center overflow-scroll">
            <div
              className="flex justify-end absolute right-5 top-5 hover:cursor-pointer"
              onClick={onClose}
            >
              <img src={cross} className="w-4 h-4" alt="Close" />
            </div>
            <img src={kaagazpatralogo} className="w-96 h-34" alt="Logo" />
            <div className="text-[#6361DC] text-base">Register new account</div>
            <form
              className="flex flex-col items-center mb-6 w-full *:mb-5"
              onSubmit={handleSubmit(authenticate)}
            >
              <div className="name flex flex-col sm:flex-row justify-between w-full">
                <div className="firstname w-full sm:w-[40%] ">
                  <div>First Name</div>
                  <input
                    type="text"
                    name="firstName"
                    id=""
                    placeholder="Sandesh"
                    className={`${"w-full h-16 special"} px-4 py-2 rounded-2xl border-2 border-[#30455E] focus:outline-none mb-4 mt-2`}
                    {...register(`${"firstName"}`, {
                      required: `${"firstName"} is required`,
                      pattern: {
                        value: /(^[^\d]*$)/,
                        message: "First name shouldn't contain numbers",
                      },
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="lastname w-full sm:w-[40%]">
                  <div>Last Name</div>
                  <input
                    type="text"
                    name="lastName"
                    id=""
                    placeholder="Ghimire"
                    className={`${"w-full h-16 special"} px-4 py-2 rounded-2xl border-2 border-[#30455E] focus:outline-none mb-4 mt-2`}
                    {...register(`${"lastName"}`, {
                      required: `${"lastName"} is required`,
                      pattern: {
                        value: /(^[^\d]*$)/,
                        message: "Last name shouldn't contain numbers",
                      },
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div className="email w-full">
                <div>Email Address</div>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="sandeshghimire202@gmail.com"
                  className={`${"w-full h-16 special"} px-4 py-2 rounded-2xl border-2 border-[#30455E] focus:outline-none mb-4 mt-2`}
                  {...register(`${"email"}`, {
                    required: `${"email"} is required`,
                    pattern: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/,
                    message: "Enter a valid email",
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="mobile w-full">
                <div>Mobile No.</div>
                <input
                  type="text"
                  name="mobile"
                  id=""
                  placeholder="9862383881"
                  className={`${"w-full h-16 special"} px-4 py-2 rounded-2xl border-2 border-[#30455E] focus:outline-none mb-4 mt-2`}
                  {...register(`${"mobile"}`, {
                    required: `${"mobile"} is required`,
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Mobile should contain 10 digits",
                    },
                  })}
                />
                {errors.mobile && (
                  <p className="text-red-500">{errors.mobile.message}</p>
                )}
              </div>
              <div className="password w-full">
                <div>Password</div>
                <input
                  type="password" // Set type to password for masking
                  name="password"
                  id=""
                  placeholder="Enter Password"
                  className={`${"w-full h-16 special"} px-4 py-2 rounded-2xl border-2 border-[#30455E] focus:outline-none mb-4 mt-2`}
                  {...register(`${"password"}`, {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="confirmpassword w-full">
                <div>Confirm Password</div>
                <input
                  type="password" // Set type to password for masking
                  name="confirmPassword"
                  id=""
                  placeholder="Confirm Password"
                  className={`${"w-full h-16 special"} px-4 py-2 rounded-2xl border-2 border-[#30455E] focus:outline-none mb-4 mt-2`}
                  {...register(`${"confirmPassword"}`, {
                    required: "Password is required",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <Button
                text="Register"
                special="w-80 h-16 largemobiles:w-80 mobile:w-60"
              />
            </form>
            <div className="font-semibold mb-10">
              Already Have an account?{" "}
              <span className="text-[#6361DC]">Log in</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupRegister;
