import * as React from 'react';
/**
 * Surface container. 16px radius; raised = hairline + soft shadow.
 * @startingPoint section="Layout" subtitle="Surface container for policy, claim and quote content" viewport="700x320"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** raised (default, white + shadow-1), outline (hairline only), sunken (stone-100), inverse (evergreen). */
  variant?: 'raised' | 'outline' | 'sunken' | 'inverse';
  /** none 0, sm 16, md 24 (default), lg 32. */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Adds hover lift + pointer. Use when the whole card navigates. */
  interactive?: boolean;
  /** Element to render as. Default "div". */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
