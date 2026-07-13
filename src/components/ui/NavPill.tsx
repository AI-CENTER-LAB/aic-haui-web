import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import { cn } from "../../lib/cn";

export function NavPill({
  to,
  children,
  onClick,
  tone = "light",
}: {
  to: string;
  children: ReactNode;
  onClick?: () => void;
  tone?: "light" | "dark";
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "flex min-h-11 items-center rounded-full px-4 text-sm font-semibold uppercase transition focus-visible:outline-none focus-visible:ring-2 motion-reduce:transition-none",
          tone === "dark"
            ? "text-white/90 hover:bg-white/10 hover:text-white focus-visible:ring-white"
            : "text-aic-ink hover:bg-aic-mist focus-visible:ring-aic-blue",
          isActive &&
            (tone === "dark"
              ? "bg-white/15 text-aic-gold shadow-pill hover:bg-white/15"
              : "bg-aic-blue text-white shadow-soft hover:bg-aic-blue"),
        )
      }
    >
      {children}
    </NavLink>
  );
}
