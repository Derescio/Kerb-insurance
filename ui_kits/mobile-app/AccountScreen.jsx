(() => {
const { Card, Switch, Button, Icon } = window.KerbDesignSystem_549f9e;
function AccountScreen() {
  return (
    <div style={{ padding: '6px 20px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <h1 className="kb-h1" style={{ margin: 0 }}>Account</h1>
      <Card padding="sm" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ display: 'grid', placeItems: 'center', width: 52, height: 52, borderRadius: 999, background: 'var(--marker-300)', font: '700 18px/1 var(--font-display)', color: 'var(--green-900)' }}>MP</span>
        <div style={{ flex: 1 }}><div style={{ font: '600 16px/22px var(--font-body)' }}>Maya Patel</div><div style={{ font: '400 13px/18px var(--font-body)', color: 'var(--fg-3)' }}>maya.patel@example.com</div></div>
        <Icon name="chevron-right" size={20} color="var(--fg-3)" />
      </Card>
      <Card padding="sm" style={{ paddingTop: 2, paddingBottom: 2 }}>
        <Row icon="credit-card" title="Payment method" sub="Visa ending 4417" right={<Icon name="chevron-right" size={20} color="var(--fg-3)" />} />
        <Row icon="house" title="Address" sub="Flat 3, 18 Wilton Way, E8" right={<Icon name="chevron-right" size={20} color="var(--fg-3)" />} last />
      </Card>
      <Card padding="sm" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <span style={{ font: '600 16px/22px var(--font-display)' }}>Notifications</span>
        <Switch labelPosition="end" defaultChecked label="Claim updates by text" />
        <Switch labelPosition="end" defaultChecked label="Renewal reminders" />
        <Switch labelPosition="end" label="Offers and news" />
      </Card>
      <Button variant="secondary" iconLeft="log-out" fullWidth>Log out</Button>
    </div>
  );
}
Object.assign(window, { AccountScreen });
})();
