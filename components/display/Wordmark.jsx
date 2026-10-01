import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Wordmark({ size = 28, tone = 'ink', descriptor, className, style, ...rest }) {
  return (
    <span className={cx('kb-wordmark', tone === 'inverse' && 'kb-wordmark--inverse', className)} style={{ fontSize: size, ...style }} aria-label="Kerb" {...rest}>
      <span aria-hidden="true">kerb</span>
      <span className="kb-wordmark__dot" aria-hidden="true"></span>
      {descriptor ? <span className="kb-wordmark__desc" aria-hidden="true">{descriptor}</span> : null}
    </span>
  );
}
