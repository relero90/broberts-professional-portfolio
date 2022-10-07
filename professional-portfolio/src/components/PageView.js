import React, { useState } from "react";
import Header from "./Header.js";
import NavBar from "./NavBar.js";
// import Project from "./components/Project.js";
import Footer from "./Footer.js";

function PageView() {
  //   render entire pageview with all components - should this just be happening in App.js?

  return (
    <div>
      <main>
        <Header />
        <NavBar />
        <body></body>
        <Footer />
      </main>
    </div>
  );
}

export default PageView;
