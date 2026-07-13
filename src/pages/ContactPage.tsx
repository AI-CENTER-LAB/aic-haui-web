import { ContactGrid } from "../components/cards/ContactCards";
import { RouteTransition } from "../components/layout/RouteTransition";
import { MapFrame } from "../components/media/MapFrame";
import { ContactCardSkeleton } from "../components/scaffold/ScaffoldBlocks";
import { PageHero } from "../components/sections/PageHero";
import { PageContainer } from "../components/ui/PageContainer";
import { Section } from "../components/ui/Section";
import { contactSectionLabels } from "../content/labels";
import { resolveSectionState, uiScaffoldMode } from "../content/selectors";
import { siteContent } from "../content/site";
import type { SiteContent } from "../content/types";
import { scaffoldConfig } from "../scaffold/config";

export function ContactPage({
  content = siteContent,
  scaffoldMode = uiScaffoldMode,
}: {
  content?: SiteContent;
  scaffoldMode?: boolean;
}) {
  const data = content.contact;
  const state = resolveSectionState(data.items, scaffoldMode, scaffoldConfig.contact.cards);
  const heroCopy = {
    title: contactSectionLabels.heroTitle,
    description: contactSectionLabels.heroDescription,
  };

  return (
    <RouteTransition>
      <PageHero copy={heroCopy} />
      {state.status !== "empty" && (
        <Section className="bg-aic-mist/55">
          <PageContainer>
            <div
              data-testid="contact-band"
              className="grid min-w-0 gap-6 md:grid-cols-[.75fr_1.5fr]"
            >
              {state.status === "scaffold" ? (
                <ContactCardSkeleton count={scaffoldConfig.contact.cards} />
              ) : (
                <ContactGrid items={data.items} headingLevel={2} />
              )}
              <div className="min-w-0 [&>div]:h-full [&>div]:min-h-72 [&>div]:w-full [&>div]:aspect-auto">
                {data.mapUrl ? (
                  <MapFrame url={data.mapUrl} title={contactSectionLabels.mapTitle} />
                ) : (
                  <MapFrame mediaRef="contact.map" />
                )}
              </div>
            </div>
          </PageContainer>
        </Section>
      )}
    </RouteTransition>
  );
}
