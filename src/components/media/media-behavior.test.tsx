import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import * as assets from "../../content/assets";
import { mediaManifest, resolveMedia } from "../../content/assets";
import { stitchContent } from "../../content/stitch";
import type { MediaAsset } from "../../content/types";
import { HeroMedia } from "./HeroMedia";
import { ImageFrame } from "./ImageFrame";
import { LogoFrame } from "./LogoFrame";
import { VideoFrame } from "./VideoFrame";

describe("media empty and playback behavior", () => {
  it("exports the complete replaceable media manifest and resolver", () => {
    const manifest = (assets as typeof assets & { mediaManifest?: Record<string, unknown> })
      .mediaManifest;
    const resolveMedia = (
      assets as typeof assets & { resolveMedia?: (mediaRef: string) => unknown }
    ).resolveMedia;

    expect(Object.keys(manifest ?? {})).toEqual(
      expect.arrayContaining([
        "brand.aic.logo",
        "home.hero",
        "about.intro-video",
        "person-tran-thi-an",
        "person-nguyen-hop",
        "person-le-cuong",
        "person-hong-lan",
        "person-thay-ha",
        "person-manh-hung",
        "person-dong-hung",
        "person-nha",
        "person-nien",
        "person-long-nhat",
        "person-bao",
        "person-quan",
        "research-computer-vision",
        "research-natural-language",
        "research-robotics",
        "research-group-computer-vision-lab",
        "research-group-nlp-lab",
        "research-group-robotics-lab",
        "research-group-data-science-lab",
        "research-group-applied-ai-lab",
        "research-group-iot-ai-lab",
        "research-group-ai-ethics-lab",
        "students.foundry",
        "students.innovation",
        "cooperation.hero",
        "students.hero",
        "partner.logo-1",
        "partner.logo-8",
        "contact.map",
      ]),
    );
    expect(resolveMedia?.("brand.aic.logo")).toEqual(manifest?.["brand.aic.logo"]);
  });

  it("keeps manifest keys, record ids, and Stitch media references aligned", () => {
    const entries = Object.entries(mediaManifest);
    const stitchMediaRefs = [
      stitchContent.hero.mediaRef,
      ...Object.values(stitchContent.pages).map((page) =>
        "mediaRef" in page ? page.mediaRef : undefined,
      ),
      ...stitchContent.people.map((person) => person.mediaRef),
      ...stitchContent.research.directions.map((item) => item.mediaRef),
      ...stitchContent.research.groups.map((item) =>
        "mediaRef" in item ? item.mediaRef : undefined,
      ),
      ...stitchContent.cooperation.partners.map((partner) => partner.mediaRef),
      ...stitchContent.students.labs.map((lab) => lab.mediaRef),
    ].filter((mediaRef): mediaRef is string => Boolean(mediaRef));

    expect(entries).toHaveLength(38);
    expect(entries.every(([key, record]) => key === record.id)).toBe(true);
    expect(stitchMediaRefs.filter((mediaRef) => !resolveMedia(mediaRef))).toEqual([]);
  });

  it("does not create empty fixed-ratio frames for missing non-hero media", () => {
    expect(render(<ImageFrame />).container).toBeEmptyDOMElement();
    expect(render(<LogoFrame />).container).toBeEmptyDOMElement();
    expect(render(<VideoFrame />).container).toBeEmptyDOMElement();
  });

  it("renders a stable neutral slot when a semantic hero image has no source", () => {
    render(<HeroMedia mediaRef="students.hero" />);

    expect(screen.getByTestId("media-slot-students.hero")).toHaveClass(
      "prototype-media-slot",
      "aspect-[4/3]",
    );
  });

  it("renders a configured semantic hero image", () => {
    render(
      <HeroMedia
        mediaRef="home.hero"
        manifest={{
          "home.hero": {
            id: "home.hero",
            kind: "image",
            aspectRatio: "aspect-[4/3]",
            src: "/media/official/home.webp",
            alt: "AIC",
          },
        }}
      />,
    );

    expect(screen.getByRole("img", { name: "AIC" })).toHaveAttribute(
      "src",
      "/media/official/home.webp",
    );
  });

  it("does not mix a semantic record with a legacy asset source", () => {
    const legacyAsset: MediaAsset = {
      src: "/media/legacy/image.webp",
      alt: "Legacy image",
    };

    render(
      <HeroMedia
        mediaRef="home.hero"
        asset={legacyAsset}
        manifest={{
          "home.hero": {
            id: "home.hero",
            kind: "video",
            aspectRatio: "aspect-video",
            alt: "Semantic video",
          },
        }}
      />,
    );

    expect(screen.getByTestId("media-slot-home.hero")).toHaveClass("prototype-media-slot");
    expect(screen.queryByRole("img", { name: "Legacy image" })).not.toBeInTheDocument();
    expect(document.querySelector("video")).not.toBeInTheDocument();
  });

  it("falls back wholly to a legacy asset when the semantic reference is unresolved", () => {
    render(
      <ImageFrame
        mediaRef="unresolved.image"
        manifest={{}}
        asset={{ src: "/media/legacy/image.webp", alt: "Legacy image" }}
      />,
    );

    expect(screen.getByRole("img", { name: "Legacy image" })).toHaveAttribute(
      "src",
      "/media/legacy/image.webp",
    );
  });

  it("gives unresolved semantic images a stable default aspect ratio", () => {
    render(<ImageFrame mediaRef="unresolved.image" manifest={{}} />);

    expect(screen.getByTestId("media-slot-unresolved.image")).toHaveClass(
      "prototype-media-slot",
      "aspect-[4/3]",
    );
  });

  it("renders a stable neutral slot when a semantic video has no source", () => {
    render(<VideoFrame mediaRef="about.intro-video" />);

    expect(screen.getByTestId("media-slot-about.intro-video")).toHaveClass(
      "prototype-media-slot",
      "aspect-video",
      "rounded-video",
    );
  });

  it("renders configured semantic video metadata accessibly", () => {
    render(
      <VideoFrame
        mediaRef="about.intro-video"
        manifest={{
          "about.intro-video": {
            id: "about.intro-video",
            kind: "video",
            aspectRatio: "aspect-video",
            src: "/media/official/intro.webm",
            poster: "/media/official/intro.webp",
            alt: "Giới thiệu AIC",
          },
        }}
      />,
    );

    expect(screen.getByLabelText("Giới thiệu AIC")).toHaveAttribute(
      "src",
      "/media/official/intro.webm",
    );
    expect(screen.getByLabelText("Giới thiệu AIC")).toHaveAttribute(
      "poster",
      "/media/official/intro.webp",
    );
  });

  it("renders a silent looping hero video without player controls", () => {
    const asset = {
      type: "video",
      src: "/media/official/hero.webm",
      poster: "/media/official/hero.webp",
      alt: "Không gian nghiên cứu AIC",
    } as unknown as MediaAsset;
    const { container } = render(<HeroMedia asset={asset} />);
    const video = container.querySelector("video");

    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute("autoplay");
    expect(video).toHaveAttribute("loop");
    expect(video).not.toHaveAttribute("controls");
  });
});
