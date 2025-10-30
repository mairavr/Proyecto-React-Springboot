import React from "react";

const BotonEnviar = ({ onClick, texto = "Enviar" }) => {
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 rounded border border-orange-600 text-white hover:bg-[#FFB566] transition-colors"
      style={{ backgroundColor: "#FFA07A" }} 
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default BotonEnviar;
