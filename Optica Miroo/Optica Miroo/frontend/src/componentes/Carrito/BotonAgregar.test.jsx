import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import BotonAgregar from "./BotonAgregar";

describe("BotonAgregar", () => {
  it("renderiza con el texto por defecto", () => {
    render(<BotonAgregar />);
    expect(screen.getByText("Agregar")).toBeInTheDocument();
  });

  it("renderiza con texto personalizado", () => {
    render(<BotonAgregar texto="Añadir" />);
    expect(screen.getByText("Añadir")).toBeInTheDocument();
  });

  it("ejecuta la función onClick al hacer clic", () => {
    const handleClick = vi.fn();
    render(<BotonAgregar onClick={handleClick} />);
    fireEvent.click(screen.getByText("Agregar"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
