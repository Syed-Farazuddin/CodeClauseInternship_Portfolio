// eslint-disable-next-line no-unused-vars
import React from "react";
import "./about.css";
function About() {
  return (
    <>
      <div className="about_container">
        <div className="about_heading">
          <h1>About me</h1>
        </div>
        <div className="about_Container2">
          <div className="left">
            As a third-year engineering student majoring in Computer Science, I
            am a dedicated and passionate web developer with expertise in both
            frontend and backend development. I thrive in collaborative
            environments, possess strong problem-solving skills, and
            continuously seek opportunities to expand my knowledge in the
            ever-evolving field of web development.
          </div>
          <div className="right">
            <div className="about">
              <div className="aboutItems">Birth : 24 may 2003</div>
              <div className="aboutItems">Degree : Bachelor of Engineering</div>
              <div className="aboutItems">City : Hyderabad</div>
              <div className="aboutItems">Age : 20</div>
              <div className="aboutItems">Email : syedfaraz2405@gmail.com</div>
              <div className="aboutItems">Nationality : Indian</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
