import { navigationRoutes } from "../../app/routes";
import { NavPill } from "../ui/NavPill";

export function DesktopNav({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 lg:flex">
      {navigationRoutes.map((route) => (
        <NavPill key={route.key} to={route.path} tone={tone}>
          {route.label}
        </NavPill>
      ))}
    </nav>
  );
}
