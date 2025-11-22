import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { EstadoCarrito } from "../Carrito/EstadoCarrito";


function MockCarritoProvider({ children, productos }) {
  return (
    <EstadoCarrito.Provider value={{ productosCarrito: productos }}>
      {children}
    </EstadoCarrito.Provider>
  );
}

describe("Navbar Component", () => {
  it("muestra los enlaces del menú", () => {
    render(
      <BrowserRouter>
        <MockCarritoProvider productos={[]}>
          <Navbar abrirMiniCarrito={() => {}} />
        </MockCarritoProvider>
      </BrowserRouter>
    );

    expect(screen.getByText("INICIO 🏘️")).toBeInTheDocument();
    expect(screen.getByText("NOSOTROS 🧑‍💻")).toBeInTheDocument();
    expect(screen.getByText("PRODUCTOS 🛍️")).toBeInTheDocument();
    expect(screen.getByText("BLOG 📝")).toBeInTheDocument();
    expect(screen.getByText("CUENTA 👤")).toBeInTheDocument();
    expect(screen.getByText("CONTACTO ✉️")).toBeInTheDocument();
  });

  it("muestra la burbuja de cantidad si hay productos", () => {
    render(
      <BrowserRouter>
        <MockCarritoProvider productos={[{ id: 1 }]}>
          <Navbar abrirMiniCarrito={() => {}} />
        </MockCarritoProvider>
      </BrowserRouter>
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("NO muestra la burbuja si el carrito está vacío", () => {
    render(
      <BrowserRouter>
        <MockCarritoProvider productos={[]}>
          <Navbar abrirMiniCarrito={() => {}} />
        </MockCarritoProvider>
      </BrowserRouter>
    );

    const burbuja = screen.queryByText("1");
    expect(burbuja).not.toBeInTheDocument();
  });

  it("ejecuta abrirMiniCarrito al hacer click en CARRITO", () => {
    const mockFn = vi.fn();

    render(
      <BrowserRouter>
        <MockCarritoProvider productos={[]}>
          <Navbar abrirMiniCarrito={mockFn} />
        </MockCarritoProvider>
      </BrowserRouter>
    );

    const botonCarrito = screen.getByText("CARRITO 🛒");
    fireEvent.click(botonCarrito);

    expect(mockFn).toHaveBeenCalled();
  });
});
