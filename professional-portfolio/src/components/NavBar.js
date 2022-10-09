// A single Navigation component within the header that will be used to conditionally render the different sections of your portfobuttono
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <Link to={{ pathname: "/" }}>
        <button className="navBtn">About</button>
      </Link>
      <Link to={{ pathname: "/work" }}>
        <button className="navBtn">Work</button>
      </Link>
      <button className="navBtn">
        <a
          className="navLink"
          title="Download Resume PDF"
          href="/Resume-Stand-In.pdf"
          download
        >
          Resume
        </a>
      </button>

      <Link to={{ pathname: "/contact" }}>
        <button className="navBtn">Contact</button>
      </Link>
    </div>
  );
}

export default NavBar;
