import { Avatar } from "@whatmatters/wmds";
import { team } from "../content";
import { PageSection } from "../placeholders/PageSection";
import { Reveal } from "../placeholders/Reveal";

export function Team() {
  return (
    <PageSection id="team">
      <Reveal className="col-span-full lg:col-span-6">
        <p className="type-heading-6 text-muted">People</p>
        <h2 className="type-display-3 mt-4 text-fg">A small bench. Placeholder faces.</h2>
      </Reveal>
      <Reveal className="col-span-full mt-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:col-span-12 lg:grid-cols-6">
        {team.map((person) => (
          <div key={person.name} className="min-w-0">
            <Avatar name={person.name} size="lg" />
            <p className="type-heading-5 mt-3 text-fg">{person.name}</p>
            <p className="type-supporting text-muted">{person.role}</p>
          </div>
        ))}
      </Reveal>
    </PageSection>
  );
}
