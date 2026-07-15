import { useState, useEffect } from "react";
import { routePath } from "../../app/routes";
import { resolveMedia } from "../../content/assets";
import { useLabels } from "../../content/labels";
import type { SiteContent } from "../../content/types";
import { Button } from "../ui/Button";
import { PageContainer } from "../ui/PageContainer";

export function DynamicHero({ content }: { content: SiteContent["hero"] }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const { heroLabels } = useLabels();
  const phrases = heroLabels.phrases;

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const manifestMedia = content.mediaRef ? resolveMedia(content.mediaRef) : undefined;
  const useManifestMedia = Boolean(manifestMedia?.src);
  const sourceSrc = useManifestMedia ? manifestMedia?.src : content.media?.src;
  const sourceType = useManifestMedia ? manifestMedia?.kind : content.media?.type;
  const sourcePoster = useManifestMedia ? manifestMedia?.poster : content.media?.poster;
  const sourceAlt = useManifestMedia ? manifestMedia?.alt : content.media?.alt;
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      data-testid="home-hero"
      className="relative flex min-h-[620px] items-center overflow-hidden tech-grid-bg pb-20 pt-28 text-white md:min-h-[680px] md:pb-24 md:pt-32"
    >
      {sourceSrc && sourceType === "video" ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={sourceSrc}
          poster={sourcePoster}
          aria-hidden="true"
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : sourceSrc ? (
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={sourceSrc}
          alt={sourceAlt ?? ""}
        />
      ) : null}
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      <PageContainer className="relative text-center">
        <div className="mx-auto max-w-5xl">
          {content.eyebrow && (
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-aic-gold">
              {content.eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-bold leading-[1.25] tracking-tight md:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <div className="mt-8 flex h-10 items-center justify-center">
            <span
              key={phraseIndex}
              className="animate-cycle font-display text-lg font-bold uppercase tracking-[0.15em] text-aic-gold md:text-xl"
            >
              {phrases[phraseIndex]}
            </span>
          </div>
          {content.description && (
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
              {content.description}
            </p>
          )}
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {content.primaryCta && (
              <Button href={routePath.research} variant="secondary">
                {content.primaryCta}
              </Button>
            )}
            {content.secondaryCta && (
              <Button
                href={routePath.students}
                variant="ghost"
                className="border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                {content.secondaryCta}
              </Button>
            )}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
