import { render, screen, fireEvent } from "@testing-library/react";
import ProductoCard from "./ProductoCard";
import { describe, it, expect, vi } from "vitest";

describe("ProductoCard", () => {
  const productoMock = {
    id: 1,
    nombre: "Laptop Gamer",
    imagen: "laptop.jpg",
    precio: 999990,
    categoria: { nombre: "Tecnología" }
  };

  it("Debe mostrar el nombre, categoría, precio e imagen", () => {
    render(
      <ProductoCard
        producto={productoMock}
        onAgregarCarrito={() => {}}
        onClick={() => {}}
      />
    );

    expect(screen.getByText("Laptop Gamer")).toBeInTheDocument();
    expect(screen.getByText("Categoría: Tecnología")).toBeInTheDocument();
    expect(screen.getByText("Precio: $999.990")).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/img/laptop.jpg");
  });

  it("Debe usar imagen placeholder si el producto no trae imagen", () => {
    const productoSinImagen = {
      ...productoMock,
      imagen: null,
    };

    render(
      <ProductoCard
        producto={productoSinImagen}
        onAgregarCarrito={() => {}}
        onClick={() => {}}
      />
    );

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/img/placeholder.jpg");
  });

  it("Debe mostrar categoría 'General' si no existe categoría", () => {
    const productoSinCategoria = {
      ...productoMock,
      categoria: null,
    };

    render(
      <ProductoCard
        producto={productoSinCategoria}
        onAgregarCarrito={() => {}}
        onClick={() => {}}
      />
    );

    expect(screen.getByText("Categoría: General")).toBeInTheDocument();
  });

  it("Debe llamar a onClick(producto) al hacer click en la imagen", () => {
    const mockClick = vi.fn();

    render(
      <ProductoCard
        producto={productoMock}
        onAgregarCarrito={() => {}}
        onClick={mockClick}
      />
    );

    const img = screen.getByRole("img");
    fireEvent.click(img);

    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(mockClick).toHaveBeenCalledWith(productoMock);
  });

  it("Debe llamar a onAgregarCarrito(producto) al hacer click en el botón", () => {
    const mockAgregar = vi.fn();

    render(
      <ProductoCard
        producto={productoMock}
        onAgregarCarrito={mockAgregar}
        onClick={() => {}}
      />
    );

    const boton = screen.getByText("Añadir al carrito");
    fireEvent.click(boton);

    expect(mockAgregar).toHaveBeenCalledTimes(1);
    expect(mockAgregar).toHaveBeenCalledWith(productoMock);
  });
});
