import React, { createContext, useState } from "react";

export const EstadoCarrito = createContext();

export const EstadoCarritoProvider = ({ children }) => {
  const [productosCarrito, setProductosCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setProductosCarrito((prev) => {
      const existente = prev.find((p) => p.id === producto.id);
      if (existente) {
        return prev.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + (producto.cantidad || 1) }
            : p
        );
      }
      return [...prev, { ...producto, cantidad: producto.cantidad || 1 }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setProductosCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const incrementarCantidad = (id) => {
    setProductosCarrito((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );
  };

  const disminuirCantidad = (id) => {
    setProductosCarrito((prev) =>
      prev.map((p) =>
        p.id === id && p.cantidad > 1
          ? { ...p, cantidad: p.cantidad - 1 }
          : p
      )
    );
  };

  return (
    <EstadoCarrito.Provider
      value={{
        productosCarrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        incrementarCantidad,
        disminuirCantidad
      }}
    >
      {children}
    </EstadoCarrito.Provider>
  );
};
