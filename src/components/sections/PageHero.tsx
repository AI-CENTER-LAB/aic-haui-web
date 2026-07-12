import type { PageCopy } from "../../content/types";
import { PageContainer } from "../ui/PageContainer";

export function PageHero({ copy }: { copy: PageCopy }) {
  return (
    <header className="border-b border-aic-line bg-hero-wash py-16 md:py-24">
      <PageContainer className="text-center">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-aic-navy md:text-6xl">
          {copy.title}
        </h1>
        {copy.description && (
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-aic-muted">
            {copy.description}
          </p>
        )}
      </PageContainer>
    </header>
  );
}
