# Logos

The mark is the CAN bus as it appears on an oscilloscope: two traces, CAN_H above and CAN_L below. In the recessive state the two sit close to the centre line; in a dominant bit CAN_H steps up and CAN_L steps down. The pattern across the mark is 0 1 0 1 1 0. Every file is an SVG with its colours baked in; pick the file for the ground, do not recolour with CSS.

| File | Ink | Use on |
| --- | --- | --- |
| `cde-mark.svg` | CAN_H `trace` light value (#5b2fd6), CAN_L `ink-fixed` (#121019) | Light grounds, the app header in light theme |
| `cde-mark-dark.svg` | CAN_H `trace` dark value (#b39bff), CAN_L `paper` (#ffffff) | Dark grounds, the app header in dark theme |
| `cde-mark-ink.svg` | both `ink-fixed` | Single-colour print, light photography |
| `cde-mark-paper.svg` | both `paper` | Dark photography, inside a `trace` tile, one-colour on dark |
| `cde-wordmark.svg` | `ink-fixed` | The wordmark alone on light grounds |
| `cde-wordmark-paper.svg` | `paper` | The wordmark alone on dark grounds |
| `cde-lockup.svg` | two-tone mark, wordmark `ink-fixed` | Primary lockup. Website header, docs, light slides |
| `cde-lockup-paper-trace.svg` | mark `trace` dark + `paper`, wordmark `paper` | Dark theme app header, dark slides, the website in dark mode |
| `cde-lockup-ink.svg` | all `ink-fixed` | Print, embossing, fax-grade reproduction |
| `cde-lockup-paper.svg` | all `paper` | Dark grounds where only one ink is allowed |
| `cde-favicon.svg` | `paper` mark on `trace` tile, `radius-3` | Browser favicon, 16 to 32 px |
| `cde-app-icon.svg` | `paper` mark on `trace` tile, 112/512 radius | Desktop app icon; export PNG at 512 and 1024 |
| `cde-short.svg` | `ink-fixed` | "CDE" in Martian Mono for terminals and tight headers, light grounds |
| `cde-short-paper.svg` | `paper` | Same, dark grounds |

Mark geometry, for anyone who must redraw it at another size: a 32-unit square, two polylines with a 2.5-unit round-capped stroke. CAN_H `M3 13H7.3V7H11.7V13H16V7H24.7V13H29`, CAN_L `M3 19H7.3V25H11.7V19H16V25H24.7V19H29`. The favicon and app-icon tiles use a 3.25 and 3 stroke so the lines survive at 16 px. CAN_H always takes `trace`; CAN_L always takes the ink of the ground. Never swap them and never draw both in `trace`.

Minimum sizes: mark 16 px tall, lockup 20 px cap height. Clear space on all sides equals the mark's height.
