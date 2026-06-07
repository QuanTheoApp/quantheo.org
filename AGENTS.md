# AGENTS.md

Guidance for AI agents and developers working on this codebase.

## Project Overview

"Already Here" is a single-page contemplative website about spiritual exploration and awakening. It is a reading experience — atmospheric, text-forward, slow. There is no interactivity beyond a scroll-reveal effect and a looping CSS breathing animation. It was scaffolded from the Netlify "marketing" (TanStack Start + React) template, then stripped of all product/commerce scaffolding.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 (file-based routing) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (imported) + handwritten CSS in `styles.css` |
| Typography | Fraunces (display) + Newsreader (body) from Google Fonts |
| Language | TypeScript 5.9, strict mode |
| Deployment | Netlify (`@netlify/vite-plugin-tanstack-start`) |

## Directory Structure

```
src/
├── routes/
│   ├── __root.tsx       # HTML shell: head metadata, OG tags, Google Fonts <link>s
│   └── index.tsx        # The whole page: hero + passages + breathing close
├── router.tsx           # Router created from generated routeTree.gen
└── styles.css           # All visual design lives here
public/favicon.ico
vite.config.ts
netlify.toml
```

`routeTree.gen` is generated automatically by the TanStack Router Vite plugin at dev/build time — do not edit or commit it by hand.

## Design System (in `styles.css`)

The aesthetic is "the moment before dawn": deep warm ink background with a low, slowly breathing warm-light glow, parchment-toned text, and a single desaturated gold accent (`--dawn`). Key pieces:

- **CSS custom properties** at `:root` define the full palette and the two font stacks. Reuse these tokens; do not introduce new hard-coded colors.
- **`.atmosphere`** — fixed background glow + vignette (animated via `dawn-breathe`).
- **`.grain`** — fixed SVG noise overlay so darks never read as flat. Keep grain on a fixed, non-scrolling layer.
- **`.measure`** — the ~680px reading column; all content sits inside it.
- **`[data-reveal]`** — elements fade/slide in when scrolled into view. Stagger with the `--reveal-delay` inline custom property.
- **`.breath .orb`** — the closing breathing animation; two cross-fading labels (`.in` / `.out`) driven by `word-in` / `word-out` keyframes.
- A `prefers-reduced-motion` block disables all animation and reveals everything immediately.

## Scroll Reveal

`index.tsx` runs an `IntersectionObserver` in a `useEffect` to add `.is-visible` to `[data-reveal]` elements. It falls back to revealing everything if the API is unavailable. This is the only client-side JS of note.

## Conventions

- Components: PascalCase. Routes: file-based in `src/routes/`.
- Import alias `@/` maps to `src/` (see `tsconfig.json`).
- Custom CSS properties on inline `style` use the literal key form (`style={{ '--reveal-delay': '120ms' }}`) — `@types/react` types these via a template-literal index signature, so avoid `as string` casts on the key.
- Prefer the design tokens and existing CSS classes over ad-hoc Tailwind utilities for anything visual; the layout is bespoke.

## Non-obvious Decisions

- **No database, forms, or API.** This is deliberate — the site stores and collects nothing. If a future task needs persistence, use Netlify primitives (see the `general-database` / `netlify-blobs` skills), not local JSON or in-memory state.
- The site copy is written in the author's first person ("I am neither a guru…") on purpose — it is the voice of the site, not boilerplate.
- The product route, product data, and placeholder image from the original template were removed; if `routeTree.gen` ever references them, delete it and let the plugin regenerate.

## Commands

```bash
npm run dev      # dev server (port 3000)
npm run build    # production build
```

Do not run build/typecheck commands just to validate edits — the Netlify pipeline installs and validates automatically.
