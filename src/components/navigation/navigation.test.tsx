import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

describe("navigation", () => {
  it("marks the current desktop route as a pill", () => {
    render(<DesktopNav />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={["/nghien-cuu"]}>{children}</MemoryRouter>
      ),
    });
    expect(screen.getByRole("link", { name: "Nghiên cứu" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("closes the mobile menu with Escape", async () => {
    const user = userEvent.setup();
    render(<MobileNav />, { wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter> });
    await user.click(screen.getByRole("button", { name: "Mở menu" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
