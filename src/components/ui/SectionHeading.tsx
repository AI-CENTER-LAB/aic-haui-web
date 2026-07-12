import { cn } from "../../lib/cn";

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
  className,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-aic-gold-dark">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-aic-navy md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-aic-muted md:text-lg">{description}</p>
      )}
    </div>
  );
}
