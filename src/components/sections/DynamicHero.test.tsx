import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";

import { DynamicHero } from "./DynamicHero";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("DynamicHero background media", () => {
  it("keeps a background video decorative and disables autoplay for reduced motion", () => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({
        matches: true,
        media: "(prefers-reduced-motion: reduce)",
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    );

    const { container } = render(
      <DynamicHero
        content={{
          title: "Hero test",
          media: {
            type: "video",
            src: "/media/hero.mp4",
            poster: "/media/hero.jpg",
            alt: "Decorative laboratory scene",
          },
        }}
      />,
      { wrapper: MemoryRouter },
    );
    const video = container.querySelector("video");

    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute("aria-hidden", "true");
    expect(video).not.toHaveAttribute("aria-label");
    expect(video).toHaveAttribute("preload", "metadata");
    expect(video).not.toHaveAttribute("autoplay");
  });
});
