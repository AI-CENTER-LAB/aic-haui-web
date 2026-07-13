import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { Header } from "./Header";

describe("Header", () => {
  it("uses the official AIC logo and corrected brand name", () => {
    const { container } = render(<Header />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={["/ve-chung-toi"]}>{children}</MemoryRouter>
      ),
    });

    expect(screen.getByRole("img", { name: "Logo AIC" })).toHaveAttribute(
      "src",
      "/media/official/aic-logo.jpg",
    );
    expect(screen.getByRole("link", { name: /AIC/ })).toHaveTextContent("AIC");
    expect(screen.queryByText("AIC Center")).not.toBeInTheDocument();
    expect(container.querySelector("header")).toHaveClass("bg-white");
  });

  it("overlays the home hero and becomes a solid fixed header after scrolling", () => {
    Object.defineProperty(window, "scrollY", { configurable: true, value: 0 });
    const { container } = render(<Header />, {
      wrapper: ({ children }) => <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>,
    });
    const header = container.querySelector("header");

    expect(header).toHaveClass("fixed");
    expect(header).toHaveClass("bg-transparent");

    Object.defineProperty(window, "scrollY", { configurable: true, value: 80 });
    fireEvent.scroll(window);
    expect(header).toHaveClass("bg-white");
  });
});
