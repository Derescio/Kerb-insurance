import React from 'react';
import { Icon } from '../display/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

function Field({ id, label, optional, hint, error, children }) {
  return (
    <div className="kb-field">
      {label ? <label className="kb-field__label" htmlFor={id}>{label}{optional ? <span className="kb-field__optional"> (optional)</span> : null}</label> : null}
      {children}
      {error ? <span className="kb-field__error" id={id + '-err'}><Icon name="circle-alert" size={14} />{error}</span> : hint ? <span className="kb-field__hint" id={id + '-hint'}>{hint}</span> : null}
    </div>
  );
}

let uid = 0;
export function Input({ label, hint, error, optional, iconLeft, prefix, suffix, variant = 'default', disabled, id, className, style, ...rest }) {
  const [autoId] = React.useState(() => 'kb-in-' + (++uid));
  const fid = id || autoId;
  return (
    <Field id={fid} label={label} optional={optional} hint={hint} error={error}>
      <div className={cx('kb-control', variant === 'plate' && 'kb-control--plate', error && 'kb-control--error', disabled && 'kb-control--disabled', className)} style={style}>
        {iconLeft ? <Icon name={iconLeft} size={18} /> : null}
        {prefix ? <span className="kb-control__affix">{prefix}</span> : null}
        <input id={fid} disabled={disabled} aria-invalid={!!error || undefined} aria-describedby={error ? fid + '-err' : hint ? fid + '-hint' : undefined} {...rest} />
        {suffix ? <span className="kb-control__affix">{suffix}</span> : null}
      </div>
    </Field>
  );
}
