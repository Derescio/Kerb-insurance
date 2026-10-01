import * as React from 'react';
/** Inline, persistent message block with tinted background and full hairline border. */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  title?: React.ReactNode;
  /** Override the default tone icon (Lucide id). */
  icon?: string;
  /** Optional action row (e.g. a small ghost Button). */
  action?: React.ReactNode;
  children?: React.ReactNode;
}
export function Alert(props: AlertProps): JSX.Element;
