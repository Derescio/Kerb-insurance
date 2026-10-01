import * as React from 'react';
/** Typeset Kerb wordmark: lowercase "kerb" in Bricolage Grotesque 800 + a square full-stop. No drawn logo exists. */
export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Font size in px (cap height scales with it). Default 28. */
  size?: number;
  /** "ink" on light surfaces, "inverse" on evergreen / dark. */
  tone?: 'ink' | 'inverse';
  /** Optional mono descriptor, e.g. "car insurance". */
  descriptor?: string;
}
export function Wordmark(props: WordmarkProps): JSX.Element;
