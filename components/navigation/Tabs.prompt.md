Switch between sibling views — Policy / Documents / Drivers, or Open / Closed claims.

```jsx
<Tabs value={tab} onChange={setTab} items={[{id:'cover',label:'Cover'},{id:'docs',label:'Documents'},{id:'claims',label:'Claims',count:1}]} />
<Tabs variant="pill" value={freq} onChange={setFreq} items={['Monthly','Annually']} />
```
