import React from 'react';
import { Icon } from '../display/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Stepper({ steps = [], current = 0, variant = 'default', className, ...rest }) {
  const state = (i) => (i < current ? 'done' : i === current ? 'current' : 'upcoming');
  if (variant === 'bar') {
    return (
      <div className={cx('kb-stepper', 'kb-stepper--bar', className)} role="progressbar" aria-valuemin={1} aria-valuemax={steps.length} aria-valuenow={current + 1} aria-valuetext={steps[current]} {...rest}>
        {steps.map((s, i) => <span key={i} className={'kb-bar kb-bar--' + state(i)}></span>)}
      </div>
    );
  }
  const out = [];
  steps.forEach((s, i) => {
    const st = state(i);
    if (i > 0) out.push(<li key={'l' + i} aria-hidden="true" className={cx('kb-stepper__line', i <= current && 'kb-stepper__line--done')}></li>);
    out.push(
      <li key={i} className={'kb-step kb-step--' + st} aria-current={st === 'current' ? 'step' : undefined}>
        <span className="kb-step__dot">{st === 'done' ? <Icon name="check" size={14} /> : i + 1}</span>
        <span className="kb-step__label">{s}</span>
      </li>
    );
  });
  return <ol className={cx('kb-stepper', variant === 'compact' && 'kb-stepper--compact', className)} {...rest}>{out}</ol>;
}
