import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
function App() {

  return (
    <>
      <Header/>
      {/* <Main/> */}
      <Services/>
      <ContactUs/>
    </>
  )
}

export default App
