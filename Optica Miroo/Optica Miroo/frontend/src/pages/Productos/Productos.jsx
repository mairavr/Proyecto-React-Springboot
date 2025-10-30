import React, { useEffect, useState, useContext } from "react";
import { listarProductos } from "../../services/productosService";

import Catalogo from "../../componentes/Producto/Catalogo.jsx";
import ModalProducto from "../../componentes/Producto/ModalProducto.jsx";
import { EstadoCarrito } from "../../componentes/Carrito/EstadoCarrito.jsx";

import "../../assets/css/estilo.css";
import "../../assets/css/estilo1.css";
import "../../assets/css/toast.css";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [toast, setToast] = useState(null);
  const { agregarAlCarrito } = useContext(EstadoCarrito);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await listarProductos();
        setProductos(data);
      } catch (err) {
        console.error(err);
        mostrarToast("Error cargando productos", "error");
      }
    };
    fetchProductos();
  }, []);

  const mostrarToast = (mensaje, tipo = "success") => {
    setToast({ mensaje, tipo });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAgregarCarrito = (p) => {
    agregarAlCarrito({
      id: p.id,
      nombre: p.nombre,
      precio: p.precio,
      cantidad: 1,
      imagen: p.imagen
    });
    mostrarToast(`🛒 ${p.nombre} añadido al carrito`);
  };

  return (
    <div id="productos">
      <h1 className="titulo">ÓPTICA MIROO</h1>
      <h2 className="titulo-bloque" style={{ color: "rgb(233,79,24)" }}>
        TRANSFORMA TU MIRADA CON ESTILO
      </h2>

      <Catalogo
        productos={productos}
        onProductoClick={setProductoSeleccionado}
        onAgregarCarrito={handleAgregarCarrito}
      />

      {productoSeleccionado && (
        <ModalProducto
          producto={productoSeleccionado}
          onCerrar={() => setProductoSeleccionado(null)}
        />
      )}

      {toast && <div className={`toast ${toast.tipo}`}>{toast.mensaje}</div>}
    </div>
  );
};

export default Productos;
