import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import './App.css'
import Home from './Components/Home'
import Education from './Components/Education'
import About from './Components/About'
import Projects from './Components/Projects'
import FirstPart1 from './Content/FirstPart1'

const App = () => {
  return (
    <>
    <FirstPart1 name="deepak gupta" age="23"/>
    <div class='logo-nav'>
      <div class='logo-div'>
        <h1>PortFolio</h1>
        </div>

      <div class='nav-elements-div'>
        <Router>
          <nav class="nav-elements">
            <Link to="/" class="link"><span>Home</span></Link>
            <Link to="/Education" class="link"><span>Education</span></Link>
            <Link to="/About" class="link"><span>About</span></Link>
            <Link to="/Project" class="link"><span>Project</span></Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="Education" element={<Education/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Project" element={<Projects/>}/>
          </Routes>
        </Router>
      </div>

    </div>
    </>
  )
}

export default App
