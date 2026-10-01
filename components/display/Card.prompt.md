Base surface for grouping content (policy summary, claim status, settings groups).

```jsx
<Card><h3 className="kb-h3">Your policy</h3></Card>
<Card variant="inverse" padding="lg">…</Card>
<Card variant="outline" interactive onClick={open}>…</Card>
```

- One `inverse` card per screen at most — it's the hero surface (active policy).
- Don't nest raised cards; use `sunken` or `outline` inside.
