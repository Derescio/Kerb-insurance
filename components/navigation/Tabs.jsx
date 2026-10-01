import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Tabs({ items = [], value, onChange, variant = 'underline', fullWidth = false, className, ...rest }) {
  return (
    <div role="tablist" className={cx('kb-tabs', 'kb-tabs--' + variant, fullWidth && 'kb-tabs--full', className)} {...rest}>
      {items.map((it) => {
        const t = typeof it === 'string' ? { id: it, label: it } : it;
        const sel = t.id === value;
        return (
          <button key={t.id} type="button" role="tab" aria-selected={sel} className="kb-tab" onClick={() => onChange && onChange(t.id)}>
            {t.label}
            {t.count != null ? <span className="kb-tab__count">{t.count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
