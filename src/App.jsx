import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import GenerateDocument from "./pages/utils/GenerateDocument";
import PrintingDocument from "./pages/utils/PrintingDocument";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <GenerateDocument/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={<Dashboard/>}
        />
        <Route
        path="/dashboard/filldetails"
        element={<GenerateDocument/>}
        ></Route>
        <Route
        path="/dashboard/printdocument"
        element={<PrintingDocument/>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
