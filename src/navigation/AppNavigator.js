import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../constants/theme';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import LanguageScreen from '../screens/LanguageScreen';
import CategoryScreen from '../screens/CategoryScreen';
import CodeDetailScreen from '../screens/CodeDetailScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PlatformsScreen from '../screens/PlatformsScreen';
import UIFrameworksScreen from '../screens/UIFrameworksScreen';
import LearningScreen from '../screens/LearningScreen';
import HintsScreen from '../screens/HintsScreen';
import SpecializedTopicsScreen from '../screens/SpecializedTopicsScreen';
import ResourcesScreen from '../screens/ResourcesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Custom Dark Theme
const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary,
    background: colors.background,
    card: colors.backgroundElevated,
    text: colors.text,
    border: colors.border,
  },
};

// Stack Navigator Options
const screenOptions = {
  headerStyle: {
    backgroundColor: colors.backgroundElevated,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  headerTintColor: colors.text,
  headerTitleStyle: {
    fontWeight: '600',
  },
};

// Main stack for Browse tab
function BrowseStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Lib of Dev 💻' }}
      />
      <Stack.Screen 
        name="Language" 
        component={LanguageScreen}
        options={({ route }) => ({ title: route.params?.languageName || 'Language' })}
      />
      <Stack.Screen 
        name="Category" 
        component={CategoryScreen}
        options={({ route }) => ({ title: route.params?.categoryName || 'Category' })}
      />
      <Stack.Screen 
        name="CodeDetail" 
        component={CodeDetailScreen}
        options={{ title: 'Code Reference' }}
      />
      <Stack.Screen 
        name="Platforms" 
        component={PlatformsScreen}
        options={{ title: '🚀 Platforms & Tools' }}
      />
      <Stack.Screen 
        name="UIFrameworks" 
        component={UIFrameworksScreen}
        options={{ title: '🎨 UI Frameworks' }}
      />
      <Stack.Screen 
        name="Learning" 
        component={LearningScreen}
        options={{ title: '📚 Learning Resources' }}
      />
      <Stack.Screen 
        name="Hints" 
        component={HintsScreen}
        options={{ title: '💡 Developer Hints' }}
      />
      <Stack.Screen 
        name="SpecializedTopics" 
        component={SpecializedTopicsScreen}
        options={{ title: '🔌 Specialized Topics' }}
      />
      <Stack.Screen 
        name="Resources" 
        component={ResourcesScreen}
        options={{ title: '🔗 Official Links' }}
      />
    </Stack.Navigator>
  );
}

// Main Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.backgroundElevated,
          borderTopColor: colors.border,
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen 
        name="Browse" 
        component={BrowseStack}
        options={{
          tabBarLabel: 'Browse',
          tabBarIcon: ({ color }) => '📚',
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => '🔍',
          headerShown: true,
          headerTitle: '🔍 Search',
          headerStyle: {
            backgroundColor: colors.backgroundElevated,
            borderBottomColor: colors.border,
          },
          headerTintColor: colors.text,
        }}
      />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => '⭐',
          headerShown: true,
          headerTitle: '⭐ Favorites',
          headerStyle: {
            backgroundColor: colors.backgroundElevated,
            borderBottomColor: colors.border,
          },
          headerTintColor: colors.text,
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => '⚙️',
          headerShown: true,
          headerTitle: '⚙️ Settings',
          headerStyle: {
            backgroundColor: colors.backgroundElevated,
            borderBottomColor: colors.border,
          },
          headerTintColor: colors.text,
        }}
      />
    </Tab.Navigator>
  );
}

// Root Navigator
export default function AppNavigator() {
  return (
    <NavigationContainer theme={CustomDarkTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
}
