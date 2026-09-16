import { Avatar, Button, Card } from "@whatmatters/wmds";
import { ArrowUpRight } from "lucide-react";
import { team, teamCallout } from "../content";
import { scrollToSection } from "../lib/scrollToSection";
import { Surface } from "../placeholders/Surface";

export function Team() {
  const faces = team.slice(0, 5);
  return (
    <Surface id="team" tone="ice">
      <div className="grid-page py-[calc(var(--leading-base)*10)]">
        <div className="band">
          {faces.map((person) => (
            <div key={person.name} className="col-span-2 md:col-span-2 lg:col-span-3">
              <Avatar name={person.name} size="lg" />
              <p className="type-heading-5 mt-3 text-fg">{person.name}</p>
              <p className="type-supporting text-muted">{person.role}</p>
            </div>
          ))}
          <Card className="col-span-full lg:col-span-6">
            <Card.Header start={<h2 className="type-heading-2 text-fg">{teamCallout.title}</h2>} />
            <Card.Body>
              <Button
                role="secondary"
                icon={<ArrowUpRight strokeWidth={2} />}
                onClick={() => scrollToSection("connect")}
              >
                {teamCallout.cta}
              </Button>
            </Card.Body>
          </Card>
          <div className="col-span-full lg:col-span-3">
            <Avatar name={team[5].name} size="lg" />
            <p className="type-heading-5 mt-3 text-fg">{team[5].name}</p>
            <p className="type-supporting text-muted">{team[5].role}</p>
          </div>
        </div>
      </div>
    </Surface>
  );
}
