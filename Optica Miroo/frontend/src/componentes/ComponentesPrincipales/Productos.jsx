import React, { useState, useEffect } from "react";
import {
  listarProductos,
  eliminarProducto,
  desactivarProducto,
} from "../services/productoService";
import CrearProducto from "./CrearProducto";
import EditarProducto from "./EditarProducto";

const Producto = () => {
  const [productos, setProductos] = useState([]);
  const [showCrear, setShowCrear] = useState(false);
  const [showEditar, setShowEditar] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [categorias, setCategorias] = useState([]); // Placeholder, necesitarás un servicio para esto

  useEffect(() => {
    listarProductos()
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al listar productos:", error.message));
  }, []);

  const handleEliminar = (id) => {
    if (window.confirm("¿Eliminar producto permanentemente?")) {
      eliminarProducto(id)
        .then(() => setProductos(productos.filter((p) => p.id !== id)))
        .catch((error) => console.error("Error al eliminar:", error.message));
    }
  };

  const handleDesactivar = (id) => {
    if (window.confirm("¿Desactivar producto?")) {
      desactivarProducto(id)
        .then(() => {
          setProductos(
            productos.map((p) =>
              p.id === id ? { ...p, activo: false } : p
            )
          );
        })
        .catch((error) => console.error("Error al desactivar:", error.message));
    }
  };

  const handleProductoCreado = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
    setShowCrear(false);
  };

  const handleProductoEditado = (productoEditado) => {
    setProductos(
      productos.map((p) =>
        p.id === productoEditado.id ? productoEditado : p
      )
    );
    setShowEditar(false);
    setProductoSeleccionado(null);
  };


  useEffect(() => {
    
    const categoriasMock = [{ id: 1, nombre: "Lentes" }, { id: 2, nombre: "Accesorios" }];
    setCategorias(categoriasMock);
  }, []);

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <button onClick={() => setShowCrear(true)}>Nuevo Producto</button>

      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio} -{" "}
            {producto.activo ? "Activo" : "Desactivado"} -{" "}
            {producto.categoria?.nombre || "Sin categoría"}
            <button
              onClick={() => {
                setProductoSeleccionado(producto);
                setShowEditar(true);
              }}
              style={{ marginLeft: "10px" }}
            >
              Editar
            </button>
            <button
              onClick={() => handleEliminar(producto.id)}
              style={{ marginLeft: "10px" }}
            >
              Eliminar
            </button>
            {producto.activo && (
              <button
                onClick={() => handleDesactivar(producto.id)}
                style={{ marginLeft: "10px" }}
              >
                Desactivar
              </button>
            )}
          </li>
        ))}
      </ul>

      {showCrear && (
        <CrearProducto
          onClose={() => setShowCrear(false)}
          onProductoCreado={handleProductoCreado}
          categorias={categorias}
        />
      )}
      {showEditar && productoSeleccionado && (
        <EditarProducto
          productoEditando={productoSeleccionado}
          onClose={() => {
            setShowEditar(false);
            setProductoSeleccionado(null);
          }}
          onProductoEditado={handleProductoEditado}
          categorias={categorias}
        />
      )}
    </div>
  );
};

export default Producto;