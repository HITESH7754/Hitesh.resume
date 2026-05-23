import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
// import { div } from 'framer-motion/client'
import NavBar from "./components/NavBar"

const App = () => {
  return (
   <div className="bg-[#0B0B0E] text-white min-h-screen">
  <NavBar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
 </Routes>
 </div>
  )
}

export default App