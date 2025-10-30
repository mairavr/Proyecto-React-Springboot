import React, { useEffect, useRef, useState, useContext } from "react";
import "../../assets/css/estilo.css";
import "../../assets/css/estilo1.css";
import { ToastContext } from "../../componentes/Toast/ToastContext";

const Contacto = () => {
  const trackRef = useRef(null);
  const { lanzarToast } = useContext(ToastContext);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [contador, setContador] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    lanzarToast("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.", "success");

    setNombre("");
    setCorreo("");
    setComentario("");
    setContador(0);
  };

  useEffect(() => {
    setContador(comentario.length);
  }, [comentario]);

  useEffect(() => {
    const track = trackRef.current;
    const velocidad = 1;

    track.innerHTML += track.innerHTML;

    let desplazamiento = 0;

    function mover() {
      desplazamiento -= velocidad;

      const primeraImg = track.children[0];
      if (Math.abs(desplazamiento) >= primeraImg.offsetWidth) {
        track.appendChild(primeraImg);
        desplazamiento += primeraImg.offsetWidth;
      }

      track.style.transform = `translateX(${desplazamiento}px)`;
      requestAnimationFrame(mover);
    }

    mover();
  }, []);

  return (
    <div>
      <h1 className="titulo">ÓPTICA MIROO</h1>

      <div className="carrusel-continuo">
        <div className="carrusel-track" ref={trackRef}>
          <img src="/img/imagen10.jpg" alt="Imagen 1" />
          <img src="/img/imagen11.jpg" alt="Imagen 2" />
          <img src="/img/imagen12.jpg" alt="Imagen 3" />
          <img src="/img/imagen13.jpg" alt="Imagen 4" />
        </div>
      </div>

      <h1 className="subtitulo">CONTACTANOS</h1>

      <div className="form-wrapper">
        <form id="form-contacto" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Solo letras y espacios"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <div className="error-message" id="nombre-error"></div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@correo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
            <div className="error-message" id="email-error"></div>
          </div>

          <div className="form-group">
            <label htmlFor="comentario">Comentario</label>
            <textarea
              id="comentario"
              name="comentario"
              placeholder="Máximo 300 caracteres"
              maxLength={300}
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              required
            />
            <div className="char-counter" id="char-counter">{contador}/300</div>
            <div className="error-message" id="comentario-error"></div>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
