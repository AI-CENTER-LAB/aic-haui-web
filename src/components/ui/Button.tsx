import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "../../lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const styles = {
  primary: "bg-aic-blue text-white hover:bg-aic-navy",
  secondary: "bg-aic-gold text-aic-ink hover:bg-aic-gold-dark",
  ghost: "border border-aic-blue/20 bg-white/75 text-aic-navy hover:bg-aic-mist",
};

export function Button({ children, className, href, variant = "primary", ...props }: Props) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aic-blue focus-visible:ring-offset-2 motion-reduce:transition-none",
    styles[variant],
    className,
  );
  if (href?.startsWith("/")) {
    return (
      <Link className={classes} to={href}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
