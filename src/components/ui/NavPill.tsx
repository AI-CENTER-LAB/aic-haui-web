import type { MouseEvent, ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { cn } from "../../lib/cn";
import { scrollToSection } from "../../lib/scrollToSection";

export function NavPill({
  to,
  homeSection,
  children,
  onClick,
  tone = "light",
}: {
  to: string;
  homeSection?: string;
  children: ReactNode;
  onClick?: () => void;
  tone?: "light" | "dark";
}) {
  const { pathname, hash } = useLocation();
  const href = homeSection ? `/#${homeSection}` : to;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (!homeSection) return;

    if (pathname === "/") {
      event.preventDefault();
      scrollToSection(homeSection);
    }
  };

  return (
    <NavLink
      to={href}
      onClick={handleClick}
      className={({ isActive }) => {
        const sectionActive =
          Boolean(homeSection) && pathname === "/" && hash === `#${homeSection}`;

        return cn(
          "flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold uppercase transition focus-visible:outline-none focus-visible:ring-2 motion-reduce:transition-none",
          tone === "dark"
            ? "border-white/40 text-white/90 hover:border-white/70 hover:bg-white/10 hover:text-white focus-visible:ring-white"
            : "border-aic-line text-aic-ink hover:border-aic-blue/45 hover:bg-aic-mist focus-visible:ring-aic-blue",
          (homeSection ? sectionActive : isActive)
            ? tone === "dark"
              ? "border-white/80 bg-white/15 text-aic-gold shadow-pill hover:border-white/80 hover:bg-white/15"
              : "border-aic-blue bg-aic-blue text-white shadow-soft hover:border-aic-blue hover:bg-aic-blue"
            : undefined,
        );
      }}
    >
      {children}
    </NavLink>
  );
}
