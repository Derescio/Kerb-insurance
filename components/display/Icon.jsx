import React from 'react';

const ICON_BASE = 'https://unpkg.com/lucide-static@0.469.0/icons/';

export function Icon({ name, size = 20, color, label, className, style, ...rest }) {
  const url = 'url(' + ICON_BASE + name + '.svg)';
  return (
    <span
      className={'kb-icon' + (className ? ' ' + className : '')}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{ width: size, height: size, backgroundColor: color || 'currentColor', WebkitMaskImage: url, maskImage: url, ...style }}
      {...rest}
    />
  );
}
