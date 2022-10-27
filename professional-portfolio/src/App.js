import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

import Header from "./components/Header";
import About from "./pages/about/About.js";
import Project from "./pages/projects/Project";
import Contact from "./pages/contact/ContactForm";
import Resume from "./pages/resume/Resume";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  const styles = {
    body: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100%",
    },
  };

  return (
    <>
      <main className="aboveParticles">
        <Header />
        <section style={styles.body}>
          <Routes>
            <Route
              path="/broberts-professional-portfolio"
              element={<About />}
            />
            <Route path="/" element={<About />} />
            <Route path="/work" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
        <Footer />
      </main>
      <Particles options={particlesOptions} init={particlesInit} />
    </>
  );
}

export default App;
