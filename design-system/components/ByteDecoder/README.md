The byte decoder shows one payload three ways that stay in step: the frame literal, a row of byte cells with offsets, and the decoded fields. Hovering a field highlights its bytes; hovering a byte highlights its field.

**Frame literal.** `cde-frame-lit` at the `frame` style: ID in `byte-id`, `#` in `ink-faint`, service bytes in `byte-service`, the rest in `byte-data`. It scrolls horizontally rather than wrapping.

**Cells.** 28 × 22 px, `radius-1`, `surface-sunken` with a `line` border; offsets above in `data-sm` `ink-faint`. The service cell (`sid`) is `data-strong` with a `line-strong` border; a highlighted range (`hl`) is `trace-tint` with a `trace-line` border and `trace` text; padding (`pad`) is `byte-padding` with a dashed border.

**Fields.** `cde-decoder` is a definition list: `label`-style terms, values in `ink` with raw bytes in `mono` and the arithmetic written out ("500 × 10 ms = 5000 ms"), because the engineer will check it.

**The consumer provides** the frame, the cell classes per byte from its own decoder, the field list, and the hover wiring.

**Don't** colour more than one range at a time, hide the raw bytes behind the decoded value, or round the arithmetic.
