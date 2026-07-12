import type { Person, SectionState } from "../../content/types";
import { PersonGrid } from "../cards/PersonCard";
import { ContentSection } from "./ContentSection";

export function OrganizationGroup({
  title,
  people,
  state,
}: {
  title: string;
  people: Person[];
  state: SectionState;
}) {
  return (
    <ContentSection title={title} state={state} emptyLabel="Chưa có dữ liệu nhân sự đã xác minh">
      <PersonGrid people={people} />
    </ContentSection>
  );
}
