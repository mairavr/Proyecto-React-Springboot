import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import BotonEnviar from "./BotonEnviar";

describe("BotonEnviar", () => {
  it("renderiza con el texto por defecto 'Enviar'", () => {
    render(<BotonEnviar />);
    expect(screen.getByText("Enviar")).toBeInTheDocument();
  });

  it("renderiza con texto personalizado", () => {
    render(<BotonEnviar texto="Mandar" />);
    expect(screen.getByText("Mandar")).toBeInTheDocument();
  });

  it("ejecuta la función onClick al hacer clic", async () => {
    const handleClick = vi.fn();
    render(<BotonEnviar onClick={handleClick} />);
    await userEvent.click(screen.getByText("Enviar"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("tiene el atributo type='submit'", () => {
    render(<BotonEnviar />);
    const button = screen.getByText("Enviar");
    expect(button).toHaveAttribute("type", "submit");
  });
});
