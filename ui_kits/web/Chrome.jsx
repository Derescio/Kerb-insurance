(() => {
const { Wordmark, Button, Stepper, IconButton, Icon } = window.KerbDesignSystem_549f9e;

function Container({ children, style }) {
  return <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', ...style }}>{children}</div>;
}

function QuoteHeader({ step, onExit }) {
  return (
    <header style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border-1)', position: 'sticky', top: 0, zIndex: 200 }}>
      <Container style={{ height: 72, display: 'grid', gridTemplateColumns: '200px 1fr 200px', alignItems: 'center' }}>
        <Wordmark size={26} />
        <div style={{ maxWidth: 560, justifySelf: 'center', width: '100%' }}><Stepper steps={['Your car', 'About you', 'Cover', 'Pay']} current={step} /></div>
        <div style={{ justifySelf: 'end' }}><Button variant="ghost" size="sm" iconLeft="save" onClick={onExit}>Save and exit</Button></div>
      </Container>
    </header>
  );
}

function AppHeader({ tab, onTab }) {
  const items = [['overview', 'Overview'], ['policies', 'Policies'], ['claims', 'Claims'], ['documents', 'Documents']];
  return (
    <header style={{ background: 'var(--green-900)', color: '#fff' }}>
      <Container style={{ height: 64, display: 'flex', alignItems: 'center', gap: 40 }}>
        <Wordmark tone="inverse" size={24} />
        <nav style={{ display: 'flex', gap: 4, flex: 1 }}>
          {items.map(([id, l]) => (
            <button key={id} onClick={() => onTab(id)} style={{ height: 36, padding: '0 14px', borderRadius: 999, border: 0, cursor: 'pointer', font: '600 14px/1 var(--font-body)', background: tab === id ? 'rgba(255,255,255,.12)' : 'transparent', color: tab === id ? '#fff' : 'var(--fg-inverse-2)' }}>{l}</button>
          ))}
        </nav>
        <IconButton icon="bell" label="Notifications" variant="inverse" />
        <span style={{ display: 'grid', placeItems: 'center', width: 36, height: 36, borderRadius: 999, background: 'var(--marker-400)', color: 'var(--green-900)', font: '700 13px/1 var(--font-body)' }}>MP</span>
      </Container>
    </header>
  );
}

function PlateTag({ children, size = 14 }) {
  return <span style={{ display: 'inline-block', padding: '3px 8px', borderRadius: 5, background: 'var(--marker-300)', color: 'var(--green-900)', font: '600 ' + size + 'px/1.2 var(--font-mono)', letterSpacing: '.1em', boxShadow: 'inset 0 0 0 1.5px var(--green-900)', whiteSpace: 'nowrap' }}>{children}</span>;
}

Object.assign(window, { Container, QuoteHeader, AppHeader, PlateTag });
})();
