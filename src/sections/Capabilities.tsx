import { Card, cardBodyTextClasses, cardTitleClasses } from "@whatmatters/wmds";
import { applications, heat } from "../content";
import { MediaFrame } from "../placeholders/MediaFrame";
import { Surface } from "../placeholders/Surface";

export function Capabilities() {
  const lead = applications[0];
  const next = applications[1];

  return (
    <Surface id="capabilities" tone="ink">
      <div className="grid-page py-[calc(var(--leading-base)*8)]">
        <div className="band">
          <h2 className="type-display-2 col-span-full text-fg">{heat.title}</h2>
          <p className="type-code col-span-full mt-10 text-muted">{heat.scale}</p>
          <div
            className="col-span-full mt-4 h-2 overflow-hidden bg-muted-surface"
            role="img"
            aria-label={`Placeholder temperature range, campus marked near ${heat.mark}`}
          >
            <div className="h-full w-[75%] bg-info" />
          </div>
          <p className="type-code col-span-full mt-2 text-right text-muted">{heat.mark}</p>
          <p className="type-heading-6 col-span-full mt-12 text-muted lg:col-span-4">{heat.eyebrow}</p>
          <p className="type-heading-2 col-span-full mt-12 text-fg lg:col-span-7 lg:col-start-6">{heat.body}</p>
        </div>
        <div className="band mt-[calc(var(--leading-base)*6)] items-stretch">
          <div className="col-span-full lg:col-span-4">
            <MediaFrame label="Placeholder oil and gas frame" caption="03 / Oil & gas" wash="slate" ratio="4 / 5" />
          </div>
          <Card className="col-span-full h-full lg:col-span-4">
            <Card.Header
              start={
                <div>
                  <p className="type-code text-muted">{lead.sector}</p>
                  <h3 className={`${cardTitleClasses} mt-3`}>{lead.title}</h3>
                </div>
              }
            />
            <Card.Body>
              <p className={cardBodyTextClasses}>{lead.body}</p>
            </Card.Body>
          </Card>
          <div className="col-span-full lg:col-span-4">
            <MediaFrame label="Placeholder chemicals frame" caption="04 / Chemicals" wash="tide" ratio="4 / 5" />
            <p className="type-heading-6 mt-4 text-muted">{next.sector}</p>
            <p className="type-heading-4 mt-2 text-fg">{next.title}</p>
          </div>
        </div>
      </div>
    </Surface>
  );
}
