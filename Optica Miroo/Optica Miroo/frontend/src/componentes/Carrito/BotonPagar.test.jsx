import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import BotonPagar from "./BotonPagar";

describe("BotonPagar", () => {
  it("renderiza con el texto 'Pagar Ahora'", () => {
    render(<BotonPagar />);
    expect(screen.getByText("Pagar Ahora")).toBeInTheDocument();
  });

  it("ejecuta la función onClick al hacer clic", () => {
    const handleClick = vi.fn();
    render(<BotonPagar onClick={handleClick} />);
    fireEvent.click(screen.getByText("Pagar Ahora"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
