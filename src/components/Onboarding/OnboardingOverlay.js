import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
} from 'react-native';
import { colors } from '../../constants/theme';
import { useOnboardingContext } from '../../context/OnboardingContext';
import { getScrollOffset, getScreenInfo } from '../../utils/responsiveHelper';
import OnboardingSpotlight from './OnboardingSpotlight';
import OnboardingTooltip from './OnboardingTooltip';
import { onboardingSteps } from '../../data/onboardingData';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

/**
 * OnboardingOverlay - Fully responsive with device-aware scrolling
 */
export default function OnboardingOverlay({
  onComplete,
  targetRefs = {},
  navigationRef,
}) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const spotlightYRef = useRef(0);
  const swipeXRef = useRef(0);
  const [screenDimensions, setScreenDimensions] = useState(getScreenInfo());
  const { screenScrollRefs, onboardingRefs } = useOnboardingContext();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const panResponderRef = useRef(null);

  // Update screen dimensions on rotation or resize
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', () => {
      setScreenDimensions(getScreenInfo());
    });
    return () => subscription.remove();
  }, []);

  // Complete onboarding
  const completeOnboarding = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    });
  };

  // Smart scroll to target - measures actual position and scrolls responsively
  const scrollToTarget = (step) => {
    try {
      const { navigationTarget } = step;
      if (!navigationTarget) return;

      // Only scroll for steps that have content to scroll to
      const scrollableSteps = ['quick-access', 'programming-languages', 'community', 'ai-response-modes'];
      if (!scrollableSteps.includes(step.id)) {
        return; // Don't scroll for steps without specific targets
      }

      const screenRefs = onboardingRefs[navigationTarget];
      const scrollRef = screenScrollRefs[navigationTarget];

      if (!screenRefs || !scrollRef || !scrollRef.current) return;

      // Determine which ref to scroll to based on step id
      let targetKey = null;
      switch (step.id) {
        case 'quick-access':
          targetKey = 'quickAccess';
          break;
        case 'programming-languages':
          targetKey = 'languages';
          break;
        case 'community':
          targetKey = 'community';
          break;
        case 'ai-response-modes':
          targetKey = 'responseModes';
          break;
        default:
          return;
      }

      if (targetKey && screenRefs[targetKey]) {
        // Measure actual component position on screen
        screenRefs[targetKey].current.measure((x, y, width, height, pageX, pageY) => {
          try {
            // Calculate responsive scroll offset
            const screen = getScreenInfo();
            const scrollPadding = screen.isSmallPhone ? 60 : screen.isTablet ? 120 : 80;
            const scrollOffset = Math.max(0, pageY - scrollPadding);

            // Scroll smoothly to this position
            scrollRef.current.scrollTo({
              y: scrollOffset,
              animated: true,
            });
          } catch (error) {
            console.log('Error calculating scroll position:', error);
          }
        });
      }
    } catch (error) {
      console.log('Error scrolling to target:', error);
    }
  };

  // Create pan responder for swipe gestures
  useEffect(() => {
    panResponderRef.current = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > 5 || Math.abs(gestureState.dy) > 5;
      },
      onPanResponderMove: (evt, { dx }) => {
        swipeXRef.current = dx;
      },
      onPanResponderRelease: (evt, { dx }) => {
        if (dx < -50) {
          // Swipe left - next
          if (currentStepIndex < onboardingSteps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
          } else {
            completeOnboarding();
          }
        } else if (dx > 50) {
          // Swipe right - previous
          if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1);
          }
        }
        swipeXRef.current = 0;
      },
    });
  }, [currentStepIndex]);

  // Initial setup and navigation
  useEffect(() => {
    const currentStep = onboardingSteps[currentStepIndex];
    if (currentStep.navigationTarget && navigationRef?.current) {
      navigationRef.current.navigate(currentStep.navigationTarget);
      // Scroll after navigation completes
      setTimeout(() => {
        scrollToTarget(currentStep);
      }, 350);
    }

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  // Handle step changes
  useEffect(() => {
    const currentStep = onboardingSteps[currentStepIndex];
    if (currentStep.navigationTarget && navigationRef?.current) {
      navigationRef.current.navigate(currentStep.navigationTarget);
      // Scroll after navigation completes
      setTimeout(() => {
        scrollToTarget(currentStep);
      }, 350);
    }
  }, [currentStepIndex]);

  const handleNext = () => {
    if (currentStepIndex < onboardingSteps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      completeOnboarding();
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleSkip = () => {
    completeOnboarding();
  };

  if (!isVisible) {
    return null;
  }

  const currentStep = onboardingSteps[currentStepIndex];
  const targetRef = targetRefs[currentStep.targetComponent];
  const hasTarget = currentStep.targetComponent && targetRef;

  // Responsive blur opacity
  const blurOpacity = screenDimensions.isSmallPhone ? 0.35 : screenDimensions.isTablet ? 0.45 : 0.4;

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: fadeAnim },
      ]}
      {...(panResponderRef.current?.panHandlers || {})}
    >
      {/* Lighter blur for steps without specific targets */}
      {!hasTarget && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: colors.background,
            opacity: 0.2,
          }}
        />
      )}

      {/* Status bar overlay */}
      <View
        style={{
          height: StatusBar.currentHeight || 20,
          backgroundColor: colors.background,
          opacity: blurOpacity,
        }}
      />

      {/* Spotlight - only show when there's a target */}
      {hasTarget && (
        <OnboardingSpotlight
          targetRef={targetRef}
          radius={70}
          padding={15}
          blurOpacity={blurOpacity}
          colors={colors}
        />
      )}

      {/* Tooltip with responsive positioning */}
      <OnboardingTooltip
        step={currentStep}
        currentStepIndex={currentStepIndex}
        totalSteps={onboardingSteps.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSkip={handleSkip}
        spotlightY={spotlightYRef.current}
      />

      {/* Swipe hint - responsive positioning */}
      <Animated.View
        style={[
          {
            position: 'absolute',
            bottom: screenDimensions.isSmallPhone ? 80 : 100,
            left: 0,
            right: 0,
            alignItems: 'center',
            backgroundColor: colors.backgroundElevated,
            paddingVertical: 8,
            paddingHorizontal: 16,
            marginHorizontal: screenDimensions.isSmallPhone ? 40 : 60,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: colors.border,
          },
          {
            opacity: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.8],
            }),
          },
        ]}
      >
        <Text style={[
          { textAlign: 'center', fontWeight: '600' },
          { fontSize: screenDimensions.isSmallPhone ? 11 : 13, color: colors.text }
        ]}>
          ← Swipe to navigate →
        </Text>
        <Text style={[
          { textAlign: 'center', marginTop: 2 },
          { fontSize: screenDimensions.isSmallPhone ? 9 : 11, color: colors.textMuted }
        ]}>
          Step {currentStepIndex + 1}/{onboardingSteps.length}
        </Text>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
    top: 0,
    left: 0,
    zIndex: 999,
    backgroundColor: 'transparent',
  },
});
