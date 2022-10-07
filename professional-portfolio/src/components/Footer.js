// A single Footer component that appears on multiple pages
import React, { useState } from "react";
import colors from "../utils/colorScheme";

const styles = {
  footer: {
    display: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "8vh",
  },
  iconDiv: {
    display: "flex",
    justifyContent: "space-around",
    height: "8vh",
  },
  icon: {
    color: colors.light1,
    fontSize: "6.5vw",
    marginBottom: "5vh",
  },
};

function Footer() {
  return (
    <div style={styles.footer} id="footer">
      <div style={styles.iconDiv}>
        {/* GitHub icon link */}
        <a target="_blank" href="https://github.com/relero90">
          <i style={styles.icon} className="fa-brands fa-github"></i>
        </a>
        {/* LinkedIn icon link */}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/becca-roberts-a87729240/"
        >
          <i style={styles.icon} className="fa-brands fa-linkedin"></i>
        </a>
        {/* Email icon link */}
        <a target="_blank" href="mailto:relero90@gmail.com">
          <i style={styles.icon} className="fa-regular fa-envelope"></i>
        </a>
        {/* Resume icon link - file in public needs to be replaced with updated resume */}
        <a href="/Resume-Stand-In.pdf" download>
          <i style={styles.icon} className="fa-solid fa-download"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
