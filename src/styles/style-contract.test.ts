import { describe, expect, it } from "vitest";

import indexSource from "../../index.html?raw";
import eslintConfig from "../../eslint.config.js?raw";
import mainSource from "../main.tsx?raw";
import dynamicHeroSource from "../components/sections/DynamicHero.tsx?raw";
import globalsCss from "./globals.css?raw";
import tokensCss from "./tokens.css?raw";
import tailwindConfig from "../../tailwind.config.ts?raw";

describe("runtime style contract", () => {
  it("uses linear technical treatments instead of radial or pseudo-element orbs", () => {
    const visualSources = [globalsCss, tailwindConfig, dynamicHeroSource].join("\n");

    expect(visualSources).not.toMatch(/radial-gradient/i);
    expect(globalsCss).not.toMatch(/\.hero-visual::(?:before|after)/);
    expect(globalsCss).not.toContain("hero-drift");
    expect(globalsCss).toMatch(/\.prototype-media-slot\s*\{[^}]*linear-gradient/s);
    expect(globalsCss).toMatch(/\.hero-scrim\s*\{[^}]*linear-gradient/s);
  });

  it("keeps semantic media slots static and disables named motion surfaces", () => {
    expect(globalsCss).toMatch(
      /@media \(prefers-reduced-motion: reduce\)[\s\S]*\.route-transition,[\s\S]*\.hero-grid,[\s\S]*\.partner-track\s*\{[^}]*animation:\s*none\s*!important/s,
    );
    expect(globalsCss).toMatch(/\.prototype-media-slot\s*\{[^}]*background-size:/s);
    expect(globalsCss).not.toMatch(/\.prototype-media-slot\s*\{[^}]*animation:/s);
  });

  it("preserves the approved responsive, focus, font, and radius tokens", () => {
    expect(globalsCss).toMatch(/body\s*\{[^}]*min-width:\s*320px[^}]*overflow-x:\s*hidden/s);
    expect(globalsCss).toMatch(/:focus-visible\s*\{[^}]*outline:/s);
    expect(globalsCss).toContain('font-family: "Be Vietnam Pro", "Inter", system-ui, sans-serif');
    expect(tokensCss).toContain("--aic-warm: #fffaf0");
    expect(tailwindConfig).toContain(
      'borderRadius: { card: "22px", media: "24px", video: "28px", hero: "32px" }',
    );
  });

  it("loads the Vietnamese primary font locally without Google Fonts network dependencies", () => {
    expect(indexSource).not.toContain("fonts.googleapis.com");
    expect(indexSource).not.toContain("fonts.gstatic.com");
    expect(indexSource).not.toMatch(/rel=["']preconnect["']/i);

    for (const weight of [400, 500, 600, 700, 800]) {
      expect(mainSource).toContain(`import "@fontsource/be-vietnam-pro/vietnamese-${weight}.css"`);
    }
  });

  it("keeps generated screenshot evidence outside lint without excluding source or docs", () => {
    expect(eslintConfig).toContain('"screenshots*/**"');
    expect(eslintConfig).not.toMatch(/ignores:\s*\[[^\]]*["'](?:src|docs)(?:\/\*\*)?["']/s);
  });
});
