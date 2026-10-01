import React from 'react';
import { IconButton } from '../actions/IconButton.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Dialog({ open = true, onClose, title, description, actions, size = 'md', presentation = 'modal', contained = false, className, children, ...rest }) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [open, onClose]);
  if (!open) return null;
  const sheet = presentation === 'sheet';
  return (
    <div className={cx('kb-dialog-scrim', contained && 'kb-dialog-scrim--contained', sheet && 'kb-dialog-scrim--sheet')} onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}>
      <div role="dialog" aria-modal="true" aria-label={typeof title === 'string' ? title : undefined} className={cx('kb-dialog', size !== 'md' && 'kb-dialog--' + size, className)} {...rest}>
        {sheet ? <div className="kb-dialog__grab" aria-hidden="true"></div> : null}
        {onClose && !sheet ? <IconButton icon="x" label="Close" size="sm" className="kb-dialog__close" onClick={onClose} /> : null}
        {title ? <h2 className="kb-dialog__title">{title}</h2> : null}
        {description ? <p className="kb-dialog__desc">{description}</p> : null}
        {children ? <div className="kb-dialog__body">{children}</div> : null}
        {actions ? <div className="kb-dialog__actions">{actions}</div> : null}
      </div>
    </div>
  );
}
