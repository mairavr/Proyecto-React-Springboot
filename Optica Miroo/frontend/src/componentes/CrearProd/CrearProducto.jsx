import React, { useState } from "react";
import { crearProducto } from "../services/productoService";

const CrearProducto = ({ onClose, onProductoCreado, categorias }) => {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    activo: true,
    categoria: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevoProducto = await crearProducto(producto);
      onProductoCreado(nuevoProducto); // Actualiza la lista en el componente padre
      onClose(); // Cierra el formulario
    } catch (error) {
      console.error("Error al crear producto:", error.message);
    }
  };

  return (
    <div>
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={producto.nombre || ""}
          onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          value={producto.descripcion || ""}
          onChange={(e) =>
            setProducto({ ...producto, descripcion: e.target.value })
          }
          placeholder="Descripción"
        />
        <input
          type="number"
          value={producto.precio || 0}
          onChange={(e) =>
            setProducto({ ...producto, precio: Number(e.target.value) })
          }
          placeholder="Precio"
          required
        />
        <select
          value={producto.categoria?.id || ""}
          onChange={(e) =>
            setProducto({
              ...producto,
              categoria: categorias.find((c) => c.id === Number(e.target.value)) || null,
            })
          }
        >
          <option value="">Selecciona una categoría</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nombre}
            </option>
          ))}
        </select>
        <button type="submit">Crear</button>
        <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default CrearProducto;