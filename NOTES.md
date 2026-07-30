# Accessibility Gaps: Custom Components vs. Base UI Primitives

## 1. No ARIA Tab Semantics

My buttons are just... buttons. Visually they act like tabs, but to a screen reader, they're an unlabeled group of buttons with no relationship to each other or to the content below.

Base UI's `Tabs.Root` / `Tabs.List` / `Tabs.Tab` / `Tabs.Panel` automatically wire up:

- `role="tablist"` on the list, `role="tab"` on each trigger, `role="tabpanel"` on the content
- `aria-selected` on the active tab
- `aria-controls` / `id` linking each tab to its panel
- Arrow-key navigation (`←`/`→` moves focus between tabs), `Home`/`End` to jump to first/last
- Roving `tabindex` — only the active tab is in the natural Tab order, not all three buttons

## 2. No ARIA Dialog Semantics — Screen Readers Don't Know This "Opened"

My modal is a `<div>` containing a `<form>`. Nothing marks it as a dialog, nothing announces to a screen reader that a modal just appeared, and nothing tells assistive tech what the dialog's accessible name/description even is.

Base UI wires up `role="dialog"`, `aria-modal="true"`, and connects `DialogTitle` / `DialogDescription` to the popup via `aria-labelledby` / `aria-describedby` automatically. My `<p>Edit your profile</p>` is visually a title but semantically just a paragraph — a screen reader user gets no signal that it's _the_ title of _this_ dialog.

## 3. Background Content Isn't Inert

While my modal is open, everything behind it — page content, other buttons — is still fully interactive. Nothing stops a screen reader user (or even a sighted keyboard user tabbing past the trapped area, if there isn't one) from reaching and interacting with content that's supposed to be "paused" behind the modal.

Base UI marks the rest of the page `inert` (or `aria-hidden`) while the dialog is open, so assistive tech treats background content as unreachable until the dialog closes. My version has no such boundary — the modal is visually on top, but not _logically_ on top.
