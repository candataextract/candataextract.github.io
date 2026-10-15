# Screenshot brief for the CAN Data Extract website

Paste everything below the line into the agent working on the application.

---

The marketing site for CAN Data Extract (repo `/Users/tlb/git/tlb/candataextract.github.io`) needs real product screenshots, one per feature, in light and dark theme. Each one currently shows a placeholder, and the site picks up a real image automatically when the file appears. Please capture them from the running app and write a script that regenerates them, so they can be refreshed when the UI changes.

## Where the files go

Write PNGs to `/Users/tlb/git/tlb/candataextract.github.io/public/screenshots/`, named `<name>-light.png` and `<name>-dark.png`. The names are fixed by the table below. The site's list is in `src/screenshots.ts` in that repo; do not edit it.

## Capture settings

- Viewport 1440 × 900 CSS px, device scale factor 2, so each file is 2880 × 1800 px. Capture the viewport only, not the full page.
- Take each shot twice, once per theme. Set the app's theme with Playwright's `colorScheme` option or with the `can-monitor-theme` key in localStorage (`light` or `dark`), and reload before capturing.
- App window only: no browser chrome, no device frame, no mouse cursor, no dev-server overlays, no error toasts, no "No namespaces yet" empty states.
- Wait until fonts are loaded and tables have rendered (`document.fonts.ready`, then wait for the network to go idle) before capturing.
- Keep each PNG under about 600 KB. Run `oxipng` or `pngquant` on them if either is installed.
- Use Playwright; it is already a dev dependency of `can-data-extract-web`. Put the script at `can-data-extract-web/scripts/website-screenshots.ts`, with a short comment at the top on how to run it. It should use the same server and data setup each time, so a second run produces the same shots.

## Data in the shots

The screenshots are public, so the data in them must be safe to publish and look real to an automotive diagnostics engineer.

- Use traces from the repo's own test or example data (`can-data-extract/traces/`, `can-data-extract/examples/`), not customer data. If a trace contains a full VIN from a real car, use a different trace or mask the VIN in the demo data rather than in the image.
- Sign in as a demo account, for example `engineer@example.com`, with namespaces named like `private/demo` and `team/bench-lab`. No real names or real email addresses.
- Prefer UDS sessions with a mix of positive responses, one negative response (`7F`), and multi-frame ISO-TP messages, so the colour coding is visible.
- Do not change the app's look for the screenshots. Use the app as it ships.

## The screenshots

| name | app | what it must show |
| --- | --- | --- |
| `monitor` | online | The frame table during a diagnostic session: several hundred frames, one response row selected, the inspector open beside it. |
| `isotp` | online | The streams view with multi-frame ISO-TP messages reassembled, for example a ReadDataByIdentifier 0xF190 VIN response shown as one message. |
| `decoder` | online | The byte decoder for one response: the frame literal, byte cells with offsets, and decoded fields, with one field hovered so its bytes are highlighted. |
| `transforms` | online | The transform panel with a CEL expression that extracts a value from a payload, and its matches highlighted in the table. |
| `collections` | online | The explorer with a collection of traces for one vehicle open, and the ECU tree listing named ECUs. |
| `teams` | online | The namespace selector open with a private and a team namespace, and the account menu with its sign-in methods. |
| `record` | desktop | The desktop app capturing live: the interface selector set to a real adapter (`can0` or `PCAN_USBBUS1`) at 500 kbit/s, the live indicator on, and frames arriving. |
| `scan` | desktop | The result of scanning a car: VIN, the list of discovered ECUs, their data identifiers and fault codes with status badges. |
| `simulate` | desktop | The ECU simulator running on an interface: several simulated ECUs and the last requests they answered. |
| `sim-config` | desktop | The ECU config editor for a simulator config built from a recorded trace, with paired request and response IDs and named ECUs. |

The desktop shots come from the desktop app (`can-data-extract/cmd/desktop`). If running it with real hardware is impractical, a virtual interface (`vcan0`) with the simulator answering a scripted tester is fine, as long as the interface name shown is a realistic one.

## When a view does not exist

Some views in the table may not exist yet, or may look different from the description. Do not build UI just for a screenshot. Skip that shot, and list it in your report with what exists instead. If a view exists but needs a hover or an open menu, script that interaction.

## Report back

When done, list:

- which files you wrote, with their pixel size and file size;
- which shots you skipped and why;
- the command that regenerates all of them.
