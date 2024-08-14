import React from "react";

const Project = ({ title, description, link }) => {
  return (
    <>
      <div>
        <h2 id="contact">Contact</h2>
        <p>{description}</p>
        <a href={link}>Ver Contacto</a>
      </div>
    </>
  );
};
export default Project;
