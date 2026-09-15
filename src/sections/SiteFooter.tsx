import { Button, TextLink } from "@whatmatters/wmds";
import { ArrowUpRight } from "lucide-react";
import { footer, product } from "../content";
import { PageSection } from "../placeholders/PageSection";
import { Reveal } from "../placeholders/Reveal";

export function SiteFooter() {
  return (
    <PageSection id="connect" className="border-t border-border" pad="compact">
      <Reveal className="col-span-full lg:col-span-7">
        <h2 className="lab-display text-fg">{footer.title}</h2>
        <p className="type-body mt-6 max-w-xl text-muted">{footer.body}</p>
        <div className="mt-8">
          <Button role="primary" icon={<ArrowUpRight strokeWidth={2} />} type="button">
            Write the lab
          </Button>
        </div>
      </Reveal>
      <Reveal className="col-span-full flex flex-col gap-3 lg:col-span-5 lg:items-end" delay={0.08}>
        <p className="type-heading-4 text-fg">{product.lab}</p>
        <TextLink href="https://github.com/thewhatmatters/wmds" external>
          WMDS
        </TextLink>
        <TextLink href="https://github.com/thewhatmatters/experience-lab" external>
          This repo
        </TextLink>
        <p className="type-supporting text-muted">Press g to toggle the grid overlay.</p>
      </Reveal>
    </PageSection>
  );
}
