import HeroButton from "../Components/HeroButton";
import Nav from "../Components/Nav";
import "../styles/About.css";
import { GraduationCap ,Lightbulb ,Rocket,Code,Zap } from "lucide-react";
const About = () => {
  return (
    <>
      <title>About Me</title>
      <Nav />
      <section className="head-section">
        <div className="heading-section-left">
          <img className="closeup-img" src="closeup.png" alt="" />
        </div>

        <div className="heading-section-right">
          <button className="aboutme-btn">About Me</button>

          <p className="curious-developer">
            A Curious <span>Developer</span>
          </p>

          <p className="about-description">
            I'm Deepak Kumar , a final year B.Tech ( CSE ) student who loves
            building web and mobile applications,solving real-world problems and
            exploring new technologies.
          </p>
          <HeroButton />
        </div>
      </section>

      <section className="journey-section">
        <div className="journey-discription-div">
          <h1>
            My <span>Journey</span>
          </h1>
          <div className="juorney-story-div">
            <button className="graduationcap-icon-btn">
              <GraduationCap size={30} />
            </button>
            <p className="journey-story">
              My journey into technology started with curiosuty about how thing
              works . Over time, that curiosity turned into a passon for
              building meaningful digital experiance
            </p>
          </div>
        </div>

        <div className="journey-drive">
          <h1>
            What <span>Drives Me</span>
          </h1>

          <div className="drive-icon-div">
            <div className="drives-icon">
              <div><Lightbulb size={50} color="lightgreen" /></div>
              <h4>Curiosity</h4>
            </div>
            <div className="drives-icon">
              <div><Code size={50} color="lightgreen" /></div>
              <h4>Problem Solving</h4>
            </div>
            <div className="drives-icon">
              <div><Rocket size={50} color="lightgreen" /></div>
              <h4>Innovation</h4>
            </div>
            <div className="drives-icon">
              <div><Zap size={50} color="lightgreen" /></div>
              <h4>Fast Learning</h4>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
