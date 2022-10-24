import React from "react";
import TypeIt from "typeit-react";
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
import avatar from "./avatar.png";

function About() {
  return (
    <div>
      <div className="aboutContainer">
        <img
          src={avatar}
          alt="An avatar for Becca - purple hair and a round face"
          className="avatar"
        />
        <h3 className="welcomeHeader">
          <TypeIt>Welcome to my professional portfolio.</TypeIt>
        </h3>
        <p className="brandStatement">
          I am a software developer with a passion for collaboration, creative
          problem-solving, and continued personal and professional growth. Nine
          years of elementary classroom teaching have taught me to be adaptable,
          organized, self-sufficient, and kind. Three months of 60-hour weeks in
          the University of Denver's Full-Stack Coding Bootcamp have prepared me
          to thrive in a fast-paced, outcomes-driven, agile environment.
        </p>
        <p className="brandStatement">
          When I'm not coding, I enjoy cooking, gardening, reading, outdoor
          adventures, and furry friends.
        </p>
      </div>
      <div className="skillsContainer">
        <div className="skillsetHeader">
          <h3>My Tools & Skillset</h3>
        </div>
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
