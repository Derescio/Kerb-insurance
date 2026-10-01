import * as React from 'react';
/** Transient confirmation on an evergreen surface. Presentational — the host positions and times it. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  title?: React.ReactNode;
  message?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
}
export function Toast(props: ToastProps): JSX.Element;
