import { Button } from "@whatmatters/wmds";
import { ArrowUpRight } from "lucide-react";
import { service } from "../content";
import { scrollToSection } from "../lib/scrollToSection";
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
            <NetworkMark />
          </div>
        </div>
      </div>
    </Surface>
  );
}

/** LOCAL PLACEHOLDER — isometric network, not a product illustration. */
function NetworkMark() {
  return (
    <svg viewBox="0 0 640 360" className="h-auto w-full text-fg" role="img" aria-label="Placeholder energy network">
      <g stroke="var(--color-border)" strokeWidth="1.25" fill="none">
        <line x1="80" y1="180" x2="560" y2="180" />
        <line x1="200" y1="80" x2="200" y2="280" />
        <line x1="320" y1="60" x2="320" y2="300" />
        <line x1="440" y1="80" x2="440" y2="280" />
      </g>
      {[
        [80, 180],
        [200, 80],
        [200, 280],
        [320, 60],
        [320, 180],
        [320, 300],
        [440, 80],
        [440, 280],
        [560, 180],
      ].map(([x, y]) => (
        <rect
          key={`${x}-${y}`}
          x={x - 18}
          y={y - 12}
          width="36"
          height="24"
          rx="3"
          fill="var(--color-background-muted)"
          stroke="var(--color-border)"
        />
      ))}
    </svg>
  );
}
