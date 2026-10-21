# Business card

Danish standard size: 85 × 55 mm trim, 3 mm bleed, 5 mm safe margin.

- `index.html` is the source. It loads `design-system/tokens.css`, the brand fonts and the logo SVGs. Front: primary lockup, name, role, contact in `mono`. Back: `cde-mark-dark.svg` on an `ink-fixed` ground and the canonical UDS exchange from `notation.md`.
- `scripts/render-business-card.sh` renders it with headless Chrome.
- `business-card.pdf` is the file for the print shop: 91 × 61 mm pages, page 1 front, page 2 back, fonts embedded, RGB.
- `business-card-marks.pdf` is the same with a 3 mm slug and crop marks, for shops that ask for them.
- `business-card-front.png` and `business-card-back.png` are 600 dpi proofs.

Open `index.html` in a browser to proof; `?side=front`, `?side=back` and `?marks` select the render modes.
