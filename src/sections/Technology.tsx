import { Stat } from "@whatmatters/wmds";
import { technology } from "../content";
import { PageSection } from "../placeholders/PageSection";

export function Technology() {
  return (
    <PageSection id="technology">
      <div className="col-span-full lg:col-span-6">
        <p className="type-heading-6 text-muted">{technology.eyebrow}</p>
        <h2 className="type-display-2 mt-4 text-fg">{technology.title}</h2>
      </div>
      <div className="col-span-full lg:col-span-6">
        <p className="type-body max-w-xl text-muted">{technology.body}</p>
      </div>
      <div className="col-span-full mt-4">
        <Stat.Group aria-label="Campus figures" columns={4}>
          {technology.stats.map((stat) => (
            <Stat key={stat.label} label={stat.label} value={stat.value} size="md" />
          ))}
        </Stat.Group>
      </div>
    </PageSection>
  );
}
