import { FaGripLines } from "react-icons/fa";
import "../index.css";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [toggle,setToggle] = useState(false);
  function handleToggle(){
    setToggle(!toggle);
    console.log(toggle);
  }
  return (
    <div className="nav-container">
      <div className="left-section">
        <div className="header-img-div">
          <NavLink to="/">
            <img
              className="header-profile-img"
              src="/profilePic.png"
              alt="profile img"
            />
          </NavLink>
        </div>
        <div className="header-name-div">
          <NavLink to="/" className="NavLink">
            <p className="header-name">Deepak Gupta</p>
          </NavLink>
        </div>
      </div>

      <div className="right-section">
        <nav className={toggle?'mobile-view-nav':'nav-elements'}>
          <NavLink to="/" className="NavLink">
            <span>Home</span>
          </NavLink>
          <NavLink to="/about" className="NavLink">
            <span>About</span>
          </NavLink>
          <NavLink className="NavLink" to="/education">
            <span>Education</span>
          </NavLink>
          <NavLink className="NavLink" to="/projects">
            <span>Projects</span>
          </NavLink>
        </nav>
        <NavLink to="/contact">
          <button className="header-contact-btn">Contact</button>
        </NavLink>
        <button onClick={handleToggle} className="navtoggle">
          <FaGripLines />
        </button>
      </div>
    </div>
  );
};

export default Nav;
