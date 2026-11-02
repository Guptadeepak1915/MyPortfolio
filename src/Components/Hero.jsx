import '../styles/Hero.css';
import Footer from './Footer'
import { ArrowDownToLine,Rocket } from "lucide-react";


const Hero=()=>{
  return(
    <>
      <div className="container">
        <div className="name-div">
          <p class="greeting"> HELLO , I'm</p>
          <p className='name'>
            <span style={{ color: "white" }}>Deepak </span>
            <span style={{ color: "#78B55B" }}>Gupta</span>
          </p>
          <p className="student-type">B.Tech (Computer Science) | Final Year</p>
          <p className="role">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          <div className="self-description">
            <p>
              I'm a Cumputer Science student who build web and mobile Applications ,explore cloud & genAi ,and love turing ideas into real-world products .. I am Dedicated B.Tech student. Quick learner , team
              player and always curious about new tech innovation{" "}
            </p>
          </div>
          <div className ="hero-buttons">
            <button className="view-project-btn"><Rocket /> View Projects</button>
            <button className="download-resume-btn">
              <ArrowDownToLine /> Download Resume</button>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
        <div className="image-div">
          <div className="green-circle"></div>
          <div className="green-circle2"></div>
          <img className="image" src="/Profilewithoutbg.png" alt="Profile Image" />
        </div>
      </div>
    </>
    
  )
}

export default Hero;