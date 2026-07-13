import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

vi.mock("../content/site", async () => {
  const { emptySiteContent } = await import("../content/empty");
  return { siteContent: emptySiteContent };
});

import { ContactPage } from "./ContactPage";

describe("ContactPage", () => {
  it("does not render an empty content section in production", () => {
    const { container } = render(<ContactPage />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    });

    expect(container.querySelector("section")).not.toBeInTheDocument();
  });

  it("renders three neutral contact shells and a semantic map slot in scaffold mode", () => {
    const { container } = render(<ContactPage scaffoldMode />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    });

    const band = screen.getByTestId("contact-band");
    const shells = screen.getByTestId("contact-cards-scaffold");

    expect(band).toHaveClass("md:grid-cols-[.75fr_1.5fr]");
    expect(band.className).not.toContain("sm:grid-cols");
    expect(shells.children).toHaveLength(3);
    expect(screen.getByTestId("media-slot-contact.map")).toBeInTheDocument();
    expect(container.querySelector("iframe")).not.toBeInTheDocument();
    expect(screen.queryByText(/đang cập nhật/i)).not.toBeInTheDocument();
  });
});
