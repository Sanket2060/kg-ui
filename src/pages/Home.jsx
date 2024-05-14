import React, { useState } from "react";
import Header from '../components/Header'
import Main from '../components/Main'
import Services from '../components/Services'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import PopupRegister from "../components/PopupRegister";
import PopupLogin from "../components/PopupLogin";
function Home() {
    const [isPopupOpen,setIsPopupOpen]=useState(false);
    const openPopup=()=>{
        setIsPopupOpen(true);
    }
    const closePopup=()=>{
        setIsPopupOpen(false);
    }
  return (
    <>
      <Header  />
      <Main />
      <Services />
      <ContactUs />
      <Footer />
      <PopupRegister />
      <PopupLogin/>
    </>
  );
}

export default Home;
