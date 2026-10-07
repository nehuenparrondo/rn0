// Identidad visual basada en el monograma de la referencia del usuario.
import { StyleSheet, View } from 'react-native';

import { useTheme } from '../../hooks/useTheme';
import { AppText } from '../atoms/AppText';

export function BrandMark() {
  const { theme } = useTheme();
  return (
    <View style={styles.brand}>
      <View
        style={[styles.monogram, { backgroundColor: theme.colors.primary }]}
      >
        <AppText style={[styles.initials, { color: theme.colors.onPrimary }]}>
          NP
        </AppText>
        <View
          style={[styles.dot, { backgroundColor: theme.colors.onPrimary }]}
        />
      </View>
      <View>
        <AppText style={styles.name}>Hola Mundo.</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  brand: { flexDirection: 'row', gap: 12, alignItems: 'center' },
  monogram: {
    width: 42,
    height: 46,
    borderRadius: 13,
    borderBottomLeftRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 23,
    letterSpacing: -1,
  },
  dot: { width: 4, height: 4, borderRadius: 2, marginTop: 1 },
  name: { fontSize: 16, lineHeight: 23, fontWeight: '800' },
});
