import React, { useState } from "react";
import "../styles/About.css";

function About() {
  // Components:
  // Quick Bio / Brand statement
  // Languages / Technologies section w/ icons
  // HTML5, Bootstrap, JS, Node, NPM, MySQL/WorkBench, MongoDB/Compass, Handlebars, ReactJS

  return (
    <div>
      <div className="aboutContainer">
        <h3>Welcome to my professional portfolio.</h3>
        <p>
          My name is Becca Roberts and I am a full-stack web developer. I am a
          collaborative thinker with an eye for small details and a passion for
          organization and open communication. My background as an elementary
          classroom teacher has taught me to be resilient, adaptable,
          optimistic, and curious.
        </p>
        <p>
          When I'm not coding, I enjoy cooking, gardening, outdoor adventures,
          and furry friends.
        </p>
      </div>
      <div className="skillsContainer">
        <h3>My Tools & Skillset</h3>
        <div className="iconsDiv">
          <i title="HTML5" className="fa-brands fa-html5"></i>
          <i title="Bootstrap CSS" className="fa-brands fa-bootstrap"></i>
          <i title="JavaScript" className="fa-brands fa-square-js"></i>
          <i title="NodeJS" className="fa-brands fa-node"></i>
          <i title="NPM" className="fa-brands fa-npm"></i>
          {/* MySQL/Workbench, MongoDB/Compass, Handlebars */}
          <img
            title="MySQL"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/mysql-logo.png"
          />
          {/* <img src="./assets/mongoDB-icon.png" alt="MongoDB Icon" /> */}

          <iconify-icon icon="logos:handlebars"></iconify-icon>

          <i title="React" className="fa-brands fa-react"></i>
        </div>
      </div>
    </div>
  );
}

export default About;
