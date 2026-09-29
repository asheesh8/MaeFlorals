# Mae Florals

Website for **Mae Florals — Floral Art & Preservation** (Melissa, Claremont, NH).
Wedding bouquet preservation, sympathy flower keepsakes, pet memorials in resin and fresh arrangements.

## Stack

- Next.js 16 (App Router, static) + Tailwind CSS v4
- `motion` for scroll/entrance animation, `lenis` for smooth scrolling
- `@react-three/fiber` + `drei` for the interactive resin block (anemone / garden-pack GLBs, meshopt-compressed)

## Develop

```bash
npm install
npm run dev
```

## Content

- All copy, pricing and gallery lists live in `src/lib/content.ts`.
- `public/work/` — Melissa's photos from the Mae Florals Facebook page.
- `public/art/` — hand-coloured botanical plates generated with Higgsfield (transparent webp).
- `public/models/` — 3D flowers, compressed with `@gltf-transform/cli optimize --compress meshopt --texture-compress webp`.
