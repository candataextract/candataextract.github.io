# candataextract.github.io

Astro + Bun marketing site for CAN Data Extract, structured like `../../ts/telematicsstack.github.io`.

- Follow `design-system/CLAUDE.md`, `design-system/README.md` (brand book) and `design-system/notation.md` (how to write hex, frames, units) for all CSS and copy.
- Use token names, never literal colours. Every page must work in light and dark.
- Copy voice: precise, short, no marketing adjectives, no exclamation marks, no emoji. "Can Data Extract ApS" only in footer, company and legal text.
- Products are the online app and the desktop app. Do not mention the command-line tools (`ecusim`, `parse`, `scan`) anywhere on the site; they may be removed in a future version. Describe their functions (record, scan, simulate) as desktop-app features.
- Do not use the `CDE#43 44 45` sample frame from the brand book; it reads as an inside joke. Use the real UDS sample from `design-system/notation.md` where a frame is needed.
- URLs and the sales address live in `src/site.ts`.
