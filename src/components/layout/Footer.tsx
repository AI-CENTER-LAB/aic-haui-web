import { Link } from "react-router-dom";
import { navigationRoutes } from "../../app/routes";
import { siteContent } from "../../content/site";
import { PageContainer } from "../ui/PageContainer";

export function Footer() {
  return (
    <footer className="bg-aic-navy py-12 text-white md:py-16">
      <PageContainer className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-display text-2xl font-bold text-aic-gold">
            {siteContent.identity.shortName}
          </p>
          {siteContent.footer.description && (
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
              {siteContent.footer.description}
            </p>
          )}
        </div>
        <nav aria-label="Điều hướng cuối trang" className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {navigationRoutes.map((route) => (
            <Link
              key={route.key}
              to={route.path}
              className="rounded-lg px-2 py-2 text-sm font-semibold text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aic-gold"
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </PageContainer>
      {siteContent.footer.copyright && (
        <PageContainer className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
          {siteContent.footer.copyright}
        </PageContainer>
      )}
    </footer>
  );
}
