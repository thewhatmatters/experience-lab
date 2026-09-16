# experience-lab

WhatMatters capability lab: a long-scroll marketing page built with **WMDS** + **Motion**.

It studies the *experience language* of premium industrial sites (long narrative, architectural media rhythm, restrained motion, section storytelling). Layout and section order follow [ZettaJoule](https://zetta-joule.com/) 1:1 with **placeholder media** and **Ashlar copy** set in WMDS type — not their brand, photography, or IP.

The demo product is **Ashlar** — a fictional industrial clean-energy campus.

Motion behavior is specified in [`MOTION.md`](./MOTION.md). The primary beat is a **ScrollFlip** (inset → full-bleed pin → in-flow release). A pinned **ReactorScrub** assembles plant parts against scroll. Do **not** add GSAP, Lenis, or Webflow.

## Run

```bash
npm install
npm run dev
```

Then open the Vite URL (usually `http://localhost:5173`).

```bash
npm run build    # typecheck + production bundle
npm run preview  # serve the build
```

Requires Node 20+. First install clones WMDS from GitHub and runs its `prepare` build.

Press **g** in the page to toggle the WMDS grid overlay.

## Consume pattern (match Pitchkit)

| Piece | Pin / note |
| --- | --- |
| App | Vite + React 19 + TypeScript |
| CSS | Tailwind v4 via `@tailwindcss/vite` |
| Design system | `@whatmatters/wmds` → `github:thewhatmatters/wmds#73277bab5bd3ffc8dff678c12d4cdbc415b07a35` |
| Motion | `motion` peer, imported as `motion/react` |
| Icons | `lucide-react` into WMDS props |
| Styles | `import "@whatmatters/wmds/styles.css"` |
| Fonts | `@fontsource-variable/geist` + `geist-mono`, copied into WMDS `dist/files` (same script as Pitchkit) |

Page layout uses WMDS **`grid-page` + `band`**. Components are used via props (`Button`, `Badge`, `Card`, `Stat`, `Avatar`, `TextLink`, `GridOverlay`). Do not invent atoms that belong in WMDS.

## Real vs placeholder

**Real (WMDS / stack)**

- Theme, type tokens (`type-*`), grid spine, light paper (default) with `data-theme="dark"` on ink bands. Local `--lab-*` hexes match the reference sky / duck-egg / ink.
- `Button`, `Badge`, `Card`, `Stat`, `Avatar`, `TextLink`, `GridOverlay`
- `motionTransitionProp` for duration/easing
- Geist variable fonts

**Placeholder (local, marked in source)**

- All photography / film — gradient `LabFilm` / `MediaFrame` blocks (optional muted `src` loop later). Playback is continuous, never frame-scrubbed.
- Team faces — `Avatar` initials, no portraits
- Ashlar name, copy, figures, and people — invented for the lab
- `ScrollFlipStage`, `ReactorScrub`, `LabFilm` — local motion modules, not WMDS exports
- `Reveal`, `MediaFrame`, `lab-display`, `lab-bleed`, sticky `SiteNav` — local page helpers, not WMDS exports

## WMDS gaps (for Design)

Flagged because they blocked a credible marketing page without forking atoms:

1. **Marketing display scale** — `type-display-1` tops out at 2.625rem. Hero type uses local `lab-display` (`clamp` up to ~5.25rem).
2. **Media / figure organism** — no framed video, poster, or architectural media band. Local `MediaFrame` / `LabFilm`.
3. **Scroll-flip / pin organism** — no origin→target morph + chapter pin + in-flow release. Local `ScrollFlipStage` (Motion `useScroll` / `useTransform`, not GSAP Flip).
4. **Scrubbed assembly stage** — no scroll-driven exploded→assembled graphic with stepping labels. Local `ReactorScrub`.
5. **Marketing nav / footer** — `PageHeader` is app chrome. Sticky site nav and connect footer are local layout.
6. **Full-bleed breakout** — grid spine is an 80rem app page. Local `lab-bleed` for cinema-width media.
7. **Editorial sector row** — no marketing split (media + story) pattern. Applications are page layout.
8. **Capability marketing card** — `Card` works, but it is an app surface, not a campaign tile. Used as-is.

`Reveal` (`whileInView` fades) remains for secondary sections only. It is **not** the hero motion story.

If Design wants these in WMDS, promote the local placeholders — do not keep growing them here.

## Motion

Header: full-bleed hero on the reference sky gradient (`#628ad1` → `#fff0e2`). Display type splits around a placeholder vessel (`Powering` / `the` … `world`); vessel, title, and lede parallax at different rates.

Primary: `ScrollFlipStage` starts as a **small rounded inset in the white mission band** (left aside + right 16:9-ish film), scrubs to the viewport, holds full-bleed with a center line + name/definition overlays, then releases as a 100svh in-flow block onto the duck-egg technology section. Secondary: `ReactorScrub` pins a plant graphic on the same duck-egg systems band; labels step with progress.

Surfaces follow the reference bands: paper (white mission / service / workforce), duck-egg `#f1f5f8` (technology + systems + team, consecutive), ink `#1b1b1b` (heat + sectors + connect, consecutive).

Both honor `prefers-reduced-motion` by jumping to end states (no morph, no scrub track). CSS wash animation is disabled under the same query.

`Reveal` still uses `motion/react` `whileInView` with WMDS `motionTransitionProp("medium")` on later editorial bands only.

## Deploy

Not wired. A static host (`npm run build` → `dist/`) is enough when someone wants a preview.
