import React from "react";
import Header from "./components/Header";
import About from "./pages/about/About.js";
import Project from "./pages/projects/Project";
import Contact from "./pages/contact/ContactForm";
import Resume from "./pages/resume/Resume";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const styles = {
    body: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100%",
    },
  };

  return (
    <Router>
      <div>
        <main>
          <Header />
          <section style={styles.body}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/work" element={<Project />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </section>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
