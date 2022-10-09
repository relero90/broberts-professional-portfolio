import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const styles = {
    body: {
      display: "flex",
      justifyContent: "center",
      minHeight: "90vh",
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
