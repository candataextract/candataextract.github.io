Badges carry a state or an identifier in 18 px, `radius-1`. A status badge always has a glyph; a hex badge is always `mono`.

**Variants.** `cde-badge` (neutral, `surface-sunken`), `cde-badge--ok` / `--warn` / `--fault` (tint ground, status text) with the fixed glyphs ● ▲ ✕ as the first child, `cde-badge--trace` (selected or brand-related: patched response, active transform), `cde-badge--mono` for DTCs and arbitration IDs, `cde-badge--solid` with a status for a count that must be seen from across the room (`signal-ink` text on the status fill).

**Dots.** `cde-dot` with `--ok`, `--warn`, `--fault`; `cde-dot--live` adds the 1.2 s pulse for an active capture and stops under `prefers-reduced-motion`. A dot never stands alone; it sits before a `caption`.

**The consumer provides** the text, and for status badges the glyph SVG (copy from this preview or use Lucide `circle`, `triangle-alert`, `x-circle` at 10 px).

**Don't** colour a badge by hue alone, use `fault` for anything that is not an error, or put more than one solid badge in a row.
