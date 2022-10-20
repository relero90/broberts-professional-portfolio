// A single Footer component that appears on multiple pages
import React from "react";
import "./styles/Footer.css";
import resume from "../pages/resume/Becca_Roberts_Resume.pdf";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer" id="footer">
      <h3 className="footerH3">Find me at...</h3>
      <div className="footerIconDiv">
        {/* GitHub icon link */}
        <a
          title="GitHub Profile"
          target="_blank"
          href="https://github.com/relero90"
          className="iconAnchor"
        >
          <FaGithub className="footer-icon" />
        </a>
        {/* LinkedIn icon link */}
        <a
          title="LinkedIn Profile"
          target="_blank"
          href="https://www.linkedin.com/in/becca-roberts/"
          className="iconAnchor"
        >
          <FaLinkedin className="footer-icon" />
        </a>
        {/* Email icon link */}
        <a
          title="Email"
          target="_blank"
          href="mailto:relero90@gmail.com"
          className="iconAnchor"
        >
          <MdOutlineMail className="footer-icon" />
        </a>
        {/* Resume icon link - file in public needs to be replaced with updated resume */}
        <a
          title="Download Resume PDF"
          href={resume}
          download
          className="iconAnchor"
        >
          <FaFileDownload className="footer-icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
