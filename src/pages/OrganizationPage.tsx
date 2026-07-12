import { RouteTransition } from "../components/layout/RouteTransition";
import { OrganizationGroup } from "../components/sections/OrganizationGroup";
import { PageHero } from "../components/sections/PageHero";
import { resolveSectionState, runtimeMode } from "../content/selectors";
import { siteContent } from "../content/site";
import type { Person } from "../content/types";

export function OrganizationPage() {
  const groups: Array<[string, Person["group"]]> = [
    ["Ban giám đốc", "director"],
    ["Hội đồng khoa học và tư vấn", "advisor"],
    ["Trưởng lab giáo viên", "teacher-lab"],
    ["Thủ lĩnh lab sinh viên", "student-leader"],
  ];
  return (
    <RouteTransition>
      <PageHero copy={siteContent.pages.organization} />
      {groups.map(([title, group]) => {
        const people = siteContent.people.filter((person) => person.group === group);
        return (
          <OrganizationGroup
            key={group}
            title={title}
            people={people}
            state={resolveSectionState(people, runtimeMode)}
          />
        );
      })}
    </RouteTransition>
  );
}
