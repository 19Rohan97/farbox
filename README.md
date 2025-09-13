# Farbox Clone — Next.js + Tailwind

A clean, modern recreation of farbox.com.au built with Next.js (App Router) and Tailwind CSS. It includes the core marketing sections, dark mode, brand accents, animated shape backdrops, a mobile bottom nav, and content centralized in a single config.

## Quick Start

- Requirements: Node 18+ (or 20+), npm
- Install: `npm install`
- Dev server: `npm run dev` → http://localhost:3000
- Production build: `npm run build` then `npm start`

## Scripts

- `npm run dev` — start Next.js in dev mode
- `npm run build` — production build
- `npm run start` — run the built app
- `npm run lint` — Next lint

## Project Structure

- `app/` — App Router pages and global styles
  - `app/layout.tsx` — global layout (header, footer, dark mode classes)
  - `app/page.tsx` — homepage composition
  - `app/globals.css` — Tailwind layers, global utilities, animations
- `components/` — UI components
  - `Header.tsx`, `HeaderNav.tsx`, `MobileNav.tsx` — top nav with scroll‑spy + bottom mobile nav
  - `Hero.tsx`, `Services.tsx`, `Process.tsx`, `CaseStudies.tsx`, `About.tsx`, `Belief.tsx`, `BookCall.tsx`, `Contact.tsx`
  - `Container.tsx` — page container
  - `ShapesBackdrop.tsx` — reusable animated brand shapes behind images/cards
  - `Reveal.tsx` — simple reveal‑on‑scroll helper
- `content/site.ts` — site copy, links, lists (edit here to customize)
- `public/` — static assets (logos, images)

## Features

- App Router (Next 14), TypeScript, Tailwind 3
- Dark mode toggle (class‑based, persisted) with light as default
- Brand color: `#f24711` (from the Farbox site)
- Sections matching Farbox content:
  - Hero with brand chip and stat cards
  - Marquee of capabilities under Hero
  - Services with icons and supporting visual
  - The Farbox System (2‑column, interactive preview panel)
  - Case Studies (alternating layout, real example: Nundle)
  - Beliefs with glass card styling
  - About with photo, highlights, CEO quote
  - Featured Call to Action (brand‑tinted card)
  - Contact with form (left) and details/socials (right)
- Bottom app‑style mobile nav with smooth scroll and active highlighting
- Subtle animated shape backdrops and section reveals

## Customization

- Core content: `content/site.ts`
  - `logoUrl`, `tidycal` (booking), `hero`, `services`, `process`, `beliefs`
  - `clientLogos` for the logo slider
  - `caseStudies` list (title, category, summary, image, results, link)
  - `about` (photo, highlights, CEO note)
  - `book` (CTA copy) and `contact` (email, phone, socials)
- Brand color: `tailwind.config.js` → `theme.extend.colors.brand.500`
- Fonts: `app/layout.tsx` loads Montserrat via `next/font/google`

## Adding Case Studies

- Add another entry to `content/site.ts` under `caseStudies.items`:
  - `slug`, `title`, `category`, `summary`, `image` (place under `public/`), `results[]`, `link`
- The list renders on the homepage with alternating columns automatically.

## Assets

- Place images in `public/` and reference them with root‑relative paths (e.g. `/images/hero.png`).
- Example assets used here are placeholders or downloaded from the public site for demo.

## Deployment

- Vercel (recommended): push to a repo and import into Vercel
- Any Node host: `npm run build` then `npm start`

### Production uploads (audio/video/images)

Admin uploads use Supabase Storage in production. Configure the following env vars and create a public bucket named `uploads`:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Notes:
- The upload API returns a public Supabase URL like `https://<project>.supabase.co/storage/v1/object/public/uploads/admin/<filename>`.
- In development (no Supabase envs), files are written to `public/uploads` and served at `/uploads/<filename>`.
- In production without Supabase configured, uploads are intentionally blocked to avoid returning non-persistent `/uploads/...` URLs.

## Notes

- The contact form is UI‑only. Hook up an API route or a service (Resend/SendGrid) for submissions.
- Smooth scrolling accounts for sticky header height and updates the hash.
- All major visuals are dark‑mode aware; adjust per section if needed.

## License

This project is provided as a learning/demo scaffold. Replace content and assets with your own as appropriate.
