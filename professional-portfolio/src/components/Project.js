// A single Project component that will be used multiple times in the Portfolio section
import React, { useState } from "react";
import "../styles/Project.css";

function Project() {
  const projects = [
    {
      index: 0,
      imagePath:
        "https://docs.google.com/drawings/d/e/2PACX-1vRzdqenSrp26pwM7izksGIyfBnSQdzL-QVsCN86rhU80UxgYcEDn2TTqHgb-b2fvfIF_9tivOp2tJM_/pub?w=449&h=257",
      alt:
        "The Kiss the Cook app features a title header and navigation bar aside. The screenshot shows the All Recipes page which includes clickable recipe cards with embedded images and titles.",
      title: "Kiss the Cook",
      appLink: "https://kiss-the-cook.herokuapp.com/",
      gitHub: "https://github.com/madrodgerflynn/Kiss_The_Cook",
    },
    {
      index: 1,
      imagePath:
        "https://docs.google.com/drawings/d/e/2PACX-1vRE8UDbiz2h4DOJj8ok3s9sgeTIwGfFPEjTEvz5978LiF4eV025jmDukUEpEPZre_6YhTTXh_mLxe5p/pub?w=741&h=737",
      alt:
        "The Brewfinder app features a title header, a search aside, a brewery display, and a weather forecaster. Users can enter a city and state and click a button to view randomized brewery data for that city.",
      title: "Brewfinder",
      appLink: "https://relero90.github.io/brewfinder/",
      gitHub: "https://github.com/relero90/brewfinder",
    },
  ];

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
          className="card-img-top"
          src={project.imagePath}
          alt={project.alt}
        ></img>
        <div className="card-body text-center">
          <h5 className="card-title title">{project.title}</h5>
          <p className="projectLinks card-text">
            <a className="projectLinks" target="_blank" href={project.appLink}>
              Deployed App
            </a>
          </p>
          <p className="projectLinks card-text">
            <a className="projectLinks" target="_blank" href={project.gitHub}>
              GitHub Repository
            </a>
          </p>
        </div>
      </div>

      {/* <div className="projectCard">
        <div className="imageDiv">
          <img
            className="card-img-top"
            src={project.imagePath}
            alt={project.alt}
          ></img>
        </div>
        <div className="details">
          <h2 className="title">{project.title}</h2>
          <div className="linkDiv">
            <a className="projectLinks" target="_blank" href={project.appLink}>
              Deployed App
            </a>
            <a className="projectLinks" target="_blank" href={project.gitHub}>
              GitHub Repository
            </a>
          </div>
        </div>
      </div> */}
      <button className="galleryBtn" onClick={displayNextProject}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Project;
