import type { ContentState, Person } from "../../content/types";
import { PersonGrid, type OrganizationPersonVariant } from "../cards/PersonCard";
import { PersonCardSkeleton } from "../scaffold/ScaffoldBlocks";
import { SectionHeading } from "../ui/SectionHeading";

const gridClasses: Record<OrganizationPersonVariant, string> = {
  director: "grid-cols-1 lg:grid-cols-3",
  teacher: "grid-cols-1 gap-y-4",
  student: "grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-6",
};

export function OrganizationGroup({
  title,
  state,
  variant,
}: {
  title: string;
  state: ContentState<Person>;
  variant: OrganizationPersonVariant;
}) {
  if (state.status === "empty") return null;

  return (
    <div data-organization-variant={variant}>
      <SectionHeading title={title} className="mb-7 border-b border-aic-line pb-4" />
      {state.status === "scaffold" ? (
        <PersonCardSkeleton count={state.expectedCount} variant={variant} />
      ) : (
        <PersonGrid
          people={state.items}
          variant={variant}
          className={gridClasses[variant]}
          testId={`organization-${variant}-grid`}
        />
      )}
    </div>
  );
}
