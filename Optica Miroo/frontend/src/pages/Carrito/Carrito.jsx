import React from "react";

const Carrito = () => {
  const carrito = [
    { id: 1, nombre: "Producto 1", cantidad: 2, precio: 10000 },
    { id: 2, nombre: "Producto 2", cantidad: 1, precio: 15000 },
  ];

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Tu Carrito</h1>
      {carrito.map((item) => (
        <div key={item.id} className="flex justify-between border-b py-2">
          <span>{item.nombre} (x{item.cantidad})</span>
          <span>${item.precio * item.cantidad}</span>
        </div>
      ))}
      <h2 className="text-xl font-bold mt-4">Total: ${total}</h2>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Finalizar compra
      </button>
    </div>
  );
};

export default Carrito;
