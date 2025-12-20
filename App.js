import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationBar } from 'expo-navigation-bar';
import { Platform } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import './src/i18n';

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setVisibilityAsync('hidden');
      NavigationBar.setBehaviorAsync('overlay-swipe');
    }
  }, []);

  return (
    <>
      <AppNavigator />
      <StatusBar style="light" hidden={false} />
    </>
  );
}
