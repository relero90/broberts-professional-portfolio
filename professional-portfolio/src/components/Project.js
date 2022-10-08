// A single Project component that will be used multiple times in the Portfolio section
import React, { useState } from "react";
import colors from "../utils/colorScheme";

const styles = {
  gallery: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "60vh",
    width: "95vw",
    marginTop: "12vh",
    margin: "2vw",
  },
  galleryBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "5vh",
    background: "transparent",
    color: colors.light1,
    fontSize: "2rem",
    border: `transparent`,
    // borderRadius: "8%",
  },
  // galBtnOnHover: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: "5vh",
  //   background: colors.accent,
  //   color: colors.med2,
  //   fontSize: "3rem",
  //   border: `solid ${colors.dark3} 2px`,
  //   borderRadius: "8%",
  // },
  projectCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px",
    padding: "20px",
    width: "80vw",
    height: "65vh",
    // border: `solid 2px ${colors.light1}`,
    borderRadius: "3%",
  },
  image: {
    width: "auto%",
    maxHeight: "70%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  title: {
    fontFamily: "Petit Formal Script",
    color: colors.light1,
    fontSize: "5vw",
  },
  linkDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "3.5vw",
  },
  projectLinks: {
    textDecoration: "none",
    color: colors.med2,
  },
};

function Project() {
  const projects = [
    {
      index: 0,
      imagePath:
        "https://docs.google.com/drawings/d/e/2PACX-1vRzdqenSrp26pwM7izksGIyfBnSQdzL-QVsCN86rhU80UxgYcEDn2TTqHgb-b2fvfIF_9tivOp2tJM_/pub?w=449&h=257",
      alt: "The Kiss the Cook app features a title header and navigation bar aside. The screenshot shows the All Recipes page which includes clickable recipe cards with embedded images and titles.",
      title: "Kiss the Cook",
      appLink: "https://kiss-the-cook.herokuapp.com/",
      gitHub: "https://github.com/madrodgerflynn/Kiss_The_Cook",
    },
    {
      index: 1,
      imagePath:
        "https://docs.google.com/drawings/d/e/2PACX-1vRE8UDbiz2h4DOJj8ok3s9sgeTIwGfFPEjTEvz5978LiF4eV025jmDukUEpEPZre_6YhTTXh_mLxe5p/pub?w=741&h=737",
      alt: "The Brewfinder app features a title header, a search aside, a brewery display, and a weather forecaster. Users can enter a city and state and click a button to view randomized brewery data for that city.",
      title: "Brewfinder",
      appLink: "https://relero90.github.io/brewfinder/",
      gitHub: "https://github.com/relero90/brewfinder",
    },
  ];
  // const [hoverState, setHoverState] = useState(false);
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
  // const onMouseEnter = () => {
  //   setHoverState(true);
  // };
  // const onMouseLeave = () => {
  //   setHoverState(false);
  // };
  return (
    <div style={styles.gallery}>
      <button style={styles.galleryBtn} onClick={displayPreviousProject}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <div style={styles.projectCard}>
        <div style={styles.image}>
          <img
            style={styles.image}
            src={project.imagePath}
            alt={project.alt}
          ></img>
        </div>
        <div style={styles.details}>
          <h2 style={styles.title}>{project.title}</h2>
          <div style={styles.linkDiv}>
            <a
              style={styles.projectLinks}
              target="_blank"
              href={project.appLink}
            >
              Deployed App
            </a>
            <a
              style={styles.projectLinks}
              target="_blank"
              href={project.gitHub}
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
      <button style={styles.galleryBtn} onClick={displayNextProject}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Project;
