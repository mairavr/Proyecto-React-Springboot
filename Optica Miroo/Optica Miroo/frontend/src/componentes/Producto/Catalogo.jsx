import React from "react";
import ProductoCard from "./ProductoCard";

const Catalogo = ({ productos, onProductoClick, onAgregarCarrito }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "16px",
        justifyItems: "center",
      }}
    >
      {productos.map((p) => (
        <ProductoCard
          key={p.id}
          producto={p}
          onClick={onProductoClick}
          onAgregarCarrito={onAgregarCarrito}
        />
      ))}
    </div>
  );
};

export default Catalogo;



