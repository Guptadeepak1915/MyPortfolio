import { FaGripLines} from 'react-icons/fa';
import '../index.css'
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='left-section'>
        <div className='header-img-div'>
          <Link to='/'><img className='header-profile-img' src="/profilePic.png" alt="profile img" /></Link>
        </div>
        <div className='header-name-div'>
          <Link to='/' className='link'>
            <p className='header-name'>
             Deepak Gupta
            </p>
          </Link>
        </div>
      </div>

      <div className="right-section">
        <nav className="nav-elements">
        <Link to="/" className="link"><span>Home</span></Link>
        <Link to='/about' className='link'><span>About</span></Link>
        <Link className="link" to='/education'><span>Education</span></Link>
        <Link className="link" to='/projects'><span>Projects</span></Link>
        </nav>
        <Link to='/contact'><button className='header-contact-btn'>Contact</button></Link>
        <button className='navtoggle'><FaGripLines/></button>
    </div>
    </div>
    
    
  );
};

export default Nav;
