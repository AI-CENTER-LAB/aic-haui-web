import { ContactGrid } from "../components/cards/ContactCards";
import { RouteTransition } from "../components/layout/RouteTransition";
import { MapFrame } from "../components/media/MapFrame";
import { DynamicHero } from "../components/sections/DynamicHero";
import { HomeNews } from "../components/sections/HomeNews";
import { HomeAbout } from "../components/sections/HomeAbout";
import { OrganizationContent } from "../components/sections/OrganizationContent";
import { PageContainer } from "../components/ui/PageContainer";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { useSiteContent } from "../content/site";
import { useLabels } from "../content/labels";

export function HomePage() {
  const siteContent = useSiteContent();
  const { aboutSectionLabels } = useLabels();

  return (
    <RouteTransition>
      <DynamicHero content={siteContent.hero} />
      <Reveal><HomeNews /></Reveal>
      <Reveal>
        <HomeAbout
          content={siteContent.about}
          title={aboutSectionLabels.homeHeading}
          labels={aboutSectionLabels}
          sectionId="ve-chung-toi"
          testId="home-about"
        />
      </Reveal>
      <Reveal>
        <Section
          id="to-chuc"
          data-testid="home-organization"
          className="scroll-mt-20 bg-aic-mist/55 lg:scroll-mt-24"
        >
        <PageContainer>
          <OrganizationContent content={siteContent} />
        </PageContainer>
        </Section>
      </Reveal>
      <Reveal>
        <Section
          id="lien-he"
          data-testid="home-contact"
          className="scroll-mt-20 bg-white lg:scroll-mt-24"
        >
        <PageContainer>
          <SectionHeading
            title={siteContent.pages.contact.title}
            description={siteContent.pages.contact.description}
            className="mb-9"
          />
          <div
            data-testid="home-contact-band"
            className="grid min-w-0 gap-6 lg:grid-cols-[.75fr_1.5fr]"
          >
            <ContactGrid
              items={siteContent.contact.items}
              className="md:grid-cols-3 lg:grid-cols-1"
            />
            <div className="min-w-0 [&>div]:h-full [&>div]:min-h-72 [&>div]:w-full [&>div]:aspect-auto">
              <MapFrame mediaRef="contact.map" />
            </div>
          </div>
        </PageContainer>
        </Section>
      </Reveal>
    </RouteTransition>
  );
}
