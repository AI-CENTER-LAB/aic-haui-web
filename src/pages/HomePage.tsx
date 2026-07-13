import { ContactGrid } from "../components/cards/ContactCards";
import { PersonGrid } from "../components/cards/PersonCard";
import { RouteTransition } from "../components/layout/RouteTransition";
import { MapFrame } from "../components/media/MapFrame";
import { DynamicHero } from "../components/sections/DynamicHero";
import { HomeNews } from "../components/sections/HomeNews";
import { HomeAbout } from "../components/sections/HomeAbout";
import { PageContainer } from "../components/ui/PageContainer";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { useSiteContent } from "../content/site";
import { useLabels } from "../content/labels";

export function HomePage() {
  const siteContent = useSiteContent();
  const { aboutSectionLabels } = useLabels();
  const directors = siteContent.people.filter((person) => person.group === "director").slice(0, 3);

  return (
    <RouteTransition>
      <DynamicHero content={siteContent.hero} />
      <Reveal><HomeNews /></Reveal>
      <Reveal>
        <HomeAbout
          content={siteContent.about}
          title={aboutSectionLabels.homeHeading}
          labels={aboutSectionLabels}
          testId="home-about"
        />
      </Reveal>
      <Reveal>
        <Section data-testid="home-organization" className="bg-aic-mist/55">
        <PageContainer>
          <SectionHeading
            title={siteContent.pages.organization.title}
            description={siteContent.pages.organization.description}
            align="center"
            className="mb-10"
          />
          <PersonGrid
            people={directors}
            variant="director"
            className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          />
        </PageContainer>
        </Section>
      </Reveal>
      <Reveal>
        <Section data-testid="home-contact" className="bg-white">
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
