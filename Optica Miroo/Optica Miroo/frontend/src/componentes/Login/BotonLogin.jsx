import React from "react";

const BotonLogin = ({ texto = "Iniciar Sesión" }) => {
  return (
    <button
      type="submit"
      className="w-full py-2 rounded text-white hover:bg-[#FFB566] transition-colors"
      style={{ backgroundColor: "#FFA07A" }} 
    >
      {texto}
    </button>
  );
};

export default BotonLogin;
