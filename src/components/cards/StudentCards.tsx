import type { ReactNode } from "react";

import type { JoinStep, Lab, PageCopy } from "../../content/types";
import { ImageFrame } from "../media/ImageFrame";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { PageContainer } from "../ui/PageContainer";

export function StudentHero({
  copy,
  ctaHref,
  ctaLabel,
  scaffold,
}: {
  copy: PageCopy;
  ctaHref?: string;
  ctaLabel: string;
  scaffold?: ReactNode;
}) {
  const hasMedia = Boolean(scaffold || copy.mediaRef);

  return (
    <header className="border-b border-aic-line bg-hero-wash bg-cover bg-center py-16 text-white md:py-24">
      <PageContainer
        data-testid="students-hero"
        className={hasMedia ? "grid items-center gap-10 md:grid-cols-2" : undefined}
      >
        <div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            {copy.title}
          </h1>
          {copy.description && (
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{copy.description}</p>
          )}
          {ctaHref && (
            <Button href={ctaHref} className="mt-7">
              {ctaLabel}
            </Button>
          )}
        </div>
        {hasMedia && (scaffold ?? <ImageFrame mediaRef={copy.mediaRef} className="rounded-hero" />)}
      </PageContainer>
    </header>
  );
}

export function LabCard({ lab }: { lab: Lab }) {
  return (
    <Card
      data-student-lab={lab.id}
      className={
        lab.id === "foundry" ? "border-aic-gold/50 bg-aic-warm" : "border-aic-blue/20 bg-aic-mist"
      }
    >
      <ImageFrame mediaRef={lab.mediaRef} asset={lab.image} className="mb-6 rounded-card" />
      <h3 className="font-display text-2xl font-bold text-aic-navy">{lab.name}</h3>
      {lab.positioning && (
        <p className="mt-3 text-sm leading-6 text-aic-muted">{lab.positioning}</p>
      )}
      {lab.benefits && lab.benefits.length > 0 && (
        <ul className="mt-5 grid gap-3 text-sm text-aic-muted">
          {lab.benefits.map((benefit) => (
            <li key={benefit} data-lab-benefit className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-aic-blue"
              />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export function LabComparison({ labs }: { labs: Lab[] }) {
  return (
    <div data-testid="student-lab-grid" className="grid gap-5 md:grid-cols-2">
      {labs.map((lab) => (
        <LabCard key={lab.id} lab={lab} />
      ))}
    </div>
  );
}

export function JoinProcess({ steps }: { steps: JoinStep[] }) {
  if (!steps.length) return null;
  return (
    <ol data-testid="student-timeline" className="grid gap-4 md:grid-cols-5">
      {steps.map((step, index) => (
        <li key={step.id} className="rounded-card border border-aic-line bg-white p-5">
          <span className="grid size-10 place-items-center rounded-full bg-aic-blue font-bold text-white">
            {index + 1}
          </span>
          <h3 className="mt-4 font-bold text-aic-navy">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-aic-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

export function StudentCTA({
  href,
  title,
  buttonLabel,
}: {
  href?: string;
  title: string;
  buttonLabel: string;
}) {
  if (!href) return null;
  return (
    <div className="rounded-media bg-aic-navy p-8 text-center text-white md:p-12">
      <h2 className="font-display text-3xl font-bold">{title}</h2>
      <Button href={href} variant="secondary" className="mt-6">
        {buttonLabel}
      </Button>
    </div>
  );
}
