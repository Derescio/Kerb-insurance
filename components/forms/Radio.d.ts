import * as React from 'react';
/** Single radio input with label. Group several with the same `name`. */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}
export function Radio(props: RadioProps): JSX.Element;
