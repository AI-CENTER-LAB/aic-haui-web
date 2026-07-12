import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { Surface } from "./Surface";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Surface
      className={cn(
        "p-5 transition duration-300 hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none motion-reduce:transition-none md:p-6",
        className,
      )}
      {...props}
    />
  );
}
