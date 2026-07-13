import { mediaManifest, resolveMedia } from "../../content/assets";
import type { MediaManifest, MediaRef } from "../../content/types";
import { MediaFrame } from "./MediaFrame";

type MapFrameProps = {
  mediaRef?: MediaRef;
  manifest?: MediaManifest;
  url?: string;
  title?: string;
};

export function MapFrame({
  mediaRef,
  manifest = mediaManifest,
  url,
  title = "Bản đồ",
}: MapFrameProps) {
  const media = mediaRef ? resolveMedia(mediaRef, manifest) : undefined;
  const embedUrl = media ? media.embedUrl : url;
  const imageSrc = media?.src;
  const accessibleTitle = media ? media.alt : title;

  if (!mediaRef && !url) return null;

  return (
    <MediaFrame
      className={`${media?.aspectRatio ?? "aspect-video"} min-h-72 rounded-video${!embedUrl && !imageSrc ? " prototype-media-slot" : ""}`}
      aria-hidden={!embedUrl && !imageSrc ? true : undefined}
      data-testid={!embedUrl && !imageSrc && mediaRef ? `media-slot-${mediaRef}` : undefined}
    >
      {embedUrl ? (
        <iframe
          className="h-full w-full border-0"
          src={embedUrl}
          title={accessibleTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : imageSrc ? (
        <img
          className="h-full w-full object-cover"
          src={imageSrc}
          alt={accessibleTitle}
          loading="lazy"
        />
      ) : null}
    </MediaFrame>
  );
}
