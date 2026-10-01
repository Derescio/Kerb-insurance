(() => {
const { Stepper, Button, Input, Radio, Checkbox, Alert, Card, Icon, Dialog } = window.KerbDesignSystem_549f9e;

const TYPES = [['car', 'Collision with another vehicle'], ['traffic-cone', 'Hit something that isn\'t a vehicle'], ['square-parking', 'Damaged while parked'], ['key-round', 'Stolen or broken into'], ['shield-alert', 'Windscreen or glass']];
const STEPS = ['What happened', 'When and where', 'Photos', 'Review'];

function OptionRow({ icon, label, checked, onChange }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 14, background: 'var(--bg-surface)', border: '1.5px solid ' + (checked ? 'var(--green-600)' : 'var(--border-1)'), boxShadow: checked ? '0 0 0 3px var(--focus-halo)' : 'none', cursor: 'pointer', transition: 'border-color 120ms, box-shadow 200ms' }}>
      <Icon name={icon} size={22} color={checked ? 'var(--green-700)' : 'var(--fg-2)'} />
      <span style={{ flex: 1, font: '500 15px/20px var(--font-body)' }}>{label}</span>
      <Radio name="type" checked={checked} onChange={onChange} />
    </label>
  );
}

function ClaimFlow({ onClose, onSubmit }) {
  const [step, setStep] = React.useState(0);
  const [type, setType] = React.useState(null);
  const [hurt, setHurt] = React.useState('no');
  const [photos, setPhotos] = React.useState(2);
  const [agree, setAgree] = React.useState(false);
  const [leaving, setLeaving] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const canNext = step === 0 ? !!type : step === 3 ? agree : true;
  const next = () => {
    if (step < 3) return setStep(step + 1);
    setSending(true);
    setTimeout(() => onSubmit(TYPES.find((t) => t[0] === type)[1]), 900);
  };
  const H = ({ t, s }) => (<div style={{ marginBottom: 20 }}><h1 className="kb-h2" style={{ margin: 0 }}>{t}</h1>{s ? <p className="kb-body" style={{ color: 'var(--fg-3)', margin: '6px 0 0' }}>{s}</p> : null}</div>);
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg-page)', position: 'relative' }}>
      <div style={{ paddingTop: 54 }}>
        <TopBar title={'Step ' + (step + 1) + ' of 4'} onBack={() => (step ? setStep(step - 1) : setLeaving(true))} backIcon={step ? 'arrow-left' : 'x'} />
        <div style={{ padding: '4px 20px 0' }}><Stepper variant="bar" steps={STEPS} current={step} /></div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 20px' }}>
        {step === 0 ? (
          <>
            <H t="What happened?" s="Pick the closest match. You can add detail later." />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {TYPES.map(([ic, l]) => <OptionRow key={ic} icon={ic} label={l} checked={type === ic} onChange={() => setType(ic)} />)}
            </div>
          </>
        ) : step === 1 ? (
          <>
            <H t="When and where?" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 12 }}>
                <Input label="Date" defaultValue="21 Sep 2026" iconLeft="calendar" />
                <Input label="Time" defaultValue="17:40" iconLeft="clock" />
              </div>
              <Input label="Where did it happen?" defaultValue="Mare Street, London E8" iconLeft="map-pin" />
              <Input variant="plate" label="Other driver's registration" optional placeholder="AB12 CDE" />
              <div className="kb-field">
                <span className="kb-field__label">Was anyone hurt?</span>
                <div style={{ display: 'flex', gap: 24, marginTop: 4 }}>
                  <Radio name="hurt" label="No" checked={hurt === 'no'} onChange={() => setHurt('no')} />
                  <Radio name="hurt" label="Yes" checked={hurt === 'yes'} onChange={() => setHurt('yes')} />
                </div>
              </div>
              {hurt === 'yes' ? <Alert tone="warning" title="If anyone needs help, call 999 first">We'll ask about injuries on the next step.</Alert> : null}
            </div>
          </>
        ) : step === 2 ? (
          <>
            <H t="Add photos" s="Show the whole car, then close-ups of the damage." />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {Array.from({ length: photos }).map((_, i) => (
                <div key={i} style={{ aspectRatio: '1', borderRadius: 12, background: 'repeating-linear-gradient(135deg, var(--stone-200) 0 8px, var(--stone-100) 8px 16px)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: 8, position: 'relative' }}>
                  <span style={{ font: '500 10px/1 var(--font-mono)', color: 'var(--fg-3)' }}>photo {i + 1}</span>
                  <span style={{ display: 'grid', placeItems: 'center', width: 22, height: 22, borderRadius: 999, background: 'var(--green-600)', color: '#fff' }}><Icon name="check" size={14} /></span>
                </div>
              ))}
              {photos < 6 ? (
                <button onClick={() => setPhotos(photos + 1)} style={{ aspectRatio: '1', borderRadius: 12, border: '1.5px dashed var(--border-strong)', background: 'var(--bg-surface)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, color: 'var(--green-700)', font: '600 13px/1 var(--font-body)', cursor: 'pointer' }}>
                  <Icon name="camera" size={24} />Add photo
                </button>
              ) : null}
            </div>
            <div style={{ marginTop: 20 }}><Alert tone="info">If another car was involved, a photo of its number plate helps us move faster.</Alert></div>
          </>
        ) : (
          <>
            <H t="Check and submit" />
            <Card padding="sm" style={{ paddingTop: 4, paddingBottom: 4 }}>
              {[['What happened', TYPES.find((t) => t[0] === type)[1], 0], ['When', '21 Sep 2026, 17:40', 1], ['Where', 'Mare Street, London E8', 1], ['Photos', photos + ' added', 2]].map(([k, v, s], i, a) => (
                <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: i < a.length - 1 ? '1px solid var(--border-1)' : 0 }}>
                  <div style={{ flex: 1 }}><div className="kb-caption" style={{ color: 'var(--fg-3)' }}>{k}</div><div style={{ font: '500 15px/20px var(--font-body)', marginTop: 2 }}>{v}</div></div>
                  <Button variant="ghost" size="sm" onClick={() => setStep(s)}>Edit</Button>
                </div>
              ))}
            </Card>
            <div style={{ marginTop: 20 }}><Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} label="Everything here is true to the best of my knowledge" description="Giving false information can make your policy invalid." /></div>
          </>
        )}
      </div>
      <div style={{ padding: '12px 20px 34px', background: 'var(--bg-page)', borderTop: '1px solid var(--border-1)' }}>
        <Button size="lg" fullWidth disabled={!canNext} loading={sending} iconRight={step < 3 ? 'arrow-right' : undefined} onClick={next}>{step < 3 ? 'Continue' : sending ? 'Submitting' : 'Submit claim'}</Button>
      </div>
      <Dialog open={leaving} contained presentation="sheet" onClose={() => setLeaving(false)} title="Leave this claim?" description="We'll save your answers for 7 days so you can pick up where you left off."
        actions={<><Button variant="ghost" size="lg" fullWidth onClick={onClose}>Leave for now</Button><Button size="lg" fullWidth onClick={() => setLeaving(false)}>Keep going</Button></>} />
    </div>
  );
}
Object.assign(window, { ClaimFlow });
})();
