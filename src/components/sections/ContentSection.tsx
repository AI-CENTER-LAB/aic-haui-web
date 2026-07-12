import type { ReactNode } from "react";
import type { SectionState } from "../../content/types";
import { PageContainer } from "../ui/PageContainer";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionStateView } from "../ui/SectionStateView";

export function ContentSection({
  title,
  description,
  state,
  emptyLabel,
  children,
  tone = "white",
}: {
  title: string;
  description?: string;
  state: SectionState;
  emptyLabel: string;
  children: ReactNode;
  tone?: "white" | "mist";
}) {
  return (
    <Section className={tone === "mist" ? "bg-aic-mist/55" : "bg-white"}>
      <PageContainer>
        <SectionHeading title={title} description={description} className="mb-9" />
        <SectionStateView state={state} emptyLabel={emptyLabel}>
          {children}
        </SectionStateView>
      </PageContainer>
    </Section>
  );
}
