#!/usr/bin/env bash
# Render print/business-card/index.html to print-ready PDFs with headless Chrome.
#
#   scripts/render-business-card.sh
#
# Output in print/business-card/:
#   business-card.pdf        85 × 55 mm trim + 3 mm bleed (91 × 61 mm), front and back as two pages.
#   business-card-marks.pdf  same, with a 3 mm slug and crop marks (97 × 67 mm).
#   business-card-front.png  proof images at 600 dpi.
#   business-card-back.png
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/print/business-card/index.html"
OUT="$ROOT/print/business-card"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

CHROME="${CHROME:-}"
if [ -z "$CHROME" ]; then
  for c in "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
           "/Applications/Chromium.app/Contents/MacOS/Chromium" \
           "$(command -v google-chrome || true)" "$(command -v chromium || true)"; do
    if [ -n "$c" ] && [ -x "$c" ]; then CHROME="$c"; break; fi
  done
fi
if [ -z "$CHROME" ]; then
  echo "No Chrome or Chromium found. Set CHROME=/path/to/chrome." >&2
  exit 1
fi

run() {
  "$CHROME" --headless=new --disable-gpu --no-first-run --no-default-browser-check \
    --user-data-dir="$TMP/profile" --no-pdf-header-footer --virtual-time-budget=2000 "$@" 2>/dev/null
}

run --print-to-pdf="$OUT/business-card.pdf"       "file://$SRC"
run --print-to-pdf="$OUT/business-card-marks.pdf" "file://$SRC?marks"

# Proof PNGs: one card per shot at 600 dpi (91 mm = 2150 px, 61 mm = 1441 px).
run --screenshot="$OUT/business-card-front.png" --window-size=2150,1441 --force-device-scale-factor=1 "file://$SRC?side=front"
run --screenshot="$OUT/business-card-back.png"  --window-size=2150,1441 --force-device-scale-factor=1 "file://$SRC?side=back"

ls -l "$OUT"/business-card*
