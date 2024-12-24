import React from "react";
import "./banner.css"; // Importa estilos para el banner si es necesario

const Banner = ({ title, subtitle }) => {
    return (
      <div className="banner">
        <div className="banner-image">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.X3kVoaVMKI_LBSw0KwvRIgHaEo&pid=Api&P=0&h=180" // Imagen de ejemplo
            alt="Banner visual"
          />
        </div>
        <div className="banner-text">
          <h1>
          {title}
          </h1>
          <p>
            {subtitle}
          </p>
        </div>
      </div>
    );
  };
  

  
export default Banner;