# Jin — the Fun Lover

Personal website for Jin, a fun lover in Göteborg. One goal: get visitors to send an email.

- Next.js (App Router) + TypeScript + Tailwind + shadcn/ui
- No database, no accounts: a single static page
- PWA manifest + icons, Open Graph share card

## Edit the content

Everything visitors read lives in `app/page.tsx` (email, intro text, "Things I love").
The accent color is `--primary` in `app/globals.css`.
Regenerate icons and the share card with `node scripts/make-images.mjs`.

## Run locally

    npm install
    npm run dev

## Deploy

    vercel --prod
