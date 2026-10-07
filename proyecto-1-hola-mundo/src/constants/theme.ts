// Compatibilidad de la plantilla original con la paleta centralizada.

import '@/global.css';

import { Platform } from 'react-native';

import { DARK_COLORS, LIGHT_COLORS } from '../styles/colors';

export const Colors = {
  light: {
    text: LIGHT_COLORS.text,
    background: LIGHT_COLORS.background,
    backgroundElement: LIGHT_COLORS.surface,
    backgroundSelected: LIGHT_COLORS.surfaceSecondary,
    textSecondary: LIGHT_COLORS.textSecondary,
  },
  dark: {
    text: DARK_COLORS.text,
    background: DARK_COLORS.background,
    backgroundElement: DARK_COLORS.surface,
    backgroundSelected: DARK_COLORS.surfaceSecondary,
    textSecondary: DARK_COLORS.textSecondary,
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    // Tipografía estándar de iOS.
    sans: 'system-ui',
    // Tipografía con serif de iOS.
    serif: 'ui-serif',
    // Tipografía redondeada de iOS.
    rounded: 'ui-rounded',
    // Tipografía monoespaciada de iOS.
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
