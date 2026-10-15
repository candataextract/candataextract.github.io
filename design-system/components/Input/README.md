Inputs are 28 px, `radius-2`, with an uppercase `label` above and an optional `caption` line of help below. Anything the engineer types as hex, an ID or a path uses `cde-input--mono`.

**Structure.** `cde-field` (a `<label>`) wraps a `cde-label`, the control, and a `cde-help`. Selects share the `cde-input` class plus `cde-select`; the consumer draws the chevron.

**States.** Rest border `line-control`. Focus: `trace` border plus the 2 px solid `focus` ring. Error: `aria-invalid="true"` turns the border `fault` and the help line `cde-help--fault`; the message says what is wrong in the data's own terms and what would fix it. Placeholder text is `ink-faint` and is never the only label.

**The consumer provides** the label, the value, help or error text, and a stable `id` per control.

**Don't** drop the label for an icon, use a placeholder as the label, or pad hex for the user silently; show the error instead.
