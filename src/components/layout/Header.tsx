import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSiteContent } from "../../content/site";
import { useLanguage } from "../../contexts/LanguageContext";
import { PageContainer } from "../ui/PageContainer";
import { DesktopNav } from "../navigation/DesktopNav";
import { MobileNav } from "../navigation/MobileNav";
import { cn } from "../../lib/cn";
import { officialAssets } from "../../content/assets";

export function Header() {
  const { pathname } = useLocation();
  const siteContent = useSiteContent();
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  const onHome = pathname === "/";
  const overlay = onHome && !scrolled;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  return (
    <header
      className={cn(
        "top-0 z-40 w-full transition duration-300 motion-reduce:transition-none",
        onHome ? "fixed inset-x-0" : "sticky",
        overlay
          ? "border-b border-transparent bg-transparent"
          : "border-b border-aic-line/80 bg-white shadow-soft",
      )}
    >
      <PageContainer className="flex h-16 items-center justify-between gap-5 lg:h-20">
        <Link
          to="/"
          className={cn(
            "flex shrink-0 items-center gap-2.5 rounded-xl font-display text-xl font-extrabold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:text-2xl",
            overlay
              ? "text-white focus-visible:ring-white focus-visible:ring-offset-aic-navy"
              : "text-aic-navy focus-visible:ring-aic-blue",
          )}
        >
          <img
            src={officialAssets.logo.src}
            alt={officialAssets.logo.alt}
            width="44"
            height="44"
            className="size-9 rounded-[10px] object-cover shadow-soft lg:size-11"
          />
          <span>{siteContent.identity.shortName}</span>
        </Link>
        <div className="flex items-center gap-4">
          <DesktopNav tone={overlay ? "dark" : "light"} />
          <div className={cn("hidden lg:flex items-center gap-2 text-sm font-semibold", overlay ? "text-white/80" : "text-aic-navy/80")}>
            <button 
              onClick={() => setLanguage("vn")}
              className={cn("transition-colors hover:text-aic-blue", language === "vn" ? (overlay ? "text-white font-bold" : "text-aic-navy font-bold") : "")}
            >VN</button>
            <span className="opacity-40">|</span>
            <button 
              onClick={() => setLanguage("en")}
              className={cn("transition-colors hover:text-aic-blue", language === "en" ? (overlay ? "text-white font-bold" : "text-aic-navy font-bold") : "")}
            >EN</button>
          </div>
        </div>
        <MobileNav tone={overlay ? "dark" : "light"} />
      </PageContainer>
    </header>
  );
}
