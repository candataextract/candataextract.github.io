CAN Data Extract is a toolkit for the people under the dashboard: automotive diagnostics engineers who read hex, plug USB CAN adapters into real cars, and need to know exactly what an ECU said. The identity is built from the one picture every one of them recognises, the CAN differential pair on an oscilloscope, and from the way they already write data: `7E0#02 10 03`.

Everything here is a rule for building with the brand. Tokens are named in backticks; use them by name, never by value.

## Names

- **Can Data Extract ApS** is the legal entity. Use it only in legal text, invoices, the website footer and the About dialog, with "ApS" and this casing.
- **CAN Data Extract** is the product and the brand. "CAN" is uppercase because it is the bus. Write it this way in prose, titles and the cover.
- **CDE** is the short form. Use it in code, file names, tight UI and when the full name already appeared on the page. Never "C.D.E." or "Cde".
- The tools keep their lowercase command names in text and code: `ecusim`, `parse`, `scan`, `can-shim`, `can-stack`. Do not capitalise them at the start of a sentence; rewrite the sentence.
- The product line is "CAN Data Extract" + a tool name: "CAN Data Extract ecusim". A new tool in the same category joins the same way.

## Voice

Write like the engineer you are talking to would: precise, short, literal.

- Lead with the fact. "ECU 7E0 answered 7F 10 78: request correctly received, response pending." not "Oops, something went wrong".
- Imperative in controls and docs: "Connect adapter", "Export collection", "Patch byte 2".
- Name protocols and services exactly as the standard does: UDS, KWP2000, OBD, ISO-TP, ISO 14229, CAN FD. Service names in UDS wording: "DiagnosticSessionControl (0x10)".
- No marketing adjectives (powerful, seamless, next-generation). The claim is the frame on screen.
- No exclamation marks, no emoji anywhere in product, docs or website.
- "You" for the engineer, "we" only on the company pages. The product never says "I".
- Second-person plural is fine for teams: "Your team's collections".
- Errors say what happened, in the data's own words, and what to do next: "No frames on can0 for 5 s. Check bitrate (500 kbit/s expected) and termination."

## Logo

The mark is the CAN bus on an oscilloscope: two traces, CAN_H above in `trace` and CAN_L below in the ground's ink, close together in the recessive state and stepping apart in each dominant bit (the pattern is 0 1 0 1 1 0). It is a stroke drawing, not a glyph; its geometry is in `assets/Logos/cde-mark.svg` and nowhere else.

- Two-tone by default: CAN_H in `trace`, CAN_L in `ink-fixed` on light grounds (`cde-mark.svg`) or `paper` on dark grounds (`cde-mark-dark.svg`). Single-ink versions (`-ink`, `-paper`) are for print and tiles. Never both channels in `trace`, never a status colour, never a gradient, never outlined.
- Minimum size: 16 px tall as the mark alone (the favicon), 20 px cap height for the lockup.
- Clear space: the height of the mark on every side.
- The wordmark is "CAN DATA EXTRACT" in Martian Mono Bold, uppercase, 0.06 em tracking, as outlines in `assets/Logos/cde-wordmark.svg`. If it must be live text use the `wordmark` style. Martian Mono is the wordmark's face only; headlines use `display`.
- Primary lockup: two-tone mark + wordmark in `ink-fixed` on a light ground (`cde-lockup.svg`). On dark grounds use `cde-lockup-paper-trace.svg` (CAN_H in the dark-theme `trace`, CAN_L and the wordmark in `paper`). Single-ink versions exist for print and embossing.
- The favicon is the two-tone mark on a `trace` tile with `radius-3` (CAN_H in a lilac tint, CAN_L in `paper`); the app icon is the two-tone mark on an ink tile with a 112/512 radius. Do not put the lockup on a tile.
- Do not rotate, skew, add a drop shadow, change the bit pattern, swap the channels' colours, or place the mark inside another shape.
- `CDE` as a typographic short mark (`cde-short.svg`) is for places the mark cannot be drawn: a monospaced terminal banner, an ASCII header.

The bytes `43 44 45` are the ASCII of "CDE". `CDE#43 44 45` is the brand's one in-joke; use it as the sample frame on swag, the 404 page and the website hero, and nowhere that it could be mistaken for real data.

## Colour

Two themes, equal weight. Every surface in the product must be designed in both; light is the first theme because docs and print are light, dark is where most engineers run the monitor.

