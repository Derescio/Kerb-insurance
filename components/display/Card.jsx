import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Card({ variant = 'raised', padding = 'md', interactive = false, as = 'div', className, children, ...rest }) {
  const Tag = as;
  return (
    <Tag className={cx('kb-card', 'kb-card--' + variant, padding !== 'md' && 'kb-card--pad-' + padding, interactive && 'kb-card--interactive', className)} {...rest}>
      {children}
    </Tag>
  );
}
