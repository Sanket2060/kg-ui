import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import GenerateDocument from './pages/utils/GenerateDocument'

function App() {

  return (
    <>
     <GenerateDocument/>
    </>
  )
}

export default App
