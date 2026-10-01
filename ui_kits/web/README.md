# Kerb web — UI kit

Desktop web (1280 wide). Two surfaces in one click-through:

1. **Quote journey** — sticky header with `Stepper`; left column form, right column sticky price summary.
   - `CarStep` — number-plate lookup (`Input variant="plate"`), found-car card, usage radios.
   - `YouStep` — driver details, inline error example.
   - `CoverStep` — three `CoverageOption` tiers, extras, voluntary excess with tooltip.
   - `PayStep` — monthly/annual pill tabs, card fields, declaration. Paying opens the dashboard.
2. **Account dashboard** (`Dashboard.jsx`) — evergreen app header, stat tiles, policies table, renewal alert, claim timeline.

Shared chrome in `Chrome.jsx`: `Container`, `QuoteHeader`, `AppHeader`, `PlateTag`. "Save and exit" jumps straight to the dashboard. No marketing site was designed.
