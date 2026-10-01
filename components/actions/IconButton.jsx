import React from 'react';
import { Icon } from '../display/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function IconButton({ icon, label, variant = 'ghost', size = 'md', type = 'button', className, ...rest }) {
  const is = size === 'sm' ? 16 : size === 'lg' ? 22 : 20;
  return (
    <button type={type} aria-label={label} title={label} className={cx('kb-iconbtn', 'kb-iconbtn--' + variant, size !== 'md' && 'kb-iconbtn--' + size, className)} {...rest}>
      <Icon name={icon} size={is} />
    </button>
  );
}
