# Kerb Design System

**Kerb** is a fictional UK digital car insurer, created as a portfolio project for a Senior UI/UX Designer role. The brief: make everything from getting a quote to filing a claim simple, transparent and stress-free across web and mobile. Company, name, wordmark and system are all invented.

## Sources
- The only source is the role description pasted by the user (Senior UI/UX Designer, car insurance: quote, policy management and claims journeys; web + mobile; dashboards and data-heavy UI a plus).
- No codebase, Figma file, logo, fonts or imagery were provided. Everything here is authored from scratch.

## Products
1. **Kerb app** (iOS/Android) — home with active policy, policy details, documents, drivers, claims list, 4-step claim flow, claim tracker, account.
2. **Kerb web** — quote journey (car → you → cover → pay) and signed-in account dashboard (policies table, renewals, claims).

---

## Content fundamentals
Kerb talks like a calm, competent friend who happens to know insurance. The job is to take the dread out of a stressful category.

- **Person:** second person to the customer ("your policy", "you're covered"); first-person plural for Kerb ("we'll text you"). Never "the policyholder", never "I".
- **Casing:** sentence case everywhere — headings, buttons, tabs, badges. Only proper nouns and "UK" are capitalised. Overlines in mono are uppercased by CSS, not in the copy.
- **Plain English over jargon.** Industry terms (excess, no-claims discount, comprehensive) are kept because customers will see them elsewhere, but always explained in the same breath or via a tooltip: "Your excess is £250. That's what you pay towards a claim."
- **Concrete numbers, dates and times.** "Usually 1–2 working days", "Renews 14 Mar 2027", "£38.20/month". Prices always show period and include tax ("Prices include Insurance Premium Tax").
- **Tell people what happens next** and whether they need to act: "We'll text you when there's an update. You don't need to do anything."
- **Buttons are verbs:** "Start a claim", "Find car", "Pay £38.20 and start cover", "Keep going". Safe option in destructive dialogs is explicit: "Keep policy".
- **Errors say how to fix it:** "Enter your full postcode, like E8 3RL" — never "Invalid input". System failures take the blame: "Something went wrong on our side."
- **Empathy without drama.** In claims: "If anyone needs help, call 999 first." No exclamation marks, no "Oops!", no "Uh-oh".
- **Emoji:** never. **Headlines** are short and declarative: "You're covered.", "What happened?", "Let's find your car".
- Contractions are fine (you're, we'll, don't). British spelling and £.

## Visual foundations
- **Palette.** *Evergreen* (#0B2A22 → #EFF7F3) is the brand: primary actions use green-600, hero surfaces green-900. *Marker* (#E4F55A), a hi-vis road-line yellow, is the only accent — one hero CTA per screen (Get a quote, Start a claim), plan flags, highlights on evergreen, and the number-plate field. It is never text on light backgrounds. *Stone* warm neutrals carry text, borders and the page (#F5F4EF). Status colours (green/amber/red/blue) each come as fg/bg/border triples.
- **Type.** Bricolage Grotesque (display: 800/700, tight -0.035em tracking) for headlines and big prices; Instrument Sans for everything you read or tap; IBM Plex Mono for references, plates, overlines and anything the user might need to read out on the phone. Figures are tabular wherever money lines up.
- **Backgrounds.** Flat colour only — warm stone or white page, white cards, evergreen hero blocks and app bars. No textures or illustration. The one gradient allowed is the evergreen fade (`green-900` → transparent over 35%) where a hero photo meets an evergreen panel. Damage/upload photo slots stay as placeholders.
- **Imagery.** One hero photo so far: `assets/images/hero-coastal-road.jpg` (dark green hatchback on a wet coastal road, overcast daylight) on the quote landing. New imagery should follow it: real roads and ordinary cars, natural light, no heavy grain, no stock-photo handshakes. Never crash imagery.
- **Corner radii.** Pills for buttons, badges, tags, tabs; 12px inputs and alerts; 16px cards and plan options; 24px dialogs and bottom sheets; 4–8px small bits (tooltips, plates).
- **Cards.** White, 16px radius, `--shadow-1` (a 1px green-tinted hairline + 2px soft shadow). Outline variant = hairline only; sunken = stone-100; inverse = evergreen. No coloured left-border accents; alerts use a full hairline in their tone.
- **Shadows.** Three levels, all tinted with evergreen rather than black: rest, hover/dropdown, overlay (dialogs, toasts). No inner shadows except the 1.5px inset used on plates.
- **Borders.** 1px stone-200 dividers; 1px stone-300 control borders, darkening to stone-500 on hover; 1.5px on selectable cards and checkboxes.
- **Hover.** Solid buttons darken one ramp step; outline controls darken their border; ghost buttons get a green-50 wash; interactive cards lift 1px and move to shadow-2.
- **Press.** Buttons scale to .98 (icon buttons .94), primary goes two steps darker. No ripples.
- **Focus.** 2px white gap + 2px green-600 ring on buttons; inputs get a green border plus 3px translucent halo.
- **Motion.** Short and functional: 120ms colour/press, 200ms tabs and switches, 320ms dialogs/sheets/toasts; `cubic-bezier(.2,.8,.2,1)` ease-out. Switch thumbs use a small spring. Dialogs fade + rise 12px; sheets slide up. No parallax, no looping animation.
- **Transparency & blur.** Only for the modal scrim (evergreen 44% + 4px blur) and the mobile tab bar (white 94% + blur). Everything else is opaque.
- **Layout.** 4px spacing base. Mobile: 20px gutters, 24px between groups, 12px within, bottom tab bar (84px) and full-width primary buttons pinned above the home indicator in flows. Web: 1200px container, 40px gutters, sticky 72px quote header, form left / sticky price summary right.
- **Density.** Generous; one question group per screen on mobile. Dashboards may tighten to 14px table text but never below 12px.

## Iconography
- **Lucide** (outline, 2px stroke, round caps/joins) loaded from CDN: `https://unpkg.com/lucide-static@0.469.0/icons/<name>.svg`. Rendered by the `Icon` component as a CSS mask so it inherits `currentColor`.
- Sizes: 16 in small buttons and lists, 20 default, 24 for tab bar and feature tiles. Icons sit in 36–40px rounded-square tiles (green-50 bg, green-700 glyph) for quick actions and list rows.
- Common glyphs: car, shield-check, file-text, file-plus, camera, phone, map-pin, calendar, clock, credit-card, wrench, bell, user, user-plus, house, message-circle, circle-check, triangle-alert, download, arrow-right.
- No custom icon font, no PNG icons, no emoji, no unicode symbols as icons. No brand illustrations exist.
- **Substitution flag:** Lucide was chosen because Kerb is fictional; swap for a bespoke set later if desired.

## Logo
No logo was provided and none has been drawn. The brand appears as a **typeset wordmark**: lowercase "kerb" in Bricolage Grotesque 800 followed by a small square full stop (green-500 on light, Marker on evergreen). See the `Wordmark` component.

## Fonts
Loaded from Google Fonts in `tokens/fonts.css` (no self-hosted binaries): Bricolage Grotesque, Instrument Sans, IBM Plex Mono. Replace with licensed files if the brand gets a bespoke face.

---

## Index
- `styles.css` — entry point (imports only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css` (+ `.kb-h1`… utility classes), `spacing.css` (space, radii, shadows, motion, layout), `base.css`.
- `components/kerb-components.css` — all component styles (`kb-` prefix).
- `components/<group>/` — JSX + `.d.ts` + `.prompt.md` + one card per group.
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand).
- `ui_kits/mobile-app/` — Kerb app click-through (iOS frame): signed-in app + new-customer quote.
- `ui_kits/web/` — quote & policy and claims journeys + legacy dashboard click-through.
- `ui_kits/shared/Patterns.jsx` — screen patterns and demo data used by both kits.
- `assets/images/` — photography.
- Figma: [Kerb Design System](https://www.figma.com/design/ajpEaPwbWtwbsSmRheyDAU) — variables, styles and components mirror `tokens/` and `components/`; the *High Fidelity Wireframes* page is the source for the UI kits (tablet frames are design-only for now).
- `thumbnail.html`, `SKILL.md`.

## Components
- **actions/** — Button, IconButton
- **forms/** — Input, Select, Checkbox, Radio, Switch
- **display/** — Card, Badge, Tag, Icon, Wordmark
- **navigation/** — Tabs, Stepper
- **feedback/** — Alert, Toast, Tooltip, Dialog
- **insurance/** — CoverageOption, Timeline

### Intentional additions
- **Icon** — wraps the Lucide CDN set so glyphs inherit colour.
- **Wordmark** — typeset brand name, since no logo exists.
- **Stepper, CoverageOption, Timeline, Alert** — core to quote and claims journeys.
