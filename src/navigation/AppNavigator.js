import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
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
import AskAIScreen from '../screens/AskAIScreen';
import TutorialsScreen from '../screens/TutorialsScreen';
import TutorialDetailScreen from '../screens/TutorialDetailScreen';
import ErrorSolutionsScreen from '../screens/ErrorSolutionsScreen';
import ToolsScreen from '../screens/ToolsScreen';
import ToolDetailScreen from '../screens/ToolDetailScreen';
import ComponentsScreen from '../screens/ComponentsScreen';
import AdvancedComponentsScreen from '../screens/AdvancedComponentsScreen';
import LanguageLearningPathScreen from '../screens/LanguageLearningPathScreen';
import CertificationsScreen from '../screens/CertificationsScreen';

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
  const { t } = useTranslation();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: `💻 ${t('home.title')}` }}
      />
      <Stack.Screen 
        name="Language" 
        component={LanguageScreen}
        options={({ route }) => ({ title: route.params?.languageName || t('languages.javascript') })}
      />
      <Stack.Screen 
        name="Category" 
        component={CategoryScreen}
        options={({ route }) => ({ title: route.params?.categoryName || t('categories.basics') })}
      />
      <Stack.Screen 
        name="CodeDetail" 
        component={CodeDetailScreen}
        options={{ title: t('codeDetail.example') }}
      />
      <Stack.Screen 
        name="Platforms" 
        component={PlatformsScreen}
        options={{ title: `🚀 ${t('platforms.title')}` }}
      />
      <Stack.Screen 
        name="UIFrameworks" 
        component={UIFrameworksScreen}
        options={{ title: `🎨 ${t('uiFrameworks.title')}` }}
      />
      <Stack.Screen 
        name="Learning" 
        component={LearningScreen}
        options={{ title: `📚 ${t('learning.title')}` }}
      />
      <Stack.Screen 
        name="Hints" 
        component={HintsScreen}
        options={{ title: `💡 ${t('hints.title')}` }}
      />
      <Stack.Screen 
        name="SpecializedTopics" 
        component={SpecializedTopicsScreen}
        options={{ title: `🔌 ${t('specializedTopics.title')}` }}
      />
      <Stack.Screen 
        name="Resources" 
        component={ResourcesScreen}
        options={{ title: `🔗 ${t('resources.title')}` }}
      />
      <Stack.Screen 
        name="Certifications" 
        component={CertificationsScreen}
        options={{ title: '🎓 IT Certifications' }}
      />
      <Stack.Screen 
        name="LanguageLearningPath" 
        component={LanguageLearningPathScreen}
        options={({ route }) => ({ title: `🗺️ ${route.params?.languageName || 'Learning Path'}` })}
      />
      <Stack.Screen 
        name="Tutorials" 
        component={TutorialsScreen}
        options={({ route }) => ({ title: `📚 ${route.params?.languageName || 'Tutorials'}` })}
      />
      <Stack.Screen 
        name="TutorialDetail" 
        component={TutorialDetailScreen}
        options={{ title: '📖 Tutorial' }}
      />
      <Stack.Screen 
        name="ErrorSolutions" 
        component={ErrorSolutionsScreen}
        options={({ route }) => ({ title: `⚠️ ${route.params?.languageName || 'Error'} - Solutions` })}
      />
      <Stack.Screen 
        name="Tools" 
        component={ToolsScreen}
        options={{ title: '🛠️ Developer Tools' }}
      />
      <Stack.Screen 
        name="ToolDetail" 
        component={ToolDetailScreen}
        options={{ title: 'Tool Details' }}
      />
      <Stack.Screen 
        name="Components" 
        component={ComponentsScreen}
        options={{ title: '🎨 Components' }}
      />
      <Stack.Screen 
        name="AdvancedComponents" 
        component={AdvancedComponentsScreen}
        options={{ title: '🚀 Advanced Components' }}
      />
    </Stack.Navigator>
  );
}

// Main Tab Navigator
function TabNavigator() {
  const { t } = useTranslation();
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
        options={({ route }) => ({
          tabBarLabel: t('navigation.home'),
          tabBarIcon: ({ color, size = 24 }) => (
            <Text style={{ fontSize: size, color }}>📚</Text>
          ),
          tabBarStyle: ((route) => {
            const routeName = route.state
              ? route.state.routes[route.state.index].name
              : route.name;
            // Always show tab bar
            return {
              backgroundColor: colors.backgroundElevated,
              borderTopColor: colors.border,
              borderTopWidth: 1,
              display: 'flex',
            };
          })(route),
        })}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen}
        options={{
          tabBarLabel: t('navigation.search'),
          tabBarIcon: ({ color, size = 24 }) => (
            <Text style={{ fontSize: size, color }}>🔍</Text>
          ),
          headerShown: true,
          headerTitle: `🔍 ${t('search.title')}`,
          headerStyle: {
            backgroundColor: colors.backgroundElevated,
            borderBottomColor: colors.border,
          },
          headerTintColor: colors.text,
        }}
      />
      <Tab.Screen 
        name="AskAI" 
        component={AskAIScreen}
        options={{
          tabBarLabel: t('navigation.askAI'),
          tabBarIcon: ({ color, size = 24 }) => (
            <Text style={{ fontSize: size, color }}>🤖</Text>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={{
          tabBarLabel: t('navigation.favorites'),
          tabBarIcon: ({ color, size = 24 }) => (
            <Text style={{ fontSize: size, color }}>⭐</Text>
          ),
          headerShown: true,
          headerTitle: `⭐ ${t('favorites.title')}`,
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
          tabBarLabel: t('navigation.settings'),
          tabBarIcon: ({ color, size = 24 }) => (
            <Text style={{ fontSize: size, color }}>⚙️</Text>
          ),
          headerShown: true,
          headerTitle: `⚙️ ${t('settings.title')}`,
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
    <SafeAreaProvider>
      <NavigationContainer theme={CustomDarkTheme}>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
