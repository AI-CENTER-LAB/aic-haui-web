import { describe, expect, it } from "vitest";

import { resolveSectionState } from "./selectors";

describe("resolveSectionState", () => {
  it("marks populated collections ready", () => {
    expect(resolveSectionState(["content"], "production")).toBe("ready");
  });

  it("hides missing content in production", () => {
    expect(resolveSectionState([], "production")).toBe("hidden");
  });

  it("exposes missing content for layout QA in development", () => {
    expect(resolveSectionState([], "development")).toBe("empty");
  });

  it("respects an explicit hidden state", () => {
    expect(resolveSectionState(["content"], "development", "hidden")).toBe("hidden");
  });
});
