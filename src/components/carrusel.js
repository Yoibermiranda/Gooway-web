import React, { useState } from 'react';
import './carrusel.css';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={prevSlide}>
                ◀
            </button>

            <div className="carousel-slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>

            <button className="carousel-button next" onClick={nextSlide}>
                ▶
            </button>

            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;