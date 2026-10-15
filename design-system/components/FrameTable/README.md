The frame table is the product's signature view: 24 px rows of `data`, columns in the fixed order time, interface, ID, DLC, direction, payload, decoded.

**Columns.** `c-time` in `ink-muted`; `c-if` in `ink-faint`; `c-id` in `byte-id` at `data-strong`; `c-dlc` right-aligned `ink-faint`; `c-dir` a glyph (→ request, ← response) in `ink-muted`, never a colour; payload as `cde-bytes` with one space per byte; `c-decoded` in `ui` with the service name in `ink`.

**Byte semantics inside the payload.** `b-sid` for the request's length and service bytes, `b-pos` for a positive response SID (`SID + 0x40`), `b-nrc` for a `7F` negative response, `b-pad` for ISO-TP padding, `b-hl` for the range the decoder or a transform has picked out. Only the bytes that mean something are coloured; the row never is.

**Selection and hover.** `aria-selected="true"` on the row gives `trace-tint` and a 2 px `trace` stripe on the first cell. Hover is `surface-hover`. Header cells are sticky, `label` style on `surface-sunken`.

**The consumer provides** the rows (virtualised above a few hundred), the panel head with the interface, vehicle and a count in `mono`, and a container with `overflow-x: auto`; the table itself never wraps.

**Don't** zebra-stripe, add row borders heavier than `line`, colour whole rows by status, or exceed 24 px per row.
