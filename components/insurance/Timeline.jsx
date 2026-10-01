import React from 'react';
import { Icon } from '../display/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');

export function Timeline({ items = [], className, ...rest }) {
  return (
    <ol className={cx('kb-timeline', className)} {...rest}>
      {items.map((it, i) => {
        const st = it.status || 'upcoming';
        return (
          <li key={i} className={'kb-tl kb-tl--' + st} aria-current={st === 'current' ? 'step' : undefined}>
            <span className="kb-tl__node">{st === 'done' ? <Icon name="check" size={14} /> : null}</span>
            <div>
              <div className="kb-tl__title">{it.title}</div>
              {it.meta ? <div className="kb-tl__meta">{it.meta}</div> : null}
              {it.description ? <div className="kb-tl__desc">{it.description}</div> : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
