import React, { useState } from "react";
import "./Resume.css";
import resume from "./Resume.pdf";

function Resume() {
  return (
    <div className="resumeDownload">
      <h3 className="resumeTitle">Resume</h3>
      <a title="Download Resume" href={resume} download>
        <button className="btn downloadBtn">Click to Download</button>
      </a>
    </div>
  );
}

export default Resume;
