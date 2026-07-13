import type { MediaManifest, MediaManifestRecord, MediaRef } from "./types";

const portraitRefs = [
  "person-le-thi-hoai-an",
  "person-dang-trong-hop",
  "person-nguyen-manh-cuong",
  "person-luong-thi-hong-lan",
  "person-pham-van-ha",
  "person-do-manh-hung",
  "person-dong-hung",
  "person-nha",
  "person-nien",
  "person-long-nhat",
  "person-bao",
  "person-quan",
] as const;

const directionRefs = [
  "research-computer-vision",
  "research-natural-language",
  "research-robotics",
] as const;

const researchGroupRefs = [
  "research-group-computer-vision-lab",
  "research-group-nlp-lab",
  "research-group-robotics-lab",
  "research-group-data-science-lab",
  "research-group-applied-ai-lab",
  "research-group-iot-ai-lab",
  "research-group-ai-ethics-lab",
] as const;

const officialPeopleAssets = {
  "person-le-thi-hoai-an": "/media/official/people/le-thi-hoai-an.webp",
  "person-dang-trong-hop": "/media/official/people/dang-trong-hop.webp",
  "person-nguyen-manh-cuong": "/media/official/people/nguyen-manh-cuong.webp",
  "person-luong-thi-hong-lan": "/media/official/people/luong-thi-hong-lan.webp",
  "person-pham-van-ha": "/media/official/people/pham-van-ha.webp",
  "person-do-manh-hung": "/media/official/people/do-manh-hung.webp",
} as const;

function imageSlot(id: string, aspectRatio = "aspect-[4/3]"): MediaManifestRecord {
  return { id, kind: "image", aspectRatio, alt: "" };
}

export const mediaManifest = {
  "brand.aic.logo": {
    id: "brand.aic.logo",
    kind: "image",
    aspectRatio: "aspect-square",
    src: "/media/official/aic-logo.jpg",
    alt: "Logo AIC",
  },
  "home.hero": imageSlot("home.hero"),
  "about.intro-video": {
    id: "about.intro-video",
    kind: "video",
    aspectRatio: "aspect-video",
    alt: "",
  },
  ...Object.fromEntries(portraitRefs.map((id) => [id, imageSlot(id, "aspect-[4/5]")])),
  ...Object.fromEntries(
    Object.entries(officialPeopleAssets).map(([id, src]) => [
      id,
      { ...imageSlot(id, "aspect-square"), src, alt: "Ảnh chân dung thành viên AIC" },
    ]),
  ),
  ...Object.fromEntries(directionRefs.map((id) => [id, imageSlot(id)])),
  ...Object.fromEntries(researchGroupRefs.map((id) => [id, imageSlot(id)])),
  "students.foundry": imageSlot("students.foundry"),
  "students.innovation": imageSlot("students.innovation"),
  "cooperation.hero": imageSlot("cooperation.hero"),
  "students.hero": imageSlot("students.hero"),
  ...Object.fromEntries(
    Array.from({ length: 8 }, (_, index) => {
      const id = `partner.logo-${index + 1}`;
      return [id, imageSlot(id, "aspect-[3/2]")];
    }),
  ),
  "contact.map": {
    id: "contact.map",
    kind: "map",
    aspectRatio: "aspect-video",
    alt: "",
  },
} satisfies MediaManifest;

export function resolveMedia(
  mediaRef: MediaRef,
  manifest: MediaManifest = mediaManifest,
): MediaManifestRecord | undefined {
  return manifest[mediaRef];
}

export type { MediaManifest } from "./types";

export const officialAssets = {
  logo: {
    src: mediaManifest["brand.aic.logo"].src,
    alt: mediaManifest["brand.aic.logo"].alt,
  },
} as const;
