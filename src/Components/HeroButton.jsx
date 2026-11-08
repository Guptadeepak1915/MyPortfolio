import { ArrowDownToLine,Rocket } from "lucide-react";
import { Link } from 'react-router-dom';
import '../styles/HeroButton.css'
const HeroButton = () => {
  return (
    <div className="hero-buttons">
      <Link to="/projects" className="link">
        <button className="view-project-btn">
          <Rocket /> View Projects
        </button>
      </Link>
      <button className="download-resume-btn">
        <ArrowDownToLine className="download-icon" /> Download Resume
      </button>
    </div>
  );
};

export default HeroButton;
