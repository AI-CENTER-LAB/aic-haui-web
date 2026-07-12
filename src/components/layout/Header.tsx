import { Link } from "react-router-dom";
import { siteContent } from "../../content/site";
import { PageContainer } from "../ui/PageContainer";
import { DesktopNav } from "../navigation/DesktopNav";
import { MobileNav } from "../navigation/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-aic-line/80 bg-white/90 backdrop-blur-xl">
      <PageContainer className="flex h-16 items-center justify-between gap-5 lg:h-20">
        <Link
          to="/"
          className="rounded-full font-display text-xl font-extrabold tracking-tight text-aic-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aic-blue lg:text-2xl"
        >
          {siteContent.identity.shortName}
        </Link>
        <DesktopNav />
        <MobileNav />
      </PageContainer>
    </header>
  );
}
