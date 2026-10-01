(() => {
const { Icon, IconButton } = window.KerbDesignSystem_549f9e;

function TabBar({ tab, onTab }) {
  const items = [['home', 'house', 'Home'], ['policy', 'shield-check', 'Policy'], ['claims', 'file-text', 'Claims'], ['account', 'user', 'Account']];
  return (
    <nav style={{ display: 'flex', height: 84, paddingBottom: 26, flex: 'none', background: 'rgba(255,255,255,.94)', backdropFilter: 'blur(16px)', borderTop: '1px solid var(--border-1)' }}>
      {items.map(([id, ic, l]) => {
        const a = tab === id;
        return (
          <button key={id} onClick={() => onTab(id)} style={{ flex: 1, border: 0, background: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, cursor: 'pointer', color: a ? 'var(--green-900)' : 'var(--fg-3)', font: (a ? '600' : '500') + ' 11px/14px var(--font-body)' }}>
            <span style={{ display: 'grid', placeItems: 'center', width: 56, height: 30, borderRadius: 999, background: a ? 'var(--green-100)' : 'transparent', transition: 'background-color 200ms' }}><Icon name={ic} size={22} /></span>
            {l}
          </button>
        );
      })}
    </nav>
  );
}

function Screen({ children, footer, bg }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: bg || 'var(--bg-page)' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingTop: 54 }}>{children}</div>
      {footer}
    </div>
  );
}

// Evergreen app bar from the hi-fi wireframes. Sits under the status bar (54px) and stays pinned.
function AppBar({ onBack }) {
  const { Wordmark } = window.KerbDesignSystem_549f9e;
  return (
    <div style={{ flex: 'none', background: 'var(--bg-inverse)', paddingTop: 54 }}>
      <div style={{ height: 60, padding: '0 12px 0 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
        {onBack ? <IconButton icon="arrow-left" label="Back" variant="inverse" onClick={onBack} /> : null}
        <span style={{ flex: 1 }}><Wordmark tone="inverse" size={24} /></span>
        <IconButton icon="bell" label="Notifications" variant="inverse" size="lg" />
      </div>
    </div>
  );
}

// Screen with the evergreen app bar; content scrolls below it on a white body.
function AppScreen({ children, footer, onBack }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg-surface)' }}>
      <AppBar onBack={onBack} />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ padding: '20px 20px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>{children}</div>
      </div>
      {footer}
    </div>
  );
}

function TopBar({ title, onBack, backIcon, right }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr 48px', alignItems: 'center', height: 52, padding: '0 8px' }}>
      <div>{onBack ? <IconButton icon={backIcon || 'arrow-left'} label="Back" onClick={onBack} size="lg" /> : null}</div>
      <div style={{ textAlign: 'center', font: '600 16px/22px var(--font-body)' }}>{title}</div>
      <div>{right}</div>
    </div>
  );
}

function SectionTitle({ children, action }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
      <h3 className="kb-h3" style={{ margin: 0 }}>{children}</h3>
      {action}
    </div>
  );
}

function Row({ icon, title, sub, right, onClick, last }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: last ? 0 : '1px solid var(--border-1)', cursor: onClick ? 'pointer' : 'default' }}>
      {icon ? <span style={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: 12, background: 'var(--bg-brand-subtle)', color: 'var(--green-700)', flex: 'none' }}><Icon name={icon} size={20} /></span> : null}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ font: '500 15px/20px var(--font-body)' }}>{title}</div>
        {sub ? <div style={{ font: '400 13px/18px var(--font-body)', color: 'var(--fg-3)' }}>{sub}</div> : null}
      </div>
      {right}
    </div>
  );
}

function Plate({ children, size = 15 }) {
  return <span style={{ display: 'inline-block', padding: '3px 8px', borderRadius: 5, background: 'var(--marker-300)', color: 'var(--green-900)', font: '600 ' + size + 'px/1.2 var(--font-mono)', letterSpacing: '.1em', boxShadow: 'inset 0 0 0 1.5px var(--green-900)' }}>{children}</span>;
}

Object.assign(window, { TabBar, Screen, AppBar, AppScreen, TopBar, SectionTitle, Row, Plate });
})();
