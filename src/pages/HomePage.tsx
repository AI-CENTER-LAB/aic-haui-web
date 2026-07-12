import { siteContent } from "../content/site";
import { resolveSectionState, runtimeMode } from "../content/selectors";
import { CooperationCTA } from "../components/cards/CooperationCards";
import { ContactGrid } from "../components/cards/ContactCards";
import { PersonGrid } from "../components/cards/PersonCard";
import { ResearchGrid } from "../components/cards/ResearchCards";
import { LabComparison } from "../components/cards/StudentCards";
import { VideoFrame } from "../components/media/VideoFrame";
import { ContentSection } from "../components/sections/ContentSection";
import { DynamicHero } from "../components/sections/DynamicHero";
import { RouteTransition } from "../components/layout/RouteTransition";

export function HomePage() {
  const intro = siteContent.about.intro;
  const visionMission = [siteContent.about.vision, siteContent.about.mission].filter(Boolean);
  const people = siteContent.people.slice(0, 3);
  const research = siteContent.research.directions.slice(0, 3);
  const labs = siteContent.students.labs.slice(0, 2);
  const cooperationHref = siteContent.cooperation.contactHref;
  return (
    <RouteTransition>
      <DynamicHero content={siteContent.hero} />
      <ContentSection
        title="Về chúng tôi"
        state={resolveSectionState(intro ? [intro] : [], runtimeMode)}
        emptyLabel="Chưa có nội dung giới thiệu đã xác minh"
      >
        <p className="max-w-3xl text-lg leading-8 text-aic-muted">{intro}</p>
      </ContentSection>
      <ContentSection
        title="Tầm nhìn và sứ mệnh"
        state={resolveSectionState(visionMission, runtimeMode)}
        emptyLabel="Chưa có tầm nhìn và sứ mệnh đã xác minh"
        tone="mist"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {visionMission.map((item) => (
            <p
              key={item}
              className="rounded-card border border-aic-line bg-white p-6 leading-7 text-aic-muted"
            >
              {item}
            </p>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        title="Video giới thiệu"
        state={resolveSectionState(
          siteContent.about.video ? [siteContent.about.video] : [],
          runtimeMode,
        )}
        emptyLabel="Chưa có video chính thức"
      >
        <VideoFrame asset={siteContent.about.video} />
      </ContentSection>
      <ContentSection
        title="Tổ chức"
        state={resolveSectionState(people, runtimeMode)}
        emptyLabel="Chưa có dữ liệu nhân sự đã xác minh"
      >
        <PersonGrid people={people} />
      </ContentSection>
      <ContentSection
        title="Nghiên cứu"
        state={resolveSectionState(research, runtimeMode)}
        emptyLabel="Chưa có dữ liệu nghiên cứu đã xác minh"
        tone="mist"
      >
        <ResearchGrid items={research} />
      </ContentSection>
      <ContentSection
        title="Không gian dành cho sinh viên"
        state={resolveSectionState(labs, runtimeMode)}
        emptyLabel="Chưa có dữ liệu phòng lab đã xác minh"
      >
        <LabComparison labs={labs} />
      </ContentSection>
      <ContentSection
        title="Hợp tác"
        state={resolveSectionState(cooperationHref ? [cooperationHref] : [], runtimeMode)}
        emptyLabel="Chưa có cấu hình hợp tác đã xác minh"
        tone="mist"
      >
        <CooperationCTA href={cooperationHref} title="Đề xuất hợp tác" />
      </ContentSection>
      <ContentSection
        title="Liên hệ"
        state={resolveSectionState(siteContent.contact.items, runtimeMode)}
        emptyLabel="Chưa có thông tin liên hệ đã xác minh"
      >
        <ContactGrid items={siteContent.contact.items} />
      </ContentSection>
    </RouteTransition>
  );
}
