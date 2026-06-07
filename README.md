# QuanTheo

A single-page, contemplative website devoted to spiritual exploration and reflection — free from religious affiliation, with no doctrine to adopt and no destination to reach. The site presents a quiet, slowly unfolding invitation: rather than a path to walk for months or years, it offers the possibility of an immediate, direct encounter with what is already present within the visitor.

The experience is intentionally minimal. A pre-dawn atmosphere with an emerging warm glow frames a sequence of reflective passages that reveal themselves gently as you scroll, closing on a slow breathing prompt meant to be paused over rather than clicked through.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + bespoke CSS |
| Typography | Fraunces (display) + Newsreader (body), via Google Fonts |
| Language | TypeScript 5.9 (strict) |
| Deployment | Netlify |

## Structure

```
src/
├── routes/
│   ├── __root.tsx   # HTML shell, metadata, font links
│   └── index.tsx    # The full single-page experience + scroll-reveal logic
├── router.tsx       # TanStack Router setup
└── styles.css       # Theme tokens, atmosphere, typography, animations
```

There is no database, no form, and no API — the site is purely a reflective reading experience, so no Netlify storage primitives are used.

## Running locally

```bash
npm install
npm run dev      # Vite dev server on port 3000
```

Or, with the Netlify CLI for full platform emulation:

```bash
netlify dev --port 8889
```

## Building

```bash
npm run build
```

Output is produced for Netlify deployment by the `@netlify/vite-plugin-tanstack-start` plugin configured in `vite.config.ts`.
