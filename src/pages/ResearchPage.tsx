import { CooperationCTA } from "../components/cards/CooperationCards";
import {
  ResearchDirectionScaffold,
  ResearchGrid,
  ResearchLabScaffold,
  type ResearchGroupLayoutEntry,
} from "../components/cards/ResearchCards";
import { RouteTransition } from "../components/layout/RouteTransition";
import { ContentSection } from "../components/sections/ContentSection";
import { PageHero } from "../components/sections/PageHero";
import { ResearchMetrics } from "../components/sections/ResearchMetrics";
import { PageContainer } from "../components/ui/PageContainer";
import { Section } from "../components/ui/Section";
import { researchSectionLabels, sharedCtaLabels } from "../content/labels";
import { resolveSectionState } from "../content/selectors";
import { siteContent } from "../content/site";
import type { SiteContent } from "../content/types";
import { scaffoldConfig } from "../scaffold/config";

type KnownResearchGroupId =
  | "computer-vision-lab"
  | "nlp-lab"
  | "robotics-lab"
  | "data-science-lab"
  | "applied-ai-lab"
  | "iot-ai-lab"
  | "ai-ethics-lab";

const researchGroupLayout = [
  { id: "computer-vision-lab", variant: "featured" },
  { id: "nlp-lab", variant: "compact" },
  { id: "robotics-lab", variant: "compact" },
  { id: "data-science-lab", variant: "compact" },
  { id: "applied-ai-lab", variant: "accent" },
  { id: "iot-ai-lab", variant: "compact" },
  { id: "ai-ethics-lab", variant: "compact" },
] as const satisfies readonly ResearchGroupLayoutEntry<KnownResearchGroupId>[];

export function ResearchPage({
  content = siteContent,
  scaffoldMode,
}: {
  content?: SiteContent;
  scaffoldMode?: boolean;
}) {
  const directions = resolveSectionState(
    content.research.directions,
    scaffoldMode,
    scaffoldConfig.research.directions,
  );
  const metrics = resolveSectionState(
    content.research.metrics ?? [],
    scaffoldMode,
    scaffoldConfig.research.metrics,
  );
  const groups = resolveSectionState(
    content.research.groups,
    scaffoldMode,
    researchGroupLayout.length,
  );
  const contactHref = content.cooperation.contactHref?.startsWith("mailto:")
    ? content.cooperation.contactHref
    : undefined;
  const directionCtaHref = groups.status === "ready" ? "#research-groups" : undefined;

  return (
    <RouteTransition>
      <PageHero copy={content.pages.research} />
      <ContentSection
        title={researchSectionLabels.directions}
        state={directions}
        scaffold={<ResearchDirectionScaffold count={scaffoldConfig.research.directions} />}
      >
        <div data-testid="research-directions">
          <ResearchGrid items={content.research.directions} directionCtaHref={directionCtaHref} />
        </div>
      </ContentSection>
      <ResearchMetrics state={metrics} />
      <ContentSection
        title={researchSectionLabels.groups}
        state={groups}
        scaffold={<ResearchLabScaffold layout={researchGroupLayout} />}
        tone="mist"
      >
        <div id="research-groups" data-testid="research-labs">
          <ResearchGrid
            items={content.research.groups}
            variant="group"
            groupLayout={researchGroupLayout}
            memberSuffix={researchSectionLabels.membersSuffix}
          />
        </div>
      </ContentSection>
      {contactHref && (
        <Section>
          <PageContainer>
            <CooperationCTA
              href={contactHref}
              title={researchSectionLabels.cooperationCta}
              buttonLabel={sharedCtaLabels.cooperationContact}
              headingLevel={2}
            />
          </PageContainer>
        </Section>
      )}
    </RouteTransition>
  );
}
