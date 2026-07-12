import { MapPinned } from "lucide-react";
import { MediaFrame } from "./MediaFrame";

export function MapFrame({ url, title = "Bản đồ" }: { url?: string; title?: string }) {
  return (
    <MediaFrame className="aspect-video min-h-72">
      {url ? (
        <iframe
          className="h-full w-full border-0"
          src={url}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-full min-h-72 items-center justify-center">
          <MapPinned className="size-10 text-aic-blue/35" aria-hidden="true" />
        </div>
      )}
    </MediaFrame>
  );
}
