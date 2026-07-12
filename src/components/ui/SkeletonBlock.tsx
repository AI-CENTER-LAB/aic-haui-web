import { cn } from "../../lib/cn";

export function SkeletonBlock({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse rounded-2xl bg-aic-mist motion-reduce:animate-none", className)}
    />
  );
}
