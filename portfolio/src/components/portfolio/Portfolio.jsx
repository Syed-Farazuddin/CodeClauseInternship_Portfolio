// eslint-disable-next-line no-unused-vars
import React from "react";
import project from "../../assets/project.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import "./portfolio.css";
function Portfolio() {
  return (
    <div className="portfolio_container">
      <h1 className="heading">Portfolio</h1>
      <div className="imageContainer">
        <img src={project} alt="" />
        <img src={project1} alt="" />
        <img src={project2} alt="" />
        <img src={project3} alt="" />
        <img src={project4} alt="" />
        <img src={project5} alt="" />
      </div>
    </div>
  );
}

export default Portfolio;
