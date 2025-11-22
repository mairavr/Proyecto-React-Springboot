import { render, screen, fireEvent } from "@testing-library/react";
import ModalProducto from "./ModalProducto";
import { describe, it, expect, vi } from "vitest";

describe("ModalProducto", () => {
  const productoMock = {
    id: 1,
    nombre: "Cámara Pro",
    precio: 199990,
    descripcion: "Cámara profesional de alta calidad",
    imagen: "camara.jpg",
  };

  it("NO debe renderizar nada si no se recibe producto", () => {
    const { container } = render(<ModalProducto producto={null} onCerrar={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  it("Debe mostrar el nombre, precio, descripción e imagen del producto", () => {
    render(<ModalProducto producto={productoMock} onCerrar={() => {}} />);

  
    expect(screen.getByText("Cámara Pro")).toBeInTheDocument();


    expect(screen.getByText("Cámara profesional de alta calidad")).toBeInTheDocument();

 
    expect(screen.getByText("Precio: $199.990")).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/img/camara.jpg");
  });

  it("Debe llamar a onCerrar cuando se hace click en la X", () => {
    const mockCerrar = vi.fn();

    render(<ModalProducto producto={productoMock} onCerrar={mockCerrar} />);

    const botonCerrar = screen.getByText("×");
    fireEvent.click(botonCerrar);

    expect(mockCerrar).toHaveBeenCalledTimes(1);
  });

  it("Debe usar la imagen placeholder si el producto no tiene imagen", () => {
    const productoSinImagen = {
      ...productoMock,
      imagen: null,
    };

    render(<ModalProducto producto={productoSinImagen} onCerrar={() => {}} />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/img/placeholder.jpg");
  });
});
