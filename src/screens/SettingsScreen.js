import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Switch,
  Alert,
  Modal,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StoreReview from 'expo-store-review';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

const GITHUB_URL = 'https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-';
const LANGUAGE_STORAGE_KEY = '@app_language';

const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
];

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [interests, setInterests] = useState({
    web: false,
    mobile: false,
    backend: false,
    frontend: false,
    database: false,
    devops: false,
  });

  const [selectedLanguages, setSelectedLanguages] = useState({
    javascript: false,
    typescript: false,
    python: false,
    java: false,
    csharp: false,
    go: false,
    rust: false,
    swift: false,
    kotlin: false,
    ruby: false,
    php: false,
    sql: false,
  });

  useEffect(() => {
    loadPreferences();
  }, []);

  const loadPreferences = async () => {
    try {
      const savedInterests = await AsyncStorage.getItem('userInterests');
      const savedLanguages = await AsyncStorage.getItem('userLanguages');
      
      if (savedInterests) setInterests(JSON.parse(savedInterests));
      if (savedLanguages) setSelectedLanguages(JSON.parse(savedLanguages));
    } catch (error) {
      // Error loading preferences - will use defaults
    }
  };

  const saveInterests = async (newInterests) => {
    try {
      await AsyncStorage.setItem('userInterests', JSON.stringify(newInterests));
      setInterests(newInterests);
    } catch (error) {
      // Error saving interests - changes not persisted
    }
  };

  const saveLanguages = async (newLanguages) => {
    try {
      await AsyncStorage.setItem('userLanguages', JSON.stringify(newLanguages));
      setSelectedLanguages(newLanguages);
    } catch (error) {
      // Error saving languages - changes not persisted
    }
  };

  const toggleInterest = (key) => {
    const newInterests = { ...interests, [key]: !interests[key] };
    saveInterests(newInterests);
  };

  const toggleLanguage = (key) => {
    const newLanguages = { ...selectedLanguages, [key]: !selectedLanguages[key] };
    saveLanguages(newLanguages);
  };

  const openGitHub = () => {
    Linking.openURL(GITHUB_URL);
  };

  const handleRateApp = async () => {
    try {
      const isAvailable = await StoreReview.isAvailableAsync();
      
      if (isAvailable) {
        // Request in-app review (native prompt)
        await StoreReview.requestReview();
      } else {
        // Fallback to opening store URL
        Alert.alert(
          t('settings.rateApp'),
          t('settings.rateAppMessage'),
          [
            { text: t('common.cancel'), style: 'cancel' },
            {
              text: t('settings.rateNow'),
              onPress: async () => {
                const storeUrl = await StoreReview.storeUrl();
                if (storeUrl) {
                  Linking.openURL(storeUrl);
                }
              },
            },
          ]
        );
      }
    } catch (error) {
      // Error requesting review - show fallback message
      Alert.alert(
        t('settings.thanksForInterest'),
        t('settings.ratingNotAvailable')
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>⚙️ {t('settings.headerTitle')}</Text>
          <Text style={styles.headerSubtitle}>
            {t('settings.headerSubtitle')}
          </Text>
        </View>

        {/* Interests Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎯 {t('settings.yourInterests')}</Text>
          <Text style={styles.sectionDescription}>
            {t('settings.selectTopics')}
          </Text>
          <View style={styles.optionsContainer}>
            {Object.keys(interests).map((key) => (
              <View key={key} style={styles.optionRow}>
                <View style={styles.optionInfo}>
                  <Text style={styles.optionEmoji}>
                    {getInterestEmoji(key)}
                  </Text>
                  <Text style={styles.optionLabel}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Text>
                </View>
                <Switch
                  value={interests[key]}
                  onValueChange={() => toggleInterest(key)}
                  trackColor={{ false: colors.border, true: colors.primary }}
                  thumbColor={interests[key] ? colors.primary : colors.textMuted}
                />
              </View>
            ))}
          </View>
        </View>

        {/* Languages Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💻 {t('settings.favoriteLanguages')}</Text>
          <Text style={styles.sectionDescription}>
            {t('settings.chooseLanguages')}
          </Text>
          <View style={styles.optionsContainer}>
            {Object.keys(selectedLanguages).map((key) => (
              <View key={key} style={styles.optionRow}>
                <View style={styles.optionInfo}>
                  <Text style={styles.optionEmoji}>
                    {getLanguageEmoji(key)}
                  </Text>
                  <Text style={styles.optionLabel}>
                    {getLanguageName(key)}
                  </Text>
                </View>
                <Switch
                  value={selectedLanguages[key]}
                  onValueChange={() => toggleLanguage(key)}
                  trackColor={{ false: colors.border, true: colors.primary }}
                  thumbColor={selectedLanguages[key] ? colors.primary : colors.textMuted}
                />
              </View>
            ))}
          </View>
        </View>

        {/* Links Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔗 {t('settings.linksResources')}</Text>
          
          <TouchableOpacity style={styles.linkCard} onPress={openGitHub}>
            <View style={styles.linkIcon}>
              <Text style={styles.linkIconText}>🐙</Text>
            </View>
            <View style={styles.linkContent}>
              <Text style={styles.linkTitle}>{t('settings.githubProject')}</Text>
              <Text style={styles.linkDescription}>
                {t('settings.viewSourceCode')}
              </Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.linkCard} 
            onPress={() => Linking.openURL('https://expo.dev')}
          >
            <View style={styles.linkIcon}>
              <Text style={styles.linkIconText}>📱</Text>
            </View>
            <View style={styles.linkContent}>
              <Text style={styles.linkTitle}>{t('settings.expo')}</Text>
              <Text style={styles.linkDescription}>
                {t('settings.learnExpo')}
              </Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkCard} onPress={handleRateApp}>
            <View style={styles.linkIcon}>
              <Text style={styles.linkIconText}>⭐</Text>
            </View>
            <View style={styles.linkContent}>
              <Text style={styles.linkTitle}>{t('settings.rateThisApp')}</Text>
              <Text style={styles.linkDescription}>
                {t('settings.loveApp')}
              </Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ℹ️ {t('settings.aboutSection')}</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutText}>
              {t('settings.appVersion')}
            </Text>
            <Text style={styles.aboutDescription}>
              {t('settings.appDescription')}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function getInterestEmoji(key) {
  const emojis = {
    web: '🌐',
    mobile: '📱',
    backend: '⚙️',
    frontend: '🎨',
    database: '🗄️',
    devops: '🚀',
  };
  return emojis[key] || '💡';
}

function getLanguageEmoji(key) {
  const emojis = {
    javascript: '🟨',
    typescript: '🔷',
    python: '🐍',
    java: '☕',
    csharp: '🔷',
    go: '🐹',
    rust: '🦀',
    swift: '🦅',
    kotlin: '🅺',
    ruby: '💎',
    php: '🐘',
    sql: '🗄️',
  };
  return emojis[key] || '💻';
}

function getLanguageName(key) {
  const names = {
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    java: 'Java',
    csharp: 'C#',
    go: 'Go',
    rust: 'Rust',
    swift: 'Swift',
    kotlin: 'Kotlin',
    ruby: 'Ruby',
    php: 'PHP',
    sql: 'SQL',
  };
  return names[key] || key;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.backgroundElevated,
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  section: {
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  sectionDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  optionsContainer: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  optionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionEmoji: {
    fontSize: 24,
    marginRight: spacing.sm,
  },
  optionLabel: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  linkCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  linkIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  linkIconText: {
    fontSize: 24,
  },
  linkContent: {
    flex: 1,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  linkDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  arrow: {
    fontSize: 24,
    color: colors.textMuted,
    marginLeft: spacing.sm,
  },
  aboutCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  aboutText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  aboutDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
