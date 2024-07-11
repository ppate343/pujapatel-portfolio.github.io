import React, { useState } from 'react';
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import '../css/Carousel.css';

const images = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <MdOutlineArrowLeft className="arrow arrow-left" onClick={prevSlide} />
      <div className="carousel-content">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      </div>
      <MdOutlineArrowRight className="arrow arrow-right" onClick={nextSlide} />
    </div>
  );
};

export default Carousel;
