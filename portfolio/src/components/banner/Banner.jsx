/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/profile.png";
import "./banner.css"
function Banner() {

  return (
    <>
      <div className="bannerContainer">
        <div className="right">
          <span>Hi There I'm</span>
          <h1>Syed Farazuddin</h1>
          <p>WEB DEVELOPER / MERN DEVELOPER</p>
        </div>
        <div className="left">
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
