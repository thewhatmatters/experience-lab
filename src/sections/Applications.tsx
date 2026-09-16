import { applications } from "../content";
import { MediaFrame, type MediaWash } from "../placeholders/MediaFrame";
import { PageSection } from "../placeholders/PageSection";
import { Reveal } from "../placeholders/Reveal";

const washes: MediaWash[] = ["tide", "field", "ember", "slate", "tide", "field"];

export function Applications() {
  return (
    <PageSection id="applications">
      <Reveal className="col-span-full lg:col-span-8">
        <p className="type-heading-6 text-muted">Sectors</p>
        <h2 className="type-display-2 mt-4 text-fg">Where the campus earns its keep.</h2>
      </Reveal>
      {applications.map((item, index) => {
        const mediaFirst = index % 2 === 1;
        return (
          <Reveal key={item.sector} className="col-span-full grid grid-cols-subgrid gap-y-6 py-[calc(var(--leading-base)*3)]">
            <div className={`col-span-full lg:col-span-6 ${mediaFirst ? "lg:col-start-7 lg:row-start-1" : ""}`}>
              <MediaFrame
                label={`${item.sector} placeholder frame`}
                caption={`${String(index + 3).padStart(2, "0")} / ${item.sector}`}
                wash={washes[index] ?? "slate"}
                ratio="16 / 9"
              />
            </div>
            <div className={`col-span-full self-center lg:col-span-5 ${mediaFirst ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"}`}>
              <p className="type-heading-6 text-muted">{item.sector}</p>
              <h3 className="type-heading-1 mt-3 text-fg">{item.title}</h3>
              <p className="type-body mt-4 text-muted">{item.body}</p>
            </div>
          </Reveal>
        );
      })}
    </PageSection>
  );
}
