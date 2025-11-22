import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import React, { useContext } from "react";
import { EstadoCarrito, EstadoCarritoProvider } from "./EstadoCarrito";

const TestComponent = () => {
  const {
    productosCarrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    incrementarCantidad,
    disminuirCantidad,
  } = useContext(EstadoCarrito);

  return (
    <div>
      <button onClick={() => agregarAlCarrito({ id: 1, nombre: "Producto A" })}>
        Agregar
      </button>
      <button onClick={() => eliminarDelCarrito(1)}>Eliminar</button>
      <button onClick={() => incrementarCantidad(1)}>Incrementar</button>
      <button onClick={() => disminuirCantidad(1)}>Disminuir</button>
      <span data-testid="carrito">{JSON.stringify(productosCarrito)}</span>
    </div>
  );
};

describe("EstadoCarritoProvider", () => {
  it("agrega un producto al carrito", async () => {
    render(
      <EstadoCarritoProvider>
        <TestComponent />
      </EstadoCarritoProvider>
    );

    await userEvent.click(screen.getByText("Agregar"));
    expect(screen.getByTestId("carrito").textContent).toContain("Producto A");
  });

  it("incrementa la cantidad de un producto existente", async () => {
    render(
      <EstadoCarritoProvider>
        <TestComponent />
      </EstadoCarritoProvider>
    );

    await userEvent.click(screen.getByText("Agregar"));
    await userEvent.click(screen.getByText("Incrementar"));

    expect(screen.getByTestId("carrito").textContent).toContain('"cantidad":2');
  });

  it("disminuye la cantidad de un producto si es mayor a 1", async () => {
    render(
      <EstadoCarritoProvider>
        <TestComponent />
      </EstadoCarritoProvider>
    );

    await userEvent.click(screen.getByText("Agregar"));
    await userEvent.click(screen.getByText("Incrementar"));
    await userEvent.click(screen.getByText("Disminuir"));  

    expect(screen.getByTestId("carrito").textContent).toContain('"cantidad":1');
  });

  it("elimina un producto del carrito", async () => {
    render(
      <EstadoCarritoProvider>
        <TestComponent />
      </EstadoCarritoProvider>
    );

    await userEvent.click(screen.getByText("Agregar"));
    await userEvent.click(screen.getByText("Eliminar"));

    expect(screen.getByTestId("carrito").textContent).not.toContain("Producto A");
  });
});
