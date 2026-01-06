import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

/**
 * Alert Component - Multiple variants
 */
export const Alert = ({ 
  variant = 'info', 
  title, 
  description, 
  icon,
  style 
}) => {
  const variantStyles = {
    info: {
      background: 'rgba(59, 130, 246, 0.1)',
      border: colors.info,
      text: '#60A5FA',
      icon: 'ℹ️',
    },
    success: {
      background: 'rgba(34, 197, 94, 0.1)',
      border: colors.success,
      text: '#4ADE80',
      icon: '✓',
    },
    warning: {
      background: 'rgba(245, 158, 11, 0.1)',
      border: colors.warning,
      text: '#FBBF24',
      icon: '⚠️',
    },
    error: {
      background: 'rgba(239, 68, 68, 0.1)',
      border: colors.error,
      text: '#F87171',
      icon: '✕',
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <View style={[
      styles.container,
      { 
        backgroundColor: currentVariant.background,
        borderLeftColor: currentVariant.border,
      },
      style
    ]}>
      <Text style={styles.icon}>{icon || currentVariant.icon}</Text>
      <View style={styles.content}>
        {title && (
          <Text style={[styles.title, { color: currentVariant.text }]}>
            {title}
          </Text>
        )}
        {description && (
          <Text style={styles.description}>{description}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: spacing.md,
    borderRadius: borderRadius.md,
    borderLeftWidth: 4,
    gap: spacing.sm,
  },
  icon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
