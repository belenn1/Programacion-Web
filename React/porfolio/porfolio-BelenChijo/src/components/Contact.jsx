import React from "react";

const Contacto = ({ title, description, link }) => {
  return (
    <>
      <div>
        <h2 id="Contacto">Contacto</h2>
        <p>{description}</p>
      </div>
    </>
  );
};
export default Contacto;
