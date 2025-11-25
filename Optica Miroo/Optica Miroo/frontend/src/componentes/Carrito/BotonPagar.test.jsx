import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BotonPagar from "./BotonPagar";


const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom"); 
  return {
    ...actual,
    useNavigate: () => mockNavigate, 
  };
});


global.fetch = vi.fn();

describe("BotonPagar", () => {
  beforeEach(() => {
    vi.clearAllMocks(); 
  });

  it("llama al endpoint y navega correctamente", async () => {
    const carritoMock = [
      { productoId: 1, nombreProducto: "Ray-Ban", cantidad: 1, precioUnitario: 79990 },
    ];
    const boletaMock = { id: 55 };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => boletaMock,
    });

    const { MemoryRouter } = await import("react-router-dom"); 

    render(
      <MemoryRouter>
        <BotonPagar clienteId={1} carrito={carritoMock} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("PAGAR"));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        "http://localhost:8080/api/boletas/generar?clienteId=1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(carritoMock),
        }
      );
      expect(mockNavigate).toHaveBeenCalledWith("/boleta/55");
    });
  });

  it("muestra alerta si ocurre un error al generar la boleta", async () => {
    // Mock de fetch con error
    fetch.mockResolvedValueOnce({ ok: false });

    const mockAlert = vi.spyOn(window, "alert").mockImplementation(() => {});

    const { MemoryRouter } = await import("react-router-dom");

    render(
      <MemoryRouter>
        <BotonPagar clienteId={2} carrito={[]} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("PAGAR"));

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith("No se pudo procesar el pago");
    });

    mockAlert.mockRestore();
  });
});
