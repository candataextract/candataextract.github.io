// Every product screenshot the website uses. One entry per feature.
// Files live in public/screenshots/<name>-light.png and <name>-dark.png (1440 × 900 CSS px at 2x).
// The Screenshot component shows a placeholder until both files exist; see docs/screenshot-brief.md.

export interface ShotSpec {
  name: string;
  title: string;
  app: 'online' | 'desktop';
  /** What the screenshot must show. Used as placeholder text and in the brief for the app team. */
  shows: string;
  /** Alt text for the finished image. */
  alt: string;
}

export const SHOTS: Record<string, ShotSpec> = {
  monitor: {
    name: 'monitor',
    title: 'Live monitor',
    app: 'online',
    shows: 'The frame table during a diagnostic session: several hundred frames, one response row selected, the inspector open beside it.',
    alt: 'The CAN Data Extract frame table showing UDS requests and responses, with one response selected.',
  },
  isotp: {
    name: 'isotp',
    title: 'ISO-TP reassembly',
    app: 'online',
    shows: 'The streams view with multi-frame ISO-TP messages reassembled, for example a ReadDataByIdentifier 0xF190 VIN response shown as one message.',
    alt: 'Reassembled ISO-TP messages, each multi-frame response shown as one line.',
  },
  decoder: {
    name: 'decoder',
    title: 'Byte decoder',
    app: 'online',
    shows: 'The byte decoder for one response: the frame literal, byte cells with offsets, and decoded fields, with one field hovered so its bytes are highlighted.',
    alt: 'The byte decoder with a field highlighted in the payload.',
  },
  transforms: {
    name: 'transforms',
    title: 'CEL transforms',
    app: 'online',
    shows: 'The transform panel with a CEL expression that extracts a value from a payload, and its matches highlighted in the table.',
    alt: 'A CEL transform and the frames it matches.',
  },
  collections: {
    name: 'collections',
    title: 'Collections and ECU trees',
    app: 'online',
    shows: 'The explorer with a collection of traces for one vehicle open, and the ECU tree listing named ECUs.',
    alt: 'A collection of traces and the ECU tree for one vehicle.',
  },
  teams: {
    name: 'teams',
    title: 'Teams',
    app: 'online',
    shows: 'The namespace selector open with a private and a team namespace, and the account menu with its sign-in methods.',
    alt: 'The namespace selector with private and team namespaces.',
  },
  record: {
    name: 'record',
    title: 'Record',
    app: 'desktop',
    shows: 'The desktop app capturing live: the interface selector set to a real adapter (can0 or PCAN_USBBUS1) at 500 kbit/s, the live indicator on, and frames arriving.',
    alt: 'The desktop app recording live from a CAN adapter.',
  },
  scan: {
    name: 'scan',
    title: 'Scan',
    app: 'desktop',
    shows: 'The result of scanning a car: VIN, the list of discovered ECUs, their data identifiers and fault codes with status badges.',
    alt: 'Scan results listing the ECUs found in a car and their fault codes.',
  },
  simulate: {
    name: 'simulate',
    title: 'Simulate',
    app: 'desktop',
    shows: 'The ECU simulator running on an interface: several simulated ECUs and the last requests they answered.',
    alt: 'The ECU simulator answering diagnostic requests as several ECUs.',
  },
  'sim-config': {
    name: 'sim-config',
    title: 'Traces to simulator',
    app: 'desktop',
    shows: 'The ECU config editor for a simulator config built from a recorded trace, with paired request and response IDs and named ECUs.',
    alt: 'A simulator config built from a recorded trace.',
  },
};
