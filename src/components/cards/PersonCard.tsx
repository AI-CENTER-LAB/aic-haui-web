import type { Person } from "../../content/types";
import { cn } from "../../lib/cn";
import { AvatarFrame } from "../media/AvatarFrame";
import { Card } from "../ui/Card";

export function BiographyDrawer({ person }: { person: Person }) {
  if (!person.bio) return null;
  return (
    <details className="mt-4 border-t border-aic-line pt-3 text-sm text-aic-muted">
      <summary className="cursor-pointer font-semibold text-aic-blue">Tiểu sử</summary>
      <p className="mt-2 leading-6">{person.bio}</p>
    </details>
  );
}

export type PersonCardVariant = "legacy" | "director" | "teacher" | "student";
export type OrganizationPersonVariant = Exclude<PersonCardVariant, "legacy">;

function PersonPortrait({
  person,
  className,
}: {
  person: Person;
  className?: string;
}) {
  return (
    <AvatarFrame asset={person.image} mediaRef={person.mediaRef} className={className} />
  );
}

export function PersonCard({
  person,
  variant = "legacy",
  className,
}: {
  person: Person;
  variant?: PersonCardVariant;
  className?: string;
}) {
  if (variant === "teacher") {
    return (
      <Card
        className={cn("flex items-center gap-4 p-4 md:p-4", className)}
        data-person-variant="teacher"
      >
        <PersonPortrait
          person={person}
          className="!aspect-square h-16 w-16 shrink-0 rounded-xl shadow-none"
        />
        <div className="min-w-0">
          <h3 className="font-display text-base font-bold text-aic-navy">{person.name}</h3>
          <p className="mt-1 text-xs font-semibold text-aic-gold-dark">{person.role}</p>
          {person.tags && person.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {person.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-aic-mist px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-aic-blue"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Card>
    );
  }

  if (variant === "student") {
    return (
      <article className={cn("text-center", className)} data-person-variant="student">
        <PersonPortrait
          person={person}
          className="mx-auto !aspect-square h-20 w-20 rounded-2xl shadow-none"
        />
        <h3 className="mt-3 font-display text-sm font-bold text-aic-navy">{person.name}</h3>
        <p className="mt-1 text-xs leading-5 text-aic-blue">{person.role}</p>
      </article>
    );
  }

  if (variant === "legacy") {
    return (
      <Card className={cn("overflow-hidden p-0", className)} data-person-variant="legacy">
        <PersonPortrait person={person} />
        <div className="p-5">
          <h3 className="font-display text-xl font-bold text-aic-navy">{person.name}</h3>
          <p className="mt-1 text-xs font-bold uppercase tracking-wide text-aic-gold-dark">
            {person.role}
          </p>
          {person.email && (
            <a
              className="mt-3 block text-sm text-aic-blue hover:underline"
              href={`mailto:${person.email}`}
            >
              {person.email}
            </a>
          )}
          <BiographyDrawer person={person} />
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={cn("overflow-hidden p-0", className)}
      data-person-variant="director"
    >
      <PersonPortrait person={person} className="!aspect-[4/3] rounded-none shadow-none" />
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-aic-navy">{person.name}</h3>
        <p className="mt-1 text-xs font-bold tracking-wide text-aic-gold-dark">
          {person.role}
        </p>
        {person.bio && <p className="mt-4 text-sm leading-6 text-aic-muted">{person.bio}</p>}
        {person.email && (
          <a
            className="mt-4 block break-all text-sm font-semibold text-aic-blue hover:underline"
            href={`mailto:${person.email}`}
          >
            {person.email}
          </a>
        )}
      </div>
    </Card>
  );
}

export function PersonGrid({
  people,
  variant,
  className,
  testId,
  itemClassName,
}: {
  people: Person[];
  variant?: PersonCardVariant;
  className?: string;
  testId?: string;
  itemClassName?: (person: Person, index: number) => string | undefined;
}) {
  const resolvedVariant = variant ?? "legacy";

  return (
    <div
      className={cn("grid gap-5", className ?? "sm:grid-cols-2 lg:grid-cols-3")}
      data-testid={testId}
      data-person-grid-variant={resolvedVariant}
    >
      {people.map((person, index) => (
        <PersonCard
          key={person.id}
          person={person}
          variant={resolvedVariant}
          className={itemClassName?.(person, index)}
        />
      ))}
    </div>
  );
}
