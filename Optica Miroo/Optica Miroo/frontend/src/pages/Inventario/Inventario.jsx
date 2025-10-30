import React, { useEffect, useState } from "react";
import { listarProductos } from "../services/productosService";
import "../../assets/css/estilo.css";
import "../../assets/css/estilo1.css";

const Inventario = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await listarProductos();
        setProductos(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProductos();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Inventario de Productos</h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {productos.length === 0 && !error && (
        <p className="text-gray-600 text-center">No hay productos en el inventario.</p>
      )}

      {productos.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Nombre</th>
                <th className="border px-4 py-2 text-left">Categoría</th>
                <th className="border px-4 py-2 text-center">Stock</th>
                <th className="border px-4 py-2 text-right">Precio</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{p.nombre}</td>
                  <td className="border px-4 py-2">{p.categoria?.nombre || "Sin categoría"}</td>
                  <td className="border px-4 py-2 text-center">{p.stock}</td>
                  <td className="border px-4 py-2 text-right">${p.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Inventario;
