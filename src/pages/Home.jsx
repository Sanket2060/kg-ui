import React, { useState } from "react";
import Header from '../components/Header'
import Main from '../components/Main'
import Services from '../components/Services'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import PopupRegister from "../components/PopupRegister";
import PopupLogin from "../components/PopupLogin";
function Home() {
    const [isPopupOpenRegister,setIsPopupOpenRegister]=useState(false);
    const [isPopupOpenLogin,setIsPopupOpenLogin]=useState(false);

    const openPopupRegister=()=>{
        setIsPopupOpenRegister(true);
    }
    const openPopupLogin=()=>{
      setIsPopupOpenLogin(true);
  }
    const closePopupRegister=()=>{
        setIsPopupOpenRegister(false);
    }
    const closePopupLogin=()=>{
      setIsPopupOpenLogin(false);
  }
  return (
    <>
    <div className={`${isPopupOpenLogin||isPopupOpenRegister?'blur-[3px]':''}`}>
      <Header openPopupRegister={openPopupRegister} openPopupLogin={openPopupLogin}  />
      <Main />
      <Services />
      <ContactUs />
      <Footer />
    </div>
      <PopupRegister isOpen={isPopupOpenRegister} onClose={closePopupRegister} />
      <PopupLogin isOpen={isPopupOpenLogin} onClose={closePopupLogin}/>
    </>
  );
}

export default Home;
