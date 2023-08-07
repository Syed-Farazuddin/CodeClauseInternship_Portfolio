// eslint-disable-next-line no-unused-vars
import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <div className="nav_container">
        <div className="logo">Faraz</div>
        <div className="items">
          <span>
            <i className="fa-solid fa-user"></i>
            About
          </span>
          <span>
            <i className="fa-solid fa-user-graduate"></i>
            Education
          </span>
          <span>
            <i className="fa-solid fa-briefcase"></i>
            Portfolio
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
