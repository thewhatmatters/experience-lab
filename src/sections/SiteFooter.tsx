import { Button, TextLink } from "@whatmatters/wmds";
import { ArrowUpRight } from "lucide-react";
import { footer, product } from "../content";
import { MediaFrame } from "../placeholders/MediaFrame";
import { Surface } from "../placeholders/Surface";

export function SiteFooter() {
  return (
    <Surface id="connect" tone="ink">
      <div className="grid-page py-[calc(var(--leading-base)*10)]">
        <div className="band items-start">
          <div className="col-span-full lg:col-span-5">
            <h2 className="type-display-2 text-fg">{footer.title}</h2>
            <p className="type-body mt-6 max-w-md text-muted">{footer.body}</p>
            <div className="mt-8">
              <Button role="primary" icon={<ArrowUpRight strokeWidth={2} />} type="button">
                {footer.cta}
              </Button>
            </div>
            <div className="mt-12 flex flex-col gap-2">
              <p className="type-heading-5 text-fg">{product.lab}</p>
              <TextLink href="https://github.com/thewhatmatters/wmds" external>
                WMDS
              </TextLink>
              <TextLink href="https://github.com/thewhatmatters/experience-lab" external>
                This repo
              </TextLink>
              <p className="type-supporting text-muted">Press g to toggle the grid overlay.</p>
            </div>
          </div>
          <div className="col-span-full lg:col-span-3 lg:col-start-7">
            <MediaFrame label="Placeholder connect frame" caption="11 / Site" wash="night" ratio="1 / 1" />
          </div>
          <div className="col-span-full lg:col-span-3">
            <MediaFrame label="Placeholder connect frame" caption="12 / Offtake" wash="tide" ratio="1 / 1" />
          </div>
        </div>
      </div>
    </Surface>
  );
}
