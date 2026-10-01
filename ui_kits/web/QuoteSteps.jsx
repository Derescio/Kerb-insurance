(() => {
const { Input, Button, Card, Select, Radio, Checkbox, CoverageOption, Tabs, Alert, Badge, Icon, Tooltip, IconButton } = window.KerbDesignSystem_549f9e;

const PLANS = {
  tp: { name: 'Third party', price: 29.4 },
  tpft: { name: 'Third party, fire & theft', price: 32.1 },
  comp: { name: 'Comprehensive', price: 38.2 },
};
const money = (n) => '£' + n.toFixed(2);

function StepHead({ over, title, sub }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div className="kb-overline" style={{ color: 'var(--fg-3)' }}>{over}</div>
      <h1 className="kb-h1" style={{ margin: '6px 0 0' }}>{title}</h1>
      {sub ? <p className="kb-body-l" style={{ margin: '8px 0 0', color: 'var(--fg-2)' }}>{sub}</p> : null}
    </div>
  );
}

function CarStep({ q, set }) {
  const [plate, setPlate] = React.useState(q.plate || 'KR24 BXL');
  const [busy, setBusy] = React.useState(false);
  const find = () => { setBusy(true); setTimeout(() => { setBusy(false); set({ plate, found: true }); }, 700); };
  return (
    <>
      <StepHead over="Step 1 of 4" title="Let's find your car" sub="Enter the registration and we'll fill in the rest." />
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
        <div style={{ width: 260 }}><Input variant="plate" label="Registration" value={plate} onChange={(e) => setPlate(e.target.value.toUpperCase())} /></div>
        <Button size="lg" loading={busy} onClick={find} style={{ height: 56 }}>{busy ? 'Looking up' : 'Find car'}</Button>
      </div>
      {q.found ? (
        <>
          <Card variant="outline" padding="sm" style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ display: 'grid', placeItems: 'center', width: 48, height: 48, borderRadius: 12, background: 'var(--bg-brand-subtle)', color: 'var(--green-700)' }}><Icon name="car" size={24} /></span>
            <div style={{ flex: 1 }}>
              <div style={{ font: '600 16px/22px var(--font-body)' }}>Volkswagen Golf 1.5 TSI Life</div>
              <div style={{ font: '400 14px/20px var(--font-body)', color: 'var(--fg-3)' }}>2024 · Petrol · Manual · 5 doors</div>
            </div>
            <Badge tone="success" dot>Found</Badge>
            <Button variant="ghost" size="sm">Not your car?</Button>
          </Card>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 32 }}>
            <Select label="Where is it kept overnight?" defaultValue="Driveway" options={['Driveway', 'Garage', 'On the street', 'Car park']} />
            <Input label="Miles you drive a year" defaultValue="7,500" suffix="miles" hint="A rough guess is fine." />
          </div>
          <div className="kb-field" style={{ marginTop: 24 }}>
            <span className="kb-field__label">What do you use it for?</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 6 }}>
              <Radio name="use" label="Social only" description="Shopping, visiting friends, days out" />
              <Radio name="use" defaultChecked label="Social and commuting" description="Includes driving to one regular place of work" />
              <Radio name="use" label="Business" description="Driving to different places for work" />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

function YouStep() {
  return (
    <>
      <StepHead over="Step 2 of 4" title="A bit about you" sub="We use this to work out your price. We never sell your details." />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <Input label="First name" defaultValue="Maya" />
        <Input label="Last name" defaultValue="Patel" />
        <Input label="Date of birth" defaultValue="12 / 06 / 1991" iconLeft="calendar" />
        <Input label="Postcode" defaultValue="E8 3" error="Enter your full postcode, like E8 3RL" />
        <Select label="How long have you had your licence?" defaultValue="5–9 years" options={['Less than 1 year', '1–4 years', '5–9 years', '10+ years']} />
        <Input label="Email" type="email" defaultValue="maya.patel@example.com" hint="We'll send your documents here." />
      </div>
      <div className="kb-field" style={{ marginTop: 28 }}>
        <span className="kb-field__label">Any claims, accidents or convictions in the last 5 years?</span>
        <div style={{ display: 'flex', gap: 28, marginTop: 6 }}><Radio name="cl" defaultChecked label="No" /><Radio name="cl" label="Yes" /></div>
      </div>
    </>
  );
}

