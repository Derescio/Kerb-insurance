import * as React from 'react';
/** Interactive chip for filters and quick picks (toggleable and/or removable). */
export interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onClick'> {
  selected?: boolean;
  /** Lucide icon id shown before the label. */
  icon?: string;
  onClick?: (e: React.SyntheticEvent) => void;
  /** Shows an × button. */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
