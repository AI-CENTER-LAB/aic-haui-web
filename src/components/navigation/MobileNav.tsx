import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationRoutes } from "../../app/routes";
import { NavPill } from "../ui/NavPill";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Đóng menu" : "Mở menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="grid size-11 place-items-center rounded-full text-aic-navy hover:bg-aic-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aic-blue"
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu di động"
          className="fixed inset-x-4 top-20 z-50 rounded-media border border-aic-line bg-white p-3 shadow-card"
        >
          <nav className="grid gap-1" aria-label="Điều hướng di động">
            {navigationRoutes.map((route) => (
              <NavPill key={route.key} to={route.path} onClick={() => setOpen(false)}>
                {route.label}
              </NavPill>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
