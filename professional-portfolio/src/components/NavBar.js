// A single Navigation component within the header that will be used to conditionally render the different sections of your portfobuttono
import React, { useState } from "react";
import colors from "../utils/colorScheme";

const styles = {
  navBar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  navButton: {
    width: "20%",
    background: "#212529",
    color: colors.light1,
    borderRadius: "40%",
    border: `solid 2px ${colors.accent}`,
    fontSize: "3vw",
  },
  navLink: {
    textDecoration: "none",
    color: colors.light1,
  },
};

function NavBar() {
  // onClick event functions-->
  // Switch to "About" view
  // Switch to "Work" view

  return (
    <div style={styles.navBar}>
      <button style={styles.navButton} id="aboutBtn">
        About
      </button>
      <button style={styles.navButton} id="workBtn">
        Work
      </button>
      <button style={styles.navButton} id="resumeBtn">
        Resume
      </button>

      <button style={styles.navButton} id="contactBtn">
        <a style={styles.navLink} href="#footer">
          Contact
        </a>
      </button>
    </div>
  );
}

export default NavBar;
