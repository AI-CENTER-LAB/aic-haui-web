import type { SiteContent } from "../../content/types";
import type { AboutSectionLabels } from "../../content/labels";
import { VideoFrame } from "../media/VideoFrame";
import { PageContainer } from "../ui/PageContainer";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

type HomeAboutProps = {
  content: SiteContent["about"];
  title: string;
  labels: AboutSectionLabels;
  showVideo?: boolean;
  showParentUnit?: boolean;
  sectionId?: string;
  testId?: string;
};

export function HomeAbout({
  content,
  title,
  labels,
  showVideo = true,
  showParentUnit = false,
  sectionId,
  testId,
}: HomeAboutProps) {
  return (
    <>
      <Section
        id={sectionId}
        data-testid={testId}
        className="section-reveal scroll-mt-20 overflow-hidden bg-aic-mist/60 lg:scroll-mt-24"
      >
        <PageContainer>
          <div className="relative overflow-hidden rounded-media border border-aic-line bg-white shadow-soft lg:grid lg:grid-cols-[1.1fr_.9fr]">
            <div className="relative z-10 p-6 sm:p-9 lg:p-12 lg:pb-28">
              <SectionHeading title={title} className="mb-6" />
              {content.intro && (
                <p className="max-w-2xl text-base leading-8 text-aic-muted md:text-lg">
                  {content.intro}
                </p>
              )}
            </div>
            <div
              className="neutral-visual min-h-48 border-t border-aic-line lg:min-h-full lg:border-l lg:border-t-0"
              aria-hidden="true"
            />
            <div className="relative z-20 grid gap-4 p-6 pt-0 sm:p-9 sm:pt-0 md:grid-cols-2 lg:col-span-2 lg:-mt-16 lg:w-[72%] lg:pr-0">
              {content.vision && (
                <article className="rounded-card border border-aic-line bg-white p-6 shadow-card">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-aic-gold-dark">
                    {labels.visionHeading}
                  </h3>
                  <p className="mt-3 leading-7 text-aic-muted">{content.vision}</p>
                </article>
              )}
              {content.mission && (
                <article className="rounded-card border border-aic-line bg-white p-6 shadow-card">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-aic-gold-dark">
                    {labels.missionHeading}
                  </h3>
                  <p className="mt-3 leading-7 text-aic-muted">{content.mission}</p>
                </article>
              )}
            </div>
          </div>
        </PageContainer>
      </Section>
      {showVideo && (
        <Section data-testid="home-video" className="section-reveal bg-white">
          <PageContainer>
            <SectionHeading title={labels.videoHeading} align="center" className="mb-9" />
            <div className="mx-auto max-w-5xl">
              <VideoFrame mediaRef="about.intro-video" />
            </div>
          </PageContainer>
        </Section>
      )}
      {showParentUnit && content.parentUnit && (
        <Section className="section-reveal bg-white">
          <PageContainer>
            <div className="rounded-media border border-aic-line bg-aic-mist/55 p-7 md:p-10">
              <SectionHeading title={labels.parentUnitHeading} className="mb-5" />
              <p className="max-w-3xl text-lg leading-8 text-aic-muted">{content.parentUnit}</p>
            </div>
          </PageContainer>
        </Section>
      )}
    </>
  );
}
