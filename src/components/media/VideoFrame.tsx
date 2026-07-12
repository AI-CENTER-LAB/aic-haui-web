import type { MediaAsset } from "../../content/types";
import { MediaFrame } from "./MediaFrame";

export function VideoFrame({ asset }: { asset?: MediaAsset }) {
  return (
    <MediaFrame className="aspect-video">
      {asset && (
        <video
          className="h-full w-full object-cover"
          src={asset.src}
          poster={asset.poster}
          controls
          preload="metadata"
        >
          {asset.alt}
        </video>
      )}
    </MediaFrame>
  );
}
