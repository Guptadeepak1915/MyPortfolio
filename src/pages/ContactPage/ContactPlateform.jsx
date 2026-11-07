import "../../styles/ContactPage/ContactPlateform.css";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
const ContactPlateform = () => {
  return (
    <div className="footer-div">
      <div className="social-media-icon-div">
        <a
          href="https://www.instagram.com/guptadeepak45/?__pwa=1"
          target="_blank"
        >
          <FaInstagram className="social-media-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/deepak-gupta-7362a529a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <FaLinkedin className="social-media-icon" />
        </a>
        <a href="">
          <FaFacebook className="social-media-icon" />
        </a>
        <a
          href="https://youtube.com/shorts/vYBF5cilS4c?si=3RuFzhFPXJutrw9d "
          target="_blank"
        >
          <FaYoutube className="social-media-icon" />
        </a>
        <a href="https://github.com/Guptadeepak1915" target="_blank">
          <FaGithub className="social-media-icon" />
        </a>
      </div>
    </div>
  );
};

export default ContactPlateform;
