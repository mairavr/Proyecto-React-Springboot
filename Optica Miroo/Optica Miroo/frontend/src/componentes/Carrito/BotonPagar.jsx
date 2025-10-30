
import React from "react";

const BotonPagar = ({ onClick }) => {
  return (
    <button
      className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      onClick={onClick}
    >
      Pagar Ahora
    </button>
  );
};

export default BotonPagar;
