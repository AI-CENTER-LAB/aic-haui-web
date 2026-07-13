import { mediaManifest, resolveMedia } from "../../content/assets";
import type { MediaManifest, MediaAsset, MediaRef } from "../../content/types";
import { MediaFrame } from "./MediaFrame";

type HeroMediaProps = {
  mediaRef?: MediaRef;
  manifest?: MediaManifest;
  asset?: MediaAsset;
};

export function HeroMedia({ mediaRef, manifest = mediaManifest, asset }: HeroMediaProps) {
  const media = mediaRef ? resolveMedia(mediaRef, manifest) : undefined;
  const source = media
    ? {
        kind: media.kind,
        src: media.src,
        alt: media.alt,
        poster: media.poster,
      }
    : asset
      ? {
          kind: asset.type ?? "image",
          src: asset.src,
          alt: asset.alt,
          poster: asset.poster,
        }
      : undefined;
  const src = source?.src;
  const isMissingSemanticMedia = Boolean(mediaRef && !src);

  return (
    <MediaFrame
      className={`hero-visual ${media?.aspectRatio ?? "aspect-[4/3]"} rounded-hero lg:aspect-[16/11]${isMissingSemanticMedia ? " prototype-media-slot" : ""}`}
      aria-hidden={!src || undefined}
      data-testid={isMissingSemanticMedia ? `media-slot-${mediaRef}` : undefined}
    >
      {src && source.kind === "video" ? (
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={source.poster}
          aria-label={source.alt}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : src ? (
        <img className="h-full w-full object-cover" src={src} alt={source.alt} />
      ) : null}
    </MediaFrame>
  );
}
