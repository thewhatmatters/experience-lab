# Experience motion brief — ZettaJoule homepage (behavior match)

Reference: https://zetta-joule.com/
Lab product: fictional **Ashlar** (no Zetta brand/copy/IP)
Stack sniff: Webflow + GSAP 3.15 (ScrollTrigger, Flip, SplitText) + Lenis + Lottie + Swiper. Primary beat = `tr-scrollflip` (Flip origin→target) then pin; autoplay Bunny MP4 under overlays. Rebuild with **Motion** behavior match — do **not** port GSAP/Webflow/Lenis unless asked.

## Section order (reference)

1. Hero
2. Mission / name
3. Fullscreen scroll-pinned video (PRIMARY)
4. Modernizing technology
5. Intelligent Systems / reactor scrub (SECONDARY)
6. Heat capabilities chart
7. Sector cards
8. Energy as a service
9. Team
10. Workforce
11. Connect
12. Footer

## Must-have v1 (experience-lab)

1. **ScrollFlip media stage** — inset media morphs to full viewport as you scroll, pins/holds, then releases to full-width **in document flow** (not shrink-to-card). Scroll-reversible. Overlay line + labels during hold. Media can be placeholder gradient or muted loop; playback is continuous, not frame-scrubbed.
2. Sticky/fixed hold long enough to feel like a chapter.
3. **Reactor scrub stage** — pinned graphic; scroll progress drives simple assembly (e.g. rods/parts from separated→assembled via transforms). Capability labels can swap with progress. Placeholders OK.
4. Kill generic `whileInView` fades as the “hero motion.” Secondary parallax optional polish only.
5. `prefers-reduced-motion`: skip morph/scrub; show end states.

## Anti-done

Section fades with MediaFrame cards that never Flip/pin/release.

## WMDS

Keep WMDS for chrome (Button, type tokens, grid-page/band). Local lab modules for ScrollFlipStage + ReactorScrub are expected; list gaps in README.
