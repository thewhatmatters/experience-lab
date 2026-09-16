import { Badge, Button } from "@whatmatters/wmds";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { product } from "../content";
import { scrollToSection } from "../lib/scrollToSection";
import { MediaFrame } from "../placeholders/MediaFrame";
import { PageSection } from "../placeholders/PageSection";

export function Hero() {
  return (
    <PageSection pad="hero" className="min-h-svh">
      <div className="col-span-full flex min-h-[calc(100svh-4.5rem)] flex-col justify-end gap-10 py-[calc(var(--leading-base)*5)] lg:col-span-6 lg:justify-center">
        <Badge variant="neutral" emphasis="muted">
          {product.eyebrow}
        </Badge>
        <h1 className="lab-display text-fg">{product.tagline}</h1>
        <p className="type-large max-w-xl text-muted">{product.lede}</p>
        <div className="flex flex-wrap gap-3">
          <Button
            role="primary"
            icon={<ArrowUpRight strokeWidth={2} />}
            onClick={() => scrollToSection("connect")}
          >
            Request a briefing
          </Button>
          <Button
            role="secondary"
            icon={<ArrowDown strokeWidth={2} />}
            onClick={() => scrollToSection("systems")}
          >
            See the plant
          </Button>
        </div>
      </div>
      <div className="col-span-full lg:col-span-6 lg:self-center">
        <MediaFrame
          label="Placeholder campus elevation"
          caption="01 / Elevation"
          wash="ember"
          ratio="4 / 5"
        />
      </div>
    </PageSection>
  );
}
