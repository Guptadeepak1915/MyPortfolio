import Nav from "../../Components/Nav";
import "../../styles/ContactPage/ContactPage.css";
import { Mail, Phone, MapPin ,SendIcon } from "lucide-react";
import ContactPlateform from "./ContactPlateform";
const ContactPage = () => {
  return (
    <>
      <Nav />
      <div className="contact-parent-div">
        <div className="contact-child-div1">
          <button className="getintouch-btn">Get in Touch</button>
          <h1>
            Let's Work <span>Together 👋</span>
          </h1>

          <p className="heading-paragraph">
            Have a Project Idea ,internship Opportunity , or just Want to say hi
            ? I'd love to hear from you . let's connect and build something
            grate together .
          </p>

          <div className="contact-information">
            <div className="info-div">
              <div className="icon-div">
                <Mail size={30} />
              </div>
              <div>
                <p>Email</p>
                <p>
                  <span>DeepakKumar346688@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="info-div">
              <div className="icon-div">
                <Phone size={30} />
              </div>
              <div>
                <p>Phone</p>
                <p>
                  <span>+91 9973699623</span>
                </p>
              </div>
            </div>
            <div className="info-div">
              <div className="icon-div">
                <MapPin size={30} />
              </div>
              <div>
                <p>Location</p>
                <p>
                  <span>Gaya, Bihar ,India</span>
                </p>
              </div>
            </div>
            <div className="contact-plateform-div">
              <ContactPlateform />
            </div>
          </div>
        </div>

        <div className="contact-child-div2">
          <div className="contact-form-div">
            <div className="heading-msg">
            <h1>Send Me a <span>Message</span></h1>
            <p>Fill Out the form below and i'll back to you soon</p>
            </div>
            <form action="">
              <div className="name-email-input-div">
                <input className="input-box1" type="text"  placeholder="Your Name"/>
                <input className="input-box2" type="email" placeholder="Your Email" />
              </div>
              <input className="subject-input-box" type="text" placeholder="Subject" />
              <textarea placeholder="Your Message"></textarea>
            <button className="send-btn"><SendIcon/> Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
