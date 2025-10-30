import React from "react";

const BotonAgregarCarrito = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
    >
      Agregar al carrito
    </button>
  );
};

export default BotonAgregarCarrito;
