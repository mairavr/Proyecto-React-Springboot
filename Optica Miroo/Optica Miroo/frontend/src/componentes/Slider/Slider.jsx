import React, { useState, useEffect } from "react";
import "../../assets/css/estilo.css"; 
import "../../assets/css/estilo1.css";

function Slider() {
  const imagenes = [
    "/img/foto1.jpg",
    "/img/foto2.webp",
    "/img/foto3.webp",
    "/img/foto4.webp",
  ];

  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  useEffect(() => {
    const intervalo = setInterval(siguiente, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="slider">
      <div className="list" style={{ transform: `translateX(-${indice * 100}%)` }}>
        {imagenes.map((img, i) => (
          <div className="item" key={i}>
            <img src={img} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>

      <div className="buttons">
        <button id="prev" onClick={anterior}>&lt;</button>
        <button id="next" onClick={siguiente}>&gt;</button>
      </div>

      <ul className="dots">
        {imagenes.map((_, i) => (
          <li
            key={i}
            className={i === indice ? "active" : ""}
            onClick={() => setIndice(i)}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default Slider;
