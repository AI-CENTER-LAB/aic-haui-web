import { RouteTransition } from "../components/layout/RouteTransition";
import { ContentSection } from "../components/sections/ContentSection";
import { PageHero } from "../components/sections/PageHero";
import { resolveSectionState, runtimeMode } from "../content/selectors";
import { siteContent } from "../content/site";

export function AboutPage() {
  const sections = [
    { title: "Giới thiệu", value: siteContent.about.intro },
    { title: "Tầm nhìn", value: siteContent.about.vision },
    { title: "Sứ mệnh", value: siteContent.about.mission },
    { title: "Đơn vị trực thuộc", value: siteContent.about.parentUnit },
  ];
  return (
    <RouteTransition>
      <PageHero copy={siteContent.pages.about} />
      {sections.map(({ title, value }, index) => (
        <ContentSection
          key={title}
          title={title}
          state={resolveSectionState(value ? [value] : [], runtimeMode)}
          emptyLabel="Chưa có nội dung đã xác minh"
          tone={index % 2 ? "mist" : "white"}
        >
          <p className="max-w-3xl text-lg leading-8 text-aic-muted">{value}</p>
        </ContentSection>
      ))}
    </RouteTransition>
  );
}
