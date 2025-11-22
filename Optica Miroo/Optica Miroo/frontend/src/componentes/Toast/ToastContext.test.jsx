import React, { useContext } from "react";
import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ToastProvider, ToastContext } from "./ToastContext";


const TestComponent = () => {
  const { lanzarToast } = useContext(ToastContext);

  return (
    <button onClick={() => lanzarToast("Toast de prueba", "success")}>
      Lanzar Toast
    </button>
  );
};

describe("ToastContext / ToastProvider", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("renderiza correctamente los children", () => {
    render(
      <ToastProvider>
        <div data-testid="child">Contenido</div>
      </ToastProvider>
    );

    expect(screen.getByTestId("child")).toBeTruthy();
    expect(screen.getByText("Contenido")).toBeTruthy();
  });

  it("agrega un toast al llamar lanzarToast", () => {
    const { container } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    const btn = screen.getByText("Lanzar Toast");

    act(() => {
      btn.click();
    });

    const toastDivs = container.querySelectorAll(".toast");
    expect(toastDivs.length).toBe(1);
    expect(toastDivs[0].textContent).toBe("Toast de prueba");
    expect(toastDivs[0].classList.contains("success")).toBe(true);
  });

  it("el toast desaparece automáticamente después de 3 segundos", () => {
    const { container } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    const btn = screen.getByText("Lanzar Toast");

    act(() => {
      btn.click();
    });

    let toastDivs = container.querySelectorAll(".toast");
    expect(toastDivs.length).toBe(1);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    toastDivs = container.querySelectorAll(".toast");
    expect(toastDivs.length).toBe(0);
  });
});
