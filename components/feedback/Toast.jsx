import React from 'react';
import { Icon } from '../display/Icon.jsx';
import { IconButton } from '../actions/IconButton.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

const ICONS = { neutral: 'info', info: 'info', success: 'circle-check', warning: 'triangle-alert', danger: 'circle-alert' };
export function Toast({ tone = 'success', title, message, actionLabel, onAction, onClose, className, ...rest }) {
  return (
    <div role="status" aria-live="polite" className={cx('kb-toast', 'kb-toast--' + tone, className)} {...rest}>
      <Icon name={ICONS[tone]} size={20} className="kb-toast__icon" />
      <div className="kb-toast__body">
        {title ? <span className="kb-toast__title">{title}</span> : null}
        {message ? <span className="kb-toast__msg">{message}</span> : null}
      </div>
      {actionLabel ? <button type="button" className="kb-toast__action" onClick={onAction}>{actionLabel}</button> : null}
      {onClose ? <IconButton icon="x" label="Dismiss" size="sm" variant="inverse" onClick={onClose} /> : null}
    </div>
  );
}
