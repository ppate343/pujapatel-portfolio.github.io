import React from "react";
import dog from "../images/carousel-imgs/dog.jpg";
import grad from "../images/carousel-imgs/grad.jpeg";
import ring from "../images/carousel-imgs/ring.jpeg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const styles = { width: "100%", height: "auto"};

const Carousel = () => {
  return (
    <Splide
      options={{ rewind: true, height: 600, width: 500, gap: "1rem"}}
      aria-label="React Splide Example"
    >
      <SplideSlide>
        <img style={styles} src={dog} alt="Dog" />
        <p>This is my dog, Romeo! He is a 3 Year old black Lab Retriever. In my free time, we love to go on hikes and swimming!</p>
      </SplideSlide>
      <SplideSlide>
        <img
          style={{ width: "100%", height: "auto" }}
          src={grad}
          alt="Graduation"
        />
        <p>Graduated Western University June 2024</p>
      </SplideSlide>
      <SplideSlide>
        <img style={styles} src={ring} alt="Ring Ceremony" />
        <p>Graduated Western University June 2024</p>
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
