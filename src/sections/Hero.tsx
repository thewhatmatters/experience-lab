import { Badge, Button } from "@whatmatters/wmds";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { product } from "../content";
import { MediaFrame } from "../placeholders/MediaFrame";
import { PageSection } from "../placeholders/PageSection";
import { Reveal } from "../placeholders/Reveal";

export function Hero() {
  return (
    <PageSection pad="hero" className="min-h-svh">
      <div className="col-span-full flex min-h-[calc(100svh-4.5rem)] flex-col justify-end gap-10 py-[calc(var(--leading-base)*5)] lg:col-span-6 lg:justify-center">
        <Reveal>
          <Badge variant="neutral" emphasis="muted">
            {product.eyebrow}
          </Badge>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="lab-display text-fg">{product.tagline}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="type-large max-w-xl text-muted">{product.lede}</p>
        </Reveal>
        <Reveal delay={0.14} className="flex flex-wrap gap-3">
          <Button
            role="primary"
            icon={<ArrowUpRight strokeWidth={2} />}
            onClick={() => document.querySelector("#connect")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request a briefing
          </Button>
          <Button
            role="secondary"
            icon={<ArrowDown strokeWidth={2} />}
            onClick={() => document.querySelector("#capabilities")?.scrollIntoView({ behavior: "smooth" })}
          >
            See capabilities
          </Button>
        </Reveal>
      </div>
      <Reveal className="col-span-full lg:col-span-6 lg:self-center" delay={0.08}>
        <MediaFrame
          label="Placeholder campus elevation"
          caption="01 / Elevation"
          wash="ember"
          ratio="4 / 5"
        />
      </Reveal>
    </PageSection>
  );
}
