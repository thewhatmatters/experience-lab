import { Badge, Button } from "@whatmatters/wmds";
import { ArrowUpRight } from "lucide-react";
import { service } from "../content";
import { MediaFrame } from "../placeholders/MediaFrame";
import { PageSection } from "../placeholders/PageSection";
import { Reveal } from "../placeholders/Reveal";

export function Service() {
  return (
    <PageSection id="service">
      <Reveal className="col-span-full">
        <MediaFrame
          label="Placeholder service band"
          caption="09 / Operations"
          wash="field"
          ratio="21 / 9"
          className="lab-bleed"
        />
      </Reveal>
      <Reveal className="col-span-full mt-10 lg:col-span-7">
        <Badge variant="info" emphasis="muted">
          {service.eyebrow}
        </Badge>
        <h2 className="type-display-2 mt-4 text-fg">{service.title}</h2>
        <p className="type-body mt-6 max-w-2xl text-muted">{service.body}</p>
        <div className="mt-8">
          <Button
            role="primary"
            icon={<ArrowUpRight strokeWidth={2} />}
            onClick={() => document.querySelector("#connect")?.scrollIntoView({ behavior: "smooth" })}
          >
            Talk to offtake
          </Button>
        </div>
      </Reveal>
    </PageSection>
  );
}
