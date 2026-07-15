import {
  CooperationCTA,
  CooperationTypeCard,
  InternationalCooperationBanner,
  PartnerGrid,
} from "../components/cards/CooperationCards";
import { RouteTransition } from "../components/layout/RouteTransition";
import { HeroMedia } from "../components/media/HeroMedia";
import {
  CooperationBannerSkeleton,
  CooperationTypeSkeleton,
  MediaSkeleton,
  PartnerLogoSkeleton,
} from "../components/scaffold/ScaffoldBlocks";
import { ContentSection } from "../components/sections/ContentSection";
import { Button } from "../components/ui/Button";
import { PageContainer } from "../components/ui/PageContainer";
import { Section } from "../components/ui/Section";
import { useLabels } from "../content/labels";
import { resolveSectionState, uiScaffoldMode } from "../content/selectors";
import { useSiteContent } from "../content/site";
import type { SiteContent } from "../content/types";
import { scaffoldConfig } from "../scaffold/config";

export function CooperationPage({
  content,
  scaffoldMode,
}: {
  content?: SiteContent;
  scaffoldMode?: boolean;
}) {
  const defaultContent = useSiteContent();
  const { cooperationSectionLabels } = useLabels();
  const actualContent = content || defaultContent;
  const data = actualContent.cooperation;
  const isScaffold = scaffoldMode ?? uiScaffoldMode;
  const cooperationTypes = [...data.enterprise, ...data.research, ...data.technologyTransfer];
  const typeState = resolveSectionState(
    cooperationTypes,
    isScaffold,
    scaffoldConfig.cooperation.types,
  );
  const internationalState = resolveSectionState(
    data.international,
    isScaffold,
    scaffoldConfig.cooperation.international,
  );
  const partnerState = resolveSectionState(
    data.partners,
    isScaffold,
    scaffoldConfig.cooperation.partners,
  );
  const contactHref = data.contactHref?.startsWith("mailto:") ? data.contactHref : undefined;
  const heroActionHref = typeState.status === "ready" ? "#cooperation-fields" : undefined;

  return (
    <RouteTransition>
      <header
        data-testid="cooperation-hero"
        className="border-b border-aic-line bg-hero-wash py-16 md:py-24"
      >
        <PageContainer className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              {actualContent.pages.cooperation.title}
            </h1>
            {actualContent.pages.cooperation.description && (
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                {actualContent.pages.cooperation.description}
              </p>
            )}
            {heroActionHref && (
              <Button href={heroActionHref} className="mt-7">
                {cooperationSectionLabels.heroCta}
              </Button>
            )}
          </div>
          <div
            data-testid="cooperation-hero-media"
            className="[&>.hero-visual]:!aspect-[4/3] [&>.hero-visual]:lg:!aspect-[4/3]"
          >
            {isScaffold ? (
              <MediaSkeleton className="aspect-[4/3]" />
            ) : (
              <HeroMedia mediaRef={actualContent.pages.cooperation.mediaRef} />
            )}
          </div>
        </PageContainer>
      </header>
      <ContentSection
        title={cooperationSectionLabels.fields}
        state={typeState}
        scaffold={<CooperationTypeSkeleton count={scaffoldConfig.cooperation.types} />}
      >
        <div id="cooperation-fields" data-testid="cooperation-fields">
          <div
            data-testid="cooperation-field-grid"
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {cooperationTypes.map((item) => (
              <CooperationTypeCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </ContentSection>
      {internationalState.status !== "empty" && (
        <Section
          data-testid="cooperation-international"
          className="section-reveal bg-white pt-0 md:pt-0 lg:pt-0"
        >
          <PageContainer>
            {internationalState.status === "scaffold" ? (
              <CooperationBannerSkeleton />
            ) : (
              internationalState.items.map((item) => (
                <InternationalCooperationBanner key={item.id} item={item} />
              ))
            )}
          </PageContainer>
        </Section>
      )}
      <ContentSection
        title={cooperationSectionLabels.partners}
        state={partnerState}
        scaffold={<PartnerLogoSkeleton count={scaffoldConfig.cooperation.partners} />}
        tone="mist"
      >
        <div data-testid="cooperation-partners">
          <PartnerGrid partners={data.partners} />
        </div>
      </ContentSection>
      {contactHref && (
        <Section data-testid="cooperation-closing" className="bg-aic-mist/70">
          <PageContainer>
            <CooperationCTA
              href={contactHref}
              title={cooperationSectionLabels.closingTitle}
              description={cooperationSectionLabels.closingDescription}
              buttonLabel={cooperationSectionLabels.closingButton}
              headingLevel={2}
              tone="light"
            />
          </PageContainer>
        </Section>
      )}
    </RouteTransition>
  );
}
