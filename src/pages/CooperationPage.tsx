import {
  CooperationCTA,
  CooperationTypeCard,
  PartnerGrid,
} from "../components/cards/CooperationCards";
import { RouteTransition } from "../components/layout/RouteTransition";
import { ContentSection } from "../components/sections/ContentSection";
import { PageHero } from "../components/sections/PageHero";
import { resolveSectionState, runtimeMode } from "../content/selectors";
import { siteContent } from "../content/site";

export function CooperationPage() {
  const data = siteContent.cooperation;
  return (
    <RouteTransition>
      <PageHero copy={siteContent.pages.cooperation} />
      <ContentSection
        title="Lĩnh vực hợp tác"
        state={resolveSectionState(data.types, runtimeMode)}
        emptyLabel="Chưa có lĩnh vực hợp tác đã xác minh"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.types.map((item) => (
            <CooperationTypeCard key={item.id} item={item} />
          ))}
        </div>
      </ContentSection>
      <ContentSection
        title="Đối tác"
        state={resolveSectionState(data.partners, runtimeMode)}
        emptyLabel="Chưa có đối tác chính thức"
        tone="mist"
      >
        <PartnerGrid partners={data.partners} />
      </ContentSection>
      <CooperationCTA href={data.contactHref} title="Đề xuất hợp tác" />
    </RouteTransition>
  );
}
