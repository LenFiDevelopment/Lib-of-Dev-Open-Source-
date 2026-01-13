import React, { createContext, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onboardingConfig } from '../data/onboardingData';

export const OnboardingContext = createContext();

export function OnboardingProvider({ children }) {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [screenScrollRefs, setScreenScrollRefs] = useState({});
  const [onboardingRefs, setOnboardingRefsState] = useState({});

  // Check onboarding status on app start
  const checkOnboardingStatus = useCallback(async () => {
    try {
      const [completed, storedVersion] = await Promise.all([
        AsyncStorage.getItem(onboardingConfig.storageKey),
        AsyncStorage.getItem(onboardingConfig.versionKey),
      ]);

      const isNewVersion = storedVersion !== onboardingConfig.currentVersion;
      const shouldShowOnboarding = !completed || isNewVersion;

      setHasCompletedOnboarding(!shouldShowOnboarding);
      setShowOnboarding(shouldShowOnboarding);

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
  }, []);

  // Call checkOnboardingStatus on mount
  useEffect(() => {
    checkOnboardingStatus();
  }, [checkOnboardingStatus]);

  // Mark onboarding as completed
  const completeOnboarding = useCallback(async () => {
    try {
      await AsyncStorage.setItem(onboardingConfig.storageKey, 'true');
      await AsyncStorage.setItem(
        onboardingConfig.versionKey,
        onboardingConfig.currentVersion
      );
      setHasCompletedOnboarding(true);
      setShowOnboarding(false);
    } catch (error) {
      console.error('Error completing onboarding:', error);
    }
  }, []);

  // Reset and restart onboarding immediately
  const restartOnboarding = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(onboardingConfig.storageKey);
      await AsyncStorage.removeItem(onboardingConfig.stepStorageKey);
      setHasCompletedOnboarding(false);
      setShowOnboarding(true); // Show immediately
    } catch (error) {
      console.error('Error restarting onboarding:', error);
    }
  }, []);

  // Hide onboarding overlay
  const hideOnboarding = useCallback(() => {
    setShowOnboarding(false);
  }, []);

  // Store scroll ref for a screen
  const setScreenScrollRef = useCallback((screenName, ref) => {
    setScreenScrollRefs(prev => ({
      ...prev,
      [screenName]: ref,
    }));
  }, []);

  // Store refs for onboarding elements in a screen
  const setOnboardingRefs = useCallback((screenName, refs) => {
    setOnboardingRefsState(prev => ({
      ...prev,
      [screenName]: refs,
    }));
  }, []);

  const value = {
    showOnboarding,
    setShowOnboarding,
    hasCompletedOnboarding,
    isLoading,
    checkOnboardingStatus,
    completeOnboarding,
    restartOnboarding,
    hideOnboarding,
    screenScrollRefs,
    setScreenScrollRef,
    onboardingRefs,
    setOnboardingRefs,
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

// Hook to use onboarding context
export function useOnboardingContext() {
  const context = React.useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboardingContext must be used within OnboardingProvider');
  }
  return context;
}
