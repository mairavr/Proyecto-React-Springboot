import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("renderiza el nombre de la óptica", () => {
    render(<Footer />);
    expect(screen.getByText("Óptica Miroo")).toBeInTheDocument();
  });

  it("muestra el año 2025", () => {
    render(<Footer />);
    expect(screen.getByText(/2025/)).toBeInTheDocument();
  });

  it("muestra el Instagram", () => {
    render(<Footer />);
    expect(screen.getByText(/@opticamiroo/)).toBeInTheDocument();
  });

  it("muestra el teléfono", () => {
    render(<Footer />);
    expect(screen.getByText(/\+56 9 1234 5678/)).toBeInTheDocument();
  });

  it("muestra el email", () => {
    render(<Footer />);
    expect(screen.getByText(/contacto@opticamiroo.cl/)).toBeInTheDocument();
  });

  it("tiene la clase 'footer-optica'", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("footer-optica");
  });
});
