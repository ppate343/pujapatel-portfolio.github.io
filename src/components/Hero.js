import React from 'react';
import '../css/Hero.css';
import heroLogo from '../images/hero-logo.png'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Puja Patel.</h1>
        <h2>I Code with Purpose, Design with Passion</h2>
        <p>I am a full-stack developer passionate about crafting intuitive and user-friendly interfaces.</p>
        <a href="#about" className="hero-link">About Me</a>
      </div>
      <div className="hero-image">
        <img src={heroLogo} alt="Puja Patel" />
      </div>
    </section>
  );
};

export default Hero;
