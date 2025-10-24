import React, { useState, useEffect } from "react";
import { actualizarProducto } from "../services/productoService";

const EditarProducto = ({ productoEditando, onClose, onProductoEditado, categorias }) => {
  const [producto, setProducto] = useState(productoEditando || {
    nombre: "",
    descripcion: "",
    precio: 0,
    activo: true,
    categoria: null,
  });

  useEffect(() => {
    if (productoEditando) {
      setProducto(productoEditando);
    }
  }, [productoEditando]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productoActualizado = await actualizarProducto(productoEditando.id, producto);
      onProductoEditado(productoActualizado); // Actualiza la lista en el componente padre
      onClose(); // Cierra el formulario
    } catch (error) {
      console.error("Error al actualizar producto:", error.message);
    }
  };

  return (
    <div>
      <h2>Editar Producto</h2>
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
        <button type="submit">Actualizar</button>
        <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EditarProducto;