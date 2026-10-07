// Cambia varios estilos del saludo dentro del mismo contenedor centrado.
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '../components/atoms/AppText';
import { PageTemplate } from '../components/templates/PageTemplate';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { useTheme } from '../hooks/useTheme';
import { GREETING_STYLES } from '../styles/greeting';

export function HomePage() {
  const [styleIndex, setStyleIndex] = useState(0);
  const { isMobile } = useBreakpoint();
  const { theme } = useTheme();
  const selectedStyle = GREETING_STYLES[styleIndex];
  const fontSize = isMobile
    ? selectedStyle.mobileSize
    : selectedStyle.desktopSize;
  const titleStyle = [
    styles.title,
    selectedStyle.textStyle,
    { fontSize, lineHeight: Math.round(fontSize * 1.15) },
  ];

  return (
    <PageTemplate>
      <View style={styles.content}>
        <View style={[styles.greeting, { minHeight: isMobile ? 180 : 260 }]}>
          <AppText
            accessibilityRole="header"
            accessibilityLabel="Hola Mundo"
            style={titleStyle}
          >
            <AppText tone={selectedStyle.firstTone} style={titleStyle}>
              Hola{'\n'}
            </AppText>
            <AppText tone={selectedStyle.secondTone} style={titleStyle}>
              Mundo.
            </AppText>
          </AppText>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cambiar estilos"
          onPress={() =>
            setStyleIndex(
              (currentIndex) => (currentIndex + 1) % GREETING_STYLES.length,
            )
          }
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: theme.colors.primary,
              opacity: pressed ? 0.8 : 1,
            },
          ]}
        >
          <AppText
            style={[styles.buttonText, { color: theme.colors.onPrimary }]}
          >
            Cambiar estilos
          </AppText>
        </Pressable>
      </View>
    </PageTemplate>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    maxWidth: 1000,
    alignSelf: 'center',
    alignItems: 'center',
    gap: 28,
  },
  greeting: { width: '100%', alignItems: 'center', justifyContent: 'center' },
  title: { textAlign: 'center' },
  button: {
    minHeight: 50,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { fontSize: 15, lineHeight: 24, fontWeight: '700' },
});
