import React from "react";

const ModalProducto = ({ producto, onCerrar }) => {
  if (!producto) return null;

  const imagenSrc = producto.imagen ? `/img/${producto.imagen}` : "/img/placeholder.jpg";

  return (
    <div className="modal">
      <div className="modal-contenido">
        <span className="modal-cerrar" onClick={onCerrar}>
          ×
        </span>
        <img
          src={imagenSrc}
          alt={producto.nombre}
          style={{ width: 300, borderRadius: 10, marginBottom: 16 }}
        />
        <h2>{producto.nombre}</h2>
        <p>Precio: ${producto.precio.toLocaleString("es-CL")}</p>
        <p>{producto.descripcion}</p>
      </div>
    </div>
  );
};

export default ModalProducto;
