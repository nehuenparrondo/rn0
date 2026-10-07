// Contenedor centrado y control flotante del tema.
import type { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useTheme } from '../../hooks/useTheme';
import { AppText } from '../atoms/AppText';
import { IconButton } from '../atoms/IconButton';
import { BrandMark } from '../molecules/BrandMark';

export function PageTemplate({ children }: PropsWithChildren) {
  const { theme, themeMode, toggleTheme, isThemeReady, storageError } =
    useTheme();
  const { isMobile } = useBreakpoint();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.page, { backgroundColor: theme.colors.background }]}>
      <View
        style={[
          styles.header,
          {
            borderColor: theme.colors.border,
            paddingTop: insets.top + 14,
            paddingLeft: Math.max(insets.left, isMobile ? 20 : 48),
            paddingRight: Math.max(insets.right, isMobile ? 20 : 48),
          },
        ]}
      >
        <BrandMark />
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          {
            paddingLeft: Math.max(insets.left, isMobile ? 24 : 48),
            paddingRight: Math.max(insets.right, isMobile ? 24 : 48),
            paddingBottom: Math.max(insets.bottom, 32),
          },
        ]}
      >
        {storageError && (
          <AppText
            accessibilityRole="alert"
            style={{ color: theme.colors.error }}
          >
            {storageError}
          </AppText>
        )}
        {children}
      </ScrollView>
      <View
        style={[
          styles.controls,
          {
            right: insets.right + 20,
            bottom: insets.bottom + 22,
          },
        ]}
      >
        <IconButton
          iconName={themeMode === 'dark' ? 'sunny-outline' : 'moon-outline'}
          label={
            themeMode === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'
          }
          onPress={toggleTheme}
          disabled={!isThemeReady}
          primary
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, minHeight: 0 },
  header: { borderBottomWidth: 1, paddingBottom: 14 },
  scroll: { flex: 1 },
  content: { flexGrow: 1, justifyContent: 'center', paddingTop: 32, gap: 16 },
  controls: { position: 'absolute', pointerEvents: 'box-none' },
});
