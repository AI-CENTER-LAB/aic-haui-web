import type { MediaAsset } from "../../content/types";
import { MediaFrame } from "./MediaFrame";

export function LogoFrame({ asset }: { asset?: MediaAsset }) {
  return (
    <MediaFrame className="flex aspect-[3/2] items-center justify-center rounded-card bg-white p-5">
      {asset && (
        <img
          className="max-h-full max-w-full object-contain"
          src={asset.src}
          alt={asset.alt}
          loading="lazy"
        />
      )}
    </MediaFrame>
  );
}
