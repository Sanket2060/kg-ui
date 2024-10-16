import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { login } from "@/features/user/authSlice";

const Profile = () => {
    const user = useSelector((state) => state.auth.userDetails);
    const [name, setName] = useState(user?.user?.name || "");
    const [email, setEmail] = useState(user?.user?.email || "");
    const [mobile, setMobile] = useState(user?.user?.mobile || "");
    const [profilePic, setProfilePic] = useState(user?.user?.profilePic || null);
    const [profilePicFile, setProfilePicFile] = useState(null); // Store the file to upload
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.user.name && user.user.email) {
            if (name === user.user.name && email === user.user.email) {
                toast.warn("No changes in username or email");
            } else {
                try {
                    const response = await axios.post(
                        `${import.meta.env.VITE_REACT_APP_BASE_URL}/updateUser/updateUserProfile`,
                        {
                            name,
                            email,
                        },
                        {
                            withCredentials: true,
                        }
                    );
                    console.log("Updated User successfully", response);
                    const userDetailsResponse = await axios.get(
                        `${import.meta.env.VITE_REACT_APP_BASE_URL}/getDetails/fetchUserProfileDetails`,
                        { withCredentials: true }
                    );
                    console.log("userDetailsResponse", userDetailsResponse);
                    dispatch(login(userDetailsResponse.data.userProfile));
                    toast.success(response?.data?.message);
                } catch (error) {
                    toast.error(error);
                }
            }
        }
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) { // Validate file type
            setProfilePic(URL.createObjectURL(file));
            setProfilePicFile(file); // Save file for uploading
        } else {
            toast.error("Please select a valid image file.");
        }
    };

    const handleSaveProfilePic = async () => {
        if (!profilePicFile) {
            toast.warn("No new profile picture selected");
            return;
        }

        try {
            const formData = new FormData();
            // Append the Blob file to the FormData
            formData.append("profilePic", profilePicFile); // Use profilePicFile which is the selected file

            const response = await axios.post(
                `${import.meta.env.VITE_REACT_APP_BASE_URL}/updateUser/updateUserProfilePic`, // Use environment variable for the base URL
                formData,
                { withCredentials: true }
            );

            console.log("Profile pic updated successfully", response);

            const userDetailsResponse = await axios.get(
                `${import.meta.env.VITE_REACT_APP_BASE_URL}/getDetails/fetchUserProfileDetails`,
                { withCredentials: true }
            );

            dispatch(login(userDetailsResponse.data.userProfile));
            toast.success(response?.data?.message);
        } catch (error) {
            console.log("error", error);
            toast.error("Failed to update profile picture");
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                    {/* Profile Picture Section */}
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            {profilePic ? (
                                <img
                                    src={profilePic}
                                    alt="Profile"
                                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-indigo-600 shadow-lg"
                                />
                            ) : (
                                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gray-200 rounded-full border-4 border-indigo-600 flex items-center justify-center shadow-lg">
                                    <span className="text-gray-500">No Image</span>
                                </div>
                            )}
                            <label
                                htmlFor="profilePicInput"
                                className="absolute bottom-0 right-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-indigo-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            </label>
                            <input
                                type="file"
                                id="profilePicInput"
                                accept="image/*"
                                className="hidden"
                                onChange={handleProfilePicChange}
                            />
                        </div>

                        {/* Save Image Button */}
                        <button
                            onClick={handleSaveProfilePic}
                            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-indigo-700"
                        >
                            Save Image
                        </button>

                        <div className="mt-4 text-center">
                            <span className="text-gray-700 text-lg font-medium">{name}</span>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="w-full max-w-md">
                        <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder={user.user.name}
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder={user.user.email}
                                />
                            </div>

                            {/* Mobile Field */}
                            <div>
                                <label
                                    htmlFor="mobile"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Mobile
                                </label>
                                <input
                                    type="text"
                                    id="mobile"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder={user.user.mobile}
                                />
                            </div>

                            {/* Save Changes Button */}
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md text-lg font-semibold shadow-md hover:bg-indigo-700"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
