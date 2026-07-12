import type { JoinStep, Lab } from "../../content/types";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function LabCard({ lab }: { lab: Lab }) {
  return (
    <Card className="border-aic-blue/20 bg-gradient-to-br from-white to-aic-mist">
      <h3 className="font-display text-2xl font-bold text-aic-navy">{lab.name}</h3>
      <p className="mt-3 text-sm leading-6 text-aic-muted">{lab.positioning}</p>
      {lab.audience && <p className="mt-4 text-sm font-semibold text-aic-blue">{lab.audience}</p>}
      {lab.activities.length > 0 && (
        <ul className="mt-4 grid gap-2 text-sm text-aic-muted">
          {lab.activities.map((activity) => (
            <li key={activity}>• {activity}</li>
          ))}
        </ul>
      )}
    </Card>
  );
}
export function LabComparison({ labs }: { labs: Lab[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {labs.map((lab) => (
        <LabCard key={lab.id} lab={lab} />
      ))}
    </div>
  );
}
export function JoinProcess({ steps }: { steps: JoinStep[] }) {
  if (!steps.length) return null;
  return (
    <ol className="grid gap-4 md:grid-cols-5">
      {steps.map((step, index) => (
        <li key={step.id} className="rounded-card border border-aic-line bg-white p-5">
          <span className="grid size-10 place-items-center rounded-full bg-aic-blue font-bold text-white">
            {index + 1}
          </span>
          <h3 className="mt-4 font-bold text-aic-navy">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-aic-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
export function InternshipSection({ content }: { content?: string }) {
  if (!content) return null;
  return (
    <Card>
      <p className="leading-7 text-aic-muted">{content}</p>
    </Card>
  );
}
export function StudentCTA({ href, title }: { href?: string; title: string }) {
  if (!href) return null;
  return (
    <div className="rounded-media bg-aic-blue p-8 text-center text-white">
      <h2 className="font-display text-3xl font-bold">{title}</h2>
      <Button href={href} variant="secondary" className="mt-6">
        Liên hệ
      </Button>
    </div>
  );
}
