import { mediaManifest, resolveMedia } from "../../content/assets";
import type { CooperationItem, MediaManifest, Partner } from "../../content/types";
import { cooperationSectionLabels } from "../../content/labels";
import { cn } from "../../lib/cn";
import { PartnerLogo } from "../media/PartnerLogo";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function CooperationTypeCard({ item }: { item: CooperationItem }) {
  return (
    <Card data-cooperation-card>
      <h3 className="font-display text-xl font-bold text-aic-navy">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-aic-muted">{item.description}</p>
      {item.cta && (
        <Button href={item.cta} variant="ghost" className="mt-5">
          {cooperationSectionLabels.learnMore}
        </Button>
      )}
    </Card>
  );
}

export function InternationalCooperationBanner({ item }: { item: CooperationItem }) {
  return (
    <div
      data-testid="cooperation-international-banner"
      className="w-full rounded-card bg-aic-navy p-7 text-white shadow-soft md:p-9"
    >
      <h2 className="font-display text-2xl font-bold">{item.title}</h2>
      <p className="mt-3 max-w-4xl leading-7 text-white/85">{item.description}</p>
    </div>
  );
}

function hasPartnerLogoSource(partner: Partner, manifest: MediaManifest) {
  if (partner.logo?.src) return true;
  if (!partner.mediaRef) return false;
  const media = resolveMedia(partner.mediaRef, manifest);
  return Boolean(media?.kind === "image" && media.src);
}

export function PartnerGrid({
  partners,
  manifest = mediaManifest,
}: {
  partners: Partner[];
  manifest?: MediaManifest;
}) {
  if (!partners.length) return null;
  const realSourceCount = partners.filter((partner) =>
    hasPartnerLogoSource(partner, manifest),
  ).length;
  const useMarquee = realSourceCount >= 5;

  if (!useMarquee) {
    return (
      <div
        data-testid="partner-grid"
        data-layout="grid"
        className="grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {partners.map((partner) => (
          <PartnerLogo
            key={partner.id}
            partner={partner}
            manifest={manifest}
            className="w-full min-w-0"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      data-testid="partner-grid"
      data-layout="marquee"
      data-reduced-motion-layout="static"
      className="partner-marquee group overflow-hidden motion-reduce:[mask-image:none]"
    >
      <div className="partner-track flex w-max gap-0 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        <div data-marquee-group="primary" className="partner-primary flex shrink-0 gap-4 pr-4">
          {partners.map((partner) => (
            <PartnerLogo
              key={partner.id}
              partner={partner}
              manifest={manifest}
              className="w-44 shrink-0 motion-reduce:w-full"
            />
          ))}
        </div>
        <div
          data-marquee-group="duplicate"
          data-marquee-duplicate
          className="partner-duplicate flex shrink-0 gap-4 pr-4"
          aria-hidden="true"
        >
          {partners.map((partner) => (
            <PartnerLogo
              key={`${partner.id}-duplicate`}
              partner={partner}
              manifest={manifest}
              className="w-44 shrink-0"
              tabIndex={-1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export function CooperationCTA({
  href,
  title,
  buttonLabel,
  description,
  headingLevel = 3,
  tone = "navy",
}: {
  href?: string;
  title: string;
  buttonLabel: string;
  description?: string;
  headingLevel?: 2 | 3;
  tone?: "navy" | "light";
}) {
  if (!href) return null;
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div
      className={cn(
        "rounded-media p-8 text-center md:p-12",
        tone === "light"
          ? "border border-aic-line bg-white text-aic-navy shadow-soft"
          : "bg-aic-navy text-white",
      )}
    >
      <Heading className="font-display text-3xl font-bold">{title}</Heading>
      {description && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl",
            tone === "light" ? "text-aic-muted" : "text-white/80",
          )}
        >
          {description}
        </p>
      )}
      <Button href={href} variant="secondary" className="mt-6">
        {buttonLabel}
      </Button>
    </div>
  );
}
