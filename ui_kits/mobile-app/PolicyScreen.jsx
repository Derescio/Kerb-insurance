(() => {
const { Tabs, Icon, IconButton, Switch, Button, Tooltip, Badge, Alert } = window.KerbDesignSystem_549f9e;

// Hi-fi "Active policy". Overview / Documents / Payments follow the wireframe; Cover and Drivers keep the v1 detail.
function PolicyScreen({ justBought, plan = PLANS.comp }) {
  const [tab, setTab] = React.useState('overview');
  return (
    <>
      <StepHead over="Your policy" title="You’re covered, Maya" sub="Policy KRB-492810 · Started 1 Oct 2026" right={<Badge tone="success" dot>Active</Badge>} />
      {justBought ? <Alert tone="success" title={`Payment received · ${money(plan.price)}`}>Your documents are ready and your cover is active.</Alert> : null}
      <div style={{ overflowX: 'auto', margin: '0 -20px', padding: '0 20px' }}>
        <Tabs value={tab} onChange={setTab} items={[{ id: 'overview', label: 'Overview' }, { id: 'cover', label: 'Cover' }, { id: 'docs', label: 'Documents', count: DOCUMENTS.length }, { id: 'payments', label: 'Payments' }, { id: 'drivers', label: 'Drivers' }]} />
      </div>
      {tab === 'overview' ? <Overview plan={plan} /> : tab === 'cover' ? <CoverTab plan={plan} /> : tab === 'docs' ? <Docs /> : tab === 'payments' ? <Payments plan={plan} /> : <DriversTab />}
    </>
  );
}

const sub = (t) => <span style={{ display: 'block', font: '400 13px/18px var(--font-body)', color: 'var(--fg-3)' }}>{t}</span>;

function Overview({ plan }) {
  return (
    <>
      <PolicyCard until="30 Sep 2027" sub={`${plan.name} · £350 excess`} />
      <InfoCard>
        <Switch labelPosition="end" defaultChecked label={<span>Auto-renew{sub('We’ll remind you before renewal.')}</span>} />
        <KV rows={[['Next payment', '1 Nov 2026'], ['Payment method', 'Visa •••• 4242'], ['Monthly amount', money(plan.price), 'brand']]} />
      </InfoCard>
      <Docs />
    </>
  );
}

function Docs() {
  return <InfoCard title="Documents"><div>{DOCUMENTS.map((d, i) => <DocRow key={d} name={d} last={i === DOCUMENTS.length - 1} />)}</div></InfoCard>;
}

function Payments({ plan }) {
  return <InfoCard title="Payments"><KV rows={[['1 Oct 2026', money(plan.price)], ['Next: 1 Nov 2026', money(plan.price)], ['Payment method', 'Visa •••• 4242']]} /></InfoCard>;
}

function CoverTab({ plan }) {
  return (
    <>
      <InfoCard title={plan.name}>
        {['Damage to other people and property', 'Accidental damage to your car', 'Fire and theft', 'Windscreen and glass repair', 'Belongings in the car, up to £300'].map((c) => (
          <div key={c} style={{ display: 'flex', gap: 10, font: '400 14px/20px var(--font-body)' }}><Icon name="check" size={18} color="var(--green-600)" />{c}</div>
        ))}
      </InfoCard>
      <InfoCard>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ font: '700 18px/24px var(--font-display)' }}>Excess</span>
          <Tooltip content="The amount you pay towards any claim. We pay the rest."><IconButton icon="info" label="What is excess?" size="sm" /></Tooltip>
        </div>
        <KV rows={[['Compulsory', '£250'], ['Voluntary', '£100'], ['You pay per claim', '£350', 'brand']]} />
      </InfoCard>
      <InfoCard title="Extras">
        <Switch labelPosition="end" defaultChecked label={<span>Breakdown cover{sub('£6.50/month · roadside and recovery')}</span>} />
        <Switch labelPosition="end" label={<span>Courtesy car{sub('£3.20/month · while yours is repaired')}</span>} />
      </InfoCard>
    </>
  );
}

function DriversTab() {
  const Init = ({ n, bg }) => <span style={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: 999, background: bg, color: 'var(--green-900)', font: '600 14px/1 var(--font-body)', flex: 'none' }}>{n}</span>;
  const row = (n, bg, name, meta, badge, last) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: last ? 0 : '1px solid var(--border-1)' }}><Init n={n} bg={bg} /><div style={{ flex: 1 }}><div style={{ font: '500 15px/20px var(--font-body)' }}>{name}</div>{sub(meta)}</div>{badge}</div>
  );
  return (
    <>
      <InfoCard><div>{row('MP', 'var(--marker-300)', 'Maya Patel', 'Licence held 9 years', <Badge tone="inverse">Main driver</Badge>)}{row('SO', 'var(--green-100)', 'Sam Okafor', 'Licence held 4 years', <Badge tone="brand">Named</Badge>, true)}</div></InfoCard>
      <Button variant="secondary" iconLeft="user-plus" fullWidth>Add a driver</Button>
    </>
  );
}
Object.assign(window, { PolicyScreen });
})();
