import React from 'react';
import { Icon } from '../display/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Button({ variant = 'primary', size = 'md', iconLeft, iconRight, fullWidth = false, loading = false, disabled, type = 'button', className, children, ...rest }) {
  const is = size === 'sm' ? 16 : 18;
  return (
    <button type={type} className={cx('kb-btn', 'kb-btn--' + variant, 'kb-btn--' + size, fullWidth && 'kb-btn--full', className)} disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>
      {loading ? <span className="kb-spinner" aria-hidden="true"></span> : iconLeft ? <Icon name={iconLeft} size={is} /> : null}
      {children != null ? <span>{children}</span> : null}
      {iconRight && !loading ? <Icon name={iconRight} size={is} /> : null}
    </button>
  );
}
