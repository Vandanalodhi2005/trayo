# TRAYO — Project Architecture & Development Log

## Overview
**TRAYO** (*"A Crunch of Goodness."*) is a direct-to-consumer e-commerce platform for premium Indian makhana (fox nuts) and wholesome snacks, built with Next.js App Router in strict JavaScript (`.jsx` for React components/pages/layouts, `.js` for configuration/utilities/data/APIs).

## Tech Stack
- **Framework:** Next.js 16.4.6 (App Router)
- **Language:** JavaScript (strictly no TypeScript `.ts`/`.tsx`)
- **Styling:** Tailwind CSS v4 with CSS custom properties
- **Typography:** `Playfair Display` (editorial headings) & `DM Sans` (body, UI, navigation) via `next/font/google`
- **Motion & Icons:** `framer-motion` (with `useReducedMotion` support) and `lucide-react`

## Brand Color Tokens (`app/globals.css`)
- `--trayo-primary`: `#B94F24` (Primary burnt orange)
- `--trayo-charcoal`: `#241C18` (Deep charcoal)
- `--trayo-cream`: `#F5EBDD` (Warm cream)
- `--trayo-light-cream`: `#FCF8F1` (Light cream)
- `--trayo-sand`: `#C9A982` (Natural sand)
- `--trayo-olive`: `#66704E` (Olive green)
- `--trayo-muted`: `#75685D` (Muted text)

## Completed Phases
### Phase 1: Project Setup, Global Styles, Brand Identity, Typography & Reusable Layout
- Converted project to strict JavaScript (`jsconfig.json`, `next.config.mjs`, `.jsx`/`.js` files).
- Configured brand CSS variables, typography, `AnnouncementBar.jsx`, `Header.jsx`, `MobileNavDrawer.jsx`, `Footer.jsx`, and shell error/loading/not-found routes.

### Phase 2: Complete TRAYO Homepage
- Built modular homepage sections in `components/home/`:
  - `Hero.jsx` & `WaterBubbles.jsx` (CSS-keyframe translucent floating water bubbles with `prefers-reduced-motion` support)
  - `Marquee.jsx` (seamless CSS infinite horizontal marquee with pause-on-hover)
  - `BrandStory.jsx` (asymmetric editorial story section)
  - `FeaturedProducts.jsx` (4-card collection grid with wishlist toggle and sample product data in `lib/homeData.js`)
  - `GoodnessSection.jsx` (4 numbered feature blocks)
  - `MakhanaShowcase.jsx` (asymmetric editorial collage)
  - `Testimonials.jsx` (accessible carousel with clearly marked demo reviews)
  - `Newsletter.jsx` (validated form with honest unavailable-backend notice)
  - `FinalCTA.jsx` (bold burnt-orange CTA with floating bubble accents)
- Added local makhana photography in `public/images/` and clean placeholders where image-generation quota was reached.
