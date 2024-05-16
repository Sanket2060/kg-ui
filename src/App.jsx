import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashboardLayout from "./pages/DashboardLayout";
import "./App.css";
import About from "./pages/About";
import Services from "./pages/Services";
import DashboardMain from "./components/DashboardMain";

const GenerateDocument = lazy(() => import("./pages/utils/GenerateDocument"));
const PrintingDocument = lazy(() => import("./pages/utils/PrintingDocument"));
const Kuruwa = lazy(() => import("./pages/utils/Kuruwa"));
const NotaryPublic = lazy(() => import("./pages/utils/NotaryPublic"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
}

export default App;
