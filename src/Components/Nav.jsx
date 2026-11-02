import '../index.css'
import '../styles/Nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='left-section'>
        <div className='header-img-div'>
          <img className='header-profile-img' src="/profilePic.png" alt="profile img" />
        </div>
        <div>
          <p className='header-name'>
           Deepak Gupta
          </p>
        </div>
      </div>

      <div className="middle-section">
        <nav className="nav-elements">
        <Link to="/" className="link"><span>Home</span></Link>
        <Link to='/about' className='link'><span>About</span></Link>
        <Link className="link" to='/education'><span>Education</span></Link>
        <Link className="link" to='/projects'><span>Projects</span></Link>
        </nav>
        <button className='header-contact-btn'>Contact</button>
    </div>
    </div>
    
    
  );
};

export default Nav;
