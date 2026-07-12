import type { ResearchItem } from "../../content/types";
import { ImageFrame } from "../media/ImageFrame";
import { Card } from "../ui/Card";

function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <Card className="overflow-hidden p-0">
      <ImageFrame asset={item.image} className="aspect-[4/3] rounded-b-none" />
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-aic-navy">{item.title}</h3>
        <p className="mt-3 line-clamp-4 text-sm leading-6 text-aic-muted">{item.description}</p>
        {item.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-aic-mist px-3 py-1 text-xs text-aic-blue">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
export function ResearchDirectionCard(props: { item: ResearchItem }) {
  return <ResearchCard {...props} />;
}
export function ResearchGroupCard(props: { item: ResearchItem }) {
  return <ResearchCard {...props} />;
}
export function ResearchResultCard(props: { item: ResearchItem }) {
  return <ResearchCard {...props} />;
}
export function ResearchGrid({
  items,
  variant = "direction",
}: {
  items: ResearchItem[];
  variant?: "direction" | "group" | "result";
}) {
  const Component =
    variant === "group"
      ? ResearchGroupCard
      : variant === "result"
        ? ResearchResultCard
        : ResearchDirectionCard;
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Component key={item.id} item={item} />
      ))}
    </div>
  );
}
