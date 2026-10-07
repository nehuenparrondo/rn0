// Los componentes heredados usan la misma preferencia persistente que la aplicación.
import { useTheme } from './useTheme';

export function useColorScheme() {
  return useTheme().themeMode;
}
