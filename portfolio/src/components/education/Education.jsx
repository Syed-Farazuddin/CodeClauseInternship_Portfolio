// eslint-disable-next-line no-unused-vars
import React from "react";
import "./education.css";
function Education() {
  return (
    <div className="education_container">
      <div className="education">
        <h1 className="heading">Education</h1>
        <div className="edu-item">
          <span className="circle"></span>
          <span>
            <i className="fa-regular fa-calendar-days"></i>
            2020-2024
          </span>
          <h3>Bachelor of Engineering</h3>
          <h5>Computer Science</h5>
        </div>
        <div className="edu-item">
          <span className="circle"></span>
          <span>
            <i className="fa-regular fa-calendar-days"></i>
            2018-2020
          </span>
          <h3>Intermediate</h3>
          <h5>Mathematics</h5>
        </div>
        <div className="edu-item">
          <span className="circle"></span>
          <span>
            {" "}
            <i className="fa-regular fa-calendar-days"></i>
            2017-2018
          </span>
          <h3>Secondary Schooling</h3>
          <h5>SSC</h5>
        </div>
      </div>
      <div className="skills">
        <h1 className="heading">Skills</h1>
        <div className="skillItem">
          <h3>JavaScript</h3>
          <div className="skillbar">
            <span className="progressIn" style={{ width: "85%" }}></span>
            <div className="skillpercentage">85%</div>
          </div>
        </div>
        <div className="skillItem">
          <h3>React</h3>
          <div className="skillbar">
            <span className="progressIn" style={{ width: "80%" }}></span>
            <div className="skillpercentage">80%</div>
          </div>
        </div>
        <div className="skillItem">
          <h3>Express</h3>
          <div className="skillbar">
            <span className="progressIn" style={{ width: "90%" }}></span>
            <div className="skillpercentage">90%</div>
          </div>
        </div>
        <div className="skillItem">
          <h3>Nodejs</h3>
          <div className="skillbar">
            <div className="progressIn" style={{ width: "90%" }}></div>
            <div className="skillpercentage">90%</div>
          </div>
        </div>
        <div className="skillItem">
          <h3>MongoDB</h3>
          <div className="skillbar">
            <span className="progressIn" style={{ width: "88%" }}></span>
            <div className="skillpercentage">88%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
