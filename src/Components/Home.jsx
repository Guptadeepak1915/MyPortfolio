import React from "react";
import Footer from "/src/Footer/Footer.jsx";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div class="container">
        <div class="name-div">
          <h1>
            Hii , I am <span style={{ color: "aqua" }}>Deepak </span>
            <span style={{ color: "aqua" }}>Gupta</span>
          </h1>
          <h3>B.Tech Student</h3>
          <p>
            I'm a Cumputer Science student at GEC, Bhubneswer– currently in
            B.Tech Third year . I am Dedicated B.Tech student.Quick learner,team
            player and always curious about new tech innovation{" "}
          </p>
        </div>
        <div class="image-div">
          <img class="image" src="/1712485594922.jpg" alt="Not Found" />
        </div>
      </div>
      <div class="para-heading-div">
        <div class="heading-div">
          <h1>About</h1>
        </div>
        <div class="About-paragraph">
          <p>
            Hello! I am a B.Tech student in Computer and Information Technology
            Engineering at GEC. Passionate about Computers, Softwares, and
            Computer Related projects. I hail from gaya district and am always
            eager to grow.
          </p>
        </div>
      </div>
      <div class="para-heading-div">
        <div class="heading-div">
          <h1>Academics Excellence</h1>
        </div>
        <div class="paragraph-div">
          <p>Complited 10th with 88% in 2021</p>
          <p>Completed 12th with 78.4% in 2023</p>
          <p>
            Currentaly i am Pursuing B.Tech from Gandhi Engineering College
            ,BBSR(ODISA){" "}
          </p>
        </div>
      </div>

      <div class="para-heading-div">
        <div class="heading-div">
          <h1>Projects</h1>
        </div>
        <div class="About-paragraph">
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
      <Footer />
    </div>
  );
};

export default Home;
