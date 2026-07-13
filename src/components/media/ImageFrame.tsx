import { mediaManifest, resolveMedia } from "../../content/assets";
import type { MediaManifest, MediaAsset, MediaRef } from "../../content/types";
import { MediaFrame } from "./MediaFrame";

type ImageFrameProps = {
  mediaRef?: MediaRef;
  manifest?: MediaManifest;
  asset?: MediaAsset;
  className?: string;
};

export function ImageFrame({
  mediaRef,
  manifest = mediaManifest,
  asset,
  className,
}: ImageFrameProps) {
  const media = mediaRef ? resolveMedia(mediaRef, manifest) : undefined;
  const source = media ?? asset;
  const src = source?.src;
  const alt = source?.alt ?? "";
  const aspectRatio = media?.aspectRatio ?? (mediaRef ? "aspect-[4/3]" : "");

  if (!mediaRef && !asset) return null;

  return (
    <MediaFrame
      className={`${aspectRatio} ${className ?? ""}${!src ? " prototype-media-slot" : ""}`}
      aria-hidden={!src || undefined}
      data-testid={!src && mediaRef ? `media-slot-${mediaRef}` : undefined}
    >
      {src && <img className="h-full w-full object-cover" src={src} alt={alt} loading="lazy" />}
    </MediaFrame>
  );
}
