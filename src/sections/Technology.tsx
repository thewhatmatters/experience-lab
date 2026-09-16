import { Stat } from "@whatmatters/wmds";
import { technology } from "../content";
import { MediaFrame } from "../placeholders/MediaFrame";
import { PageSection } from "../placeholders/PageSection";
import { Reveal } from "../placeholders/Reveal";

export function Technology() {
  return (
    <PageSection id="technology">
      <Reveal className="col-span-full lg:col-span-5">
        <p className="type-heading-6 text-muted">{technology.eyebrow}</p>
        <h2 className="type-display-2 mt-4 text-fg">{technology.title}</h2>
        <p className="type-body mt-6 max-w-xl text-muted">{technology.body}</p>
      </Reveal>
      <Reveal className="col-span-full lg:col-span-7" delay={0.08}>
        <MediaFrame
          label="Placeholder campus massing"
          caption="02 / Massing"
          wash="slate"
          ratio="16 / 10"
        />
      </Reveal>
      <Reveal className="col-span-full mt-4">
        <Stat.Group aria-label="Campus figures" columns={4}>
          {technology.stats.map((stat) => (
            <Stat key={stat.label} label={stat.label} value={stat.value} size="md" />
          ))}
        </Stat.Group>
      </Reveal>
    </PageSection>
  );
}
