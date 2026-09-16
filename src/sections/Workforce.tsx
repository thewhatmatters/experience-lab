import { Button } from "@whatmatters/wmds";
import { ArrowUpRight } from "lucide-react";
import { workforce } from "../content";
import { scrollToSection } from "../lib/scrollToSection";
import { MediaFrame } from "../placeholders/MediaFrame";
import { Surface } from "../placeholders/Surface";

export function Workforce() {
  return (
    <Surface id="workforce" tone="paper">
      <div className="grid-page py-[calc(var(--leading-base)*10)]">
        <div className="band items-start">
          <h2 className="type-display-2 col-span-full text-fg lg:col-span-5">{workforce.title}</h2>
          <div className="col-span-full lg:col-span-6 lg:col-start-7">
            <p className="type-body text-muted">{workforce.body}</p>
            <div className="mt-8">
              <Button
                role="secondary"
                icon={<ArrowUpRight strokeWidth={2} />}
                onClick={() => scrollToSection("connect")}
              >
                {workforce.cta}
              </Button>
            </div>
          </div>
        </div>
        <div className="band mt-[calc(var(--leading-base)*6)]">
          <div className="col-span-full md:col-span-4">
            <MediaFrame label="Placeholder field crew" caption="08 / Crew" wash="ember" ratio="16 / 10" />
          </div>
          <div className="col-span-full md:col-span-4">
            <MediaFrame label="Placeholder control room" caption="09 / Control" wash="slate" ratio="16 / 10" />
          </div>
          <div className="col-span-full md:col-span-4">
            <MediaFrame label="Placeholder training hall" caption="10 / Training" wash="tide" ratio="16 / 10" />
          </div>
        </div>
      </div>
    </Surface>
  );
}
