import type { LucideIcon } from "lucide-react";

export type SectionState = "ready" | "empty" | "hidden";
export type RuntimeMode = "development" | "production";

export type MediaAsset = {
  src: string;
  alt: string;
  poster?: string;
};

export type Person = {
  id: string;
  name: string;
  role: string;
  group: "director" | "advisor" | "teacher-lab" | "student-leader";
  email?: string;
  bio?: string;
  image?: MediaAsset;
};

export type ResearchItem = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  image?: MediaAsset;
};

export type Lab = {
  id: string;
  name: string;
  positioning: string;
  audience?: string;
  activities: string[];
  cta?: string;
};

export type CooperationItem = {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  cta?: string;
};

export type Partner = { id: string; name: string; logo: MediaAsset; url?: string };
export type JoinStep = { id: string; title: string; description: string };
export type ContactItem = {
  id: string;
  label: string;
  primary: string;
  secondary?: string;
  href?: string;
};

export type PageCopy = { eyebrow?: string; title: string; description?: string };

export type SiteContent = {
  identity: { shortName: string; fullName: string };
  hero: PageCopy & { primaryCta?: string; secondaryCta?: string; media?: MediaAsset };
  pages: Record<
    "about" | "organization" | "research" | "cooperation" | "students" | "contact",
    PageCopy
  >;
  about: {
    intro?: string;
    vision?: string;
    mission?: string;
    parentUnit?: string;
    video?: MediaAsset;
  };
  people: Person[];
  research: {
    directions: ResearchItem[];
    results: ResearchItem[];
    groups: ResearchItem[];
    activities: ResearchItem[];
  };
  cooperation: { types: CooperationItem[]; partners: Partner[]; contactHref?: string };
  students: {
    labs: Lab[];
    internship?: string;
    recruitment?: string;
    joinSteps: JoinStep[];
    contactHref?: string;
  };
  contact: { items: ContactItem[]; email?: string; mapUrl?: string };
  footer: { description?: string; copyright?: string };
};
