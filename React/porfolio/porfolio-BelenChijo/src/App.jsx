// src/App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <section id="projects">
          <h2>Proyectos</h2>
          <Project
            title="Proyecto 1"
            description="Descripción del proyecto 1."
            link="https://enlace-al-proyecto1.com"
          />
          <Project
            title="Proyecto 2"
            description="Descripción del proyecto 2."
            link="https://enlace-al-proyecto2.com"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
