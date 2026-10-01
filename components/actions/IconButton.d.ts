import * as React from 'react';
/** Circular icon-only button. Always pass a label for screen readers. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide icon id. */
  icon: string;
  /** Accessible name (also the native tooltip). */
  label: string;
  variant?: 'ghost' | 'secondary' | 'primary' | 'inverse';
  /** sm 32, md 40 (default), lg 48. */
  size?: 'sm' | 'md' | 'lg';
}
export function IconButton(props: IconButtonProps): JSX.Element;
