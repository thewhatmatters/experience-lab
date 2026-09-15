import { Card, cardBodyTextClasses, cardTitleClasses } from "@whatmatters/wmds";
import { capabilities } from "../content";
import { PageSection } from "../placeholders/PageSection";
import { Reveal } from "../placeholders/Reveal";

export function Capabilities() {
  return (
    <PageSection id="capabilities">
      <Reveal className="col-span-full lg:col-span-6">
        <p className="type-heading-6 text-muted">Capabilities</p>
        <h2 className="type-display-2 mt-4 text-fg">Four offtakes, one campus.</h2>
      </Reveal>
      <Reveal className="col-span-full lg:col-span-6 lg:self-end" delay={0.06}>
        <p className="type-body text-muted">
          The plant is sized to the plot. Customers contract a stream — or stack them — without inheriting four
          separate projects.
        </p>
      </Reveal>
      {capabilities.map((item, index) => (
        <Reveal key={item.title} className="col-span-full md:col-span-4 lg:col-span-3" delay={index * 0.05}>
          <Card className="h-full">
            <Card.Header
              start={
                <div>
                  <p className="type-code text-muted">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className={`${cardTitleClasses} mt-3`}>{item.title}</h3>
                </div>
              }
            />
            <Card.Body>
              <p className={cardBodyTextClasses}>{item.body}</p>
            </Card.Body>
          </Card>
        </Reveal>
      ))}
    </PageSection>
  );
}
