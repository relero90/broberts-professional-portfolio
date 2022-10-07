import React, { useState } from "react";
// A single Header component that appears on multiple pages
const styles = {
  nameHeader: {
    width: "100vw",
  },
  h1: {
    textAlign: "center",
    color: "#F8F9FA",
    fontFamily: "Petit Formal Script",
    fontSize: "5vw",
  },
};

function Header() {
  return (
    <div style={styles.nameHeader}>
      <h1 style={styles.h1}>Becca Roberts</h1>
    </div>
  );
}

export default Header;
