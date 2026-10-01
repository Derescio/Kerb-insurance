Brief confirmation after an action ("Claim submitted", "Card updated"). Bottom-centre on mobile, bottom-left on web; auto-dismiss after 5s.

```jsx
<Toast title="Claim submitted" message="Reference KRB-C-20931" actionLabel="View" onClose={hide} />
<Toast tone="danger" title="Couldn't upload photo" actionLabel="Retry" />
```
