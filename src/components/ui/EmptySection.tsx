import { Surface } from "./Surface";

export function EmptySection({ label }: { label: string }) {
  return (
    <Surface className="border-dashed bg-aic-mist/50 px-6 py-5 text-center text-aic-muted">
      <p className="text-sm font-medium">{label}</p>
    </Surface>
  );
}
