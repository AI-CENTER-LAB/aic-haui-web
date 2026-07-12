import type { SiteContent } from "../../content/types";
import { routePath } from "../../app/routes";
import { HeroMedia } from "../media/HeroMedia";
import { Button } from "../ui/Button";
import { PageContainer } from "../ui/PageContainer";

export function DynamicHero({ content }: { content: SiteContent["hero"] }) {
  return (
    <section className="relative overflow-hidden bg-aic-navy py-14 text-white md:py-20 lg:min-h-[640px] lg:py-24">
      <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <PageContainer className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.06] tracking-tight md:text-6xl lg:text-7xl">
            {content.title}
          </h1>
          {content.description && (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{content.description}</p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            {content.primaryCta && (
              <Button href={routePath.research} variant="secondary">
                {content.primaryCta}
              </Button>
            )}
            {content.secondaryCta && (
              <Button
                href={routePath.students}
                variant="ghost"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                {content.secondaryCta}
              </Button>
            )}
          </div>
        </div>
        <HeroMedia asset={content.media} />
      </PageContainer>
    </section>
  );
}
