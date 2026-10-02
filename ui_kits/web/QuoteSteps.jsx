(() => {
const { Input, Button, Select, Radio, Checkbox, CoverageOption, Alert, Badge, Stepper, Tabs, Switch, Card, Icon } = window.KerbDesignSystem_549f9e;

// 01 · Quote landing — evergreen hero with plate lookup and the coastal-road photo.
function Landing({ q, set, onStart }) {
  return (
    <section style={{ background: 'var(--bg-inverse)', color: 'var(--fg-inverse)', minHeight: 'calc(100vh - 72px)', display: 'grid', gridTemplateColumns: 'minmax(0, 1.6fr) minmax(320px, 1fr)' }}>
      <div style={{ padding: '56px 40px 64px max(40px, calc((100vw - 1200px) / 2 + 40px))', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20, maxWidth: 680 }}>
        <Badge tone="accent">Cover that keeps moving</Badge>
        <h1 className="kb-display-l" style={{ margin: 0 }}>Car insurance, minus the detours.</h1>
        <p className="kb-body-l" style={{ margin: 0, color: 'var(--fg-inverse-2)', maxWidth: 520 }}>Straight-talking comprehensive cover, with a price that stays clear from quote to policy.</p>
        <Card padding="sm" style={{ width: '100%', maxWidth: 448, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Input variant="plate" label="Car registration" value={q.plate} onChange={(e) => set({ plate: e.target.value.toUpperCase() })} />
          <Input label="Postcode" value={q.postcode} onChange={(e) => set({ postcode: e.target.value.toUpperCase() })} />
        </Card>
        <Button variant="accent" size="lg" iconRight="arrow-right" onClick={onStart}>Get my quote</Button>
        <div className="kb-caption" style={{ color: 'var(--fg-inverse-2)' }}>Takes about 4 minutes · No call centres · Save and return anytime</div>
      </div>
      <div role="img" aria-label="A dark green hatchback on a wet coastal road" style={{ backgroundImage: 'linear-gradient(to right, var(--green-900), rgba(11,42,34,0) 35%), url(../../assets/images/hero-coastal-road.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
    </section>
  );
}

// 02 · About you
function AboutYouStep({ q, set, onBack, onNext }) {
  return (
    <>
      <Stepper steps={QUOTE_STEPS} current={1} />
      <StepHead over="Step 2 of 4" title="Now, about you" sub="We’ve found your car. Tell us who’ll be driving it." />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>
        <InfoCard title="Arden Hatch" icon="car" badge={<Badge tone="success" dot>Found</Badge>}>
          <KV rows={[['Registration', q.plate], ['Model', '1.5 Life'], ['Year', '2024']]} />
        </InfoCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
          <Input label="Full name" value={q.name} onChange={(e) => set({ name: e.target.value })} />
          <Input label="Date of birth" defaultValue="12 June 1992" />
          <Select label="Occupation" defaultValue="Product designer" options={['Product designer', 'Teacher', 'Nurse', 'Software engineer', 'Retired']} />
          <Select label="Where is the car kept overnight?" defaultValue="Driveway" options={['Driveway', 'Garage', 'On the street', 'Car park']} />
        </div>
      </div>
      <ActionRow left={<Button variant="ghost" size="sm" onClick={onBack}>Back</Button>} right={<Button variant="accent" iconRight="arrow-right" onClick={onNext}>See cover options</Button>} />
    </>
  );
}

// 03 · Choose cover
function CoverStep({ q, set, onNext }) {
  const plan = PLANS[q.plan];
  return (
    <>
      <Stepper steps={QUOTE_STEPS} current={2} />
      <StepHead over="Your quote" title="Choose your cover" sub="All options include our UK repair network and a 24/7 claims line." right={<Badge>Saved for 30 days</Badge>} />
      <div role="radiogroup" aria-label="Cover level" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, paddingTop: 8 }}>
        {Object.entries(PLANS).map(([id, p]) => (
          <CoverageOption key={id} name={p.name} description={p.desc} price={money(p.price)} flag={p.flag} features={p.features} selected={q.plan === id} onSelect={() => set({ plan: id })} />
        ))}
      </div>
      <SelectedBar value={`${plan.name} · ${money(plan.price)}/month`} action={<Button variant="accent" size="sm" iconRight="arrow-right" onClick={onNext}>Continue</Button>} />
    </>
  );
}

// 04 · Review and pay
function PayStep({ q, set, onPay }) {
  const plan = PLANS[q.plan];
  const yearly = q.freq === 'annual';
  const due = yearly ? annual(plan.price) : plan.price;
  return (
    <>
      <Stepper steps={QUOTE_STEPS} current={3} />
      <StepHead over="Step 4 of 4" title="Review and pay" sub={`Your ${plan.name} cover starts today, 1 October 2026.`} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <InfoCard title="How would you like to pay?">
            <Radio name="freq" checked={!yearly} onChange={() => set({ freq: 'monthly' })} label="Monthly" description={`12 payments of ${money(plan.price)}`} />
            <Radio name="freq" checked={yearly} onChange={() => set({ freq: 'annual' })} label="Annually" description={`One payment of ${money(annual(plan.price))} — save £19.80`} />
          </InfoCard>
          <InfoCard title="Payment card" icon="credit-card">
            <Input label="Card number" defaultValue="•••• •••• •••• 4242" inputMode="numeric" />
          </InfoCard>
        </div>
        <InfoCard title={plan.name} badge={<Badge tone="accent">Selected</Badge>}>
          <KV rows={[['Policyholder', q.name], ['Vehicle', q.plate], ['Address', '18 Mare Street, E8 3RL'], ['Voluntary excess', '£350'], [yearly ? 'Annual payment' : 'Monthly payment', money(due), 'brand']]} />
          <Checkbox checked={q.agree} onChange={(e) => set({ agree: e.target.checked })} label="Confirm and agree" description="I agree to the policy terms and confirm my details are correct." />
          <Button variant="accent" size="lg" fullWidth iconRight="arrow-right" disabled={!q.agree} onClick={onPay}>{`Pay ${money(due)} and start cover`}</Button>
        </InfoCard>
      </div>
    </>
  );
}

// 05 · Active policy overview (also the Policy nav destination once bought)
function PolicyOverview({ q, justBought }) {
  const [tab, setTab] = React.useState('overview');
  const plan = PLANS[q.plan];
  return (
    <>
      <StepHead over="Your policy" title={`You’re covered, ${q.name.split(' ')[0]}`} sub="Policy KRB-492810 · Started 1 Oct 2026" right={<Badge tone="success" dot>Active</Badge>} />
      {justBought ? <Alert tone="success" title={`Payment received · ${money(q.freq === 'annual' ? annual(plan.price) : plan.price)}`}>Your documents are ready and your cover is active.</Alert> : null}
      <Tabs value={tab} onChange={setTab} items={[{ id: 'overview', label: 'Overview' }, { id: 'cover', label: 'Cover' }, { id: 'documents', label: 'Documents', count: DOCUMENTS.length }, { id: 'payments', label: 'Payments' }]} />
      {tab === 'overview' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16, alignItems: 'start' }}>
          <PolicyCard until="30 Sep 2027" sub={`${plan.name} · £350 excess`} />
          <InfoCard>
            <Switch labelPosition="end" defaultChecked label={<span>Auto-renew<span style={{ display: 'block', font: '400 13px/18px var(--font-body)', color: 'var(--fg-3)' }}>We’ll remind you before renewal.</span></span>} />
            <KV rows={[['Next payment', '1 Nov 2026'], ['Payment method', 'Visa •••• 4242'], ['Monthly amount', money(plan.price), 'brand']]} />
          </InfoCard>
          <InfoCard title="Documents">
            <div>{DOCUMENTS.map((d, i) => <DocRow key={d} name={d} last={i === DOCUMENTS.length - 1} />)}</div>
          </InfoCard>
        </div>
      ) : tab === 'cover' ? (
        <InfoCard title={plan.name} style={{ maxWidth: 480 }}>
          {plan.features.map((f) => { const it = typeof f === 'string' ? { label: f, included: true } : f; return (
            <div key={it.label} style={{ display: 'flex', gap: 10, font: '400 14px/20px var(--font-body)', color: it.included ? 'var(--fg-1)' : 'var(--fg-4)' }}><Icon name={it.included ? 'check' : 'minus'} size={18} color={it.included ? 'var(--green-600)' : 'var(--fg-4)'} />{it.label}</div>
          ); })}
          <KV rows={[['Voluntary excess', '£350'], ['Renews', '30 Sep 2027']]} />
        </InfoCard>
      ) : tab === 'documents' ? (
        <InfoCard title="Documents" style={{ maxWidth: 480 }}><div>{DOCUMENTS.map((d, i) => <DocRow key={d} name={d} last={i === DOCUMENTS.length - 1} />)}</div></InfoCard>
      ) : (
        <InfoCard title="Payments" style={{ maxWidth: 480 }}>
          <KV rows={[['1 Oct 2026', money(plan.price)], ['Next: 1 Nov 2026', money(plan.price)], ['Payment method', 'Visa •••• 4242']]} />
        </InfoCard>
      )}
    </>
  );
}

Object.assign(window, { Landing, AboutYouStep, CoverStep, PayStep, PolicyOverview });
})();
