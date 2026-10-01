(() => {
const { Button, Badge, IconButton, Timeline, Alert } = window.KerbDesignSystem_549f9e;

// Hi-fi "Claims home": cover card, status alert, start-a-claim CTA and the open claim.
function ClaimsScreen({ go, claims }) {
  const open = claims.find((c) => c.open);
  return (
    <>
      <StepHead over="Your cover" title="Good afternoon, Maya" sub="Everything you need to make or track a claim." />
      <PolicyCard until="14 Mar 2027" />
      {open ? <Alert tone="info" title={`Claim ${open.ref} is being reviewed`}>Your assessor has everything they need. We’ll text you when there’s an update.</Alert> : null}
      <Button variant="accent" size="lg" fullWidth iconRight="arrow-right" onClick={() => go('flow')}>Start a new claim</Button>
      {open ? (
        <InfoCard title="Open claim" badge={<Badge tone="info" dot>In review</Badge>}>
          <KV rows={[['Reference', open.ref], ['Incident', open.incident || 'Rear-ended'], ['Date', open.date + ' 2026'], ['Vehicle', 'KR24 BXL']]} />
          <div><Button variant="secondary" size="sm" onClick={() => go('tracker')}>View claim</Button></div>
        </InfoCard>
      ) : <p className="kb-body-s" style={{ margin: 0, color: 'var(--fg-3)', textAlign: 'center' }}>No open claims. If something happens, start one here and we'll guide you.</p>}
      {claims.filter((c) => !c.open).map((c) => (
        <InfoCard key={c.ref} title={c.title} badge={<Badge tone="success" dot>Settled</Badge>}>
          <div style={{ font: '500 12px/16px var(--font-mono)', color: 'var(--fg-3)' }}>{c.ref} · {c.date}</div>
        </InfoCard>
      ))}
    </>
  );
}

// Claim detail / tracker (kept from v1, now under the evergreen app bar).
function TrackerScreen({ claim }) {
  return (
    <>
      <div>
        <div className="kb-overline" style={{ color: 'var(--fg-brand)' }}>{claim.ref}</div>
        <h1 className="kb-h2" style={{ margin: '4px 0 10px' }}>{claim.title}</h1>
        <Badge tone="warning" dot>In review</Badge>
      </div>
      <InfoCard title="What happens next"><Timeline items={CLAIM_TIMELINE} /></InfoCard>
      <InfoCard>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: 999, background: 'var(--green-100)', font: '600 15px/1 var(--font-body)', color: 'var(--green-800)' }}>JR</span>
          <div style={{ flex: 1 }}><div style={{ font: '600 15px/20px var(--font-body)' }}>Jordan Reyes</div><div style={{ font: '400 13px/18px var(--font-body)', color: 'var(--fg-3)' }}>Your claims handler</div></div>
          <IconButton icon="phone" label="Call Jordan" variant="secondary" />
        </div>
      </InfoCard>
      <Alert tone="neutral">You'll pay your £350 excess to the garage when you collect the car.</Alert>
    </>
  );
}
Object.assign(window, { ClaimsScreen, TrackerScreen });
})();
