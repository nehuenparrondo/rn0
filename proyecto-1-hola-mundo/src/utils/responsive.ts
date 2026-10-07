// src/utils/responsive.ts
// Contiene helpers relacionados con layouts responsive.

import { BREAKPOINTS } from '../styles/breakpoints';

export function getResponsiveColumns(width: number): number {
  if (width >= BREAKPOINTS.desktop) {
    return 3;
  }

  if (width >= BREAKPOINTS.tablet) {
    return 2;
  }

  return 1;
}
