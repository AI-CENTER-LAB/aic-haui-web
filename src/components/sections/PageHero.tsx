import type { ReactNode } from "react";
import type { PageCopy } from "../../content/types";
import { PageContainer } from "../ui/PageContainer";

export function PageHero({ copy, media }: { copy: PageCopy; media?: ReactNode }) {
  return (
    <header className="border-b border-aic-line bg-hero-wash bg-cover bg-center py-16 text-white md:py-24">
      <PageContainer className={media ? "grid items-center gap-10 lg:grid-cols-2" : "text-center"}>
        <div>
<<<<<<< HEAD
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
=======
          <h1 className="font-display text-4xl font-bold tracking-tight text-aic-navy md:text-6xl">
>>>>>>> 87ea9115c2fbbfc4d4665bff8f70e4d3037b9172
            {copy.title}
          </h1>
          {copy.description && (
            <p
              className={
                media
<<<<<<< HEAD
                  ? "mt-5 max-w-2xl text-lg leading-8 text-white/80"
                  : "mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80"
=======
                  ? "mt-5 max-w-2xl text-lg leading-8 text-aic-muted"
                  : "mx-auto mt-5 max-w-3xl text-lg leading-8 text-aic-muted"
>>>>>>> 87ea9115c2fbbfc4d4665bff8f70e4d3037b9172
              }
            >
              {copy.description}
            </p>
          )}
        </div>
        {media}
      </PageContainer>
    </header>
  );
}
