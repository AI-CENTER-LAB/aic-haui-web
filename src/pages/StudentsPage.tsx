import {
  InternshipSection,
  JoinProcess,
  LabComparison,
  StudentCTA,
} from "../components/cards/StudentCards";
import { RouteTransition } from "../components/layout/RouteTransition";
import { ContentSection } from "../components/sections/ContentSection";
import { PageHero } from "../components/sections/PageHero";
import { resolveSectionState, runtimeMode } from "../content/selectors";
import { siteContent } from "../content/site";

export function StudentsPage() {
  const data = siteContent.students;
  return (
    <RouteTransition>
      <PageHero copy={siteContent.pages.students} />
      <ContentSection
        title="Không gian nghiên cứu"
        state={resolveSectionState(data.labs, runtimeMode)}
        emptyLabel="Chưa có dữ liệu phòng lab đã xác minh"
      >
        <LabComparison labs={data.labs} />
      </ContentSection>
      <ContentSection
        title="Thực tập nghiên cứu"
        state={resolveSectionState(data.internship ? [data.internship] : [], runtimeMode)}
        emptyLabel="Chưa có thông tin thực tập đã xác minh"
        tone="mist"
      >
        <InternshipSection content={data.internship} />
      </ContentSection>
      <ContentSection
        title="Quy trình tham gia"
        state={resolveSectionState(data.joinSteps, runtimeMode)}
        emptyLabel="Chưa có quy trình tham gia đã xác minh"
      >
        <JoinProcess steps={data.joinSteps} />
      </ContentSection>
      <StudentCTA href={data.contactHref} title="Dành cho sinh viên" />
    </RouteTransition>
  );
}
