import type { ReactNode } from "react";
import type { ContentState } from "../../content/types";
import { SectionRenderer } from "../../scaffold/SectionRenderer";
import { PageContainer } from "../ui/PageContainer";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function ContentSection({
  title,
  description,
  state,
  scaffold,
  children,
  tone = "white",
}: {
  title: string;
  description?: string;
  state: ContentState<unknown>;
  scaffold?: ReactNode;
  children: ReactNode;
  tone?: "white" | "mist";
}) {
  if (state.status === "empty") return null;

  return (
    <Section
      className={tone === "mist" ? "section-reveal bg-aic-mist/55" : "section-reveal bg-white"}
    >
      <PageContainer>
        <SectionHeading title={title} description={description} className="mb-9" />
        <SectionRenderer state={state} scaffold={scaffold}>
          {children}
        </SectionRenderer>
      </PageContainer>
    </Section>
  );
}
