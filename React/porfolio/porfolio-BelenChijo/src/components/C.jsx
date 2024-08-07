import React from "react";

const contact = ({ title, description, link }) => {
  return (
    <div className="contact">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default contact;
