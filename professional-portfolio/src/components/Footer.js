// A single Footer component that appears on multiple pages
import React, { useState } from "react";

const styles = {
  footer: {
    display: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
  },
  iconDiv: {
    display: "flex",
    justifyContent: "space-around",
  },
  icon: {
    color: "#F8F9FA",
  },
};

function Footer() {
  return (
    <div style={styles.footer} id="footer">
      <div style={styles.iconDiv}>
        <a
          target="_blank"
          href="https://github.com/relero90"
          style={styles.icon}
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/becca-roberts-a87729240/"
          style={styles.icon}
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <i className="fa-regular fa-envelope"></i>
        <i className="fa-solid fa-download"></i>
      </div>
    </div>
  );
}

export default Footer;
