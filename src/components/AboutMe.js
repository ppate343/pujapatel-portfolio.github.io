import React from "react";
import { Fade } from "react-awesome-reveal";
import Carousel from "./Carousel";
import "../css/AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <Fade direction="up" cascasde>
        <h2>About Me</h2>
        <p>I am a Software Engineer Graduate with experience in full-stack
          web-developement and a passion for data science! 
          I am enthusiastic about crafting intuitive and
          user-friendly applications. 
          Flip through some of the pictures below to get an inside on my life!</p>
          
        <div className="about-content">
        <Carousel/>
        </div>
        </Fade>
    </section>
  );
};

export default AboutMe;
