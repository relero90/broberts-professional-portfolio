import React from "react";
import { HashRouter, Route } from "react-router-dom";

import About from "../pages/about/About.js";
import Contact from "../pages/contact/ContactForm.js";
import Project from "../pages/projects/Project.js";
import Resume from "../pages/resume/Resume.js";

const Main = () => {
  const styles = {
    body: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100%",
    },
  };

  return (
    <section style={styles.body}>
      <HashRouter>
        <Route path="/broberts-professional-portfolio" element={<About />} />
        <Route path="/" element={<About />} />
        <Route
          path="/broberts-professional-portfolio/work"
          element={<Project />}
        />
        <Route
          path="/broberts-professional-portfolio/resume"
          element={<Resume />}
        />
        <Route
          path="/broberts-professional-portfolio/contact"
          element={<Contact />}
        />
      </HashRouter>
    </section>
  );
};

export default Main;
