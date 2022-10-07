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
  // For each project that is featured in your portfolio, include the following:
  // An image of the deployed application (either a short animated GIF or screenshot)
  // The title of the project
  // A link to the deployed application
  // A link to the corresponding GitHub repository
  const [project, setProject] = useState({
    imagePath: "/public/images/kiss-the-cook.png",
    title: "Kiss the Cook",
    appLink: "https://kiss-the-cook.herokuapp.com/",
    gitHub: "https://github.com/madrodgerflynn/Kiss_The_Cook",
  });

  return (
    <div style={styles.gallery}>
      <button style={styles.galleryBtn}>
        <i class="fa-solid fa-arrow-left"></i>
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
      <button style={styles.galleryBtn}>
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Project;
