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
      
      <div className="para-heading-div">
        <div className="heading-div">
          <h1>Academics Excellence</h1>
        </div>
        <div className="paragraph-div">
          <p>Complited 10th with 88% in 2021</p>
          <p>Completed 12th with 78.4% in 2023</p>
          <p>
            Currentaly i am Pursuing B.Tech from Gandhi Engineering College
            ,BBSR(ODISA){" "}
          </p>
        </div>
      </div>

      <div className="para-heading-div">
        <div className="heading-div">
          <h1>Projects</h1>
        </div>
        <div className="About-paragraph">
          <ol>
            <li>
              <a href="https://github.com/Guptadeepak1915/calculator_project">
                <p>Calculator Using Java</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/Guptadeepak1915/IPAddress-Founder">
                Ip Address Founder of your machine
              </a>
            </li>
            <li>
              {" "}
              <a href="https://github.com/Guptadeepak1915/Html-Projects/tree/main/Restaurant%20website">
                <p>Restaurant Website Using HTML&CSS</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/Guptadeepak1915/Html-Projects/tree/main/Music%20Website">
                <p>Music Website (clone of Savan)</p>
              </a>
            </li>
            <li>
              {" "}
              <a href="https://github.com/Guptadeepak1915/Html-Projects/tree/main/Calcolator%20Using%20Html">
                <p>Calculator Using HTML&CSS</p>
              </a>
            </li>
          </ol>
        </div>
      </div>
      
    </>
    
  )
}

export default Hero;