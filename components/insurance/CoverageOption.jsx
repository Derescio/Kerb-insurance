import React from 'react';
import { Icon } from '../display/Icon.jsx';
import { Badge } from '../display/Badge.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function CoverageOption({ name, description, price, period = '/month', features = [], selected = false, flag, onSelect, className, ...rest }) {
  return (
    <button type="button" role="radio" aria-checked={selected} onClick={onSelect} className={cx('kb-cover', selected && 'kb-cover--selected', className)} {...rest}>
      {flag ? <Badge tone="accent" className="kb-cover__flag">{flag}</Badge> : null}
      <span className="kb-cover__head">
        <span>
          <span className="kb-cover__name">{name}</span>
          {description ? <span className="kb-cover__desc">{description}</span> : null}
        </span>
        <span className="kb-cover__radio" aria-hidden="true"></span>
      </span>
      {price != null ? (
        <span className="kb-cover__price"><span className="kb-cover__amount">{price}</span><span className="kb-cover__period">{period}</span></span>
      ) : null}
      {features.length ? (
        <ul className="kb-cover__list">
          {features.map((f, i) => {
            const it = typeof f === 'string' ? { label: f, included: true } : f;
            return (
              <li key={i} className={it.included === false ? 'is-off' : undefined}>
                <Icon name={it.included === false ? 'minus' : 'check'} size={18} color={it.included === false ? 'var(--fg-4)' : 'var(--green-600)'} />
                <span>{it.label}</span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </button>
  );
}
