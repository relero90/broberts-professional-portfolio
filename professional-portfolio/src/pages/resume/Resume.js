import React, { useState } from "react";
import "./Resume.css";
import resume from "./Becca_Roberts_V2.pdf";
import resumeClip from "./resume.png";

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
