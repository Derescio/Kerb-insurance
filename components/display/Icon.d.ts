import * as React from 'react';
/** Lucide glyph rendered as a currentColor mask. Names are Lucide kebab-case ids (e.g. "car", "shield-check", "file-text"). */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon id, kebab-case. */
  name: string;
  /** Pixel size. 16 inline/small, 20 default, 24 nav/feature. */
  size?: number;
  /** CSS color; defaults to currentColor. */
  color?: string;
  /** Accessible label. Omit for decorative icons (aria-hidden). */
  label?: string;
}
export function Icon(props: IconProps): JSX.Element;
