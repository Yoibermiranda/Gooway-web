import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Arrow = ({ className, style, onClick, direction }) => {
  return (
    <div
      className={`arrow ${direction}`}
      onClick={onClick}
    >
      {direction === "prev" ? (
        <ArrowBackIosIcon style={{ fontSize: "20px", }} />
      ) : (
        <ArrowForwardIosIcon style={{ fontSize: "20px" }} />
      )}
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: false, // Deshabilitar los puntitos
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <Arrow direction="prev" />, // Flecha izquierda
    nextArrow: <Arrow direction="next" />, // Flecha derecha
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const items = [
    { id: 1, image: "naturaleza.jpg", title: "Naturaleza" },
    { id: 2, image: "naturaleza.jpg", title: "Náutico" },
    { id: 3, image: "naturaleza.jpg", title: "Romance" },
    { id: 4, image: "naturaleza.jpg", title: "Sol playa" },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="carousel-item">
            <div
              className="carousel-image"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="carousel-title">{item.title}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
