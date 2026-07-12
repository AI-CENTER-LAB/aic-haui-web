import { ResearchGrid } from "../components/cards/ResearchCards";
import { RouteTransition } from "../components/layout/RouteTransition";
import { ContentSection } from "../components/sections/ContentSection";
import { PageHero } from "../components/sections/PageHero";
import { resolveSectionState, runtimeMode } from "../content/selectors";
import { siteContent } from "../content/site";

export function ResearchPage() {
  const sections = [
    {
      title: "Hướng nghiên cứu",
      items: siteContent.research.directions,
      variant: "direction" as const,
    },
    {
      title: "Kết quả nghiên cứu",
      items: siteContent.research.results,
      variant: "result" as const,
    },
    { title: "Nhóm nghiên cứu", items: siteContent.research.groups, variant: "group" as const },
    {
      title: "Hoạt động nổi bật",
      items: siteContent.research.activities,
      variant: "direction" as const,
    },
  ];
  return (
    <RouteTransition>
      <PageHero copy={siteContent.pages.research} />
      {sections.map(({ title, items, variant }, index) => (
        <ContentSection
          key={title}
          title={title}
          state={resolveSectionState(items, runtimeMode)}
          emptyLabel="Chưa có dữ liệu nghiên cứu đã xác minh"
          tone={index % 2 ? "mist" : "white"}
        >
          <ResearchGrid items={items} variant={variant} />
        </ContentSection>
      ))}
    </RouteTransition>
  );
}
