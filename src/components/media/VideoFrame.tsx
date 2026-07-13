import { mediaManifest, resolveMedia } from "../../content/assets";
import type { MediaManifest, MediaAsset, MediaRef } from "../../content/types";
import { MediaFrame } from "./MediaFrame";

type VideoFrameProps = {
  mediaRef?: MediaRef;
  manifest?: MediaManifest;
  asset?: MediaAsset;
  scaffold?: boolean;
};

export function VideoFrame({
  mediaRef,
  manifest = mediaManifest,
  asset,
  scaffold = false,
}: VideoFrameProps) {
  const media = mediaRef ? resolveMedia(mediaRef, manifest) : undefined;
  const source = media ?? asset;
  const src = source?.src;
  const alt = source?.alt ?? "";

  if (!mediaRef && !asset && !scaffold) return null;

  return (
    <MediaFrame
      className={`${media?.aspectRatio ?? "aspect-video"} rounded-video${!src ? " prototype-media-slot" : ""}`}
      aria-hidden={!src || undefined}
      data-testid={!src && mediaRef ? `media-slot-${mediaRef}` : undefined}
    >
      {src && (
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={source?.poster}
          aria-label={alt || undefined}
          controls
          preload="metadata"
        >
          {alt}
        </video>
      )}
    </MediaFrame>
  );
}
