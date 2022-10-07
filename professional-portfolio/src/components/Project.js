// A single Project component that will be used multiple times in the Portfolio section
import React, { useState } from "react";
import colors from "../utils/colorScheme";

const styles = {
  gallery: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "60vh",
    width: "100vw",
    marginTop: "12vh",
    border: `solid 2px ${colors.light1}`,
    borderRadius: "3%",
  },
  galleryBtn: {
    height: "5vh",
  },
  projectCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    width: "80vw",
  },
  title: {
    fontFamily: "Petit Formal Script",
    color: colors.light1,
  },
  linkDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  projectLinks: {
    textDecoration: "none",
    color: colors.light1,
  },
};

function Project() {
  const projects = [
    {
      index: 0,
      imagePath: "./images/kiss-the-cook.png",
      title: "Kiss the Cook",
      appLink: "https://kiss-the-cook.herokuapp.com/",
      gitHub: "https://github.com/madrodgerflynn/Kiss_The_Cook",
    },
    {
      index: 1,
      imagePath: "./images/brewfinder.png",
      title: "Brewfinder",
      appLink: "https://github.com/relero90/brewfinder",
      gitHub: "https://relero90.github.io/brewfinder/",
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
    <div style={styles.gallery}>
      <button style={styles.galleryBtn} onClick={displayPreviousProject}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <div style={styles.projectCard}>
        <img
          src={project.imagePath}
          alt="A filler image for testing this website"
        ></img>
        <h2 style={styles.title}>{project.title}</h2>
        <div style={styles.linkDiv}>
          <a style={styles.projectLinks} href={project.appLink}>
            Deployed App
          </a>
          <a style={styles.projectLinks} href={project.gitHub}>
            GitHub Repository
          </a>
        </div>
      </div>
      <button style={styles.galleryBtn} onClick={displayNextProject}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Project;
