Confirmations and focused sub-tasks — cancel policy, add a driver, confirm claim submission.

```jsx
<Dialog open={open} onClose={close} title="Cancel your policy?" description="You'll be covered until 11:59pm today."
  actions={<><Button variant="ghost" onClick={close}>Keep policy</Button><Button variant="danger">Cancel policy</Button></>} />
<Dialog presentation="sheet" contained title="Add a photo">…</Dialog>
```

- Destructive confirm: the safe option is the ghost button on the left.
