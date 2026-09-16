import { Card, cardBodyTextClasses, cardTitleClasses } from "@whatmatters/wmds";
import { applications } from "../content";
import { MediaFrame, type MediaWash } from "../placeholders/MediaFrame";
import { Surface } from "../placeholders/Surface";

const washes: MediaWash[] = ["ember", "field", "slate", "tide", "night", "ember"];

export function Applications() {
  const rest = applications.slice(2);

  return (
    <Surface id="applications" tone="ink">
      <div className="grid-page pb-[calc(var(--leading-base)*10)]">
        <div className="band items-stretch">
          {rest.map((item, index) => (
            <div key={item.sector} className="col-span-full md:col-span-4">
              <MediaFrame
                label={`${item.sector} placeholder frame`}
                caption={`${String(index + 5).padStart(2, "0")} / ${item.sector}`}
                wash={washes[index] ?? "slate"}
                ratio="16 / 10"
              />
              <Card className="mt-4">
                <Card.Header
                  start={
                    <div>
                      <p className="type-code text-muted">{item.sector}</p>
                      <h3 className={`${cardTitleClasses} mt-3`}>{item.title}</h3>
                    </div>
                  }
                />
                <Card.Body>
                  <p className={cardBodyTextClasses}>{item.body}</p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Surface>
  );
}
