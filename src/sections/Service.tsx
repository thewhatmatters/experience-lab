import { Button } from "@whatmatters/wmds";
import { ArrowUpRight } from "lucide-react";
import { service } from "../content";
import { scrollToSection } from "../lib/scrollToSection";
import { MediaFrame } from "../placeholders/MediaFrame";
import { Surface } from "../placeholders/Surface";

export function Service() {
  return (
    <Surface id="service" tone="paper">
      <div className="grid-page py-[calc(var(--leading-base)*10)]">
        <div className="band items-center">
          <div className="col-span-full lg:col-span-4">
            <h2 className="type-display-2 text-fg">{service.title}</h2>
            <p className="type-body mt-8 max-w-md text-muted">{service.body}</p>
            <div className="mt-8">
              <Button
                role="primary"
                icon={<ArrowUpRight strokeWidth={2} />}
                onClick={() => scrollToSection("connect")}
              >
                {service.cta}
              </Button>
            </div>
          </div>
          <div className="col-span-full lg:col-span-8">
            <MediaFrame
              label="Placeholder energy-as-a-service network"
              caption="07 / Network"
              wash="tide"
              ratio="16 / 10"
            />
          </div>
        </div>
      </div>
    </Surface>
  );
}
