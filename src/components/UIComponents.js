import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius } from '../constants/theme';

/**
 * Skeleton Loader Component for loading states
 */
export const Skeleton = ({ 
  width = '100%', 
  height = 20, 
  style,
  variant = 'text' 
}) => {
  const variantStyles = {
    text: { borderRadius: borderRadius.sm },
    circular: { borderRadius: borderRadius.full },
    rectangular: { borderRadius: borderRadius.md },
  };

  return (
    <View 
      style={[
        styles.skeleton,
        variantStyles[variant],
        { width, height },
        style
      ]} 
    />
  );
};

/**
 * Avatar Component
 */
export const Avatar = ({ 
  size = 40, 
  label, 
  style 
}) => {
  const initials = label
    ?.split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <View style={[
      styles.avatar,
      { width: size, height: size, borderRadius: size / 2 },
      style
    ]}>
      <Text style={[styles.avatarText, { fontSize: size * 0.4 }]}>
        {initials || '?'}
      </Text>
    </View>
  );
};

/**
 * Divider Component
 */
export const Divider = ({ style, orientation = 'horizontal' }) => {
  return (
    <View style={[
      styles.divider,
      orientation === 'horizontal' ? styles.dividerHorizontal : styles.dividerVertical,
      style
    ]} />
  );
};

/**
 * Progress Bar Component
 */
export const Progress = ({ 
  value = 0, 
  max = 100, 
  style,
  color = colors.primary 
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <View style={[styles.progressContainer, style]}>
      <View 
        style={[
          styles.progressBar,
          { width: `${percentage}%`, backgroundColor: color }
        ]} 
      />
    </View>
  );
};

/**
 * Chip Component (like Material Design)
 */
export const Chip = ({ 
  label, 
  icon, 
  onPress,
  variant = 'filled',
  style 
}) => {
  return (
    <View style={[
      styles.chip,
      variant === 'outlined' ? styles.chipOutlined : styles.chipFilled,
      style
    ]}>
      {icon && <Text style={styles.chipIcon}>{icon}</Text>}
      <Text style={[
        styles.chipLabel,
        variant === 'outlined' && styles.chipLabelOutlined
      ]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Skeleton
  skeleton: {
    backgroundColor: colors.backgroundElevated,
    opacity: 0.7,
  },
  
  // Avatar
  avatar: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: colors.buttonText,
    fontWeight: 'bold',
  },
  
  // Divider
  divider: {
    backgroundColor: colors.border,
  },
  dividerHorizontal: {
    height: 1,
    width: '100%',
    marginVertical: spacing.md,
  },
  dividerVertical: {
    width: 1,
    height: '100%',
    marginHorizontal: spacing.md,
  },
  
  // Progress
  progressContainer: {
    height: 8,
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: borderRadius.full,
  },
  
  // Chip
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    gap: spacing.xs,
  },
  chipFilled: {
    backgroundColor: colors.backgroundElevated,
  },
  chipOutlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipIcon: {
    fontSize: 16,
  },
  chipLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.text,
  },
  chipLabelOutlined: {
    color: colors.textSecondary,
  },
});
