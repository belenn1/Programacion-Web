import React from "react";

const Habilidades = ({ title, description, link }) => {
  return (
    <>
      <div>
        <h2 id="Habilidades">Habilidades</h2>
        <p>{description}</p>
      </div>
    </>
  );
};
export default Habilidades;
