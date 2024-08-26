import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import "../css/About.css";
import Image1 from '../images/ring.jpg';
import Image2 from "../images/carousel-imgs/grad.jpeg";
import Image3 from "../images/carousel-imgs/dog.jpg";

const images = [Image1, Image2, Image3];


const About = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

  return (
    <section id="about" className="about-section">
      <Fade direction="up" cascade>
        <h2>About Me</h2>
        <div className="aboutContainer">
          <div className="innerDiv left">
          <img src={images[currentImageIndex]} alt="About" className="about-image" />
          </div>
          <div className="innerDiv right">
          <div className="text-container">
              <h1>Hello, I'm Puja</h1>
              <p>
                I'm a passionate web developer with experience in full-stack development. I love creating interactive and dynamic user experiences.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
