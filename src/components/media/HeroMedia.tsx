import type { MediaAsset } from "../../content/types";
import { MediaFrame } from "./MediaFrame";

export function HeroMedia({ asset }: { asset?: MediaAsset }) {
  return (
    <MediaFrame className="hero-visual aspect-[4/3] rounded-hero lg:aspect-[16/11]">
      {asset && <img className="h-full w-full object-cover" src={asset.src} alt={asset.alt} />}
    </MediaFrame>
  );
}
