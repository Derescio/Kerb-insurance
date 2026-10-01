import React from 'react';
import { Icon } from './Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Tag({ selected = false, icon, onRemove, onClick, className, children, ...rest }) {
  return (
    <span
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-pressed={onClick ? selected : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(e); } } : undefined}
      className={cx('kb-tag', selected && 'kb-tag--selected', className)}
      {...rest}
    >
      {icon ? <Icon name={icon} size={16} /> : null}
      <span>{children}</span>
      {onRemove ? (
        <button type="button" className="kb-tag__remove" aria-label="Remove" onClick={(e) => { e.stopPropagation(); onRemove(e); }}>
          <Icon name="x" size={14} />
        </button>
      ) : null}
    </span>
  );
}
