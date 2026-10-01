import * as React from 'react';
/**
 * Pill button. Primary = evergreen; accent = Marker yellow (max one per screen).
 * @startingPoint section="Actions" subtitle="Pill buttons in primary, accent, secondary, ghost and danger" viewport="700x260"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'danger';
  /** sm 36px, md 44px (default), lg 52px. */
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon id before the label. */
  iconLeft?: string;
  /** Lucide icon id after the label (e.g. "arrow-right" for forward steps). */
  iconRight?: string;
  fullWidth?: boolean;
  /** Replaces the left icon with a spinner and disables the button. */
  loading?: boolean;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
