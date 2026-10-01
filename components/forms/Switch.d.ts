import * as React from 'react';
/** On/off toggle for settings that apply immediately. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** "start": track then label. "end": label left, track pushed right (settings rows). */
  labelPosition?: 'start' | 'end';
}
export function Switch(props: SwitchProps): JSX.Element;
