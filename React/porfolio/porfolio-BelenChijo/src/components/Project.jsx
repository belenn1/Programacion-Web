import React from "react";

const Project = ({ title, description, link }) => {
  return (
    <div className="project tarjeta ">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>Ver proyecto</a>
    </div>
  );
};

export default Project;
