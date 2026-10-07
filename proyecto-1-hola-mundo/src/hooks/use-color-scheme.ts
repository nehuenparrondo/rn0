// Unifica el tema de los componentes heredados con la preferencia guardada.
import { useTheme } from './useTheme';

export function useColorScheme() {
  return useTheme().themeMode;
}
