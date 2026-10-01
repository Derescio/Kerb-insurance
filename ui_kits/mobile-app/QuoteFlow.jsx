(() => {
const { Stepper, Button, Input, Select, Radio, Checkbox, Badge, Card, CoverageOption, Wordmark, IconButton } = window.KerbDesignSystem_549f9e;

// New-customer quote journey (hi-fi): landing → about you → choose cover → review & pay.
function QuoteFlow({ onBought }) {
  const [step, setStep] = React.useState(0);
  const [q, setQ] = React.useState({ plate: 'KR24 BXL', postcode: 'E8 3RL', name: 'Maya Patel', plan: 'comp', freq: 'monthly', agree: false });
  const set = (p) => setQ((s) => ({ ...s, ...p }));
  const plan = PLANS[q.plan];
  if (step === 0) return <Landing q={q} set={set} onStart={() => setStep(1)} />;
  const yearly = q.freq === 'annual';
  const due = yearly ? annual(plan.price) : plan.price;
  let body;
  if (step === 1) body = (
    <>
      <StepHead over="Step 2 of 4" title="Now, about you" sub="We’ve found your car. Tell us who’ll be driving it." />
      <InfoCard title="Volkswagen Golf" icon="car" badge={<Badge tone="success" dot>Found</Badge>}>
        <KV rows={[['Registration', q.plate], ['Model', 'Life TSI 130'], ['Year', '2024']]} />
      </InfoCard>
      <Input label="Full name" value={q.name} onChange={(e) => set({ name: e.target.value })} />
      <Input label="Date of birth" defaultValue="12 June 1992" />
      <Select label="Occupation" defaultValue="Product designer" options={['Product designer', 'Teacher', 'Nurse', 'Software engineer', 'Retired']} />
      <Select label="Where is the car kept overnight?" defaultValue="Driveway" options={['Driveway', 'Garage', 'On the street', 'Car park']} />
      <ActionRow left={<Button variant="ghost" onClick={() => setStep(0)}>Back</Button>} right={<Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => setStep(2)}>See cover options</Button>} />
    </>
  );
  else if (step === 2) body = (
    <>
      <StepHead over="Step 3 of 4" title="Choose your cover" sub="All options include our UK repair network and a 24/7 claims line." />
      <div role="radiogroup" aria-label="Cover level" style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollSnapType: 'x mandatory', margin: '0 -20px', padding: '14px 20px 4px' }}>
        {['comp', 'tpft', 'tp'].map((id) => (
          <div key={id} style={{ flex: '0 0 272px', scrollSnapAlign: 'start' }}>
            <CoverageOption name={PLANS[id].name} description={PLANS[id].desc} price={money(PLANS[id].price)} flag={PLANS[id].flag} features={PLANS[id].features} selected={q.plan === id} onSelect={() => set({ plan: id })} />
          </div>
        ))}
      </div>
      <SelectedBar stack value={`${plan.name} · ${money(plan.price)}/month`} action={<Button variant="accent" fullWidth iconRight="arrow-right" onClick={() => setStep(3)}>Continue</Button>} />
    </>
  );
  else body = (
    <>
      <StepHead over="Step 4 of 4" title="Review and pay" sub={`Your ${plan.name} cover starts today, 1 October 2026.`} />
      <InfoCard title="How would you like to pay?">
        <Radio name="freq" checked={!yearly} onChange={() => set({ freq: 'monthly' })} label="Monthly" description={`12 payments of ${money(plan.price)}`} />
        <Radio name="freq" checked={yearly} onChange={() => set({ freq: 'annual' })} label="Annually" description={`One payment of ${money(annual(plan.price))} — save £19.80`} />
      </InfoCard>
      <InfoCard title="Payment card" icon="credit-card"><Input label="Card number" defaultValue="•••• •••• •••• 4242" inputMode="numeric" /></InfoCard>
      <InfoCard title={plan.name} badge={<Badge tone="accent">Selected</Badge>}>
        <KV rows={[['Policyholder', q.name], ['Vehicle', q.plate], ['Address', '18 Mare Street, E8 3RL'], ['Voluntary excess', '£350'], [yearly ? 'Annual payment' : 'Monthly payment', money(due), 'brand']]} />
        <Checkbox checked={q.agree} onChange={(e) => set({ agree: e.target.checked })} label="Confirm and agree" description="I agree to the policy terms and confirm my details are correct." />
        <Button variant="accent" size="lg" fullWidth iconRight="arrow-right" disabled={!q.agree} onClick={() => onBought(plan)}>{`Pay ${money(due)} and start cover`}</Button>
      </InfoCard>
    </>
  );
  return (
    <AppScreen onBack={() => setStep(step - 1)}>
      <Stepper variant="bar" steps={QUOTE_STEPS} current={step} />
      {body}
    </AppScreen>
  );
}

// 01 · Landing: all-evergreen screen with plate lookup and the coastal-road photo at the bottom.
function Landing({ q, set, onStart }) {
  return (
    <div style={{ height: '100%', overflowY: 'auto', background: 'var(--bg-inverse)', color: 'var(--fg-inverse)' }}>
      <div style={{ paddingTop: 54 }}>
        <div style={{ height: 60, padding: '0 12px 0 20px', display: 'flex', alignItems: 'center' }}>
          <span style={{ flex: 1 }}><Wordmark tone="inverse" size={24} /></span>
          <IconButton icon="bell" label="Notifications" variant="inverse" size="lg" />
        </div>
      </div>
      <div style={{ padding: '12px 20px 24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
        <Badge tone="accent">Cover that keeps moving</Badge>
        <h1 style={{ margin: 0, font: '700 32px/38px var(--font-display)', letterSpacing: '-.03em' }}>Car insurance, minus the detours.</h1>
        <p className="kb-body" style={{ margin: 0, color: 'var(--fg-inverse-2)' }}>Straight-talking comprehensive cover, with a price that stays clear from quote to policy.</p>
        <Card padding="sm" style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input variant="plate" label="Car registration" value={q.plate} onChange={(e) => set({ plate: e.target.value.toUpperCase() })} />
          <Input label="Postcode" value={q.postcode} onChange={(e) => set({ postcode: e.target.value.toUpperCase() })} />
        </Card>
        <Button variant="accent" size="lg" fullWidth iconRight="arrow-right" onClick={onStart}>Get my quote</Button>
      </div>
      <div role="img" aria-label="A dark green Volkswagen Golf on a wet coastal road" style={{ height: 240, backgroundImage: 'linear-gradient(to right, var(--green-900), rgba(11,42,34,0) 35%), url(../../assets/images/hero-coastal-road.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 60%' }} />
    </div>
  );
}
Object.assign(window, { QuoteFlow });
})();
