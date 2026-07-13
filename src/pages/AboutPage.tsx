import { RouteTransition } from "../components/layout/RouteTransition";
import { HomeAbout } from "../components/sections/HomeAbout";
import { PageHero } from "../components/sections/PageHero";
import { useLabels } from "../content/labels";
import { useSiteContent } from "../content/site";

export function AboutPage() {
  const siteContent = useSiteContent();
  const { aboutSectionLabels } = useLabels();
  return (
    <RouteTransition>
      <PageHero copy={siteContent.pages.about} />
      <HomeAbout
        content={siteContent.about}
        title={aboutSectionLabels.introHeading}
        labels={aboutSectionLabels}
        showVideo={false}
        showParentUnit
      />
    </RouteTransition>
  );
}
