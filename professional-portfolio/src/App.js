import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  const styles = {
    body: {
      display: "flex",
      justifyContent: "center",
      minHeight: "100vh",
    },
    header: {
      height: "10vh",
      marginBottom: "8vh",
      display: "block",
    },
  };

  return (
    <div>
      <main>
        <header className="row" style={styles.header}>
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

export default App;