- Grounds are `surface`, `surface-sunken` (sidebar, payload blocks, header rows) and `surface-raised` (anything floating). Hover is `surface-hover`; selection is `trace-tint` with a `trace` stripe, never a darker grey.
- Text is `ink` for what the engineer reads (IDs, values, headings) and `ink-muted` for everything that explains it. `ink-faint` is never running text.
- `trace` is the brand and the only chromatic accent. It marks what is selected or primary: the primary button, links, the focus ring, the highlighted byte range, the ID column. Text on a `trace` fill is `trace-ink`.
- Status is its own set and never doubles as decoration: `fault` (red), `warn` (amber), `ok` (green), each with a `-tint` ground. A status always carries a word or glyph as well, because red, amber and green cannot be told apart by hue alone by everyone. Red and amber are close in lightness in light theme; the glyph is not optional.
- Byte semantics inside a payload use the aliases `byte-id`, `byte-service`, `byte-data`, `byte-padding` so a decoder, a table and a docs page colour the same byte the same way.
- `paper` and `ink-fixed` do not change with theme. Use them for the logo on photographs and print, nothing else.
- Neutrals carry a slight violet cast toward `trace`; do not substitute a pure grey.
- No gradients, no transparency tricks for hierarchy, no coloured left borders on cards. Separation is `line`, `surface-sunken` or `shadow-pop` (popovers only).

## Type

Three families in use, plus the wordmark's own.

- **Schibsted Grotesk** (`display`) is the headline voice: `display-1` on the website hero, `display-2` on section and slide titles. Bold, tight-tracked, one or two lines at most; never below 24 px and never inside the app.
- **Martian Mono** (`wordmark`) appears in exactly one place: the wordmark, as the `wordmark` style when it must be live text. Do not use it for headlines or anything else.
- **IBM Plex Sans** (`sans`) is the interface: `title`, `heading`, `body`, `ui`, `caption`, `label`. The app runs on `ui` (12 px); `body` (13 px) is for dialogs and docs.
- **JetBrains Mono** (`mono`) is the data: `data`, `data-strong`, `data-sm`, `code`, `frame`. Any hex, ID, timestamp, path or command is set in `mono`, even inside a sentence. Set `font-variant-numeric: tabular-nums` on every data column.
- `label` is always uppercase with its 0.08 em tracking. Nothing else is uppercase except the wordmark.
- Headings do not use `display` inside the app; the app's largest text is `title` at 18 px.
- Line lengths for running text stay near 65 characters. Tables do not wrap; they scroll horizontally inside their own container.

## Spacing, radius, borders

- The product is dense: a 2 px scale (`space-1` to `space-8`) matches the app's existing `--sp-*` values one to one, so existing CSS maps without renaming. Website and docs use `space-10` and up.
- Corners are tight: `radius-1` on cells and badges, `radius-2` on controls, `radius-3` on panels and popovers. Only status dots and count pills are round.
- Borders separate, shadows float: `line` between panes and rows, `line-strong` around a table or a card on `surface-sunken`, `line-control` on inputs at rest, `shadow-pop` only on popovers and dialogs.
- Focus is a 2 px solid `focus` ring with 2 px offset on every interactive element, in both themes. Never remove it, never replace it with a glow.

## Data display

The frame table is the product's signature view and the website's hero image.

- Columns in this order: time (or delta), interface, ID, DLC, payload, decoded. ID is `data-strong` in `byte-id`; payload is `data` with one space between bytes; decoded text is `ui` in `ink-muted`.
- Rows are 24 px tall at `ui` size and never taller; the table virtualises.
- Selection is `trace-tint` with a 2 px `trace` stripe on the left edge of the row. Hover is `surface-hover`.
- A highlighted byte range (the byte decoder, a transform match) is `trace-tint` behind the bytes with `radius-1`, text in `trace`.
- Direction is a glyph in `ink-muted`: → request, ← response. Not colour.
- Negative responses (`7F`) take `fault` on the service byte only, not the whole row. Positive responses (`SID + 0x40`) take `ok` on the service byte only.

## Iconography

The product has no icon set yet. Use Lucide (ISC licence, 1.5 px stroke at 16 px) for interface icons in `ink-muted`, `ink` on hover, and `trace` when the icon is the selected state. Status glyphs are fixed: ● for ok, ▲ for warn, ✕ for fault, drawn from Lucide's `circle`, `triangle-alert` and `x-circle` in the matching status colour. Never use emoji as icons. The mark is not an icon; do not put it in the icon set.

## Imagery

Photographs, where used on the website, show the bench: an adapter on a desk, an ECU on a harness, a laptop open under a dashboard. Shot with available light, no colour grading toward the brand. No stock "connected car" renders, no glowing wireframe vehicles, no dashboards with speedometers. Screenshots of the product are preferred to photographs and are shown in the theme of the page they sit on, with a 1 px `line-strong` border and no device frame.

## Motion

Almost none. Rows appear; they do not slide. The only motion is a 120 ms opacity on popovers and the live-capture indicator, a `ok` dot pulsing between 100% and 40% over 1.2 s. Respect `prefers-reduced-motion` by removing the pulse.
