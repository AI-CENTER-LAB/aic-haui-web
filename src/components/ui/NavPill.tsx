import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import { cn } from "../../lib/cn";

export function NavPill({
  to,
  children,
  onClick,
}: {
  to: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "flex min-h-11 items-center rounded-full px-4 text-sm font-semibold text-aic-ink transition hover:bg-aic-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aic-blue motion-reduce:transition-none",
          isActive && "bg-aic-blue text-white shadow-soft hover:bg-aic-blue",
        )
      }
    >
      {children}
    </NavLink>
  );
}
