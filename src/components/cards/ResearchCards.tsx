import type { ResearchItem } from "../../content/types";
import { cn } from "../../lib/cn";
import { ImageFrame } from "../media/ImageFrame";
import { Card } from "../ui/Card";
import { SkeletonBlock } from "../ui/SkeletonBlock";

function CardCopy({ item, ctaHref }: { item: ResearchItem; ctaHref?: string }) {
  return (
    <>
      <h3 className="font-display text-xl font-bold text-aic-navy">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-aic-muted">{item.description}</p>
      {item.tags && item.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-aic-mist px-3 py-1 text-xs text-aic-blue">
              {tag}
            </span>
          ))}
        </div>
      )}
      {item.cta && ctaHref && (
        <a className="mt-5 inline-block text-sm font-bold text-aic-blue" href={ctaHref}>
          {item.cta}
        </a>
      )}
    </>
  );
}

export function ResearchDirectionCard({ item, ctaHref }: { item: ResearchItem; ctaHref?: string }) {
  return (
    <Card data-research-card="direction" className="overflow-hidden p-0 md:p-0">
      {(item.mediaRef || item.image) && (
        <ImageFrame
          mediaRef={item.mediaRef}
          asset={item.image}
          className="aspect-[4/3] rounded-b-none"
        />
      )}
      <div className="p-5">
        <CardCopy item={item} ctaHref={ctaHref} />
      </div>
    </Card>
  );
}

export type ResearchLabVariant = "featured" | "accent" | "compact";
export type ResearchGroupLayoutEntry<Id extends string = string> = Readonly<{
  id: Id;
  variant: ResearchLabVariant;
}>;
export type ResearchGroupLayout = readonly ResearchGroupLayoutEntry[];

export function ResearchGroupCard({
  item,
  variant = "compact",
  memberSuffix,
}: {
  item: ResearchItem;
  variant?: ResearchLabVariant;
  memberSuffix: string;
}) {
  return (
    <Card
      data-research-card="lab"
      data-research-variant={variant}
      className={cn(
        "group flex h-full flex-col !rounded-xl border border-aic-line/60 shadow-sm transition-all hover:scale-[1.01] hover:shadow-md hover:-translate-y-0 p-5 md:p-5",
        variant === "featured" && "md:col-span-2 md:row-span-2 md:p-7",
        variant === "accent" && "border-aic-blue/20 bg-aic-mist md:col-span-2 md:p-6",
      )}
    >
      {(item.mediaRef || item.image) && (
        <div className="mb-5 aspect-[4/3] overflow-hidden rounded-lg">
          <ImageFrame
            mediaRef={item.mediaRef}
            asset={item.image}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <CardCopy item={item} />
      {item.memberCount !== undefined && (
        <p className="mt-auto pt-6 text-xs font-medium text-aic-blue">
          {item.memberCount} {memberSuffix}
        </p>
      )}
      {item.leader && (
        <p className="mt-auto border-t border-aic-line pt-5 text-xs font-semibold text-aic-ink">
          {item.leader}
        </p>
      )}
    </Card>
  );
}

export function ResearchResultCard({ item }: { item: ResearchItem }) {
  return <ResearchDirectionCard item={item} />;
}

export function ResearchGrid({
  items,
  variant = "direction",
  groupLayout = [],
  directionCtaHref,
  memberSuffix = "",
}: {
  items: ResearchItem[];
  variant?: "direction" | "group" | "result";
  groupLayout?: ResearchGroupLayout;
  directionCtaHref?: string;
  memberSuffix?: string;
}) {
  const isLabGrid = variant === "group";
  const itemsById = new Map(items.map((item) => [item.id, item]));
  const knownIds = new Set(groupLayout.map((entry) => entry.id));
  const labItems = [
    ...groupLayout.flatMap((entry) => {
      const item = itemsById.get(entry.id);
      return item ? [{ item, variant: entry.variant }] : [];
    }),
    ...items
      .filter((item) => !knownIds.has(item.id))
      .map((item) => ({ item, variant: "compact" as const })),
  ];

  return (
    <div
      data-testid={isLabGrid ? "research-lab-grid" : "research-direction-grid"}
      className={cn("grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3")}
    >
      {isLabGrid
        ? labItems.map(({ item, variant: labVariant }) => (
            <ResearchGroupCard
              key={item.id}
              item={item}
              variant={labVariant}
              memberSuffix={memberSuffix}
            />
          ))
        : items.map((item) => (
            <ResearchDirectionCard key={item.id} item={item} ctaHref={directionCtaHref} />
          ))}
    </div>
  );
}

function shells(count: number) {
  return Array.from({ length: count }, (_, index) => index);
}

export function ResearchDirectionScaffold({ count = 3 }: { count?: number }) {
  return (
    <div
      data-testid="research-direction-scaffold"
      className="grid grid-cols-1 gap-5 md:grid-cols-3"
    >
      {shells(count).map((index) => (
        <Card key={index} className="overflow-hidden p-0 md:p-0" aria-hidden="true">
          <SkeletonBlock className="aspect-[4/3] rounded-none" />
          <div className="space-y-3 p-5">
            <SkeletonBlock className="h-5 w-3/4" />
            <SkeletonBlock className="h-3 w-full" />
            <SkeletonBlock className="h-3 w-5/6" />
          </div>
        </Card>
      ))}
    </div>
  );
}

export function ResearchLabScaffold({ layout }: { layout: ResearchGroupLayout }) {
  return (
    <div data-testid="research-lab-scaffold" className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {layout.map(({ id, variant }) => {
        return (
          <Card
            key={id}
            data-layout-id={id}
            data-research-variant={variant}
            className={cn(
              "space-y-4 p-5 md:p-5",
              variant === "featured" && "md:col-span-2 md:row-span-2",
              variant === "accent" && "bg-aic-mist md:col-span-2",
            )}
            aria-hidden="true"
          >
            <SkeletonBlock className="h-5 w-2/3" />
            <SkeletonBlock className="h-3 w-full" />
            <SkeletonBlock className="h-3 w-4/5" />
          </Card>
        );
      })}
    </div>
  );
}
