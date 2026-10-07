// src/hooks/useBreakpoint.ts
// Devuelve información responsive según el ancho actual de la pantalla.

import { useWindowDimensions } from 'react-native';

import { BREAKPOINTS } from '../styles/breakpoints';

export function useBreakpoint() {
  const { width, height } = useWindowDimensions();

  const isDesktop = width >= BREAKPOINTS.desktop;
  const isTablet =
    width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop;
  const isMobile = width < BREAKPOINTS.tablet;
  const isLandscape = width > height;

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
    isLandscape,
  };
}
