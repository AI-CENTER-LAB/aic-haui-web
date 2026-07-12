import type { ContactItem } from "../../content/types";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function ContactCard({ item }: { item: ContactItem }) {
  const content = (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-aic-gold-dark">
        {item.label}
      </p>
      <h3 className="mt-3 font-display text-xl font-bold text-aic-navy">{item.primary}</h3>
      {item.secondary && <p className="mt-2 text-sm leading-6 text-aic-muted">{item.secondary}</p>}
    </>
  );
  return item.href ? (
    <a
      href={item.href}
      className="rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aic-blue"
    >
      <Card>{content}</Card>
    </a>
  ) : (
    <Card>{content}</Card>
  );
}
export function ContactGrid({ items }: { items: ContactItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <ContactCard key={item.id} item={item} />
      ))}
    </div>
  );
}
export function ContactCTA({ email }: { email?: string }) {
  if (!email) return null;
  return (
    <Button href={`mailto:${email}`} variant="secondary">
      Gửi email
    </Button>
  );
}
