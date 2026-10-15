Buttons are 28 px tall, `radius-2`, labelled with an imperative verb. One `cde-btn--primary` per view at most.

**Variants.** `cde-btn` (secondary, `line-control` border on `surface`), `cde-btn--primary` (`trace` fill, `trace-ink` text), `cde-btn--ghost` (no border; toolbars and dialog cancel), `cde-btn--danger` (`fault` fill; destructive actions that touch a car or delete data: clear DTCs, delete collection). `cde-btn--sm` is 22 px for inline table actions. `cde-btn--mono` sets the label in `mono` for interface names, IDs and commands; a selected interface chip adds `trace` border and `trace-tint` fill.

**The consumer provides** the label text and, optionally, a 14 px Lucide icon as the first child.

**States.** Hover `surface-hover` (filled variants darken 6%). Focus is the 2 px solid `focus` ring. Disabled drops to `ink-faint` on `surface` with a `line` border; never reduce opacity.

**Don't** use a primary button for navigation, put two primaries side by side, or use `cde-btn--danger` for anything that only affects the UI.
