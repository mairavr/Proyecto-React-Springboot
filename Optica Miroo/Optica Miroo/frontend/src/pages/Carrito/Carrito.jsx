import React, { useContext } from "react";
import { EstadoCarrito } from "../../componentes/Carrito/EstadoCarrito";
import BotonPagar from "../../componentes/Carrito/BotonPagar"; // 👈 importamos tu botón
import "../../assets/css/estilo.css";
import "../../assets/css/estilo1.css";
import "../../assets/css/toast.css";

const Carrito = () => {
  const {
    productosCarrito,
    eliminarDelCarrito,
    incrementarCantidad,
    disminuirCantidad
  } = useContext(EstadoCarrito);

  const formatoCLP = (valor) =>
    new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(valor);

  const calcularTotal = () =>
    productosCarrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

  const vaciarCarrito = () => {
    productosCarrito.forEach((p) => eliminarDelCarrito(p.id));
  };

  return (
    <div className="carrito">
      <h1 style={{ color: "rgb(233, 79, 24)" }}>🛒 Carrito de Compras</h1>

      <table className="tabla-carrito">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productosCarrito.length === 0 ? (
            <tr>
              <td colSpan="5">Tu carrito está vacío.</td>
            </tr>
          ) : (
            productosCarrito.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{formatoCLP(item.precio)}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <button onClick={() => disminuirCantidad(item.id)}>➖</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => incrementarCantidad(item.id)}>➕</button>
                  </div>
                </td>
                <td>{formatoCLP(item.precio * item.cantidad)}</td>
                <td>
                  <button onClick={() => eliminarDelCarrito(item.id)}>❌</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="acciones-carrito">
        <button className="btn-carrito" onClick={vaciarCarrito}>
          🧹 Vaciar carrito
        </button>

        <BotonPagar
          clienteId={localStorage.getItem("ultimoClienteId") || 1}
          carrito={productosCarrito}
        />
      </div>

      <div className="total">Total: {formatoCLP(calcularTotal())}</div>
    </div>
  );
};

export default Carrito;
