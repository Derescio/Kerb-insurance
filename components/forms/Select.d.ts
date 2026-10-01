import * as React from 'react';
export interface SelectOption { value: string; label: string; }
/** Native select styled as a Kerb control. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  /** Strings or {value,label} pairs. */
  options: Array<string | SelectOption>;
  /** Disabled first option shown until a value is picked. */
  placeholder?: string;
}
export function Select(props: SelectProps): JSX.Element;
