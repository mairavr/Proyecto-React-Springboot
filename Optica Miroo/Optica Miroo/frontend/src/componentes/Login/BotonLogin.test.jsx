import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BotonLogin from "./BotonLogin";

describe("BotonLogin", () => {
  it("renderiza con el texto por defecto 'Iniciar Sesión'", () => {
    render(<BotonLogin />);
    expect(screen.getByText("Iniciar Sesión")).toBeInTheDocument();
  });

  it("renderiza con texto personalizado", () => {
    render(<BotonLogin texto="Entrar" />);
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });

  it("tiene el atributo type='submit'", () => {
    render(<BotonLogin />);
    const button = screen.getByText("Iniciar Sesión");
    expect(button).toHaveAttribute("type", "submit");
  });

  it("tiene las clases de estilo esperadas", () => {
    render(<BotonLogin />);
    const button = screen.getByText("Iniciar Sesión");
    expect(button).toHaveClass("w-full", "py-2", "rounded", "text-white", "hover:bg-[#FFB566]", "transition-colors");
  });

  it("aplica el estilo inline de backgroundColor", () => {
    render(<BotonLogin />);
    const button = screen.getByText("Iniciar Sesión");
    expect(button).toHaveStyle({ backgroundColor: "#FFA07A" });
  });
});
