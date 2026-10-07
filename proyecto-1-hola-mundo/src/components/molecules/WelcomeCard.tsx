// src/components/molecules/WelcomeCard.tsx
// Tarjeta informativa reutilizable con icono, categoría y número de sección.
import Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';
import { StyleSheet, View } from 'react-native';

import { useTheme } from '../../hooks/useTheme';
import { AppText } from '../atoms/AppText';

interface WelcomeCardProps {
  title: string;
  description: string;
  iconName?: ComponentProps<typeof Ionicons>['name'];
  number?: string;
  category?: string;
}

export function WelcomeCard({
  title,
  description,
  iconName = 'sparkles-outline',
  number = '01',
  category = 'EXPERIENCIA',
}: WelcomeCardProps) {
  const { theme } = useTheme();
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
        },
      ]}
    >
      <View style={styles.top}>
        <View
          style={[styles.icon, { backgroundColor: theme.colors.primarySoft }]}
        >
          <Ionicons name={iconName} color={theme.colors.primary} size={25} />
        </View>
        <AppText variant="eyebrow" tone="muted">
          {number}
        </AppText>
      </View>
      <AppText variant="eyebrow" tone="accent">
        {category}
      </AppText>
      <AppText variant="subtitle" accessibilityRole="header">
        {title}
      </AppText>
      <AppText tone="muted" style={styles.description}>
        {description}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    padding: 26,
    gap: 10,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 17,
  },
  icon: {
    width: 49,
    height: 49,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: { fontSize: 14, lineHeight: 24 },
});
