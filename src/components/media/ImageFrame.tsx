import type { MediaAsset } from "../../content/types";
import { MediaFrame } from "./MediaFrame";

export function ImageFrame({ asset, className }: { asset?: MediaAsset; className?: string }) {
  return (
    <MediaFrame className={className}>
      {asset && (
        <img
          className="h-full w-full object-cover"
          src={asset.src}
          alt={asset.alt}
          loading="lazy"
        />
      )}
    </MediaFrame>
  );
}
