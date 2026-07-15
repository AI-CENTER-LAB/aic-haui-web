import { CouncilPanel } from "../cards/CouncilPanel";
import { OrganizationGroup } from "./OrganizationGroup";
import { PageContainer } from "../ui/PageContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { useLabels } from "../../content/labels";
import { resolveSectionState } from "../../content/selectors";
import type { SiteContent } from "../../content/types";
import { cn } from "../../lib/cn";
import { scaffoldConfig } from "../../scaffold/config";

export function OrganizationContent({
  content,
  scaffoldMode,
  showHeading = true,
}: {
  content: SiteContent;
  scaffoldMode?: boolean;
  showHeading?: boolean;
}) {
  const { organizationSectionLabels } = useLabels();
  const directors = content.people.filter((person) => person.group === "director");
  const teacherLeaders = content.people.filter((person) => person.group === "teacher-lab");
  const studentLeaders = content.people.filter((person) => person.group === "student-leader");
  const council = content.research.council ?? [];
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
    <>
      {showHeading && (
        <SectionHeading
          title={content.pages.organization.title}
          description={content.pages.organization.description}
          align="center"
          className="mb-10"
        />
      )}

      {showDirector && (
        <OrganizationGroup
          title={organizationSectionLabels.directors}
          state={directorState}
          variant="director"
        />
      )}

      {showBand && (
        <div
          className={cn(
            "mt-10 grid items-stretch gap-8",
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
        </div>
      )}

      {showStudent && (
        <div className="mt-10">
          <OrganizationGroup
            title={organizationSectionLabels.studentLeaders}
            state={studentState}
            variant="student"
          />
        </div>
      )}
    </>
  );
}
