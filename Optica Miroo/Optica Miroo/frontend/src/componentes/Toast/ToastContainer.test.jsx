import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ToastContainer } from "./ToastContainer";

describe("ToastContainer", () => {
  it("renderiza el contenedor principal", () => {
    const { container } = render(<ToastContainer toasts={[]} />);
    const containerDiv = container.querySelector("#toast-container");
    expect(containerDiv).toBeTruthy(); 
  });

  it("muestra los toasts correctamente", () => {
    const toasts = [
      { id: 1, mensaje: "Éxito", tipo: "success" },
      { id: 2, mensaje: "Error", tipo: "error" },
    ];

    const { container } = render(<ToastContainer toasts={toasts} />);
    const toastDivs = container.querySelectorAll(".toast");

    expect(toastDivs.length).toBe(2);

   
    expect(toastDivs[0].textContent).toBe("Éxito");
    expect(toastDivs[0].classList.contains("success")).toBe(true);

    expect(toastDivs[1].textContent).toBe("Error");
    expect(toastDivs[1].classList.contains("error")).toBe(true);
  });

  it("no renderiza toasts si el array está vacío", () => {
    const { container } = render(<ToastContainer toasts={[]} />);
    const toastDivs = container.querySelectorAll(".toast");
    expect(toastDivs.length).toBe(0);
  });
});
