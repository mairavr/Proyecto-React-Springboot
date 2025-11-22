import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BotonAgregarCarrito from "./BotonAgregarCarrito";

describe("BotonAgregarCarrito", () => {
  it("renderiza el botón correctamente", () => {
    render(<BotonAgregarCarrito onClick={() => {}} />);

    expect(screen.getByText("Agregar al carrito")).toBeInTheDocument();
  });

  it("ejecuta la función onClick al hacer click", () => {
    const mockFn = vi.fn();
    render(<BotonAgregarCarrito onClick={mockFn} />);

    fireEvent.click(screen.getByText("Agregar al carrito"));

    expect(mockFn).toHaveBeenCalled();
  });
});
