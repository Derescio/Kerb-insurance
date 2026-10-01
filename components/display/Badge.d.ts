import * as React from 'react';
/** Small non-interactive status pill. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'accent' | 'inverse';
  /** Leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
