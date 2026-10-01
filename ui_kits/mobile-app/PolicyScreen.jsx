(() => {
const { Tabs, Card, Icon, IconButton, Switch, Button, Tooltip, Badge } = window.KerbDesignSystem_549f9e;

function PolicyScreen() {
  const [tab, setTab] = React.useState('cover');
  return (
    <div style={{ padding: '6px 20px 32px' }}>
      <div className="kb-overline" style={{ color: 'var(--fg-3)' }}>KRB-P-448120</div>
      <h1 className="kb-h1" style={{ margin: '4px 0 16px' }}>Your policy</h1>
      <Tabs fullWidth value={tab} onChange={setTab} items={[{ id: 'cover', label: 'Cover' }, { id: 'docs', label: 'Documents' }, { id: 'drivers', label: 'Drivers' }]} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 20 }}>
        {tab === 'cover' ? <CoverTab /> : tab === 'docs' ? <DocsTab /> : <DriversTab />}
      </div>
    </div>
  );
}

function CoverTab() {
  const covered = ['Damage to other people and property', 'Accidental damage to your car', 'Fire and theft', 'Windscreen and glass repair', 'Belongings in the car, up to £300'];
  return (
    <>
      <Card padding="sm">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <span style={{ font: '600 16px/22px var(--font-display)' }}>Comprehensive</span>
          <span className="kb-num" style={{ font: '700 16px/22px var(--font-display)' }}>£38.20<span style={{ font: '400 13px var(--font-body)', color: 'var(--fg-3)' }}>/month</span></span>
        </div>
        {covered.map((c) => (
          <div key={c} style={{ display: 'flex', gap: 10, padding: '7px 0', font: '400 14px/20px var(--font-body)' }}><Icon name="check" size={18} color="var(--green-600)" />{c}</div>
        ))}
      </Card>
      <Card padding="sm">
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
          <span style={{ font: '600 16px/22px var(--font-display)' }}>Excess</span>
          <Tooltip content="The amount you pay towards any claim. We pay the rest."><IconButton icon="info" label="What is excess?" size="sm" /></Tooltip>
        </div>
        {[['Compulsory', '£250'], ['Voluntary', '£100']].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', font: '400 14px/20px var(--font-body)', color: 'var(--fg-2)' }}><span>{k}</span><span className="kb-num">{v}</span></div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0 0', marginTop: 4, borderTop: '1px solid var(--border-1)', font: '600 15px/20px var(--font-body)' }}><span>You pay per claim</span><span className="kb-num">£350</span></div>
      </Card>
      <Card padding="sm" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <span style={{ font: '600 16px/22px var(--font-display)' }}>Extras</span>
        <Switch labelPosition="end" defaultChecked label={<span>Breakdown cover<span style={{ display: 'block', font: '400 13px/18px var(--font-body)', color: 'var(--fg-3)' }}>£6.50/month · roadside and recovery</span></span>} />
        <Switch labelPosition="end" label={<span>Courtesy car<span style={{ display: 'block', font: '400 13px/18px var(--font-body)', color: 'var(--fg-3)' }}>£3.20/month · while yours is repaired</span></span>} />
        <Switch labelPosition="end" defaultChecked label="Auto-renew on 14 Mar 2027" />
      </Card>
    </>
  );
}

function DocsTab() {
  const docs = [['Certificate of motor insurance', 'Proof you can legally drive'], ['Policy schedule', 'Your cover, excess and price'], ['Policy wording', 'The full terms, 38 pages'], ['Statement of fact', 'What you told us']];
  return (
    <Card padding="sm" style={{ paddingTop: 2, paddingBottom: 2 }}>
      {docs.map(([t, s], i) => <Row key={t} icon="file-text" title={t} sub={s} last={i === docs.length - 1} right={<IconButton icon="download" label={'Download ' + t} />} />)}
    </Card>
  );
}

function DriversTab() {
  const Init = ({ n, bg }) => <span style={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: 999, background: bg, color: 'var(--green-900)', font: '600 14px/1 var(--font-body)', flex: 'none' }}>{n}</span>;
  return (
    <>
      <Card padding="sm" style={{ paddingTop: 2, paddingBottom: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: '1px solid var(--border-1)' }}><Init n="MP" bg="var(--marker-300)" /><div style={{ flex: 1 }}><div style={{ font: '500 15px/20px var(--font-body)' }}>Maya Patel</div><div style={{ font: '400 13px/18px var(--font-body)', color: 'var(--fg-3)' }}>Licence held 9 years</div></div><Badge tone="inverse">Main driver</Badge></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0' }}><Init n="SO" bg="var(--green-100)" /><div style={{ flex: 1 }}><div style={{ font: '500 15px/20px var(--font-body)' }}>Sam Okafor</div><div style={{ font: '400 13px/18px var(--font-body)', color: 'var(--fg-3)' }}>Licence held 4 years</div></div><Badge tone="brand">Named</Badge></div>
      </Card>
      <Button variant="secondary" iconLeft="user-plus" fullWidth>Add a driver</Button>
    </>
  );
}
Object.assign(window, { PolicyScreen });
})();
