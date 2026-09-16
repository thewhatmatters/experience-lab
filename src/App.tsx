import { GridOverlay } from "@whatmatters/wmds";
import { Applications } from "./sections/Applications";
import { Capabilities } from "./sections/Capabilities";
import { Hero } from "./sections/Hero";
import { Service } from "./sections/Service";
import { SiteFooter } from "./sections/SiteFooter";
import { SiteNav } from "./sections/SiteNav";
import { Team } from "./sections/Team";
import { Technology } from "./sections/Technology";
import { ReactorScrub } from "./stages/ReactorScrub";
import { ScrollFlipStage } from "./stages/ScrollFlipStage";

export function App() {
  return (
    <div id="top" className="bg-body text-fg">
      <SiteNav />
      <div className="grid-page" style={{ paddingBlock: 0 }}>
        <GridOverlay />
        <main className="contents">
          <Hero />
          <ScrollFlipStage />
          <Technology />
          <ReactorScrub />
          <Capabilities />
          <Applications />
          <Service />
          <Team />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
