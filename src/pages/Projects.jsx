import React from "react";
import Nav from "../Components/Nav";

const Projects = () => {
  return (
    <>
    <Nav/>
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
  );
};

export default Projects;
