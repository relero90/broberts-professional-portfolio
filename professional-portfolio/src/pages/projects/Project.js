import React, { useState } from "react";
import "./Project.css";
import projects from "./data.js";

function Project() {
  const [project, setProject] = useState(projects[0]);

  const displayNextProject = () => {
    // if we are not at the end of the array
    if (project.index < projects.length - 1) {
      // move to the next array member
      setProject(projects[project.index + 1]);
      return;
    } else {
      // move to the first array member
      setProject(projects[0]);
      return;
    }
  };
  const displayPreviousProject = () => {
    // if we are not at the beginning of the array
    if (project.index > 0) {
      // move to the previous array member
      setProject(projects[project.index - 1]);
    } else {
      // move to the final array member
      setProject(projects[projects.length - 1]);
    }
  };

  return (
    <div className="gallery row m-5p-5">
      <button className="galleryBtn" onClick={displayPreviousProject}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <div className="projectCard card mb-3">
        <img
          className="card-img-top projectImg"
          src={project.imagePath}
          alt={project.alt}
        ></img>
        <div className="card-body text-center">
          <h5 className="card-title title">{project.title}</h5>
          <p className="projectLinks card-text">
            <a className="projectLinks" target="_blank" href={project.appLink}>
              Check it Out
            </a>
          </p>
          <p className="projectLinks card-text">
            <a className="projectLinks" target="_blank" href={project.gitHub}>
              GitHub Repository
            </a>
          </p>
        </div>
      </div>
      <button className="galleryBtn" onClick={displayNextProject}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Project;
