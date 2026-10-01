import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Switch({ label, labelPosition = 'start', disabled, className, style, ...rest }) {
  return (
    <label className={cx('kb-switch', labelPosition === 'end' && 'kb-switch--end', disabled && 'kb-switch--disabled', className)} style={style}>
      <input type="checkbox" role="switch" disabled={disabled} {...rest} />
      <span className="kb-switch__track" aria-hidden="true"></span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
