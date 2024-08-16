import React from "react";
import { useSelector } from "react-redux";
import { Navigate, redirect, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log("Protected route triggered");
  console.log("isAuthenticated", isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
export const DirectAccessOnAccessToken = ({ children, redirectOnSuccess }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) {
    return <Navigate to={redirectOnSuccess} />;
  }
  return children
};

export default ProtectedRoute;
