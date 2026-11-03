import React from "react";
import Nav from "../Components/Nav";
import '../styles/Project.css'
import { project } from "../ProjectData/ProjectData";

const Projects = () => {
  return (
    <>
    <title>Projects</title>
      <Nav />
      {/* <div className="para-heading-div">
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
      </div> */}

      <div className="project-card-div">
        {project.map((projects)=>{
          return(
            <>
            <div className="project-container">
            <div className="project-img-div">
              <img className="project-img" src={projects.img} alt="Project Image" />
            </div>
            <div className="project-details">
              <p>Project Name : {projects.name}</p>
              <p>Project Live : <a href={projects.liveLink} target="_blank">Go to Website</a></p>
              <p>Github Repo: <a href={projects.github}  target="_blank">Github Link</a></p>
            </div>
          </div>;
            </>
          )
        })
        }
      </div>
    </>
  );
};

export default Projects;
