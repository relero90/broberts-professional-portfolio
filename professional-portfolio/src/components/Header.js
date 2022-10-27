// A single Navigation component within the header that will be used to conditionally render the different sections of your portfobuttono
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/Header.css";

function NavBar() {
  return (
    <header className="headerNav">
      <h1 className="nameText">Becca Roberts</h1>
      <div className="navBar">
        {/* About Button */}
        <Link to="/">
          <button className="navBtn" id="about">
            About
          </button>
        </Link>
        {/* Work Button */}
        <Link to="/work">
          <button className="navBtn" id="work">
            Work
          </button>
        </Link>
        {/* Resume Download Button */}
        <Link to="/resume">
          <button className="navBtn" id="resume">
            Resume
          </button>
        </Link>

        {/* Contact Button */}
        <Link to="/contact">
          <button className="navBtn" id="contact">
            Contact
          </button>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
