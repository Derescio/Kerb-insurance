Plan tier card for the "Choose your cover" step of a quote.

```jsx
<div role="radiogroup" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
  <CoverageOption name="Essential" price="£29.40" features={['Third party','Fire & theft',{label:'Your own car',included:false}]} />
  <CoverageOption name="Comprehensive" flag="Most chosen" selected price="£38.20" features={['Everything in Essential','Your own car','Windscreen']} />
</div>
```

- Show the same feature rows in the same order on every tier so users can compare across.
