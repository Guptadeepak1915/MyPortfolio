import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Education from './pages/Education'
import Projects from './pages/Projects'
import ContactPage from './pages/ContactPage/ContactPage'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/education' element={<Education/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
    
    </>
  )
}

export default App
