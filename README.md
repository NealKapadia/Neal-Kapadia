# Neal Kapadia — Professional Website

A minimal, fast Next.js site showcasing projects and case studies with an optional three.js scene and a text-first “Lite mode.”

## Stack
- Next.js (App Router) + TypeScript + Tailwind v4
- three.js via @react-three/fiber and @react-three/drei (lazy-loaded)
- zustand (Lite mode state), react-hook-form + zod (Contact form)

## Scripts
- dev: start local dev server
- build: production build
- start: run the production server
- sitemap: generate sitemap/robots using next-sitemap

```bash
npm run dev
npm run build
npm start
npm run sitemap
```

## Environment variables
Create a .env.local (not committed) with mail settings:

```
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM="Neal Portfolio <no-reply@example.com>"
SMTP_TO=
```

## Deploy (Vercel)
1. Push this repository to GitHub.
2. In Vercel, import this repo and set the Environment Variables above.
3. Trigger a deploy. Vercel auto-detects Next.js; no extra config required.

## Project structure (high level)
- app/: routes and layouts (About, Projects, Resume, Contact, API)
- components/: UI, 3D scene, Lite mode toggle
- data/: simple project data
- public/: resume PDF and images

## Notes
- 3D scene is lazy-loaded and can be disabled via “Lite mode.”
- Case studies are plain TS/TSX for now; can migrate to MDX/Contentlayer later.
