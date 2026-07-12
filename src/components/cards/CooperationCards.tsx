import type { CooperationItem, Partner } from "../../content/types";
import { LogoFrame } from "../media/LogoFrame";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function CooperationTypeCard({ item }: { item: CooperationItem }) {
  const Icon = item.icon;
  return (
    <Card>
      {Icon && <Icon className="mb-5 size-7 text-aic-blue" aria-hidden="true" />}
      <h3 className="font-display text-xl font-bold text-aic-navy">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-aic-muted">{item.description}</p>
      {item.cta && (
        <Button href={item.cta} variant="ghost" className="mt-5">
          Tìm hiểu
        </Button>
      )}
    </Card>
  );
}
export function PartnerGrid({ partners }: { partners: Partner[] }) {
  if (!partners.length) return null;
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {partners.map((partner) => (
        <LogoFrame key={partner.id} asset={partner.logo} />
      ))}
    </div>
  );
}
export function CooperationCTA({ href, title }: { href?: string; title: string }) {
  if (!href) return null;
  return (
    <div className="rounded-media bg-aic-navy p-8 text-center text-white md:p-12">
      <h3 className="font-display text-3xl font-bold">{title}</h3>
      <Button href={href} variant="secondary" className="mt-6">
        Liên hệ hợp tác
      </Button>
    </div>
  );
}
