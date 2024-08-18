import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import PopupRegister from "./PopupRegister";
import PopupLogin from "./PopupLogin";
import Footer from "./Footer";

 const HomeLay=()=> {
  const [isPopupOpenRegister, setIsPopupOpenRegister] = useState(false);
  const [isPopupOpenLogin, setIsPopupOpenLogin] = useState(false);

  const openPopupRegister = () => {
    setIsPopupOpenRegister(true);
  };
  const openPopupLogin = () => {
    setIsPopupOpenLogin(true);
  };
  const closePopupRegister = () => {
    setIsPopupOpenRegister(false);
  };
  const closePopupLogin = () => {
    setIsPopupOpenLogin(false);
  };
  return (
    <div>
      <div
        className={`${isPopupOpenLogin || isPopupOpenRegister ? "blur-[3px]" : ""}`}
      >
        <Header
          openPopupRegister={openPopupRegister}
          openPopupLogin={openPopupLogin}
        />
        <Outlet />
        <Footer />
      </div>
      <PopupRegister
        isOpen={isPopupOpenRegister}
        onClose={closePopupRegister}
        onLogin={openPopupLogin}
      />
      <PopupLogin isOpen={isPopupOpenLogin} onClose={closePopupLogin} />
    </div>
  );
}
export default HomeLay;
