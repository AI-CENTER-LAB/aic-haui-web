import type { ContactItem } from "../../content/types";
import { Card } from "../ui/Card";

type ContactHeadingLevel = 2 | 3;

export function ContactCard({
  item,
  headingLevel = 3,
}: {
  item: ContactItem;
  headingLevel?: ContactHeadingLevel;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const content = (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-aic-gold-dark">
        {item.label}
      </p>
      <Heading className="mt-3 font-display text-xl font-bold text-aic-navy">
        {item.primary}
      </Heading>
      {item.secondary && <p className="mt-2 text-sm leading-6 text-aic-muted">{item.secondary}</p>}
    </>
  );
  return item.href ? (
    <a
      href={item.href}
      data-contact-card={item.id}
      className="rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aic-blue"
    >
      <Card>{content}</Card>
    </a>
  ) : (
    <Card data-contact-card={item.id}>{content}</Card>
  );
}
export function ContactGrid({
  items,
  className = "",
  headingLevel = 3,
}: {
  items: ContactItem[];
  className?: string;
  headingLevel?: ContactHeadingLevel;
}) {
  return (
    <div className={`grid gap-4 ${className}`.trim()}>
      {items.map((item) => (
        <ContactCard key={item.id} item={item} headingLevel={headingLevel} />
      ))}
    </div>
  );
}
