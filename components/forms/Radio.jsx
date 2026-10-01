import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Radio({ label, description, disabled, className, style, ...rest }) {
  return (
    <label className={cx('kb-check', 'kb-check--radio', disabled && 'kb-check--disabled', className)} style={style}>
      <input type="radio" disabled={disabled} {...rest} />
      <span className="kb-check__box"></span>
      {label || description ? (
        <span className="kb-check__text">
          {label ? <span>{label}</span> : null}
          {description ? <span className="kb-check__desc">{description}</span> : null}
        </span>
      ) : null}
    </label>
  );
}
