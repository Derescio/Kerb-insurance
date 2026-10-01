(() => {
const { Wordmark, IconButton } = window.KerbDesignSystem_549f9e;

function Container({ children, style }) {
  return <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', ...style }}>{children}</div>;
}

// Evergreen site header used across quote, policy and claims (hi-fi wireframes).
function SiteHeader({ active, onNav }) {
  const items = [['claims', 'Claims'], ['policy', 'Policy'], ['help', 'Help']];
  return (
    <header style={{ background: 'var(--bg-inverse)', position: 'sticky', top: 0, zIndex: 200 }}>
      <Container style={{ height: 72, display: 'flex', alignItems: 'center', gap: 32 }}>
        <button type="button" onClick={() => onNav('home')} aria-label="Kerb home" style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', flex: 1, textAlign: 'left' }}><Wordmark tone="inverse" size={26} /></button>
        <nav style={{ display: 'flex', gap: 28 }}>
          {items.map(([id, l]) => (
            <button key={id} type="button" onClick={() => onNav(id)} aria-current={active === id ? 'page' : undefined}
              style={{ border: 0, background: 'none', padding: '8px 0', cursor: 'pointer', font: (active === id ? '600' : '500') + ' 15px/20px var(--font-body)', color: active === id ? 'var(--marker-400)' : 'var(--fg-inverse-2)' }}>{l}</button>
          ))}
        </nav>
        <IconButton icon="bell" label="Notifications" variant="inverse" />
      </Container>
    </header>
  );
}

function PlateTag({ children, size = 14 }) {
  return <span style={{ display: 'inline-block', padding: '3px 8px', borderRadius: 5, background: 'var(--marker-300)', color: 'var(--green-900)', font: '600 ' + size + 'px/1.2 var(--font-mono)', letterSpacing: '.1em', boxShadow: 'inset 0 0 0 1.5px var(--green-900)', whiteSpace: 'nowrap' }}>{children}</span>;
}

// Narrow page body used by the journey screens.
function Page({ children }) {
  return <Container style={{ padding: '32px 40px 80px' }}><div style={{ maxWidth: 960, display: 'flex', flexDirection: 'column', gap: 24 }}>{children}</div></Container>;
}

Object.assign(window, { Container, SiteHeader, PlateTag, Page });
})();
