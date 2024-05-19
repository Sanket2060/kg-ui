import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import kaagazpatralogo from "../assets/kaagazpatralogo.png";
import Input from "./Input";
import Button from "./Button";
import cross from "../assets/cross.png";
import axios from "axios";

const PopupRegister = ({ isOpen, onClose }) => {
  const { register, formState,handleSubmit } = useForm();
  const { errors } = formState;
  const authenticate = async ({ firstName, lastName, mobile, email, password }) => {
    try {
      // setLoader(true);
      console.log(email, password);
      const response = await axios.post(
        "https://api.khana.me/api/v1/users/register",
        {
          firstName,
          lastName,
          email,
          password,
          mobile,
        }
      );
      // handle success
      console.log(response.data);
      console.log(response.data.data.userId);
    } catch (error) {
      // handle error
      console.log(error.message);
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
                className="flex flex-col items-center mb-6 w-full"
                onSubmit={handleSubmit(authenticate)}
              >
                <div className="name flex flex-col sm:flex-row justify-between w-full">
                  <div className="firstname w-full sm:w-[40%] ">
                    <div>First Name</div>
                    <Input
                      placeholder="Sandesh"
                      special="w-full h-16"
                      name="firstName"
                      patternValue={/^[^0-9]*$/}
                      patternMessage="First name shouldn't contain numbers"
                      required
                    />
                  </div>
                  <div className="lastname w-full sm:w-[40%]">
                    <div>Last Name</div>
                    <Input
                      placeholder="Ghimire"
                      special="w-full h-16"
                      name="lastName"
                      patternValue={/^[^0-9]*$/}
                      patternMessage="Last name shouldn't contain numbers"
                      required
                    />
                  </div>
                </div>
                <div className="email w-full">
                  <div>Email Address</div>
                  <Input
                    placeholder="sandeshghimire202@gmail.com"
                    special="w-full h-16"
                    name="email"
                    type="email"
                    patternValue={/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/}
                    patternMessage="Enter a valid email"
                    required
                  />
                </div>
                <div className="mobile w-full">
                  <div>Mobile No.</div>
                  <Input
                    placeholder="+9779862383881"
                    special="w-full h-16"
                    name="mobile"
                    patternValue={/^\d{10}$/}
                    patternMessage="Mobile should contain 10 digits"
                    required
                  />
                </div>
                <div className="password w-full">
                  <div>Password</div>
                  <Input
                    placeholder="**********"
                    special="w-full h-16"
                    name="password"
                    type="password"
                    patternValue={/^(?=.*[A-Z])(?=.*\d).{8,}$/}
                    patternMessage="Password should contain 8 characters with 1 digit and 1 uppercase character"
                    required
                  />
                </div>
                <div className="confirmpassword w-full">
                  <div>Confirm Password</div>
                  <Input
                    placeholder="***********"
                    special="w-full h-16"
                    name="confirmPassword"
                    type="password"
                    required
                  />
                </div>
                <Button
                  text="Register"
                  special="w-80 h-16 largemobiles:w-80 mobile:w-60"
                />
              </form>
            <div className="font-semibold mb-10">
              Already Have an account? <span className="text-[#6361DC]">Log in</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupRegister;
