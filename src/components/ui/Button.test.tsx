import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "./Button";

describe("Button links", () => {
  it("renders mail links without requiring a router", () => {
    render(<Button href="mailto:verified@example.edu">Gửi email</Button>);
    expect(screen.getByRole("link", { name: "Gửi email" })).toHaveAttribute(
      "href",
      "mailto:verified@example.edu",
    );
  });
});
