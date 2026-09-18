import { Button } from "@whatmatters/wmds";
import { ArrowUpRight } from "lucide-react";
import { mission } from "../content";
import { scrollToSection } from "../lib/scrollToSection";
import { Surface } from "../placeholders/Surface";

export function Mission() {
  return (
    <Surface id="mission" tone="paper">
      <div className="grid-page py-[calc(var(--leading-base)*10)]" style={{ paddingBlock: undefined }}>
        <div className="band items-start">
          <p className="type-heading-6 col-span-full text-muted lg:col-span-4">{mission.eyebrow}</p>
          <div className="col-span-full lg:col-span-7 lg:col-start-6">
            <p className="type-heading-2 text-fg">{mission.lead}</p>
            <div className="mt-8">
              <Button
                role="secondary"
                icon={<ArrowUpRight strokeWidth={2} />}
                onClick={() => scrollToSection("technology")}
              >
                {mission.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Surface>
  );
}
