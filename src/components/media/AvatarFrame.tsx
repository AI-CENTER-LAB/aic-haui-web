import type { MediaAsset } from "../../content/types";
import { ImageFrame } from "./ImageFrame";

export function AvatarFrame({ asset }: { asset?: MediaAsset }) {
  return <ImageFrame asset={asset} className="aspect-[4/5] rounded-card" />;
}
