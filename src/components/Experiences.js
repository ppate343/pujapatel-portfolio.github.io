import React from "react";
import "../css/Experiences.css";
import HorizantalTimeline from "./HorizantalTimeline.js";
import { Fade } from "react-awesome-reveal";

const Experiences = () => {
  return (
    <section id="experience" className="experience-section">
      <Fade direction="up">
        <h2>Experiences</h2>
        <HorizantalTimeline />
      </Fade>
    </section>
  );
};

export default Experiences;
