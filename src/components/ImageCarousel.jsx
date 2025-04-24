
import React, { useState, useEffect } from "react";
import "../styles/ImageCarousel.css";

const ImageCarousel = ({ images, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div 
        className="carousel-inner" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="carousel-item">
            <img 
              src={image.src} 
              alt={image.alt}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <div className="carousel-controls">
        <button 
          onClick={goToPrevious}
          className="carousel-button prev"
        >
          &lt;
        </button>
        <button 
          onClick={goToNext}
          className="carousel-button next"
        >
          &gt;
        </button>
      </div>
      
      {/* Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-indicator ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
