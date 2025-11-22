import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import React from "react";
import MiniCarrito from "./MiniCarrito";
import { EstadoCarrito } from "../../componentes/Carrito/EstadoCarrito.jsx";

const navigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => navigate,
}));

describe("MiniCarrito", () => {
  it("muestra 'Carrito vacío' cuando no hay productos", () => {
    render(
      <EstadoCarrito.Provider value={{ productosCarrito: [], eliminarDelCarrito: vi.fn() }}>
        <MiniCarrito onCerrar={vi.fn()} />
      </EstadoCarrito.Provider>
    );

    expect(screen.getByText("Carrito vacío")).toBeInTheDocument();
  });

  it("renderiza productos en el carrito", () => {
    const productos = [
      { id: 1, nombre: "Producto A", precio: 1000, imagen: "a.jpg" },
      { id: 2, nombre: "Producto B", precio: 2000 },
    ];

    render(
      <EstadoCarrito.Provider value={{ productosCarrito: productos, eliminarDelCarrito: vi.fn() }}>
        <MiniCarrito onCerrar={vi.fn()} />
      </EstadoCarrito.Provider>
    );

    expect(screen.getByText("Producto A")).toBeInTheDocument();
    expect(screen.getByText("Producto B")).toBeInTheDocument();
    expect(screen.getByText("$1000")).toBeInTheDocument();
    expect(screen.getByText("$2000")).toBeInTheDocument();
  });

  it("llama a eliminarDelCarrito al hacer clic en 'Eliminar'", async () => {
    const eliminarDelCarrito = vi.fn();
    const productos = [{ id: 1, nombre: "Producto A", precio: 1000 }];

    render(
      <EstadoCarrito.Provider value={{ productosCarrito: productos, eliminarDelCarrito }}>
        <MiniCarrito onCerrar={vi.fn()} />
      </EstadoCarrito.Provider>
    );

    await userEvent.click(screen.getByText("Eliminar"));
    expect(eliminarDelCarrito).toHaveBeenCalledWith(1);
  });

  it("llama a onCerrar y navega al carrito al hacer clic en 'Ver carrito completo'", async () => {
    const onCerrar = vi.fn();

    render(
      <EstadoCarrito.Provider value={{ productosCarrito: [], eliminarDelCarrito: vi.fn() }}>
        <MiniCarrito onCerrar={onCerrar} />
      </EstadoCarrito.Provider>
    );

    await userEvent.click(screen.getByText("Ver carrito completo"));
    expect(onCerrar).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith("/carrito");
  });
});
