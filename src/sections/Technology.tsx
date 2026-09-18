import { Button } from "@whatmatters/wmds";
import { ArrowUpRight } from "lucide-react";
import { technology } from "../content";
import { scrollToSection } from "../lib/scrollToSection";
import { MediaFrame } from "../placeholders/MediaFrame";
import { Surface } from "../placeholders/Surface";

export function Technology() {
  return (
    <Surface id="technology" tone="ice">
      <div className="grid-page py-[calc(var(--leading-base)*10)]">
        <div className="band items-start">
          <h2 className="type-display-2 col-span-full text-fg lg:col-span-5">{technology.title}</h2>
          <div className="col-span-full lg:col-span-6 lg:col-start-7">
            <p className="type-body text-muted">{technology.body}</p>
            <div className="mt-8">
              <Button
                role="primary"
                icon={<ArrowUpRight strokeWidth={2} />}
                onClick={() => scrollToSection("systems")}
              >
                {technology.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[6vw] pb-[calc(var(--leading-base)*8)]">
        <div className="relative overflow-hidden">
          <MediaFrame
            label="Placeholder campus landscape"
            caption="02 / Campus"
            wash="field"
            ratio="21 / 9"
          />
          <div className="absolute bottom-6 left-6 max-w-sm bg-body p-6 text-fg">
            <p className="type-heading-5">{technology.cardTitle}</p>
            <p className="type-supporting mt-3 text-muted">{technology.cardBody}</p>
          </div>
        </div>
      </div>
    </Surface>
  );
}
