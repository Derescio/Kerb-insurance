(() => {
const { Wordmark, IconButton, Card, Badge, Icon, Stepper, Alert } = window.KerbDesignSystem_549f9e;

function QuickAction({ icon, title, sub, onClick, accent }) {
  return (
    <Card interactive padding="sm" onClick={onClick} style={{ display: 'flex', flexDirection: 'column', gap: 14, background: accent ? 'var(--marker-400)' : undefined }}>
      <span style={{ display: 'grid', placeItems: 'center', width: 36, height: 36, borderRadius: 10, background: accent ? 'var(--green-900)' : 'var(--bg-brand-subtle)', color: accent ? 'var(--marker-400)' : 'var(--green-700)' }}><Icon name={icon} size={20} /></span>
      <span>
        <span style={{ display: 'block', font: '600 15px/20px var(--font-body)', color: 'var(--green-900)' }}>{title}</span>
        <span style={{ display: 'block', font: '400 13px/18px var(--font-body)', color: accent ? 'var(--green-800)' : 'var(--fg-3)' }}>{sub}</span>
      </span>
    </Card>
  );
}

function HomeScreen({ go, claim }) {
  return (
    <div style={{ padding: '6px 20px 32px', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Wordmark size={26} />
        <div style={{ display: 'flex', gap: 8 }}>
          <IconButton icon="message-circle" label="Help" variant="secondary" />
          <IconButton icon="bell" label="Notifications" variant="secondary" />
        </div>
      </div>
      <div>
        <div className="kb-body" style={{ color: 'var(--fg-3)' }}>Good morning, Maya</div>
        <div className="kb-h1" style={{ marginTop: 2 }}>You're covered.</div>
      </div>
      <Card variant="inverse" interactive padding="none" onClick={() => go('policy')} style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Plate>KR24 BXL</Plate>
          <Badge tone="accent" dot>Active</Badge>
        </div>
        <div className="kb-h2" style={{ marginTop: 18 }}>Arden Hatch</div>
        <div style={{ font: '400 14px/20px var(--font-body)', color: 'var(--fg-inverse-2)' }}>1.5 Life · 2024</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 0.7fr', gap: 8, marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border-inverse)' }}>
          {[['Cover', 'Comprehensive'], ['Renews', '14 Mar 2027'], ['Excess', '£350']].map(([k, v]) => (
            <div key={k}><div className="kb-caption" style={{ color: 'var(--fg-inverse-2)' }}>{k}</div><div style={{ font: '600 14px/20px var(--font-body)', marginTop: 2 }}>{v}</div></div>
          ))}
        </div>
      </Card>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <QuickAction accent icon="file-plus" title="Start a claim" sub="Takes about 5 minutes" onClick={() => go('flow')} />
        <QuickAction icon="phone" title="Breakdown help" sub="24/7 roadside" />
        <QuickAction icon="file-text" title="Documents" sub="Certificate, schedule" onClick={() => go('policy')} />
        <QuickAction icon="user-plus" title="Add a driver" sub="From £4.10/month" onClick={() => go('policy')} />
      </div>
      {claim ? (
        <div>
          <SectionTitle>Your claim</SectionTitle>
          <Card interactive onClick={() => go('tracker')} padding="sm" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: 12, background: 'var(--warning-bg)', color: 'var(--warning)' }}><Icon name="wrench" size={20} /></span>
              <div style={{ flex: 1 }}>
                <div style={{ font: '600 15px/20px var(--font-body)' }}>{claim.title}</div>
                <div className="kb-mono" style={{ font: '500 12px/16px var(--font-mono)', color: 'var(--fg-3)' }}>{claim.ref}</div>
              </div>
              <Badge tone="warning" dot>In review</Badge>
            </div>
            <Stepper variant="bar" steps={['Received', 'Review', 'Repair', 'Done']} current={1} />
            <div style={{ font: '400 13px/18px var(--font-body)', color: 'var(--fg-2)' }}>An assessor is looking at your photos. Usually 1–2 working days.</div>
          </Card>
        </div>
      ) : null}
      <Alert tone="success" title="5 years no claims">That discount is already in your renewal price.</Alert>
    </div>
  );
}
Object.assign(window, { HomeScreen });
})();
