import * as React from 'react';
export interface TimelineItem {
  title: React.ReactNode;
  /** Date/time or owner, e.g. "Today, 09:12". */
  meta?: React.ReactNode;
  description?: React.ReactNode;
  status?: 'done' | 'current' | 'upcoming';
}
/** Vertical status timeline for claim progress. */
export interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {
  items: TimelineItem[];
}
export function Timeline(props: TimelineProps): JSX.Element;
