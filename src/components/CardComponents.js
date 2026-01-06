import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

/**
 * Enhanced Card Component with variants
 */
export const CardComponent = ({ 
  children, 
  variant = 'default',
  style 
}) => {
  return (
    <View style={[
      styles.card,
      styles[`card${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
      style
    ]}>
      {children}
    </View>
  );
};

export const CardHeader = ({ children, style }) => (
  <View style={[styles.header, style]}>{children}</View>
);

export const CardTitle = ({ children, style }) => (
  <Text style={[styles.title, style]}>{children}</Text>
);

export const CardDescription = ({ children, style }) => (
  <Text style={[styles.description, style]}>{children}</Text>
);

export const CardContent = ({ children, style }) => (
  <View style={[styles.content, style]}>{children}</View>
);

export const CardFooter = ({ children, style }) => (
  <View style={[styles.footer, style]}>{children}</View>
);

/**
 * Interactive Card with Press
 */
export const InteractiveCard = ({ 
  children, 
  onPress,
  style 
}) => {
  return (
    <TouchableOpacity 
      style={[styles.card, styles.cardDefault, style]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
  },
  cardDefault: {
    backgroundColor: colors.backgroundElevated,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.medium,
  },
  cardElevated: {
    backgroundColor: colors.backgroundElevated,
    ...shadows.large,
  },
  cardOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardGhost: {
    backgroundColor: 'transparent',
  },
  header: {
    padding: spacing.lg,
    paddingBottom: spacing.md,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
  },
  content: {
    padding: spacing.lg,
    paddingTop: 0,
  },
  footer: {
    padding: spacing.lg,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
