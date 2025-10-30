import React, { useState, useEffect } from "react";
import "../../assets/css/estilo.css";
import "../../assets/css/estilo1.css";

const imagenes = [
  "/img/foto1.jpg",
  "/img/foto2.webp",
  "/img/foto3.webp",
  "/img/foto4.webp",
];

function Home() {
  const [indice, setIndice] = useState(0);

  const siguiente = () =>
    setIndice((prev) => (prev + 1) % imagenes.length);

  const anterior = () =>
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);

  useEffect(() => {
    const intervalo = setInterval(siguiente, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div id="principal">
      <h1 className="titulo">Óptica Miroo</h1>

      <div className="slider">
        <div className="list" style={{ width: `${imagenes.length * 100}%`, display: "flex", transition: "transform 0.5s ease-in-out", transform: `translateX(-${(indice * 100) / imagenes.length}%)` }}>
          {imagenes.map((img, i) => (
            <div className="item" key={i} style={{ flex: "0 0 auto", width: `${100 / imagenes.length}%` }}>
              <img src={img} alt={`Slide ${i + 1}`} style={{ width: "100%" }} />
            </div>
          ))}
        </div>

        <div className="buttons">
          <button onClick={anterior}>&lt;</button>
          <button onClick={siguiente}>&gt;</button>
        </div>

        <ul className="dots">
          {imagenes.map((_, i) => (
            <li
              key={i}
              className={i === indice ? "active" : ""}
              onClick={() => setIndice(i)}
            />
          ))}
        </ul>
      </div>

      <h2 className="link-catalogo">
        <a href="/productos">Ver nuestro catálogo completo</a>
      </h2>
    </div>
  );
}

export default Home;
