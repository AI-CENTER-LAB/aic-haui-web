import type { RuntimeMode, SectionState } from "./types";

export function resolveSectionState<T>(
  items: readonly T[],
  mode: RuntimeMode,
  requestedState?: SectionState,
): SectionState {
  if (requestedState === "hidden") return "hidden";
  if (items.length > 0) return "ready";
  return mode === "development" ? "empty" : "hidden";
}

export const runtimeMode: RuntimeMode = import.meta.env.DEV ? "development" : "production";
