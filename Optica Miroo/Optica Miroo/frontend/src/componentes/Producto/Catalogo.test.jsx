import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Catalogo from "./Catalogo";

vi.mock("./ProductoCard", () => ({
  default: ({ producto }) => <div>{producto.nombre}</div>,
}));

describe("Catalogo", () => {
  const productos = [
    { id: 1, nombre: "Lente A" },
    { id: 2, nombre: "Lente B" },
  ];

  it("renderiza todos los productos", () => {
    render(
      <Catalogo
        productos={productos}
        onProductoClick={() => {}}
        onAgregarCarrito={() => {}}
      />
    );

    expect(screen.getByText("Lente A")).toBeInTheDocument();
    expect(screen.getByText("Lente B")).toBeInTheDocument();
  });
});
