import React from "react";
import "../css/Hero.css";
import heroLogo from "../images/hero-logo.png";
import Typewriter from "react-typewriter-effect";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <Typewriter
          textStyle={{ fontFamily: "system-ui", fontSize: "3em" }}
          startDelay={100}
          cursorColor="black"
          text="Hi, My name is Puja Patel."
          typeSpeed={100}
        />
        <Fade direction="up">
          <h2>Welcome to my portfolio!</h2>
          <p>
            I am a passionate software engineer specializing in full-stack development and data analysis. Let's build something amazing together!
          </p>
          <div className="hero-link-container">
            <a href="#about" className="hero-link">
              Hire Me!
            </a>
            <a href="#about" className="hero-link">
              Let's Talk!
            </a>
          </div>
        </Fade>
      </div>
      <Fade direction="up">
        <div className="hero-image">
          <img src={heroLogo} alt="Puja Patel" />
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
