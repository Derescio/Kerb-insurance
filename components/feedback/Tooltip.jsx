import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Tooltip({ content, placement = 'top', open = false, className, children, ...rest }) {
  return (
    <span className={cx('kb-tip', placement === 'bottom' && 'kb-tip--bottom', open && 'kb-tip--open', className)} {...rest}>
      {children}
      <span role="tooltip" className="kb-tip__bubble">{content}</span>
    </span>
  );
}
