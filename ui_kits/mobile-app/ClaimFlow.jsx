(() => {
const { Stepper, Button, Input, Checkbox, Alert, Badge, Toast, Timeline, Dialog } = window.KerbDesignSystem_549f9e;

// Hi-fi claim flow: incident → damage → review → confirmation. Each step is one screen.
function ClaimFlow({ onClose, onSubmit, onDone }) {
  const [step, setStep] = React.useState(0);
  const [c, setC] = React.useState({ incident: 'Rear-ended', areas: ['Rear bumper', 'Boot lid', 'Left rear light'], photos: [['Rear bumper', 'IMG_4821.jpg'], ['Boot lid', 'IMG_4823.jpg'], ['Left light', 'IMG_4824.jpg']], agree: false, ref: null });
  const [leaving, setLeaving] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [toast, setToast] = React.useState(true);
  const set = (p) => setC((s) => ({ ...s, ...p }));
  const submit = () => {
    setSending(true);
    setTimeout(() => { const ref = 'KRB-C-' + (21000 + Math.floor(Math.random() * 900)); set({ ref }); setSending(false); setStep(3); onSubmit({ ref, title: c.incident + ' · ' + c.areas[0], date: '18 Sep' }); }, 900);
  };
  const actions = (left, right) => <ActionRow left={left} right={right} />;
  let body;
  if (step === 0) body = (
    <>
      <StepHead over="Step 1 of 4" title="Tell us what happened" sub="Add the incident details as accurately as you can." />
      <Input label="Date of incident" defaultValue="18 September 2026" />
      <Input label="Time" defaultValue="17:40" />
      <Input label="Where did it happen?" iconLeft="map-pin" defaultValue="A10, Dalston Junction, London" />
      <div className="kb-field">
        <span className="kb-field__label">Which best describes the incident?</span>
        <TagGroup options={['Rear-ended', 'Other vehicle involved', 'No injuries']} value={c.incident} onChange={(v) => set({ incident: v })} />
      </div>
      {actions(<Button variant="ghost" onClick={() => setLeaving(true)}>Save and exit</Button>, <Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => setStep(1)}>Continue</Button>)}
    </>
  );
  else if (step === 1) body = (
    <>
      <StepHead over="Step 2 of 4" title="Show us the damage" sub="Choose the damaged areas and add clear photos." />
      <TagGroup multi options={['Rear bumper', 'Boot lid', 'Left rear light', 'Other']} value={c.areas} onChange={(v) => set({ areas: v })} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {c.photos.map(([l, f]) => <PhotoTile key={f} label={l} file={f} width="auto" />)}
        {c.photos.length < 6 ? <AddPhotoTile width="auto" onClick={() => set({ photos: [...c.photos, ['Close-up', `IMG_48${30 + c.photos.length}.jpg`]] })} /> : null}
      </div>
      <Alert tone="info" title="Help us assess it quickly">Include one wide photo and a close-up of each damaged area.</Alert>
      {actions(<Button variant="ghost" onClick={() => setStep(0)}>Back</Button>, <Button variant="accent" size="lg" iconRight="arrow-right" disabled={!c.areas.length} onClick={() => setStep(2)}>Continue</Button>)}
    </>
  );
  else if (step === 2) body = (
    <>
      <StepHead over="Step 3 of 4" title="Check your claim" sub="Review these details before you send them to us." />
      <InfoCard title="Incident"><KV rows={[['What happened', c.incident], ['When', '18 Sep · 17:40'], ['Where', 'A10, Dalston']]} /></InfoCard>
      <InfoCard title="Damage"><KV rows={[['Areas', `${c.areas.length} selected`], ['Photos', `${c.photos.length} uploaded`], ['Driveable', 'Yes']]} /></InfoCard>
      <InfoCard title="Contact"><KV rows={[['Policyholder', 'Maya Patel'], ['Mobile', '07700 900 214'], ['Email', 'maya.patel@example.com']]} /></InfoCard>
      <Checkbox checked={c.agree} onChange={(e) => set({ agree: e.target.checked })} label="Declaration" description="I confirm these details are complete and accurate to the best of my knowledge." />
      {actions(<Button variant="ghost" onClick={() => setStep(1)}>Back</Button>, <Button variant="accent" size="lg" iconRight="arrow-right" disabled={!c.agree} loading={sending} onClick={submit}>{sending ? 'Submitting' : 'Submit claim'}</Button>)}
    </>
  );
  else body = (
    <>
      <SuccessMark />
      <StepHead over={`Claim ${c.ref}`} title="Your claim is in" sub="We’ve sent confirmation to maya.patel@example.com. An assessor will review your photos next." />
      {toast ? <Toast title="Claim submitted" message={`Reference ${c.ref}`} onClose={() => setToast(false)} /> : null}
      <InfoCard><KV rows={[['Expected review', '1–2 working days', 'brand'], ['Your excess', '£350'], ['Preferred contact', 'Text message']]} /></InfoCard>
      <Button size="lg" fullWidth onClick={onDone}>Return to claims</Button>
      <InfoCard title="What happens next" badge={<Badge tone="info" dot>In review</Badge>}><Timeline items={CLAIM_TIMELINE} /></InfoCard>
    </>
  );
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <AppScreen>
        <Stepper variant="bar" steps={CLAIM_STEPS} current={step} />
        {body}
      </AppScreen>
      <Dialog open={leaving} contained presentation="sheet" onClose={() => setLeaving(false)} title="Leave this claim?" description="We'll save your answers for 7 days so you can pick up where you left off."
        actions={<><Button variant="ghost" size="lg" fullWidth onClick={onClose}>Leave for now</Button><Button size="lg" fullWidth onClick={() => setLeaving(false)}>Keep going</Button></>} />
    </div>
  );
}
Object.assign(window, { ClaimFlow });
})();
