/** Fictional Ashlar Campus copy — not ZettaJoule / Zypsy IP. */

export const product = {
  name: "Ashlar",
  lab: "WhatMatters Experience Lab",
  eyebrow: "Industrial clean energy campus",
  tagline: "Heat, power, and hydrogen — cut to fit the ground they sit on.",
  lede: "Ashlar plans and operates compact energy campuses for process industries. Architecture first. Plant second. The plot reads as one building, not a yard of kit.",
};

export const nav = [
  { href: "#mission", label: "Mission" },
  { href: "#technology", label: "Campus" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#applications", label: "Sectors" },
  { href: "#connect", label: "Connect" },
] as const;

export const mission = {
  eyebrow: "The name",
  title: "Ashlar is a masonry term.",
  body: "Dressed stone, each face cut so the next block can bear load without a gap. We named the campus after that joint: heat, power, and hydrogen planned as one elevation — not three projects bolted to a fence line.",
  aside:
    "This page is a WhatMatters capability lab. The product is fictional. Media are placeholders. The brief is rhythm, type, grid, and restrained motion — not a clone of any live industrial site.",
};

export const technology = {
  eyebrow: "Campus",
  title: "Design meets resilience",
  body: "The envelope is quiet: softened corners, a long roof plane, and façades that sit with the surrounding grade. Behind that, redundant loops, dry-cooled plant, and a digital twin that rehearses the day before the operators do.",
  stats: [
    { label: "Process heat", value: "900 °C" },
    { label: "Campus output", value: "48 MWth" },
    { label: "Uptime target", value: "8 760 h" },
    { label: "Plot", value: "18 ha" },
  ],
};

export const capabilities = [
  {
    title: "Process heat",
    body: "High-grade heat for kilns, crackers, and district loops — delivered as steam or hot air, not as a lecture about the plant.",
  },
  {
    title: "Heat + power",
    body: "Combined offtake for mines, midstream pads, and mills that cannot choose between a furnace and a feeder.",
  },
  {
    title: "Hydrogen",
    body: "On-plot hydrogen for ammonia, polymers, and synthetic fuels, sized to the train — not to a press release.",
  },
  {
    title: "Electricity",
    body: "Steady, carbon-free power for halls, microgrids, and towns that sit next to the campus fence.",
  },
] as const;

export const applications = [
  {
    sector: "Chemicals",
    title: "Heat that matches the train",
    body: "Crackers and reformers need a temperature band, not a slogan. Ashlar campuses sit beside existing plots and feed the range the process already knows.",
  },
  {
    sector: "Metals",
    title: "Furnace-grade energy, quieter plot",
    body: "Steel and non-ferrous lines take process heat and overnight power from the same campus, so the melt shop does not wait on a distant bus.",
  },
  {
    sector: "Aviation fuels",
    title: "Hydrogen for synthetic kerosene",
    body: "Fuel trains need reliability more than they need a rooftop array. The campus supplies hydrogen and heat as a single offtake.",
  },
  {
    sector: "Data halls",
    title: "Power, then the waste is useful",
    body: "Halls take 24/7 electricity; the residual heat goes to neighboring process or district loops instead of vanishing into dry coolers.",
  },
  {
    sector: "Water",
    title: "Desalination without a second plant",
    body: "Steady heat and power run large-scale desalination beside industrial users that already need both.",
  },
  {
    sector: "Remote extractives",
    title: "A campus that travels as a kit",
    body: "Lithium, rare earths, and isolated mills get a fenced campus instead of a string of diesel halls.",
  },
] as const;

export const service = {
  eyebrow: "Campus as a service",
  title: "You take the energy. We keep the keys.",
  body: "Ashlar can own, staff, and operate the campus. Offtakers contract for heat, power, or hydrogen — not for a construction program, a license, or a night shift.",
};

export const team = [
  { name: "Mara Ellison", role: "Campus principal" },
  { name: "Kenji Sato", role: "Plant systems" },
  { name: "Idris Okonkwo", role: "Offtake & finance" },
  { name: "Helena Voss", role: "Digital twin" },
  { name: "Priya Raman", role: "Regulatory" },
  { name: "Jonas Berg", role: "Field operations" },
] as const;

export const footer = {
  title: "Connect with the lab.",
  body: "This is a WhatMatters experience exercise. If you want the real design system, start at WMDS — not at this fictional campus.",
};
