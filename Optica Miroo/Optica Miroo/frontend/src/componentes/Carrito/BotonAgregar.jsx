import React from "react";

const BotonAgregar = ({ onClick, texto = "Agregar" }) => {
  return (
    <button
      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default BotonAgregar;
