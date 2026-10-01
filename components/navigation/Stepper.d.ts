import * as React from 'react';
/** Progress through a multi-step journey (quote, claim). */
export interface StepperProps extends React.HTMLAttributes<HTMLElement> {
  /** Step labels in order. */
  steps: string[];
  /** Zero-based index of the current step. */
  current: number;
  /** default: dots + all labels. compact: only current label (narrow widths). bar: segmented progress bar (mobile). */
  variant?: 'default' | 'compact' | 'bar';
}
export function Stepper(props: StepperProps): JSX.Element;
