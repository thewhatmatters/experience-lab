import { mission } from "../content";
import { PageSection } from "../placeholders/PageSection";
import { Reveal } from "../placeholders/Reveal";

export function Mission() {
  return (
    <PageSection id="mission">
      <Reveal className="col-span-full lg:col-span-4">
        <p className="type-heading-6 text-muted">{mission.eyebrow}</p>
        <h2 className="type-display-2 mt-4 text-fg">{mission.title}</h2>
      </Reveal>
      <Reveal className="col-span-full lg:col-span-4" delay={0.06}>
        <p className="type-body text-fg">{mission.body}</p>
      </Reveal>
      <Reveal className="col-span-full lg:col-span-4" delay={0.1}>
        <p className="type-supporting text-muted">{mission.aside}</p>
      </Reveal>
    </PageSection>
  );
}
