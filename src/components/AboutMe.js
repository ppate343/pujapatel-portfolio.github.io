import React from "react";
import { Fade } from "react-awesome-reveal";
import Typewriter from "react-typewriter-effect";
import Carousel from "./Carousel";
import "../css/AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <Fade direction="up" cascade>
        <h2>About Me</h2>
        <div className="about-content">
          <div className="carousel-container">
            <Carousel />
          </div>
          <p>
            I am a Software Engineer Graduate with experience in full-stack web development and a passion for data science! 
            I am enthusiastic about crafting intuitive and user-friendly applications. 
            Flip through some of the pictures below to get an inside look into my life!
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default AboutMe;
