# Clayton Sanudi — Portfolio (Next.js)

A personal single-page portfolio built with Next.js (App Router) + TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Project structure

```
app/
  layout.tsx      # fonts + metadata
  page.tsx        # the whole page — hero, about, work, contact
  globals.css      # all styling (design tokens at the top)
components/
  Terminal.tsx     # the animated terminal in the hero (client component)
  Project.tsx       # reusable case-study card
```

## Customizing

- **Projects**: edit the `<Project ... />` entries in `app/page.tsx` — swap in your real case studies, tags, and stats.
- **Bio / stack chips**: edit the copy inside the `#about` section in `app/page.tsx`.
- **Colors / fonts**: all design tokens live at the top of `app/globals.css` (`--bg`, `--accent`, `--blue`, `--amber`, etc).
- **Email**: change the `EMAIL` constant at the top of `app/page.tsx`.

## Deploying

This is a standard Next.js app — deploys cleanly to Vercel, Netlify, or any Node host:

```bash
npm run build
npm start
```
