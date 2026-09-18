import { Button } from "@whatmatters/wmds";
import { ArrowUpRight } from "lucide-react";
import { team, teamIntro } from "../content";
import { scrollToSection } from "../lib/scrollToSection";
import { MediaFrame, type MediaWash } from "../placeholders/MediaFrame";
import { Surface } from "../placeholders/Surface";

const washes: MediaWash[] = ["slate", "tide", "field", "ember", "night", "slate"];

export function Team() {
  const faces = team.slice(0, 5);
  const last = team[5];

  return (
    <Surface id="team" tone="ice">
      <div className="grid-page py-[calc(var(--leading-base)*10)]">
        <div className="band items-start">
          <h2 className="type-display-2 col-span-full text-fg lg:col-span-5">{teamIntro.title}</h2>
          <p className="type-body col-span-full text-muted lg:col-span-6 lg:col-start-7">{teamIntro.body}</p>
        </div>
        <div className="band mt-[calc(var(--leading-base)*6)] items-start">
          {faces.map((person, index) => (
            <div key={person.name} className="col-span-2 md:col-span-3 lg:col-span-3">
              <MediaFrame
                label={`${person.name} placeholder portrait`}
                caption={person.name}
                wash={washes[index] ?? "slate"}
                ratio="3 / 4"
              />
              <p className="type-heading-5 mt-3 text-fg">{person.name}</p>
              <p className="type-supporting text-muted">{person.role}</p>
            </div>
          ))}
          <div className="col-span-full flex flex-col justify-end bg-body p-6 md:col-span-3 lg:col-span-3">
            <h3 className="type-heading-3 text-fg">{teamIntro.cta}</h3>
            <div className="mt-6">
              <Button
                role="secondary"
                icon={<ArrowUpRight strokeWidth={2} />}
                onClick={() => scrollToSection("connect")}
              >
                {teamIntro.cta}
              </Button>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3 lg:col-span-3">
            <MediaFrame
              label={`${last.name} placeholder portrait`}
              caption={last.name}
              wash="tide"
              ratio="3 / 4"
            />
            <p className="type-heading-5 mt-3 text-fg">{last.name}</p>
            <p className="type-supporting text-muted">{last.role}</p>
          </div>
        </div>
      </div>
    </Surface>
  );
}
