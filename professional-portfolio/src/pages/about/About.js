import React, { useState } from "react";
import "./About.css";
import {
  SiHtml5,
  SiBootstrap,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiHandlebarsdotjs,
} from "react-icons/si";
import { FaNode, FaNpm, FaReact } from "react-icons/fa";
import headshot from "./headshot.jpeg";

function About() {
  // Components:
  // Quick Bio / Brand statement
  // Languages / Technologies section w/ icons
  // HTML5, Bootstrap, JS, Node, NPM, MySQL/WorkBench, MongoDB/Compass, Handlebars, ReactJS

  return (
    <div>
      <div className="aboutContainer">
        <div className="welcome">
          <h3>Welcome to my professional portfolio.</h3>
          <img
            src={headshot}
            alt="A photo of Rebecca Roberts"
            className="headshot"
          />
        </div>
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
          <div className="singleIconDiv">
            <SiHtml5 className="icon"></SiHtml5>
          </div>
          <div className="singleIconDiv">
            <SiBootstrap className="icon"></SiBootstrap>
          </div>
          <div className="singleIconDiv">
            <SiJavascript className="icon"></SiJavascript>
          </div>
          <div className="singleIconDiv">
            <FaNode className="icon"></FaNode>
          </div>
          <div className="singleIconDiv">
            <FaNpm className="icon"></FaNpm>
          </div>
          <div className="singleIconDiv">
            <SiMysql className="icon"></SiMysql>
          </div>
          <div className="singleIconDiv">
            <SiMongodb className="icon"></SiMongodb>
          </div>
          <div className="singleIconDiv">
            <SiHandlebarsdotjs className="icon"></SiHandlebarsdotjs>
          </div>
          <div className="singleIconDiv">
            <FaReact className="icon"></FaReact>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
