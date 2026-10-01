import * as React from 'react';
/** Labelled text input with hint / error, optional icon and affixes. 48px tall, 12px radius. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  label?: string;
  hint?: string;
  /** Error message — replaces hint and turns the border red. */
  error?: string;
  /** Appends "(optional)" to the label. */
  optional?: boolean;
  /** Lucide icon id inside the control, left. */
  iconLeft?: string;
  /** Text affix before the value, e.g. "£". */
  prefix?: React.ReactNode;
  /** Text affix after the value, e.g. "miles". */
  suffix?: React.ReactNode;
  /** "plate" renders a yellow number-plate field (mono, uppercase, 56px). */
  variant?: 'default' | 'plate';
}
export function Input(props: InputProps): JSX.Element;
