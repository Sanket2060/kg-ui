import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import DashboardLayout from "./pages/DashboardLayout";
import "./App.css";
import About from "./pages/About";
import Services from "./pages/Services";
import DashboardMain from "./components/DashboardMain";
import GenerateDocument from "./pages/utils/GenerateDocument";
import PrintingDocument from "./pages/utils/PrintingDocument";
import Kuruwa from "./pages/utils/Kuruwa";
import NotaryPublic from "./pages/utils/NotaryPublic";
import ProtectedRoute from "./components/ProtectedRoute";
import { fetchUserData } from "./features/user/authActions.js";
import { logout } from "./features/user/authSlice.js";
import { useNavigate } from "react-router-dom";
function App() {
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const accessTokenm = document.cookie;
    console.log(accessTokenm);
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="));
    const refreshToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("refreshToken="));


    if (accessToken) {
      dispatch(fetchUserData(navigate));
    } else {
      dispatch(logout());
      // Make sure to add server-side logout logic here
    }
  }, [dispatch]); // Ensure dispatch is defined and accessible

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<DashboardMain />} />
          <Route path="lekhapadi" element={<GenerateDocument />} />
          <Route path="kuruwa" element={<Kuruwa />} />
          <Route path="notarypublic" element={<NotaryPublic />} />
          <Route path="printdocument" element={<PrintingDocument />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
