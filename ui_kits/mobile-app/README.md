# Kerb mobile app — UI kit

Customer app (iOS frame, 402×874). Click-through recreation composed from the Kerb component bundle.

Screens
- **Home** (`HomeScreen.jsx`) — greeting, active policy hero card (inverse), quick actions, open claim progress, no-claims alert.
- **Policy** (`PolicyScreen.jsx`) — Cover / Documents / Drivers tabs; excess breakdown with tooltip; extras as switches.
- **Claims** + **Tracker** (`ClaimsScreens.jsx`) — open/closed list, claim timeline, handler contact.
- **Claim flow** (`ClaimFlow.jsx`) — 4 steps: what happened → when/where → photos → review. Close opens a "Leave this claim?" sheet. Submitting lands on the tracker with a toast.
- **Account** (`AccountScreen.jsx`) — profile, payment, notification switches.

Shared pieces in `Shell.jsx`: `TabBar`, `Screen`, `TopBar`, `SectionTitle`, `Row`, `Plate`. Device bezel: `ios-frame.jsx` (starter).
Photos are striped placeholders — no real imagery exists.
