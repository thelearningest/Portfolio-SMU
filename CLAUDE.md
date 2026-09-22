# Portfolio-SMU

React + Vite + Tailwind v4 portfolio site.

## Dev server

Assume it is already running on `http://localhost:3000` — attach via the
`portfolio-dev` launch config, don't start a second copy. `npm run dev`
hardcodes `--port=3000`, so a duplicate start always fails on the port.

## Working style for visual tweaks

Most requests here are visual nudges ("this looks off", "tighten that gap").
Make the change, show the diff, and let me look — don't build a measurement
pass first. If the fix isn't obvious from the source, say so and measure once.

## Motion gotchas

Sections use `motion` (framer-motion) with `useScroll`/`useTransform`, so
element positions are scroll-dependent, not just layout-dependent:

- `About.tsx` pairs a `sticky` phase nav with `PhasePanel` cards that carry a
  scroll-linked `y` translate. Sidebar-vs-card alignment therefore only has a
  stable answer at rest and right after a nav click — don't measure mid-scroll.
- Screenshots in the browser pane can come back black right after a JS
  `scrollTo`. Scroll with a `computer` scroll action instead to force a repaint.
