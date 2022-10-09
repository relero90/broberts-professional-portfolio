// A single Footer component that appears on multiple pages
import React, { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footerIconDiv">
        {/* GitHub icon link */}
        <a
          title="GitHub Profile"
          target="_blank"
          href="https://github.com/relero90"
        >
          <i className="footer-icon fa-brands fa-github"></i>
        </a>
        {/* LinkedIn icon link */}
        <a
          title="LinkedIn Profile"
          target="_blank"
          href="https://www.linkedin.com/in/becca-roberts-a87729240/"
        >
          <i className="footer-icon fa-brands fa-linkedin"></i>
        </a>
        {/* Email icon link */}
        <a title="Email" target="_blank" href="mailto:relero90@gmail.com">
          <i className="footer-icon fa-regular fa-envelope"></i>
        </a>
        {/* Resume icon link - file in public needs to be replaced with updated resume */}
        <a title="Download Resume PDF" href="/Resume-Stand-In.pdf" download>
          <i className="footer-icon fa-solid fa-download"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
