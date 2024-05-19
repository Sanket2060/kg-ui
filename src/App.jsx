import React from "react";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
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
