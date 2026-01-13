import React, { useEffect, useRef } from 'react';
import { View, Animated, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

/**
 * OnboardingSpotlight - Creates a circular or rectangular highlight
 * with blur effect around a target component
 */
export default function OnboardingSpotlight({
  targetRef,
  radius = 60,
  padding = 10,
  blurOpacity = 0.7,
  colors,
}) {
  const spotlightX = useRef(new Animated.Value(0)).current;
  const spotlightY = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Calculate spotlight position from ref using measureInWindow for accuracy
    if (targetRef && targetRef.current) {
      // Small delay to ensure element is fully rendered in final position
      setTimeout(() => {
        if (targetRef.current) {
          // measureInWindow gives coordinates relative to the device window
          targetRef.current.measureInWindow((x, y, width, height) => {
            console.log(`[Spotlight] Element measured at:`, {
              x: x.toFixed(2),
              y: y.toFixed(2),
              width: width.toFixed(2),
              height: height.toFixed(2)
            });

            const centerX = x + width / 2;
            const centerY = y + height / 2;

            console.log(`[Spotlight] Spotlight center:`, {
              centerX: centerX.toFixed(2),
              centerY: centerY.toFixed(2)
            });

            Animated.parallel([
              Animated.timing(spotlightX, {
                toValue: centerX,
                duration: 400,
                useNativeDriver: false,
              }),
              Animated.timing(spotlightY, {
                toValue: centerY,
                duration: 400,
                useNativeDriver: false,
              }),
              Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: false,
              }),
            ]).start();

            // Start pulse animation
            startPulse();
          });
        }
      }, 200); // Small delay for final positioning
    } else {
      // Center spotlight if no target
      Animated.parallel([
        Animated.timing(spotlightX, {
          toValue: screenWidth / 2,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(spotlightY, {
          toValue: screenHeight / 2,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: false,
        }),
      ]).start();

      startPulse();
    }
  }, [targetRef, spotlightX, spotlightY, scaleAnim]);

  const startPulse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  const pulseRadius = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [radius, radius + 20],
  });

  const pulseOpacity = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.4, 0],
  });

  return (
    <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {/* Blur overlay background */}
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: colors.background,
          opacity: blurOpacity,
        }}
      />

      {/* Pulse ring animation */}
      <Animated.View
        style={[
          {
            position: 'absolute',
            borderRadius: 9999,
            borderWidth: 2,
            borderColor: colors.primary,
          },
          {
            width: pulseRadius.interpolate({
              inputRange: [radius, radius + 20],
              outputRange: [radius * 2, (radius + 20) * 2],
            }),
            height: pulseRadius.interpolate({
              inputRange: [radius, radius + 20],
              outputRange: [radius * 2, (radius + 20) * 2],
            }),
            left: spotlightX.interpolate({
              inputRange: [0, screenWidth],
              outputRange: [0, screenWidth],
            }),
            top: spotlightY,
            opacity: pulseOpacity,
            transform: [
              {
                translateX: pulseRadius.interpolate({
                  inputRange: [radius, radius + 20],
                  outputRange: [-radius, -(radius + 20)],
                }),
              },
              {
                translateY: pulseRadius.interpolate({
                  inputRange: [radius, radius + 20],
                  outputRange: [-radius, -(radius + 20)],
                }),
              },
            ],
          },
        ]}
      />

      {/* Clear spotlight circle */}
      <Animated.View
        style={[
          {
            position: 'absolute',
            borderRadius: 9999,
            backgroundColor: 'transparent',
            borderWidth: 3,
            borderColor: colors.primary,
          },
          {
            width: Animated.multiply(scaleAnim, radius * 2),
            height: Animated.multiply(scaleAnim, radius * 2),
            left: spotlightX,
            top: spotlightY,
            transform: [
              { translateX: Animated.multiply(scaleAnim, -radius) },
              { translateY: Animated.multiply(scaleAnim, -radius) },
            ],
          },
        ]}
      />

      {/* Glow effect inner circle */}
      <Animated.View
        style={[
          {
            position: 'absolute',
            borderRadius: 9999,
            backgroundColor: colors.primary,
            opacity: 0.05,
          },
          {
            width: Animated.multiply(scaleAnim, radius * 2),
            height: Animated.multiply(scaleAnim, radius * 2),
            left: spotlightX,
            top: spotlightY,
            transform: [
              { translateX: Animated.multiply(scaleAnim, -radius) },
              { translateY: Animated.multiply(scaleAnim, -radius) },
            ],
          },
        ]}
      />
    </View>
  );
}
