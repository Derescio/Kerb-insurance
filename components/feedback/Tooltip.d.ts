import * as React from 'react';
/** Hover/focus explainer bubble — for insurance jargon. */
export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'content'> {
  content: React.ReactNode;
  placement?: 'top' | 'bottom';
  /** Force visible (docs, onboarding). */
  open?: boolean;
  children: React.ReactNode;
}
export function Tooltip(props: TooltipProps): JSX.Element;
