import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EstadoCarrito } from "../../componentes/Carrito/EstadoCarrito.jsx";
import "../../assets/css/estilo.css";
import "../../assets/css/estilo1.css";

function MiniCarrito({ onCerrar }) {
  const { productosCarrito, eliminarDelCarrito } = useContext(EstadoCarrito);
  const navigate = useNavigate();

  const irAlCarrito = () => {
    onCerrar();
    navigate("/carrito");
  };

  return (
    <div className="modal">
      <div className="modal-contenido">
        <span className="modal-cerrar" onClick={onCerrar}>×</span>
        <h3>🛍️ Resumen del Carrito</h3>
        {productosCarrito.length === 0 && <p>Carrito vacío</p>}
        <div id="resumen-carrito">
          {productosCarrito.map((p) => (
            <div
              key={p.id}
              className="producto-carrito"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "12px"
              }}
            >
              <img
                src={`/img/${p.imagen || "placeholder.jpg"}`}
                alt={p.nombre}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "6px",
                  marginRight: "12px"
                }}
              />
              <div style={{ flexGrow: 1 }}>
                <span style={{ fontWeight: "bold" }}>{p.nombre}</span><br />
                <span>${p.precio}</span>
              </div>
              <button onClick={() => eliminarDelCarrito(p.id)} style={{ marginLeft: "12px" }}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
        <button className="btn-carrito" onClick={irAlCarrito}>
          Ver carrito completo
        </button>
      </div>
    </div>
  );
}

export default MiniCarrito;




