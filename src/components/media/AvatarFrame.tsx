import type { MediaAsset, MediaRef } from "../../content/types";
import { ImageFrame } from "./ImageFrame";

export function AvatarFrame({
  asset,
  mediaRef,
  className,
}: {
  asset?: MediaAsset;
  mediaRef?: MediaRef;
  className?: string;
}) {
  return (
    <ImageFrame
      asset={asset}
      mediaRef={mediaRef}
      className={`aspect-[4/5] rounded-card ${className ?? ""}`}
    />
  );
}
