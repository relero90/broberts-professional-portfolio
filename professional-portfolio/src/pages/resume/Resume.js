import React, { useState } from "react";
import "./Resume.css";
import resume from "./Resume.pdf";
import resumeClip from "./Resume.jpeg";

function Resume() {
  return (
    <div className="resumeDownload">
      <div className="resumeCard">
        <h3 className="resumeTitle">Resume</h3>
        <img src={resumeClip} alt="Becca's resume" className="resumeImg"></img>
        <a
          title="Download Resume"
          href={resume}
          download
          className="btn downloadBtn"
        >
          Click to Download
        </a>
      </div>
    </div>
  );
}

export default Resume;
