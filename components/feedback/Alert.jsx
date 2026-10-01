import React from 'react';
import { Icon } from '../display/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

const ICONS = { neutral: 'info', info: 'info', success: 'circle-check', warning: 'triangle-alert', danger: 'circle-alert' };
export function Alert({ tone = 'info', title, icon, action, className, children, ...rest }) {
  return (
    <div role={tone === 'danger' ? 'alert' : 'status'} className={cx('kb-alert', tone !== 'neutral' && 'kb-alert--' + tone, className)} {...rest}>
      <Icon name={icon || ICONS[tone]} size={20} className="kb-alert__icon" />
      <div className="kb-alert__body">
        {title ? <span className="kb-alert__title">{title}</span> : null}
        {children}
        {action ? <div className="kb-alert__action">{action}</div> : null}
      </div>
    </div>
  );
}
