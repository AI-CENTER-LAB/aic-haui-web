import type { ReactNode } from "react";

import {
  JoinProcess,
  LabComparison,
  StudentCTA,
  StudentHero,
} from "../components/cards/StudentCards";
import { RouteTransition } from "../components/layout/RouteTransition";
import {
  LabCardSkeleton,
  MediaSkeleton,
  TimelineSkeleton,
} from "../components/scaffold/ScaffoldBlocks";
import { PageContainer } from "../components/ui/PageContainer";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { studentSectionLabels } from "../content/labels";
import { resolveSectionState, uiScaffoldMode } from "../content/selectors";
import { siteContent } from "../content/site";
import type { ContentState, SiteContent } from "../content/types";
import { scaffoldConfig } from "../scaffold/config";
import { SectionRenderer } from "../scaffold/SectionRenderer";

function StudentSection({
  id,
  title,
  description,
  state,
  scaffold,
  children,
}: {
  id?: string;
  title: string;
  description: string;
  state: ContentState<unknown>;
  scaffold: ReactNode;
  children: ReactNode;
}) {
  if (state.status === "empty") return null;

  return (
    <Section id={id} className="section-reveal bg-white">
      <PageContainer>
        <SectionHeading title={title} description={description} align="center" className="mb-9" />
        <SectionRenderer state={state} scaffold={scaffold}>
          {children}
        </SectionRenderer>
      </PageContainer>
    </Section>
  );
}

export function StudentsPage({
  content = siteContent,
  scaffoldMode = uiScaffoldMode,
}: {
  content?: SiteContent;
  scaffoldMode?: boolean;
}) {
  const data = content.students;
  const labsState = resolveSectionState(data.labs, scaffoldMode, scaffoldConfig.students.labs);
  const timelineState = resolveSectionState(
    data.joinSteps,
    scaffoldMode,
    scaffoldConfig.students.timeline,
  );

  return (
    <RouteTransition>
      <StudentHero
        copy={content.pages.students}
        ctaHref={labsState.status === "ready" ? "#research-space" : undefined}
        ctaLabel={studentSectionLabels.heroCta}
        scaffold={scaffoldMode ? <MediaSkeleton className="aspect-[4/3]" /> : undefined}
      />
      <StudentSection
        id="research-space"
        title={studentSectionLabels.researchSpace}
        description={studentSectionLabels.researchSpaceDescription}
        state={labsState}
        scaffold={<LabCardSkeleton count={scaffoldConfig.students.labs} />}
      >
        <LabComparison labs={data.labs} />
      </StudentSection>
      <StudentSection
        title={studentSectionLabels.timeline}
        description={studentSectionLabels.timelineDescription}
        state={timelineState}
        scaffold={<TimelineSkeleton count={scaffoldConfig.students.timeline} />}
      >
        <JoinProcess steps={data.joinSteps} />
      </StudentSection>
      {data.contactHref && (
        <Section>
          <PageContainer>
            <StudentCTA
              href={data.contactHref}
              title={studentSectionLabels.closingTitle}
              buttonLabel={studentSectionLabels.closingButton}
            />
          </PageContainer>
        </Section>
      )}
    </RouteTransition>
  );
}
