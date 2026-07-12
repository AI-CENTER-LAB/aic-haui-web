import { ContactCTA, ContactGrid } from "../components/cards/ContactCards";
import { RouteTransition } from "../components/layout/RouteTransition";
import { MapFrame } from "../components/media/MapFrame";
import { PageHero } from "../components/sections/PageHero";
import { PageContainer } from "../components/ui/PageContainer";
import { Section } from "../components/ui/Section";
import { SectionStateView } from "../components/ui/SectionStateView";
import { resolveSectionState, runtimeMode } from "../content/selectors";
import { siteContent } from "../content/site";

export function ContactPage() {
  const data = siteContent.contact;
  const state = resolveSectionState(
    [...data.items, ...(data.mapUrl ? [data.mapUrl] : [])],
    runtimeMode,
  );
  return (
    <RouteTransition>
      <PageHero copy={siteContent.pages.contact} />
      <Section className="bg-aic-mist/55">
        <PageContainer>
          <SectionStateView state={state} emptyLabel="Chưa có thông tin liên hệ đã xác minh">
            <div className="grid gap-6 lg:grid-cols-[.75fr_1.5fr]">
              <div>
                <ContactGrid items={data.items} />
                <div className="mt-5">
                  <ContactCTA email={data.email} />
                </div>
              </div>
              <MapFrame url={data.mapUrl} />
            </div>
          </SectionStateView>
        </PageContainer>
      </Section>
    </RouteTransition>
  );
}
