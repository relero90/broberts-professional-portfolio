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
    background: colors.dark3,
    color: colors.light1,
    borderRadius: "40%",
    border: `solid 2px ${colors.accent}`,
    fontSize: "3vw",
  },
  navBtnOnHover: {
    width: "20%",
    background: colors.dark3,
    color: colors.accent,
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

  // const [hoverState, setHoverState] = useState(false);
  // const onMouseEnter = () => {
  //   setHoverState(true);
  // };
  // const onMouseLeave = () => {
  //   setHoverState(false);
  // };

  return (
    <div style={styles.navBar}>
      <button style={styles.navButton} onHover={() => styles.navBtnOnHover}>
        About
      </button>
      <button style={styles.navButton} id="workBtn">
        Work
      </button>
      <button style={styles.navButton} id="resumeBtn">
        <a
          style={styles.navLink}
          title="Download Resume PDF"
          href="/Resume-Stand-In.pdf"
          download
        >
          Resume
        </a>
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
