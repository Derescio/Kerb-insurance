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
export function Select({ label, hint, error, optional, options = [], placeholder, disabled, id, value, defaultValue, className, style, ...rest }) {
  const [autoId] = React.useState(() => 'kb-sel-' + (++uid));
  const fid = id || autoId;
  const norm = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const dv = value === undefined && defaultValue === undefined && placeholder ? '' : defaultValue;
  return (
    <Field id={fid} label={label} optional={optional} hint={hint} error={error}>
      <div className={cx('kb-control', error && 'kb-control--error', disabled && 'kb-control--disabled', className)} style={style}>
        <select id={fid} disabled={disabled} value={value} defaultValue={dv} required={!!placeholder} aria-invalid={!!error || undefined} {...rest}>
          {placeholder ? <option value="" disabled>{placeholder}</option> : null}
          {norm.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <Icon name="chevron-down" size={18} className="kb-control__chev" />
      </div>
    </Field>
  );
}
