import React from "react";
import "../styles/Hero.css";

import Card from "./Card";
const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="herooooo">
        <div className="hero_card">
          <Card />
        </div>
        <div className="hero_details">
          <p className="hero_p">Hello</p>

          <p className="hero_d">Here's who i am & what i do</p>
          <p className="hero_e">
            I am currently studying BSc CSIT in eighth semester.I am searching
            for internship in React Framework as i am interested in web
            development. I have taken a few React courses online as well as done
            some projects using React.I have a fair understanding of React as
            well as other relevant technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
