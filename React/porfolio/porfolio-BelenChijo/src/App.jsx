// src/App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

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
            link="http://127.0.0.1:5500/Ejercitacion.html/Pokemons.html"
          />
          <Project
            title="Proyecto 2"
            description="Descripción del proyecto 2."
            link="https://enlace-al-proyecto2.com"
          />
          <Contact
            email="beelenC@gmail.com"
            description="descripcion de la ayuda que necesitas :)"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
