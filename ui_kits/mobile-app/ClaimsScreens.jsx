(() => {
const { Button, Tabs, Card, Badge, Icon, IconButton, Timeline, Alert } = window.KerbDesignSystem_549f9e;

function ClaimsScreen({ go, claims }) {
  const [f, setF] = React.useState('open');
  const list = claims.filter((c) => (f === 'open' ? c.open : !c.open));
  return (
    <div style={{ padding: '6px 20px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <h1 className="kb-h1" style={{ margin: 0 }}>Claims</h1>
      <Button variant="accent" size="lg" fullWidth iconLeft="plus" onClick={() => go('flow')}>Start a claim</Button>
      <Tabs variant="pill" fullWidth value={f} onChange={setF} items={[{ id: 'open', label: 'Open' }, { id: 'closed', label: 'Closed' }]} />
      {list.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '32px 16px', color: 'var(--fg-3)', font: '400 14px/20px var(--font-body)' }}>No open claims. If something happens, start one here and we'll guide you.</div>
      ) : list.map((c) => (
        <Card key={c.ref} interactive padding="sm" onClick={c.open ? () => go('tracker') : undefined}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ font: '600 15px/20px var(--font-body)' }}>{c.title}</div>
              <div style={{ font: '500 12px/16px var(--font-mono)', color: 'var(--fg-3)', marginTop: 2 }}>{c.ref} · {c.date}</div>
            </div>
            <Badge tone={c.open ? 'warning' : 'success'} dot>{c.open ? 'In review' : 'Settled'}</Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}

function TrackerScreen({ back, claim }) {
  return (
    <div style={{ padding: '0 0 32px' }}>
      <TopBar title="Claim" onBack={back} right={<IconButton icon="message-circle" label="Message" size="lg" />} />
      <div style={{ padding: '4px 20px 0', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <div className="kb-overline" style={{ color: 'var(--fg-3)' }}>{claim.ref}</div>
          <h1 className="kb-h2" style={{ margin: '4px 0 10px' }}>{claim.title}</h1>
          <Badge tone="warning" dot>In review</Badge>
        </div>
        <Card padding="sm">
          <Timeline items={[
            { title: 'Claim received', meta: claim.date + ', 18:04', status: 'done' },
            { title: 'Photos and details checked', meta: 'Today, 09:12', status: 'done' },
            { title: 'Assessor reviewing damage', meta: 'Usually 1–2 working days', description: "We'll text you when there's an update. You don't need to do anything.", status: 'current' },
            { title: 'Repair booked at an approved garage', status: 'upcoming' },
            { title: 'Car back with you', status: 'upcoming' },
          ]} />
        </Card>
        <Card padding="sm" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: 999, background: 'var(--green-100)', font: '600 15px/1 var(--font-body)', color: 'var(--green-800)' }}>JR</span>
          <div style={{ flex: 1 }}><div style={{ font: '600 15px/20px var(--font-body)' }}>Jordan Reyes</div><div style={{ font: '400 13px/18px var(--font-body)', color: 'var(--fg-3)' }}>Your claims handler</div></div>
          <IconButton icon="phone" label="Call Jordan" variant="secondary" />
        </Card>
        <Alert tone="neutral">You'll pay your £350 excess to the garage when you collect the car.</Alert>
      </div>
    </div>
  );
}
Object.assign(window, { ClaimsScreen, TrackerScreen });
})();
