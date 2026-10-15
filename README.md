# candataextract.github.io

Website for CAN Data Extract at <https://candataextract.com>. The app itself lives at <https://app.candataextract.com>; the header's "Log in" button links there.

Built with [Astro](https://astro.build) and [Bun](https://bun.sh), deployed to GitHub Pages.

```sh
bun install
bun run dev       # http://localhost:4321
bun run build     # static site in dist/
bun run preview
```

## Layout

- `design-system/` is the brand kit and the source of truth. Read `design-system/README.md` and `notation.md` before writing copy or CSS.
- `src/styles/tokens.css` is `design-system/tokens.css` with font paths pointing at `/fonts/` and a `prefers-color-scheme: dark` block. `src/styles/components.css` is a copy of `design-system/components/bundle.css`. Re-copy both when the design system changes.
- `public/fonts/`, `public/logos/` and `public/favicon.svg` are copies from `design-system/`.
- `src/site.ts` holds the app URL, the sales address and the company name.
- `src/pages/` has one file per page: home, product, pricing, download, docs, company, privacy, terms, 404.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yaml`: the `Dockerfile` builds the site and exports `dist/` as the Pages artifact. `public/CNAME` sets the custom domain; DNS for candataextract.com must point at GitHub Pages, and the repository's Pages source must be set to "GitHub Actions".

## Still to fill in

Product screenshots: each feature shows a placeholder until `public/screenshots/<name>-light.png` and `<name>-dark.png` exist. The list is `src/screenshots.ts`; `docs/screenshot-brief.md` is the brief for capturing them.

Search for `TODO` in `src/pages/`: CVR number and address on the company page, and the open sections of the privacy policy and terms. Pricing says "Price on request" until prices are set.
