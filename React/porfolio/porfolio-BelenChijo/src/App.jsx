// src/App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Contacto from "./components/Contact";
import Habilidades from "./components/Habilidades";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />

        <section id="projects">
          <h2>Mis Proyectos</h2>
          <div className="proyecto">
            <Project
              title="Pokemones"
              description="Son tres tarjertas de pokemons donde vemos la imagen e info del pokemon que es, se puede ver en el link de abajo."
              link="http://127.0.0.1:5500/Ejercitacion.html/Pokemons.html"
              linkFoto={"/pk.png"}
            />

            <Project
              title="Peliculas"
              description="Es una cartelera que muestra tus tres peliculas favoritas que se van a poder ver en los cines, el trabajo se puede ver en el link de abajo."
              link="http://127.0.0.1:5500/pelicula/index.html"
              linkFoto={"/peli.png"}
            />
            <Project
              title="Venta de productos"
              description="Es como una tienda virtual donde colocamos a la venta tres productos cualquiera, lo podes ver con el link de abajo."
              link="http://127.0.0.1:5500/EjercicioRepaso/ejercicio2/iindeexx.html "
              linkFoto={"/producto.png"}
            />
          </div>
          <Habilidades description="Gracias a algunos trabajos pude desarrollar habilidades para usar HTML, CSS y JavaScript, Tambien Software de Bases de Datos como el MySQL" />

          <Contacto description="Email: belennnc25026@gmail.com" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
