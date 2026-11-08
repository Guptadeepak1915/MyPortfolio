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
    <div className="contact-page-social-contact">
      <div className="contactpage-social-icon-div">
        <a
          href="https://www.instagram.com/guptadeepak45/?__pwa=1"
          target="_blank"
        >
          <FaInstagram className="contactpage-social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/deepak-gupta-7362a529a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <FaLinkedin className="contactpage-social-icon" />
        </a>
        <a href="">
          <FaFacebook className="contactpage-social-icon" />
        </a>
        <a
          href="https://youtube.com/shorts/vYBF5cilS4c?si=3RuFzhFPXJutrw9d "
          target="_blank"
        >
          <FaYoutube className="contactpage-social-icon" />
        </a>
        <a href="https://github.com/Guptadeepak1915" target="_blank">
          <FaGithub className="contactpage-social-icon" />
        </a>
      </div>
    </div>
  );
};

export default ContactPlateform;
