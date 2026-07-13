import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationRoutes } from "../../app/routes";
import { NavPill } from "../ui/NavPill";

export function MobileNav({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.querySelector<HTMLElement>("a")?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const links = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>("a") ?? []);
      const first = links[0];
      const last = links.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);
  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Đóng menu" : "Mở menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={
          tone === "dark"
            ? "grid size-11 place-items-center rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            : "grid size-11 place-items-center rounded-full text-aic-navy hover:bg-aic-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aic-blue"
        }
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open && (
        <div
          ref={dialogRef}
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
