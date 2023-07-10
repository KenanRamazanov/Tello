import React from "react";
import "./About.scss";

const About = ({ image, title }) => {
  return (
    <div className="about">
      <div className="details">
        <img src={image} alt="box" />
        <h4>{title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
      </div>
    </div>
  );
};

export default About;
