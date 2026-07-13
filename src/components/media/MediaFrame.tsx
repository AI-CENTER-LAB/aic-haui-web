import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export function MediaFrame({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children?: ReactNode }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-media border border-white/40 bg-neutral-visual shadow-soft",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
