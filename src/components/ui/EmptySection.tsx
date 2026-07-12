import { Inbox } from "lucide-react";
import { Surface } from "./Surface";

export function EmptySection({ label }: { label: string }) {
  return (
    <Surface className="flex min-h-40 items-center justify-center border-dashed bg-aic-mist/50 p-8 text-center text-aic-muted">
      <div>
        <Inbox className="mx-auto mb-3 size-6" aria-hidden="true" />
        <p className="text-sm font-medium">{label}</p>
      </div>
    </Surface>
  );
}
