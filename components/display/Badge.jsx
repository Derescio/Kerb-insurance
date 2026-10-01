import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Badge({ tone = 'neutral', dot = false, className, children, ...rest }) {
  return (
    <span className={cx('kb-badge', tone !== 'neutral' && 'kb-badge--' + tone, className)} {...rest}>
      {dot ? <span className="kb-badge__dot" aria-hidden="true"></span> : null}
      {children}
    </span>
  );
}
