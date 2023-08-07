// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footerContainer">
      <h1 className="heading">Contact me</h1>
      <div className="contactItems">
        <div className="items">
          <i className="fa-solid fa-envelope"></i>
          syedfaraz2405@gmail.com
        </div>
        <div className="items">
          <i className="fa-brands fa-rocketchat"></i>
          Chat with me
        </div>
        <div className="items">
          <i className="fa-brands fa-linkedin"></i>
          Linkedin
        </div>
        <div className="items">
          <i className="fa-brands fa-github"></i>
          Github
        </div>
      </div>
    </div>
  );
}

export default Footer;
