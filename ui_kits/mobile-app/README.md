# Kerb mobile app — UI kit

Customer app (iOS frame, 402×874). Click-through recreation composed from the Kerb component bundle, synced with the **High Fidelity Wireframes** page in Figma (Claims — Mobile, Quote & Policy — Mobile). A switch above the phone toggles between the signed-in app and the new-customer quote.

Signed-in app
- **Home** (`HomeScreen.jsx`) — greeting, active policy hero card, quick actions, open claim progress. *(v1, not in the hi-fi set)*
- **Policy** (`PolicyScreen.jsx`) — hi-fi "Active policy": Overview (cover card, auto-renew + payments, documents), Documents, Payments; Cover and Drivers tabs keep the v1 detail (excess tooltip, extras switches, named drivers).
- **Claims** (`ClaimsScreens.jsx`) — hi-fi "Claims home": cover card, review alert, Start a new claim, open claim card. "View claim" opens the tracker (v1).
- **Claim flow** (`ClaimFlow.jsx`) — hi-fi 4 steps: incident details → damage & photos → review + declaration → confirmation & status (toast, expected review, timeline). "Save and exit" opens the "Leave this claim?" sheet.
- **Account** (`AccountScreen.jsx`) — profile, payment, notification switches. *(v1)*

New customer
- **Quote flow** (`QuoteFlow.jsx`) — evergreen landing with plate lookup and the coastal-road photo → about you → choose cover (swipeable plan cards + selected bar) → review & pay. Paying lands on Policy with the payment-received alert.

Shared pieces: `Shell.jsx` (`TabBar`, `Screen`, `AppBar`, `AppScreen`, `TopBar`, `SectionTitle`, `Row`, `Plate`) and `../shared/Patterns.jsx` (summary cards, label/value rows, photo tiles, success mark, document rows, selected bar, demo data). Device bezel: `ios-frame.jsx` (starter, with an added `statusBarDark` prop for white status-bar glyphs over the evergreen app bar).
Damage photos are placeholders; the landing photo is `assets/images/hero-coastal-road.jpg`.
