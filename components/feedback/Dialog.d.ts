import * as React from 'react';
/** Modal dialog or bottom sheet over a blurred evergreen scrim. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  /** Called on Esc, scrim click or close button. Omit to make it non-dismissable. */
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Button row, right-aligned (stacked full-width in sheets). */
  actions?: React.ReactNode;
  /** sm 380, md 480, lg 640. */
  size?: 'sm' | 'md' | 'lg';
  /** "modal" centred (web), "sheet" bottom sheet (mobile). */
  presentation?: 'modal' | 'sheet';
  /** Position absolutely inside the nearest positioned ancestor instead of the viewport. */
  contained?: boolean;
  children?: React.ReactNode;
}
export function Dialog(props: DialogProps): JSX.Element | null;
