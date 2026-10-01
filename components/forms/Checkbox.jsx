import React from 'react';
import { Icon } from '../display/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Checkbox({ label, description, disabled, className, style, ...rest }) {
  return (
    <label className={cx('kb-check', disabled && 'kb-check--disabled', className)} style={style}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="kb-check__box"><Icon name="check" size={14} /></span>
      {label || description ? (
        <span className="kb-check__text">
          {label ? <span>{label}</span> : null}
          {description ? <span className="kb-check__desc">{description}</span> : null}
        </span>
      ) : null}
    </label>
  );
}
