Primary action control — use for every tappable action with a text label.

```jsx
<Button iconRight="arrow-right">Continue</Button>
<Button variant="accent" size="lg">Get a quote</Button>
<Button variant="secondary" iconLeft="download">Policy documents</Button>
<Button variant="ghost">Not now</Button>
<Button variant="danger">Cancel policy</Button>
```

- `accent` is the single hero CTA (Get a quote, Start a claim). Never two per view.
- Labels are verbs in sentence case: "Start a claim", not "Claim Start".
- Mobile flows: `fullWidth size="lg"` pinned to the bottom.
