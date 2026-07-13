import { CouncilPanel } from "../components/cards/CouncilPanel";
import { RouteTransition } from "../components/layout/RouteTransition";
import { OrganizationGroup } from "../components/sections/OrganizationGroup";
import { PageHero } from "../components/sections/PageHero";
import { PageContainer } from "../components/ui/PageContainer";
import { Section } from "../components/ui/Section";
import { useLabels } from "../content/labels";
import { resolveSectionState } from "../content/selectors";
import { useSiteContent } from "../content/site";
import type { SiteContent } from "../content/types";
import { cn } from "../lib/cn";
import { scaffoldConfig } from "../scaffold/config";

export function OrganizationPage({
  content,
  scaffoldMode,
}: {
  content?: SiteContent;
  scaffoldMode?: boolean;
}) {
  const defaultContent = useSiteContent();
  const { organizationSectionLabels } = useLabels();
  const actualContent = content || defaultContent;
  const directors = actualContent.people.filter((person) => person.group === "director");
  const teacherLeaders = actualContent.people.filter((person) => person.group === "teacher-lab");
  const studentLeaders = actualContent.people.filter((person) => person.group === "student-leader");
  const council = actualContent.research.council ?? [];
  const directorState = resolveSectionState(
    directors,
    scaffoldMode,
    scaffoldConfig.organization.directors,
  );
  const teacherState = resolveSectionState(
    teacherLeaders,
    scaffoldMode,
    scaffoldConfig.organization.teacherLeaders,
  );
  const studentState = resolveSectionState(
    studentLeaders,
    scaffoldMode,
    scaffoldConfig.organization.studentLeaders,
  );
  const councilState = resolveSectionState(
    council,
    scaffoldMode,
    scaffoldConfig.organization.council,
  );
  const showDirector = directorState.status !== "empty";
  const showTeacher = teacherState.status !== "empty";
  const showCouncil = councilState.status !== "empty";
  const showStudent = studentState.status !== "empty";
  const showBand = showTeacher || showCouncil;

  return (
    <RouteTransition>
      <PageHero copy={actualContent.pages.organization} />
      {showDirector && (
        <Section className="section-reveal bg-white">
          <PageContainer>
            <OrganizationGroup
              title={organizationSectionLabels.directors}
              state={directorState}
              variant="director"
            />
          </PageContainer>
        </Section>
      )}

      {showBand && (
        <Section className="section-reveal bg-aic-mist/55">
          <PageContainer
            className={cn(
              "grid items-stretch gap-8",
              showCouncil && showTeacher ? "md:grid-cols-2" : "grid-cols-1",
            )}
            data-testid="organization-band"
          >
            {showCouncil && (
              <CouncilPanel title={organizationSectionLabels.council} state={councilState} />
            )}
            {showTeacher && (
              <OrganizationGroup
                title={organizationSectionLabels.teacherLeaders}
                state={teacherState}
                variant="teacher"
              />
            )}
          </PageContainer>
        </Section>
      )}

      {showStudent && (
        <Section className="section-reveal bg-white">
          <PageContainer>
            <OrganizationGroup
              title={organizationSectionLabels.studentLeaders}
              state={studentState}
              variant="student"
            />
          </PageContainer>
        </Section>
      )}
    </RouteTransition>
  );
}
