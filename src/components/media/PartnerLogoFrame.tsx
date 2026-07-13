import type { MediaAsset } from "../../content/types";
import { cn } from "../../lib/cn";
import { MediaFrame } from "./MediaFrame";

export function PartnerLogoFrame({
  asset,
  label,
  className,
}: {
  asset?: MediaAsset;
  label: string;
  className?: string;
}) {
  return (
    <MediaFrame
      data-logo-source={asset?.src ? "real" : "slot"}
      className={cn(
        "flex aspect-[3/2] items-center justify-center rounded-card border-aic-line bg-white p-5 shadow-none",
        className,
      )}
    >
      {asset?.src ? (
        <img
          className="max-h-full max-w-full object-contain grayscale transition duration-300 hover:grayscale-0 motion-reduce:transition-none"
          src={asset.src}
          alt={asset.alt || label}
          loading="lazy"
        />
      ) : (
        <span className="text-sm font-medium text-aic-muted">{label}</span>
      )}
    </MediaFrame>
  );
}
