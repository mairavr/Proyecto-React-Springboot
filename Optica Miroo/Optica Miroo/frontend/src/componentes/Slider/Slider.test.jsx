import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import Slider from "./Slider";

describe("Slider component", () => {
  beforeEach(() => {
    
    vi.useFakeTimers();
  });

  afterEach(() => {
 
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("renderiza las 4 imágenes", () => {
    const { container } = render(<Slider />);
    const imgs = container.querySelectorAll("img");
    expect(imgs.length).toBe(4);
  });

  it("botón next avanza al siguiente slide (translateX -100%)", () => {
    const { container } = render(<Slider />);
    const nextBtn = screen.getByRole("button", { name: ">" });
    const list = container.querySelector(".list");

   
    expect(list.style.transform).toBe("translateX(-0%)");

    fireEvent.click(nextBtn);


    expect(list.style.transform).toBe("translateX(-100%)");
  });

  it("botón prev retrocede al último slide desde 0 (translateX -300%)", () => {
    const { container } = render(<Slider />);
    const prevBtn = screen.getByRole("button", { name: "<" });
    const list = container.querySelector(".list");

    fireEvent.click(prevBtn);

    expect(list.style.transform).toBe("translateX(-300%)");
  });

  it("clic en un dot cambia al slide correcto", () => {
    const { container } = render(<Slider />);
    const dots = container.querySelectorAll(".dots li");
    const list = container.querySelector(".list");


    fireEvent.click(dots[2]);
    expect(list.style.transform).toBe("translateX(-200%)");

    
    fireEvent.click(dots[0]);
    expect(list.style.transform).toBe("translateX(-0%)");
  });

  it("avanza automáticamente con el intervalo (5000ms)", () => {
    const { container } = render(<Slider />);
    const list = container.querySelector(".list");

   
    expect(list.style.transform).toBe("translateX(-0%)");

  
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(list.style.transform).toBe("translateX(-100%)");

    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(list.style.transform).toBe("translateX(-200%)");
  });
});
