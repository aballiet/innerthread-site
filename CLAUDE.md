# retrace-site

Marketing website for Retrace, a local-first personal context layer. SvelteKit 2.0 + static adapter + pure CSS with design tokens. Deployed to `retrace.now` via GitHub Pages.

## Quick start

```bash
npm install
npm run dev      # localhost:5173
npm run build    # static output in /build
```

## Site structure

```
/                 Landing page (hero, social proof, feature showcase, demo, connect-the-dots, privacy signal, CTA)
/features         Feature showcases with embedded HTML/CSS visual mockups
/sources          All 10 platforms grouped by sync method (extension, import, live)
/privacy          Privacy architecture, provider policies, scope controls
/get-started      Setup guide (5 steps), interactive demo iframe, download CTA
```

## Key documentation

Read these before making changes:
- `docs/vision.md` - Messaging framework, privacy framing rules, emotional tone
- `docs/pages.md` - Page-by-page spec with section order and copy rationale
- `docs/guidelines.md` - Writing rules, design tokens, mobile breakpoints, decisions log

## Hard rules

- **Privacy language:** Never say "everything stays local" or "no cloud." Say "your data is stored locally" + "you choose what leaves." See docs/vision.md for the full framework.
- **Claude framing:** Never say "full access." Say "sees only what you allow." Labels and permissions are the differentiator.
- **No em dashes** (the --- character) anywhere.
- **Mockups are HTML/CSS,** not screenshots. They use design tokens and scale responsively.
- **Demo CTA is primary** until the app download is available. Then swap to "Download for macOS."
- **Mobile:** all touch targets >= 44px, test at 375px width, use `min(Xpx, 100%)` in grid minmax.

## Component map

| Component | Location | Purpose |
|-----------|----------|---------|
| Nav | `src/lib/components/Nav.svelte` | Fixed navigation, mobile hamburger |
| Hero | `src/lib/components/Hero.svelte` | Landing page hero with thread SVG animation |
| SocialProof | `src/lib/components/SocialProof.svelte` | Platform icons + stat chips |
| InteractiveDemo | `src/lib/components/InteractiveDemo.svelte` | Demo iframe with deferred loading + mobile fallback |
| Problem | `src/lib/components/Problem.svelte` | "Reclaim your data" narrative + platform diagram |
| Features | `src/lib/components/Features.svelte` | 8-card feature grid (used on landing page) |
| Compounding | `src/lib/components/Compounding.svelte` | "Connect the dots" section (3 cards) |
| MCPSection | `src/lib/components/MCPSection.svelte` | Claude tools panel + conversation callout |
| TrustPillars | `src/lib/components/TrustPillars.svelte` | 3 privacy/trust cards (used on landing page privacy signal) |
| HowItWorks | `src/lib/components/HowItWorks.svelte` | 5-step setup flow |
| MobileVision | `src/lib/components/MobileVision.svelte` | Coming soon mobile features |
| OpenSource | `src/lib/components/OpenSource.svelte` | Bottom CTA card + stats |
| Footer | `src/lib/components/Footer.svelte` | Site footer with nav links |

## Scroll animations

Uses a custom `inview` Svelte action (`src/lib/actions/inview.js`) with IntersectionObserver. Add `use:inview` to a container, then `.reveal` + `.reveal-delay-N` classes to children.

## Demo

`/static/demo/` contains a pre-built React app from the main Retrace repo with mock data. Auto-synced by GitHub Action. Embedded via iframe on desktop, "Open demo" button on mobile.
