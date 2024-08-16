import { pdfjs } from "react-pdf";
import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import useCheckAuthStatus from "./hooks/useCheckAuthStatus.js";
function App() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();
  const loading = useCheckAuthStatus();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Outlet />{" "}
    </>
  );
}

export default App;
