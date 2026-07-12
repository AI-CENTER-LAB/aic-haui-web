import type { Person } from "../../content/types";
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
export function PersonCard({ person }: { person: Person }) {
  return (
    <Card className="overflow-hidden p-0">
      <AvatarFrame asset={person.image} />
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
export function PersonGrid({ people }: { people: Person[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
}
