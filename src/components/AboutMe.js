import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Typewriter from 'react-typewriter-effect';
import '../css/AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <Fade direction="up">
        <h2>About Me</h2>
      </Fade>
      <div className="about-content">
        <div className="description-container">
          <Typewriter
            text="Hey there, welcome to my personal portfolio. My name is Puja Patel. I am a software engineering graduate with experience in Full-stack development and project management. Flip through some pictures to get an inside on my life"
            typeSpeed={80}
            startDelay={100}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
