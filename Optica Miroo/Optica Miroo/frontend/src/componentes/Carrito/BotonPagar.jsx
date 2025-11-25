import React from "react";
import { useNavigate } from "react-router-dom";

const BotonPagar = ({ clienteId, carrito }) => {
  const navigate = useNavigate();

  const handlePagar = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:8080/api/boletas/generar?clienteId=${clienteId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(carrito)
        }
      );

      if (!response.ok) throw new Error("Error al generar boleta");

      const boleta = await response.json();
      navigate(`/boleta/${boleta.id}`);
    } catch (error) {
      console.error(error);
      alert("No se pudo procesar el pago");
    }
  };

  return (
    <button className="btn-carrito" onClick={handlePagar}>
      Finalizar compra 🛒
    </button>
  );
};

export default BotonPagar;
