import React from "react";

const ProductoCard = ({ producto, onAgregarCarrito, onClick }) => {
  const imagenSrc = producto.imagen ? `/img/${producto.imagen}` : '/img/placeholder.jpg';

  return (
    <div
      className="producto border rounded p-4 shadow hover:shadow-lg transition flex flex-col"
      style={{
        width: "100%",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={imagenSrc}
        alt={producto.nombre}
        style={{
          cursor: "pointer",
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "12px"
        }}
        onClick={() => onClick(producto)}
      />
      <div style={{ flexGrow: 1 }}>
        <h2 className="font-bold text-lg mb-2">{producto.nombre}</h2>
        <p className="text-sm text-gray-600 mb-1">
          Categoría: {producto.categoria?.nombre || "General"}
        </p>
        <p className="mb-1">Precio: ${producto.precio.toLocaleString("es-CL")}</p>
      </div>
      <button
        className="btn-carrito"
        style={{ marginTop: "12px" }}
        onClick={() => onAgregarCarrito(producto)}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductoCard;
