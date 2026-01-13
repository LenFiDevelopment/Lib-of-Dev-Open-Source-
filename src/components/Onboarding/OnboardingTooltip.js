import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../../constants/theme';
import {
  calculateSmartTooltipPosition,
  calculateTooltipPosition,
  calculateInfoStepPosition,
  getTooltipDimensions,
  getResponsiveFontSize,
  getResponsiveSpacing,
  getScreenInfo,
} from '../../utils/responsiveHelper';

/**
 * OnboardingTooltip - Fully responsive with smart positioning to avoid overlaps
 */
export default function OnboardingTooltip({
  step,
  currentStepIndex,
  totalSteps,
  onNext,
  onPrevious,
  onSkip,
  spotlightY,
}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const [dimensions, setDimensions] = useState(getTooltipDimensions());
  const [screenInfo, setScreenInfo] = useState(getScreenInfo());

  useEffect(() => {
    // Recalculate on screen changes (rotation, etc)
    const subscription = Dimensions.addEventListener('change', () => {
      setDimensions(getTooltipDimensions());
      setScreenInfo(getScreenInfo());
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, [step, fadeAnim, slideAnim]);

  // Use smart positioning strategy for known problematic steps
  let tooltipPosition = calculateSmartTooltipPosition(step.id, spotlightY);
  
  const progressPercentage = ((currentStepIndex + 1) / totalSteps) * 100;
  const fontSize = getResponsiveFontSize();
  const spacing = getResponsiveSpacing();

  // Generate responsive styles
  const responsiveStyles = {
    title: {
      fontSize: fontSize.title,
      fontWeight: 'bold',
      color: colors.text,
    },
    description: {
      fontSize: fontSize.description,
      color: colors.textSecondary,
      lineHeight: fontSize.description + 5,
    },
    button: {
      fontSize: fontSize.button,
    },
  };

  return (
    <Animated.View
      style={[
        styles.container,
        tooltipPosition.top !== undefined ? { top: tooltipPosition.top } : { bottom: tooltipPosition.bottom },
        {
          maxWidth: dimensions.maxWidth,
          maxHeight: dimensions.maxHeight,
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <View style={[styles.card, { padding: dimensions.padding }]}>
        {/* Compact Header */}
        <View style={[styles.header, { marginBottom: spacing.margin }]}>
          <Text style={styles.stepIcon}>{step.icon}</Text>
          <View style={styles.headerText}>
            <Text style={[styles.title, responsiveStyles.title]} numberOfLines={2}>
              {step.title}
            </Text>
          </View>
          <Text style={[styles.stepCounter, { fontSize: fontSize.description - 1 }]}>
            {currentStepIndex + 1}/{totalSteps}
          </Text>
        </View>

        {/* Minimal progress bar */}
        <View style={[styles.progressBarContainer, { marginBottom: spacing.margin }]}>
          <Animated.View
            style={[
              styles.progressBar,
              { width: `${progressPercentage}%` },
            ]}
          />
        </View>

        {/* Responsive description */}
        <Text
          style={[styles.description, responsiveStyles.description]}
          numberOfLines={screenInfo.isTablet ? 6 : 5}
        >
          {step.description}
        </Text>

        {/* Highlight indicator if provided */}
        {step.highlightText && (
          <View style={[styles.highlightBox, { marginVertical: spacing.margin }]}>
            <Text style={[styles.highlightText, { fontSize: fontSize.description - 1 }]}>
              {step.highlightText}
            </Text>
          </View>
        )}

        {/* Responsive Navigation buttons */}
        <View style={[styles.buttonContainer, { gap: spacing.gap, marginBottom: spacing.margin }]}>
          {currentStepIndex > 0 && (
            <TouchableOpacity
              style={[styles.button, styles.buttonSecondary]}
              onPress={onPrevious}
            >
              <Text style={[styles.buttonTextSecondary, responsiveStyles.button]}>←</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[styles.button, styles.buttonSkip]}
            onPress={onSkip}
          >
            <Text style={[styles.buttonTextSkip, responsiveStyles.button]}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            onPress={onNext}
          >
            <Text style={[styles.buttonTextPrimary, responsiveStyles.button]}>
              {currentStepIndex === totalSteps - 1 ? '✓' : '→'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Minimal dot indicators */}
        <View style={[styles.dotsContainer, { gap: dimensions.padding / 4 }]}>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentStepIndex ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 12,
    right: 12,
    alignSelf: 'center',
    zIndex: 1000,
  },
  card: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.large,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepIcon: {
    fontSize: 22,
    minWidth: 24,
  },
  headerText: {
    flex: 1,
  },
  title: {
    marginBottom: 2,
  },
  stepCounter: {
    color: colors.textMuted,
    fontWeight: '600',
    minWidth: 32,
    textAlign: 'right',
  },
  progressBarContainer: {
    height: 2,
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
  },
  description: {
    marginBottom: 8,
  },
  highlightBox: {
    backgroundColor: colors.primary + '15',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: borderRadius.sm,
  },
  highlightText: {
    color: colors.primary,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 32,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    flex: 1.3,
  },
  buttonTextPrimary: {
    color: colors.buttonText,
    fontWeight: '700',
  },
  buttonSecondary: {
    backgroundColor: colors.backgroundCard,
    borderWidth: 1,
    borderColor: colors.border,
  },
  buttonTextSecondary: {
    color: colors.text,
    fontWeight: '700',
  },
  buttonSkip: {
    backgroundColor: 'transparent',
  },
  buttonTextSkip: {
    color: colors.textMuted,
    fontWeight: '500',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  dotActive: {
    backgroundColor: colors.primary,
    width: 16,
  },
  dotInactive: {
    backgroundColor: colors.border,
  },
});
