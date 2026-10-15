# Writing data

Engineers trust a tool that writes bytes the way they do. These rules apply to the product, the docs, the website, slides and support replies.

## Hex

- Uppercase hex, no `0x` prefix inside payloads: `02 10 03`, never `0x02 0x10 0x03` or `021003`.
- One space between bytes. Never a comma, never a dash.
- `0x` prefix only when naming a single value in prose: "service 0x10", "DID 0xF190", "NRC 0x78".
- Always two digits per byte (`0A`, not `A`). IDs are three digits for 11-bit (`7E0`) and eight for 29-bit (`18DA10F1`), zero-padded.
- Set every hex value in `mono` (`data` in tables, `code` in docs, `frame` when it is the point of the page).

## Frames

- The frame literal is `ID#DATA`, the cansend form the tools already read: `7E0#02 10 03`. Flags for CAN FD follow the same form: `220##0 AA BB`.
- In a table the ID and the payload are separate columns, so the `#` disappears; it reappears whenever a frame is written as one string.
- Colour a literal with the byte aliases: ID in `byte-id`, service byte in `byte-service` and `data-strong`, the rest in `byte-data`, padding in `byte-padding`.
- A request is written before its response, on two lines, with the direction glyph in `ink-muted`:

```
→ 7E0#02 10 03
← 7E8#06 50 03 00 32 01 F4
```

## Services and identifiers

- UDS services by name and hex: "DiagnosticSessionControl (0x10)". KWP2000 services the same way: "StartDiagnosticSession (0x10)".
- DIDs as `0xF190` in prose and `F1 90` inside a payload.
- DTCs in the manufacturer's display form when known (`P0171`, `U0100`), the raw three bytes otherwise (`01 71 00`).
- Negative response codes as "NRC 0x78 (requestCorrectlyReceived-ResponsePending)" on first mention, `7F 10 78` inside a payload.

## Units and time

- Bitrate: `500 kbit/s`, not `500k`, not `500 kbps`.
- Timestamps in ISO 8601 with a `T` and a zone: `2024-10-22T09:40:26.489Z`. Deltas as `+0.000124 s` with six decimals in tables, three in prose.
- Voltages for the physical layer: `2.5 V` recessive, `3.5 V` / `1.5 V` dominant.
- Interfaces by their OS name in `mono`: `can0`, `bus1`, `PCAN_USBBUS1`.

## Config and code

- YAML keys in the tools' own casing: `txId`, `rxId`, `functionalTxIds`, `respondToFunctional`.
- Commands in `code`, one per line, with the real binary name: `can-shim --list-interfaces`.
- File formats by their usual names: candump log, PCAN TRC, VCDS, ODIS, MF4.

## Example block

The canonical sample, used wherever a sample is needed and nothing real is at hand:

```
→ 7E0#02 10 03          DiagnosticSessionControl (0x10), extended session
← 7E8#06 50 03 00 32 01 F4   positive response, P2 = 50 ms, P2* = 5000 ms
```
