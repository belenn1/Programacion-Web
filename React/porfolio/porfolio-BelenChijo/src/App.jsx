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
          <div className="proyecto">
            <Project
              title="Pokemones"
              description="Son tres tarjertas de pokemons donde vemos la imagen y el tipo de pokemon que es, el 
              trabajo se puede ver en el link de abajo"
              link="http://127.0.0.1:5500/Ejercitacion.html/Pokemons.html"
            />

            <Project
              title="Peliculas"
              description="Es una cartelera donde pones tus tres peliculas favoritas, el trabajo se puede ver en el link de abajo"
              link="http://127.0.0.1:5500/pelicula/index.html"
            />
            <Project
              title="Venta de productos"
              description="Colocamos a la venta tres productos cualquiera, lo podes ver con el link de abajo"
              link="http://127.0.0.1:5500/EjercicioRepaso/ejercicio2/iindeexx.html"
            />
          </div>

          <Contact
            title="Email: beelenC@gmail.com"
            description="descripcion de la ayuda que necesitas :)"
            link=""
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
