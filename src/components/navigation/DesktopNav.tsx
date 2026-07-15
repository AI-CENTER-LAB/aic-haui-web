import { navigationRoutes } from "../../app/routes";
import { useLabels } from "../../content/labels";
import { NavPill } from "../ui/NavPill";

export function DesktopNav({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { navigationLabels } = useLabels();
  return (
    <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 lg:flex">
      {navigationRoutes.map((route) => (
        <NavPill
          key={route.key}
          to={route.path}
          homeSection={route.homeSection}
          tone={tone}
        >
          {navigationLabels[route.key as keyof typeof navigationLabels]}
        </NavPill>
      ))}
    </nav>
  );
}
