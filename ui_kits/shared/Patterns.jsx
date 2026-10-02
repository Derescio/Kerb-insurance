// Screen-level patterns shared by the web and mobile UI kits (hi-fi wireframes, Oct 2026).
// Composed from the Kerb component bundle; exported to window like the other kit files.
(() => {
const { Card, Badge, Button, Icon, Tag } = window.KerbDesignSystem_549f9e;

// Overline + heading + supporting line at the top of a journey step.
function StepHead({ over, title, sub, right, size = 'h2' }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>
      <div style={{ minWidth: 0 }}>
        {over ? <div className="kb-overline" style={{ color: 'var(--fg-brand)' }}>{over}</div> : null}
        <h1 className={'kb-' + size} style={{ margin: over ? '6px 0 0' : 0 }}>{title}</h1>
        {sub ? <p className="kb-body-s" style={{ margin: '6px 0 0', color: 'var(--fg-3)' }}>{sub}</p> : null}
      </div>
      {right}
    </div>
  );
}

// Label/value rows, e.g. Reference — KRB-C-20931. tone: 'brand' tints the value.
function KV({ rows }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {rows.map(([k, v, tone]) => (
        <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, font: '400 14px/20px var(--font-body)' }}>
          <span style={{ color: 'var(--fg-3)', flex: 'none' }}>{k}</span>
          <span className="kb-num" style={{ color: tone === 'brand' ? 'var(--fg-brand)' : 'var(--fg-1)', textAlign: 'right', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v}</span>
        </div>
      ))}
    </div>
  );
}

// Outline card with a heading row (optional leading icon and trailing badge).
function InfoCard({ title, icon, badge, children, style }) {
  return (
    <Card variant="outline" padding="sm" style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0, ...style }}>
      {title ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {icon ? <Icon name={icon} size={20} color="var(--green-700)" /> : null}
          <span style={{ flex: 1, font: '700 18px/24px var(--font-display)', letterSpacing: '-.01em' }}>{title}</span>
          {badge}
        </div>
      ) : null}
      {children}
    </Card>
  );
}

// Evergreen hero card for the active policy.
function PolicyCard({ until, sub = 'Comprehensive · £350 excess' }) {
  return (
    <Card variant="inverse" padding="md">
      <div className="kb-overline" style={{ color: 'var(--fg-inverse-2)' }}>KR24 BXL · Arden Hatch</div>
      <div style={{ font: '700 20px/28px var(--font-display)', letterSpacing: '-.01em', marginTop: 10 }}>Covered until {until}</div>
      <div className="kb-body-s" style={{ color: 'var(--fg-inverse-2)', marginTop: 8 }}>{sub}</div>
    </Card>
  );
}

// Toggleable chip row. multi=true keeps an array of selected values.
function TagGroup({ options, value, onChange, multi = false }) {
  const isOn = (o) => (multi ? value.includes(o) : value === o);
  const toggle = (o) => onChange(multi ? (value.includes(o) ? value.filter((x) => x !== o) : [...value, o]) : o);
  return (
    <div role="group" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {options.map((o) => <Tag key={o} selected={isOn(o)} onClick={() => toggle(o)}>{o}</Tag>)}
    </div>
  );
}

// Uploaded photo tile (placeholder thumbnail until real images exist).
function PhotoTile({ label, file, width = 132 }) {
  return (
    <div style={{ width, flex: 'none', padding: 8, borderRadius: 12, background: 'var(--bg-sunken)', border: '1px solid var(--border-1)' }}>
      <div style={{ height: 56, borderRadius: 8, background: 'var(--green-100)', display: 'grid', placeItems: 'center', color: 'var(--green-600)' }}><Icon name="image" size={20} /></div>
      <div style={{ font: '500 12px/16px var(--font-body)', marginTop: 8 }}>{label}</div>
      <div style={{ font: '400 10px/14px var(--font-mono)', color: 'var(--fg-4)' }}>{file}</div>
    </div>
  );
}