function CoverStep({ q, set }) {
  return (
    <>
      <StepHead over="Step 3 of 4" title="Choose your cover" sub="Prices are per month and include Insurance Premium Tax." />
      <div role="radiogroup" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, paddingTop: 12 }}>
        <CoverageOption name="Third party" description="The legal minimum" price={money(PLANS.tp.price)} selected={q.plan === 'tp'} onSelect={() => set({ plan: 'tp' })}
          features={['Damage to others', { label: 'Fire and theft', included: false }, { label: 'Your own car', included: false }, { label: 'Windscreen', included: false }]} />
        <CoverageOption name="Fire & theft" description="Third party, plus" price={money(PLANS.tpft.price)} selected={q.plan === 'tpft'} onSelect={() => set({ plan: 'tpft' })}
          features={['Damage to others', 'Fire and theft', { label: 'Your own car', included: false }, { label: 'Windscreen', included: false }]} />
        <CoverageOption name="Comprehensive" description="Covers your car too" flag="Most chosen" price={money(PLANS.comp.price)} selected={q.plan === 'comp'} onSelect={() => set({ plan: 'comp' })}
          features={['Damage to others', 'Fire and theft', 'Your own car', 'Windscreen']} />
      </div>
      <h2 className="kb-h3" style={{ margin: '36px 0 14px' }}>Extras</h2>
      <Card variant="outline" padding="sm" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Checkbox checked={q.breakdown} onChange={(e) => set({ breakdown: e.target.checked })} label="Breakdown cover · £6.50/month" description="24/7 roadside help and recovery anywhere in the UK" />
        <Checkbox checked={q.courtesy} onChange={(e) => set({ courtesy: e.target.checked })} label="Courtesy car · £3.20/month" description="A small car while yours is being repaired" />
      </Card>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginTop: 24, maxWidth: 320 }}>
        <div style={{ flex: 1 }}><Select label="Voluntary excess" defaultValue="£100" options={['£0', '£100', '£250', '£500']} hint="On top of the £250 compulsory excess." /></div>
        <div style={{ paddingBottom: 30 }}><Tooltip content="Choosing a higher excess lowers your price, but you pay more if you claim."><IconButton icon="info" label="About excess" size="sm" /></Tooltip></div>
      </div>
    </>
  );
}

function PayStep({ q, set, total }) {
  return (
    <>
      <StepHead over="Step 4 of 4" title="Pay and start your cover" />
      <Tabs variant="pill" value={q.freq} onChange={(f) => set({ freq: f })} items={[{ id: 'monthly', label: 'Monthly' }, { id: 'annual', label: 'Annually · save 6%' }]} />
      <Card variant="outline" padding="md" style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div style={{ gridColumn: '1 / -1' }}><Input label="Card number" defaultValue="4417 1234 5678 4417" iconLeft="credit-card" /></div>
        <Input label="Expiry" defaultValue="08 / 29" />
        <Input label="Security code" defaultValue="•••" hint="3 digits on the back" />
        <div style={{ gridColumn: '1 / -1' }}><Input label="Cover starts" defaultValue="Today, 25 Sep 2026" iconLeft="calendar" /></div>
      </Card>
      <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Alert tone="info">You can cancel within 14 days for a full refund, minus the days you were covered.</Alert>
        <Checkbox checked={q.agree} onChange={(e) => set({ agree: e.target.checked })} label="I've read the policy summary and my answers are correct" />
      </div>
    </>
  );
}

function Summary({ q, total, step, onNext, onBack }) {
  const labels = ['Continue', 'Continue', 'Continue', 'Pay ' + money(total) + ' and start cover'];
  const disabled = (step === 0 && !q.found) || (step === 3 && !q.agree);
  return (
    <Card padding="none" style={{ position: 'sticky', top: 96, overflow: 'hidden' }}>
      <div style={{ padding: 24, background: 'var(--green-900)', color: '#fff' }}>
        <div className="kb-overline" style={{ color: 'var(--fg-inverse-2)' }}>{q.freq === 'annual' ? 'Your price per year' : 'Your price per month'}</div>
        <div className="kb-num" style={{ font: '800 48px/52px var(--font-display)', letterSpacing: '-.035em', marginTop: 6 }}>{step < 2 ? '—' : money(total)}</div>
        <div style={{ font: '400 14px/20px var(--font-body)', color: 'var(--fg-inverse-2)', marginTop: 4 }}>{step < 2 ? 'Your price appears once we know your car and you.' : PLANS[q.plan].name + (q.breakdown ? ' + breakdown' : '') + (q.courtesy ? ' + courtesy car' : '')}</div>
      </div>
      <div style={{ padding: '8px 24px 24px' }}>
        {[['Car', q.found ? <PlateTag>{q.plate}</PlateTag> : '—'], ['Driver', step > 0 ? 'Maya Patel' : '—'], ['Excess', '£350']].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border-1)', font: '400 14px/20px var(--font-body)' }}><span style={{ color: 'var(--fg-3)' }}>{k}</span><span style={{ fontWeight: 600 }}>{v}</span></div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
          <Button size="lg" fullWidth disabled={disabled} iconRight={step < 3 ? 'arrow-right' : 'lock'} onClick={onNext} variant={step === 3 ? 'accent' : 'primary'}>{labels[step]}</Button>
          {step > 0 ? <Button variant="ghost" fullWidth onClick={onBack}>Back</Button> : null}
        </div>
      </div>
    </Card>
  );
}

Object.assign(window, { CarStep, YouStep, CoverStep, PayStep, Summary, PLANS, money });
})();
