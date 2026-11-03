import React from "react";
import Nav from "../Components/Nav";
import { education } from "../ProjectData/Education";
import "../styles/Education.css";
import { FaRegClock ,FaAward} from "react-icons/fa";


const Education = () => {
  return (
    <>
      <Nav />
      <section className="education-section" id="education">
        <div className="education-container">
          <div className="education-heading">
            <span className="section-tag">MY JOURNEY</span>
            <h2>
              Education <span>& Learning</span>
            </h2>
            <p>My academic journey and educational background.</p>
          </div>

          <div className="education-timeline">
            {education.map((item) => {
               const Icon = item.icon;
              return (
                <div className="education-card" key={item.id}>
                  <div className="education-icon">
                   <Icon size={25}/>
                  </div>

                  <div className="education-content">
                    <div className="education-top">
                      <span className="education-duration">
                        <FaRegClock />
                        {item.duration}
                      </span>

                      <span className="education-status">{item.status}</span>
                    </div>

                    <h3>{item.degree}</h3>

                    <h4>{item.field}</h4>

                    <p className="education-institute">{item.institute}</p>

                    <div className="education-score">
                      <FaAward />
                      <span>{item.score}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
