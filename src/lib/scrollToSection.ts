const HEADER_OFFSET = 88;

export function scrollToSection(sectionId: string, behavior: ScrollBehavior = "smooth") {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior });

  if (window.location.hash !== `#${sectionId}`) {
    window.history.pushState(null, "", `#${sectionId}`);
  }
}
