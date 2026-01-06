import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { colors, spacing, borderRadius } from '../constants/theme';

/**
 * Switch Component - iOS/Material style toggle
 */
export const Switch = ({ value, onValueChange, style }) => {
  const [animation] = useState(new Animated.Value(value ? 1 : 0));

  const toggleSwitch = () => {
    const newValue = !value;
    onValueChange?.(newValue);
    
    Animated.spring(animation, {
      toValue: newValue ? 1 : 0,
      useNativeDriver: true,
    }).start();
  };

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.border, colors.primary],
  });

  return (
    <TouchableOpacity
      onPress={toggleSwitch}
      activeOpacity={0.8}
      style={style}
    >
      <Animated.View style={[styles.switchTrack, { backgroundColor }]}>
        <Animated.View
          style={[
            styles.switchThumb,
            {
              transform: [{ translateX }],
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

/**
 * Checkbox Component
 */
export const Checkbox = ({ checked, onChange, label, style }) => {
  return (
    <TouchableOpacity
      style={[styles.checkboxContainer, style]}
      onPress={() => onChange?.(!checked)}
      activeOpacity={0.7}
    >
      <View style={[
        styles.checkbox,
        checked && styles.checkboxChecked
      ]}>
        {checked && <Text style={styles.checkboxIcon}>✓</Text>}
      </View>
      {label && <Text style={styles.checkboxLabel}>{label}</Text>}
    </TouchableOpacity>
  );
};

/**
 * Radio Button Component
 */
export const Radio = ({ selected, onPress, label, style }) => {
  return (
    <TouchableOpacity
      style={[styles.radioContainer, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[
        styles.radioOuter,
        selected && styles.radioOuterSelected
      ]}>
        {selected && <View style={styles.radioInner} />}
      </View>
      {label && <Text style={styles.radioLabel}>{label}</Text>}
    </TouchableOpacity>
  );
};

/**
 * Radio Group Component
 */
export const RadioGroup = ({ options, value, onChange, style }) => {
  return (
    <View style={[styles.radioGroup, style]}>
      {options.map((option) => (
        <Radio
          key={option.value}
          selected={value === option.value}
          onPress={() => onChange(option.value)}
          label={option.label}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  // Switch
  switchTrack: {
    width: 50,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
  },
  switchThumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.buttonText,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  
  // Checkbox
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: borderRadius.sm,
    borderWidth: 2,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxIcon: {
    color: colors.buttonText,
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 14,
    color: colors.text,
  },
  
  // Radio
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.xs,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterSelected: {
    borderColor: colors.primary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  radioLabel: {
    fontSize: 14,
    color: colors.text,
  },
  radioGroup: {
    gap: spacing.xs,
  },
});
