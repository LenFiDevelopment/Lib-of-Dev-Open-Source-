import { useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onboardingConfig } from '../data/onboardingData';

/**
 * useOnboarding Hook - Manages onboarding state and persistence
 * Handles:
 * - First-time launch detection
 * - Resume from last step
 * - Skip preference
 * - Version tracking for app updates
 */
export function useOnboarding() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(null);
  const [lastStep, setLastStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Check onboarding status on app start
  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const [completed, step, storedVersion] = await Promise.all([
        AsyncStorage.getItem(onboardingConfig.storageKey),
        AsyncStorage.getItem(onboardingConfig.stepStorageKey),
        AsyncStorage.getItem(onboardingConfig.versionKey),
      ]);

      const isNewVersion = storedVersion !== onboardingConfig.currentVersion;

      // Show onboarding if:
      // 1. First time launch (no completion record)
      // 2. New app version (version mismatch)
      const shouldShowOnboarding = !completed || isNewVersion;

      setHasCompletedOnboarding(!shouldShowOnboarding);
      setLastStep(step ? parseInt(step, 10) : 0);

      // If new version, update stored version
      if (isNewVersion) {
        await AsyncStorage.setItem(
          onboardingConfig.versionKey,
          onboardingConfig.currentVersion
        );
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      setIsLoading(false);
    }
  };

  // Mark onboarding as completed
  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem(onboardingConfig.storageKey, 'true');
      await AsyncStorage.setItem(
        onboardingConfig.versionKey,
        onboardingConfig.currentVersion
      );
      setHasCompletedOnboarding(true);
    } catch (error) {
      console.error('Error completing onboarding:', error);
    }
  };

  // Reset onboarding (for manual restart from settings)
  const resetOnboarding = async () => {
    try {
      await AsyncStorage.removeItem(onboardingConfig.storageKey);
      await AsyncStorage.removeItem(onboardingConfig.stepStorageKey);
      setHasCompletedOnboarding(false);
      setLastStep(0);
    } catch (error) {
      console.error('Error resetting onboarding:', error);
    }
  };

  // Save current step for resume
  const saveCurrentStep = async (stepIndex) => {
    try {
      await AsyncStorage.setItem(
        onboardingConfig.stepStorageKey,
        String(stepIndex)
      );
      setLastStep(stepIndex);
    } catch (error) {
      console.error('Error saving current step:', error);
    }
  };

  return {
    hasCompletedOnboarding,
    isLoading,
    lastStep,
    completeOnboarding,
    resetOnboarding,
    saveCurrentStep,
  };
}
