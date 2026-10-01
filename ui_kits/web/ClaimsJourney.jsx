(() => {
const { Input, Button, Checkbox, Alert, Badge, Stepper, Toast, Timeline } = window.KerbDesignSystem_549f9e;

// 01 · Claims home
function ClaimsHome({ c, onStart, onView }) {
  return (
    <>
      <StepHead over="Your cover" title="Good afternoon, Maya" sub="Everything you need to make or track a claim." />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ alignSelf: 'stretch' }}><PolicyCard until="14 Mar 2027" /></div>
          {c.submitted ? (
            <div style={{ alignSelf: 'stretch' }}><Alert tone="info" title={`Claim ${c.ref} is being reviewed`}>Your assessor has everything they need. We’ll text you when there’s an update.</Alert></div>
          ) : null}
          <Button variant="accent" iconRight="arrow-right" onClick={onStart}>Start a new claim</Button>
        </div>
        {c.submitted ? (
          <InfoCard title="Open claim" badge={<Badge tone="info" dot>In review</Badge>}>
            <KV rows={[['Reference', c.ref], ['Incident', c.incident], ['Date', '18 Sep 2026'], ['Vehicle', 'KR24 BXL']]} />
            <div><Button variant="secondary" size="sm" onClick={onView}>View claim</Button></div>
          </InfoCard>
        ) : (
          <InfoCard title="No open claims"><p className="kb-body-s" style={{ margin: 0, color: 'var(--fg-3)' }}>If something happens, start a claim and we’ll guide you through it. If anyone needs help, call 999 first.</p></InfoCard>
        )}
      </div>
    </>
  );
}

// 02 · Incident details
function IncidentStep({ c, set, onExit, onNext }) {
  return (
    <>
      <Stepper steps={CLAIM_STEPS} current={0} />
      <StepHead over="Step 1 of 4" title="Tell us what happened" sub="Add the incident details as accurately as you can." />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 600 }}>
        <Input label="Date of incident" defaultValue="18 September 2026" />
        <Input label="Time" defaultValue="17:40" />
        <div style={{ gridColumn: '1 / -1', maxWidth: 292 }}><Input label="Where did it happen?" iconLeft="map-pin" defaultValue="A10, Dalston Junction, London" /></div>
      </div>
      <div className="kb-field">
        <span className="kb-field__label">Which best describes the incident?</span>
        <TagGroup options={['Rear-ended', 'Other vehicle involved', 'No injuries']} value={c.incident} onChange={(v) => set({ incident: v })} />
      </div>
      <ActionRow left={<Button variant="ghost" size="sm" onClick={onExit}>Save and exit</Button>} right={<Button variant="accent" iconRight="arrow-right" onClick={onNext}>Continue</Button>} />
    </>
  );
}

// 03 · Damage & photos
function DamageStep({ c, set, onBack, onNext }) {
  return (
    <>
      <Stepper steps={CLAIM_STEPS} current={1} />
      <StepHead over="Step 2 of 4" title="Show us the damage" sub="Choose the damaged areas and add clear photos." />
      <TagGroup multi options={['Rear bumper', 'Boot lid', 'Left rear light', 'Other']} value={c.areas} onChange={(v) => set({ areas: v })} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {c.photos.map(([l, f]) => <PhotoTile key={f} label={l} file={f} />)}
        {c.photos.length < 6 ? <AddPhotoTile onClick={() => set({ photos: [...c.photos, ['Close-up', `IMG_48${30 + c.photos.length}.jpg`]] })} /> : null}
      </div>
      <Alert tone="info" title="Help us assess it quickly">Include one wide photo and a close-up of each damaged area.</Alert>
      <ActionRow left={<Button variant="ghost" size="sm" onClick={onBack}>Back</Button>} right={<Button variant="accent" iconRight="arrow-right" disabled={!c.areas.length} onClick={onNext}>Continue</Button>} />
    </>
  );
}

// 04 · Review claim
function ReviewStep({ c, set, onBack, onSubmit }) {
  return (
    <>
      <Stepper steps={CLAIM_STEPS} current={2} />
      <StepHead over="Step 3 of 4" title="Check your claim" sub="Review these details before you send them to us." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12, alignItems: 'start' }}>
        <InfoCard title="Incident"><KV rows={[['What happened', c.incident], ['When', '18 Sep · 17:40'], ['Where', 'A10, Dalston']]} /></InfoCard>
        <InfoCard title="Damage"><KV rows={[['Areas', `${c.areas.length} selected`], ['Photos', `${c.photos.length} uploaded`], ['Driveable', 'Yes']]} /></InfoCard>
        <InfoCard title="Contact"><KV rows={[['Policyholder', 'Maya Patel'], ['Mobile', '07700 900 214'], ['Email', 'maya.patel@example.com']]} /></InfoCard>
      </div>
      <Checkbox checked={c.agree} onChange={(e) => set({ agree: e.target.checked })} label="Declaration" description="I confirm these details are complete and accurate to the best of my knowledge." />
      <ActionRow left={<Button variant="ghost" size="sm" onClick={onBack}>Back</Button>} right={<Button variant="accent" iconRight="arrow-right" disabled={!c.agree} loading={c.sending} onClick={onSubmit}>{c.sending ? 'Submitting' : 'Submit claim'}</Button>} />
    </>
  );
}

// 05 · Confirmation & status
function ConfirmationStep({ c, onDone }) {
  const [toast, setToast] = React.useState(true);
  return (
    <>
      <Stepper steps={CLAIM_STEPS} current={3} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <SuccessMark />
          <StepHead over={`Claim ${c.ref}`} title="Your claim is in" sub="We’ve sent confirmation to maya.patel@example.com. An assessor will review your photos next." />
          {toast ? <Toast title="Claim submitted" message={`Reference ${c.ref}`} onClose={() => setToast(false)} /> : null}
          <InfoCard style={{ alignSelf: 'stretch' }}><KV rows={[['Expected review', '1–2 working days', 'brand'], ['Your excess', '£350'], ['Preferred contact', 'Text message']]} /></InfoCard>
          <Button onClick={onDone}>Return to claims</Button>
        </div>
        <InfoCard title="What happens next" badge={<Badge tone="info" dot>In review</Badge>}><Timeline items={CLAIM_TIMELINE} /></InfoCard>
      </div>
    </>
  );
}

Object.assign(window, { ClaimsHome, IncidentStep, DamageStep, ReviewStep, ConfirmationStep });
})();
