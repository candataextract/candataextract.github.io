# Can Data Extract design system

This folder is the local copy of the Can Data Extract design system (the Claude artifact "Can Data Extract" is the source of truth; re-export from it rather than hand-editing `tokens.css`).

Read `README.md` first: it is the brand book and names every token, text style and asset by name. `notation.md` is the house style for writing hex, frames, services and units; follow it in UI copy, docs and sample data.

## Files

- `tokens.json` — colours per theme (`light`, `dark`), type (fonts, families, text styles), spacing, radius, shadow. Every entry has a `usage` note.
- `tokens.css` — compiled from `tokens.json`: `--<token>` custom properties on `:root` (light) and `[data-theme="dark"]`, `--font-display|sans|mono`, one class per text style, and `@font-face` for `fonts/`. Load it first.
- `components/bundle.css` — `.cde-btn`, `.cde-badge`, `.cde-input`, `.cde-frames`, `.cde-bytes`, `.cde-decoder`, `.cde-panel`, built only on the tokens. Load after `tokens.css`.
- `components/<Name>/README.md` and `preview.html` — guidelines and a small HTML example for Logo, Button, Badge, Input, FrameTable and ByteDecoder.
- `fonts/` — Martian Mono Bold, JetBrains Mono Regular/SemiBold, IBM Plex Sans Regular/Medium/SemiBold (woff2, latin, SIL OFL).
- `assets/Logos/` — the mark, wordmark, lockups, favicon and app icon as SVG, with `README.md` saying which file goes on which ground.

## Rules for code in this repo

- Use token names (`var(--trace)`, `var(--space-4)`), never literal hex or px from the token list.
- Support both themes: light is `:root`, dark is `[data-theme="dark"]`; the app also honours `prefers-color-scheme` the way `can-data-extract-web/src/index.css` already does.
- Anything hex, an ID, a path or a command is set in `--font-mono`; uppercase hex, one space per byte, `ID#DATA` for a frame literal.
- Status colours (`fault`, `warn`, `ok`) always come with a word or glyph; `trace` is the only accent.
- Favicon: `assets/Logos/cde-favicon.svg`. Header lockup: `cde-lockup.svg` on light, `cde-lockup-paper-trace.svg` on dark.
