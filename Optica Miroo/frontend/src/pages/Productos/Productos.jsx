import React from "react";

const Productos = () => {
  const productos = [
    { id: 1, nombre: "Producto 1", precio: "$10.000" },
    { id: 2, nombre: "Producto 2", precio: "$15.000" },
    { id: 3, nombre: "Producto 3", precio: "$8.000" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productos.map((p) => (
          <div key={p.id} className="border p-4 rounded-lg shadow hover:shadow-lg">
            <h2 className="font-bold">{p.nombre}</h2>
            <p className="text-gray-600">{p.precio}</p>
            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
