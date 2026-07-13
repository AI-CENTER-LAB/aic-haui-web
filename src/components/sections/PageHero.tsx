import type { ReactNode } from "react";
import type { PageCopy } from "../../content/types";
import { PageContainer } from "../ui/PageContainer";

export function PageHero({ copy, media }: { copy: PageCopy; media?: ReactNode }) {
  return (
    <header className="border-b border-aic-line bg-hero-wash py-16 md:py-24">
      <PageContainer className={media ? "grid items-center gap-10 lg:grid-cols-2" : "text-center"}>
        <div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-aic-navy md:text-6xl">
            {copy.title}
          </h1>
          {copy.description && (
            <p className={media ? "mt-5 max-w-2xl text-lg leading-8 text-aic-muted" : "mx-auto mt-5 max-w-3xl text-lg leading-8 text-aic-muted"}>
              {copy.description}
            </p>
          )}
        </div>
        {media}
      </PageContainer>
    </header>
  );
}
