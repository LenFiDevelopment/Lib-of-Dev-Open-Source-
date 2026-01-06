import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius } from '../constants/theme';

/**
 * Badge Component - Multiple variants and sizes
 */
export const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'medium',
  style 
}) => {
  return (
    <View style={[
      styles.badge,
      styles[`badge${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
      styles[`badge${size.charAt(0).toUpperCase()}${size.slice(1)}`],
      style
    ]}>
      <Text style={[
        styles.text,
        styles[`text${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
        styles[`text${size.charAt(0).toUpperCase()}${size.slice(1)}`],
      ]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: borderRadius.full,
    borderWidth: 1,
  },
  
  // Variants
  badgeDefault: {
    backgroundColor: colors.backgroundElevated,
    borderColor: colors.border,
  },
  badgePrimary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  badgeSecondary: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  badgeSuccess: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  badgeWarning: {
    backgroundColor: colors.warning,
    borderColor: colors.warning,
  },
  badgeError: {
    backgroundColor: colors.error,
    borderColor: colors.error,
  },
  badgeOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },
  
  // Sizes
  badgeSmall: {
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
  },
  badgeMedium: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  badgeLarge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  
  // Text Styles
  text: {
    fontWeight: '600',
  },
  textDefault: {
    color: colors.text,
  },
  textPrimary: {
    color: colors.buttonText,
  },
  textSecondary: {
    color: colors.buttonText,
  },
  textSuccess: {
    color: colors.buttonText,
  },
  textWarning: {
    color: colors.background,
  },
  textError: {
    color: colors.buttonText,
  },
  textOutline: {
    color: colors.text,
  },
  
  textSmall: {
    fontSize: 11,
  },
  textMedium: {
    fontSize: 12,
  },
  textLarge: {
    fontSize: 14,
  },
});
