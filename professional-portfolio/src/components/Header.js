// A single Navigation component within the header that will be used to conditionally render the different sections of your portfobuttono
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function NavBar() {
  return (
    <header>
      <div className="nameHeader">
        <h1 className="nameText">Becca Roberts</h1>
      </div>
      <div className="navBar">
        {/* About Button */}
        <Link to={{ pathname: "/" }}>
          <button className="navBtn">About</button>
        </Link>
        {/* Work Button */}
        <Link to={{ pathname: "/work" }}>
          <button className="navBtn">Work</button>
        </Link>
        {/* Resume Download Button */}
        <a
          className="navLink"
          title="Download Resume PDF"
          href="/Resume-Stand-In.pdf"
          download
        >
          <button className="navBtn">Resume</button>
        </a>

        {/* Contact Button */}
        <Link to={{ pathname: "/contact" }}>
          <button className="navBtn">Contact</button>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
