import * as React from 'react';
/** Checkbox with label + optional description. Controlled or uncontrolled via native props. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
