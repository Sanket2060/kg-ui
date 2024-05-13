import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Header/>
      <Main/>
      <Services/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
