# Kerb web — UI kit

Desktop web (1280 wide), synced with the **High Fidelity Wireframes** page in Figma (Quote & Policy — Web, Claims — Web). Every page shares the evergreen `SiteHeader` (Claims / Policy / Help, active item in Marker). A demo switcher bottom-left jumps between journeys.

1. **Quote & policy** (`QuoteSteps.jsx`)
   - `Landing` — evergreen hero, plate + postcode lookup card, "Get my quote", coastal-road photo with an evergreen fade.
   - `AboutYouStep` — found-car summary card beside the driver fields.
   - `CoverStep` — three `CoverageOption` tiers (same feature rows on each), "Saved for 30 days", selected bar.
   - `PayStep` — monthly/annual radios, payment card, plan summary, confirm checkbox and pay CTA.
   - `PolicyOverview` — "You're covered" header, payment-received alert, Overview / Cover / Documents / Payments tabs.
2. **Claims** (`ClaimsJourney.jsx`) — Claims home → incident details → damage & photos → review + declaration → confirmation & status (toast, timeline).
3. **Account dashboard** (`Dashboard.jsx`) — stat tiles, policies table, renewal alert, claims card. *(v1, not in the hi-fi set; kept)*

Shared chrome in `Chrome.jsx`: `Container`, `SiteHeader`, `Page`, `PlateTag`. Screen patterns and demo data come from `../shared/Patterns.jsx`. Landing photo: `assets/images/hero-coastal-road.jpg`.
