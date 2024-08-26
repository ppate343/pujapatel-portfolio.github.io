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
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3qQDA2gwrAblHNbiKLiu62o8zuZF2h3ddd_BXWbePETQruyKM20fNIESSYjB9mvw63sa6AU2qh"  className="hero-link"  rel="noreferrer" target="_blank">
              Let's Chat
            </a>
            <a href="/Puja_Patel_Resume_2024.pdf" className="hero-link" target="_blank" rel="noopener noreferrer">
              Resume
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
