(() => {
const { Card, Badge, Button, Alert, Timeline, Icon, IconButton, Tabs } = window.KerbDesignSystem_549f9e;

function Stat({ label, value, sub }) {
  return (
    <Card padding="md">
      <div className="kb-caption" style={{ color: 'var(--fg-3)' }}>{label}</div>
      <div className="kb-num" style={{ font: '700 32px/38px var(--font-display)', letterSpacing: '-.025em', marginTop: 8 }}>{value}</div>
      <div style={{ font: '400 13px/18px var(--font-body)', color: 'var(--fg-3)', marginTop: 2 }}>{sub}</div>
    </Card>
  );
}

function Dashboard({ plan, justBought }) {
  const [ctab, setCtab] = React.useState('open');
  const th = { textAlign: 'left', font: '500 12px/16px var(--font-body)', color: 'var(--fg-3)', padding: '12px 16px', borderBottom: '1px solid var(--border-1)' };
  const td = { padding: '16px', borderBottom: '1px solid var(--border-1)', font: '400 14px/20px var(--font-body)', verticalAlign: 'middle' };
  return (
    <Container style={{ padding: '40px 40px 64px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
        <div>
          <div className="kb-body" style={{ color: 'var(--fg-3)' }}>Friday 25 September</div>
          <h1 className="kb-h1" style={{ margin: '4px 0 0' }}>Hi Maya, you're covered.</h1>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="secondary" iconLeft="phone">Breakdown help</Button>
          <Button variant="accent" iconLeft="file-plus">Start a claim</Button>
        </div>
      </div>
      {justBought ? <div style={{ marginBottom: 24 }}><Alert tone="success" title="Your cover has started">Your certificate is in Documents and on its way to maya.patel@example.com.</Alert></div> : null}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        <Stat label="Monthly premium" value={money(plan)} sub="Across 2 cars" />
        <Stat label="Next payment" value="1 Oct" sub="Visa ending 4417" />
        <Stat label="No-claims discount" value="5 yrs" sub="Saving you about £96 a year" />
        <Stat label="Open claims" value="1" sub="Rear bumper repair" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 380px', gap: 24, marginTop: 24, alignItems: 'start' }}>
        <Card padding="none">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 20px 12px 20px' }}>
            <h2 className="kb-h3" style={{ margin: 0 }}>Policies</h2>
            <Button variant="ghost" size="sm" iconLeft="plus">Add a car</Button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr><th style={th}>Car</th><th style={th}>Cover</th><th style={th}>Renews</th><th style={{ ...th, textAlign: 'right' }}>Per month</th><th style={th}>Status</th><th style={th}></th></tr></thead>
            <tbody>
              {[['KR24 BXL', 'Arden Hatch', 'Comprehensive', '14 Mar 2027', 38.2, ['success', 'Active']], ['LN19 TFA', 'Pell Hybrid', 'Third party, fire & theft', '8 Oct 2026', 26.8, ['warning', 'Renews in 13 days']]].map(([p, car, cov, ren, pr, [tone, st]]) => (
                <tr key={p}>
                  <td style={td}><div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><PlateTag size={13}>{p}</PlateTag><span style={{ fontWeight: 500 }}>{car}</span></div></td>
                  <td style={td}>{cov}</td>
                  <td style={td}>{ren}</td>
                  <td style={{ ...td, textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{money(pr)}</td>
                  <td style={td}><Badge tone={tone} dot>{st}</Badge></td>
                  <td style={{ ...td, textAlign: 'right' }}><IconButton icon="chevron-right" label={'Open ' + car} size="sm" /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: 20 }}><Alert tone="warning" title="Your Pell renews on 8 October" action={<Button size="sm" variant="secondary">Review renewal</Button>}>The new price is £27.40 a month. Check your mileage and address are still right.</Alert></div>
        </Card>
        <Card padding="md">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 className="kb-h3" style={{ margin: 0 }}>Claims</h2>
            <Tabs variant="pill" value={ctab} onChange={setCtab} items={[{ id: 'open', label: 'Open' }, { id: 'closed', label: 'Closed' }]} />
          </div>
          {ctab === 'open' ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                <div><div style={{ font: '600 15px/20px var(--font-body)' }}>Rear bumper repair</div><div style={{ font: '500 12px/16px var(--font-mono)', color: 'var(--fg-3)', marginTop: 2 }}>KRB-C-20931 · KR24 BXL</div></div>
                <Badge tone="warning" dot>In review</Badge>
              </div>
              <Timeline items={[{ title: 'Claim received', meta: 'Mon 21 Sep', status: 'done' }, { title: 'Photos checked', meta: 'Tue 22 Sep', status: 'done' }, { title: 'Assessor reviewing damage', meta: 'Usually 1–2 working days', status: 'current' }, { title: 'Repair booked', status: 'upcoming' }]} />
            </>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
              <div><div style={{ font: '600 15px/20px var(--font-body)' }}>Windscreen chip</div><div style={{ font: '500 12px/16px var(--font-mono)', color: 'var(--fg-3)', marginTop: 2 }}>KRB-C-17402 · 3 Feb 2026</div></div>
              <Badge tone="success" dot>Settled</Badge>
            </div>
          )}
        </Card>
      </div>
    </Container>
  );
}
Object.assign(window, { Dashboard });
})();
