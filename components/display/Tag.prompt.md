Chip for filters ("Open claims"), quick answers in a claim flow ("Rear-ended") or removable selections (named drivers).

```jsx
<Tag selected={f==='open'} onClick={() => setF('open')}>Open</Tag>
<Tag icon="user" onRemove={remove}>Sam Okafor</Tag>
```

- Selected state is solid evergreen. Use `Badge` for non-interactive status.
