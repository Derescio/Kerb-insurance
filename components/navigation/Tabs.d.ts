import * as React from 'react';
export interface TabItem { id: string; label: React.ReactNode; count?: number; }
/** Tab strip: underline (page sections) or pill (segmented switch). */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: Array<string | TabItem>;
  /** Selected item id. */
  value: string;
  onChange?: (id: string) => void;
  variant?: 'underline' | 'pill';
  /** Stretch tabs to fill the width. */
  fullWidth?: boolean;
}
export function Tabs(props: TabsProps): JSX.Element;
