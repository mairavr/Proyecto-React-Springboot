import React, { useState, useContext } from "react";
import { EstadoCarrito } from "../../componentes/Carrito/EstadoCarrito";
import { crearVenta } from "../../services/ventasService";
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

  const [mostrarModal, setMostrarModal] = useState(false);

  const formatoCLP = (valor) =>
    new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(valor);

  const calcularTotal = () =>
    productosCarrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

  const vaciarCarrito = () => {
    productosCarrito.forEach((p) => eliminarDelCarrito(p.id));
  };

  const finalizarCompra = async () => {
    try {
    
      const ultimoId = parseInt(localStorage.getItem("ultimoClienteId")) || 1;

      const venta = {
        fecha: new Date().toISOString(),
        total: calcularTotal(),
        cliente_id: ultimoId
      };

      await crearVenta(venta);

      localStorage.setItem("ultimoClienteId", (ultimoId + 1).toString());

      setMostrarModal(true);
      vaciarCarrito();
    } catch (error) {
      console.error("Error al registrar la venta:", error);
      alert("No se pudo registrar la venta");
    }
  };

  const cerrarModal = () => {
    setMostrarModal(false);
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
      </div>

      <div className="total">Total: {formatoCLP(calcularTotal())}</div>

      <button className="btn-carrito" onClick={finalizarCompra}>
        Finalizar compra
      </button>

      {mostrarModal && (
        <div id="modal-exito" className="modal">
          <div className="modal-contenido">
            <span className="modal-cerrar" onClick={cerrarModal}>×</span>
            <h2>✅ ¡Compra realizada con éxito!</h2>
            <p>Gracias por tu compra. Recibirás un correo con los detalles.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;




