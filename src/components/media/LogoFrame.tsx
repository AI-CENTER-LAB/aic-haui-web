import type { MediaAsset } from "../../content/types";
import { cn } from "../../lib/cn";
import { MediaFrame } from "./MediaFrame";

export function LogoFrame({
  asset,
  className,
  imageClassName,
}: {
  asset?: MediaAsset;
  className?: string;
  imageClassName?: string;
}) {
  if (!asset) return null;

  return (
    <MediaFrame
      className={cn(
        "flex aspect-[3/2] items-center justify-center rounded-card bg-white p-5",
        className,
      )}
    >
      <img
        className={cn("max-h-full max-w-full object-contain", imageClassName)}
        src={asset.src}
        alt={asset.alt}
        loading="lazy"
      />
    </MediaFrame>
  );
}
