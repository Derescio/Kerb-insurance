import * as React from 'react';
export interface CoverageFeature { label: string; included?: boolean; }
/**
 * Selectable plan/tier card with price and included features. Group with role="radiogroup".
 * @startingPoint section="Insurance" subtitle="Plan tier cards for the quote journey" viewport="700x420"
 */
export interface CoverageOptionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  description?: string;
  /** Pre-formatted price, e.g. "£38.20". */
  price?: string;
  /** Default "/month". */
  period?: string;
  /** Strings = included. Objects with included:false render muted with a minus. */
  features?: Array<string | CoverageFeature>;
  selected?: boolean;
  /** Marker badge above the card, e.g. "Most chosen". */
  flag?: string;
  onSelect?: () => void;
}
export function CoverageOption(props: CoverageOptionProps): JSX.Element;
