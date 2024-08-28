import React from "react";

const Project = ({ title, description, link, linkFoto }) => {
  return (
    <div className="project tarjeta ">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={linkFoto} />
      <a href={link}>Ver proyecto</a>
    </div>
  );
};

export default Project;
