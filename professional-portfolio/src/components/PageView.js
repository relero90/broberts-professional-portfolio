import React, { useState } from "react";
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import Project from "./Project.js";
import Footer from "./Footer.js";
import colors from "../utils/colorScheme";

function PageView() {
  //   render entire pageview with all components - should this just be happening in App.js?
  const styles = {
    body: {
      display: "flex",
      justifyContent: "center",
      minHeight: "100vh",
    },
    header: {
      height: "10vh",
      marginBottom: "8vh",
    },
  };

  return (
    <div>
      <main>
        <header style={styles.header}>
          <Header />
          <NavBar />
        </header>
        <section style={styles.body}>
          <Project />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default PageView;
