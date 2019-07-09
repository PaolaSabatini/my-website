import React from "react";
import "./App.css";
import Nav from "./nav";
import Welcome from "./welcome";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

function App() {
  return (
    <div className="App">
      <p id="title">Paola Sabatini Silveira</p>
      <Nav />
      <Welcome />
      <About />
      <Projects />
      <Contact />
      <p>&copy; 2019 Paola Sabatini Silveira</p>
    </div>
  );
}

export default App;