function AddPhotoTile({ onClick, width = 132 }) {
  return (
    <button type="button" onClick={onClick} style={{ width, minHeight: 112, flex: 'none', borderRadius: 12, border: '1.5px dashed var(--border-strong)', background: 'var(--bg-surface)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--green-700)', font: '500 13px/1 var(--font-body)', cursor: 'pointer' }}>
      <Icon name="circle-plus" size={22} />Add photo
    </button>
  );
}

// Marker tick shown on confirmation screens.
function SuccessMark({ size = 56 }) {
  return <span style={{ display: 'grid', placeItems: 'center', width: size, height: size, borderRadius: 999, background: 'var(--marker-400)', color: 'var(--green-900)' }}><Icon name="check" size={size * 0.45} /></span>;
}

// Document row with a PDF download action.
function DocRow({ name, last }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: last ? 0 : '1px solid var(--border-1)' }}>
      <Icon name="file-text" size={18} color="var(--green-700)" />
      <span style={{ flex: 1, minWidth: 0, font: '400 14px/20px var(--font-body)' }}>{name}</span>
      <Button variant="ghost" size="sm" iconLeft="download" aria-label={'Download ' + name}>PDF</Button>
    </div>
  );
}

// Green summary strip under the plan cards: "Selected — Comprehensive · £38.20/month".
function SelectedBar({ value, action, stack = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: stack ? 'column' : 'row', alignItems: stack ? 'stretch' : 'center', justifyContent: 'space-between', gap: 12, padding: '12px 16px', borderRadius: 12, background: 'var(--green-100)' }}>
      <div>
        <div className="kb-caption" style={{ color: 'var(--fg-3)' }}>Selected</div>
        <div style={{ font: '700 16px/22px var(--font-body)', color: 'var(--fg-1)' }}>{value}</div>
      </div>
      {action}
    </div>
  );
}

// Back / forward action row at the end of a step.
function ActionRow({ left, right }) {
  return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>{left || <span />}{right}</div>;
}

// Shared demo data for both kits.
const CLAIM_STEPS = ['Incident', 'Damage', 'Review', 'Submitted'];
const QUOTE_STEPS = ['Your car', 'About you', 'Cover', 'Pay'];
const PLANS = {
  tp: { name: 'Third party', desc: 'Essential legal cover', price: 26.4, features: [{ label: 'Your own car', included: false }, 'Other people', { label: 'Fire & theft', included: false }, { label: 'Courtesy car', included: false }] },
  tpft: { name: 'Fire & theft', desc: 'Adds fire and theft', price: 31.75, features: [{ label: 'Your own car', included: false }, 'Other people', 'Fire & theft', { label: 'Courtesy car', included: false }] },
  comp: { name: 'Comprehensive', desc: 'Covers your car too', price: 38.2, flag: 'Recommended', features: ['Your own car', 'Other people', 'Fire & theft', 'Courtesy car'] },
};
const money = (n) => '£' + n.toFixed(2);
const annual = (monthly) => monthly * 12 - 19.8;
const CLAIM_TIMELINE = [
  { title: 'Claim submitted', meta: '18 Sep · 17:52', status: 'done' },
  { title: 'Assessor reviewing damage', meta: 'Usually 1–2 working days', description: "We'll text you when there's an update.", status: 'current' },
  { title: "We'll confirm the plan", meta: 'Next', status: 'upcoming' },
  { title: 'Repair arranged', meta: 'After approval', status: 'upcoming' },
  { title: 'Claim complete', meta: 'Final step', status: 'upcoming' },
];
const DOCUMENTS = ['Policy schedule', 'Certificate of motor insurance', 'Insurance product information'];

Object.assign(window, { StepHead, KV, InfoCard, PolicyCard, TagGroup, PhotoTile, AddPhotoTile, SuccessMark, DocRow, SelectedBar, ActionRow, CLAIM_STEPS, QUOTE_STEPS, PLANS, money, annual, CLAIM_TIMELINE, DOCUMENTS });
})();
