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
 * OnboardingOverlay - Professional scroll and spotlight positioning system
 */
export default function OnboardingOverlay({
  onComplete,
  targetRefs = {},
  navigationRef,
}) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [spotlightReady, setSpotlightReady] = useState(false);
  const spotlightYRef = useRef(0);
  const swipeXRef = useRef(0);
  const [screenDimensions, setScreenDimensions] = useState(getScreenInfo());
  const { screenScrollRefs, onboardingRefs } = useOnboardingContext();
  const scrollTimeoutRef = useRef(null);

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

  // Professional scroll and positioning system with logging
  const scrollToTargetAndPrepareSpotlight = (step, callback) => {
    try {
      // Reset spotlight state
      setSpotlightReady(false);

      const { navigationTarget, id } = step;
      if (!navigationTarget) {
        // No scroll needed, spotlight ready immediately
        setSpotlightReady(true);
        if (callback) callback();
        return;
      }

      // Only scroll for steps that have content to scroll to
      const scrollableSteps = ['quick-access', 'programming-languages', 'community', 'ai-response-modes'];
      if (!scrollableSteps.includes(id)) {
        // No scroll needed, spotlight ready immediately
        setSpotlightReady(true);
        if (callback) callback();
        return;
      }

      const screenRefs = onboardingRefs[navigationTarget];
      const scrollRef = screenScrollRefs[navigationTarget];

      if (!screenRefs || !scrollRef || !scrollRef.current) {
        // Missing refs, spotlight ready anyway
        console.warn(`[Onboarding] Missing refs for ${id}`);
        setSpotlightReady(true);
        if (callback) callback();
        return;
      }

      // Determine which ref to scroll to
      let targetKey = null;
      switch (id) {
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
          setSpotlightReady(true);
          if (callback) callback();
          return;
      }

      if (targetKey && screenRefs[targetKey] && screenRefs[targetKey].current) {
        // Use measureInWindow for accurate screen coordinates
        screenRefs[targetKey].current.measureInWindow((x, y, width, height) => {
          try {
            const screen = getScreenInfo();
            const scrollPadding = screen.isSmallPhone ? 80 : screen.isTablet ? 140 : 100;
            
            // Calculate how much we need to scroll
            // y is already relative to window, so we calculate offset from current scroll position
            const scrollOffset = Math.max(0, y - scrollPadding);

            console.log(`[Onboarding] Step: ${id}`);
            console.log(`[Onboarding] Target element Y position: ${y.toFixed(2)}`);
            console.log(`[Onboarding] Scrolling to offset: ${scrollOffset.toFixed(2)}`);

            // Perform the scroll
            scrollRef.current.scrollTo({
              y: scrollOffset,
              animated: true,
            });

            // Wait for scroll animation to complete before enabling spotlight
            // ScrollView animations typically take 300-500ms
            if (scrollTimeoutRef.current) {
              clearTimeout(scrollTimeoutRef.current);
            }

            scrollTimeoutRef.current = setTimeout(() => {
              console.log(`[Onboarding] Scroll complete for ${id}, spotlight ready`);
              setSpotlightReady(true);
              if (callback) callback();
            }, 700); // Generous delay for scroll to complete

          } catch (error) {
            console.error('[Onboarding] Error calculating scroll position:', error);
            setSpotlightReady(true);
            if (callback) callback();
          }
        });
      } else {
        // Target ref not available, spotlight ready anyway
        console.warn(`[Onboarding] Target ref ${targetKey} not available`);
        setSpotlightReady(true);
        if (callback) callback();
      }
    } catch (error) {
      console.error('[Onboarding] Error in scrollToTargetAndPrepareSpotlight:', error);
      setSpotlightReady(true);
      if (callback) callback();
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
    
    console.log(`[Onboarding] Initial step: ${currentStep.id}`);
    
    if (currentStep.navigationTarget && navigationRef?.current) {
      navigationRef.current.navigate(currentStep.navigationTarget);
      
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToTargetAndPrepareSpotlight(currentStep);
      }, 400); // Navigation transition time
    } else {
      // No navigation needed, spotlight ready immediately
      setSpotlightReady(true);
    }

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Handle step changes
  useEffect(() => {
    if (currentStepIndex === 0) return; // Skip initial render (handled above)
    
    const currentStep = onboardingSteps[currentStepIndex];
    
    console.log(`[Onboarding] Step changed to: ${currentStep.id}`);
    
    if (currentStep.navigationTarget && navigationRef?.current) {
      navigationRef.current.navigate(currentStep.navigationTarget);
      
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToTargetAndPrepareSpotlight(currentStep);
      }, 400); // Navigation transition time
    } else {
      // No navigation needed, spotlight ready immediately
      setSpotlightReady(true);
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

      {/* Spotlight - only show when ready and there's a target */}
      {hasTarget && spotlightReady && (
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
