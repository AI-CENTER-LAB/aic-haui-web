import { RouteTransition } from "../components/layout/RouteTransition";
import { HomeAbout } from "../components/sections/HomeAbout";
import { PageHero } from "../components/sections/PageHero";
import { aboutSectionLabels } from "../content/labels";
import { verifiedSiteContent } from "../content/verified";

export function AboutPage() {
  return (
    <RouteTransition>
      <PageHero copy={verifiedSiteContent.pages.about} />
      <HomeAbout
        content={verifiedSiteContent.about}
        title={aboutSectionLabels.introHeading}
        labels={aboutSectionLabels}
        showVideo={false}
        showParentUnit
      />
    </RouteTransition>
  );
}
