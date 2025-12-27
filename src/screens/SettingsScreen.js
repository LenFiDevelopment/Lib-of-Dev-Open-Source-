import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Switch,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

const GITHUB_URL = 'https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-';
const LANGUAGE_STORAGE_KEY = '@app_language';
const GROQ_API_KEY_STORAGE = '@groq_api_key';

const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
];

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [apiKeyInput, setApiKeyInput] = useState('');
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
    loadApiKey();
  }, []);

  const loadApiKey = async () => {
    try {
      const key = await AsyncStorage.getItem(GROQ_API_KEY_STORAGE);
      if (key) {
        setApiKey(key);
        setApiKeyInput(key);
      }
    } catch (error) {
      console.log('Error loading API key:', error);
    }
  };

  const saveApiKey = async () => {
    try {
      await AsyncStorage.setItem(GROQ_API_KEY_STORAGE, apiKeyInput.trim());
      setApiKey(apiKeyInput.trim());
      setShowApiKeyModal(false);
      Alert.alert(t('common.success'), t('settings.apiKeySaved'));
    } catch (error) {
      Alert.alert(t('common.error'), t('settings.apiKeySaveError'));
    }
  };

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

  const handleRateApp = () => {
    Alert.alert(
      t('settings.rateApp'),
      t('settings.rateAppMessage'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('settings.rateNow'),
          onPress: () => {
            Linking.openURL(GITHUB_URL);
          },
        },
      ]
    );
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
          
          {/* API Key Setting */}
          <TouchableOpacity 
            style={styles.linkCard} 
            onPress={() => setShowApiKeyModal(true)}
          >
            <View style={styles.linkIcon}>
              <Text style={styles.linkIconText}>🔑</Text>
            </View>
            <View style={styles.linkContent}>
              <Text style={styles.linkTitle}>{t('settings.groqApiKey')}</Text>
              <Text style={styles.linkDescription}>
                {apiKey ? t('settings.apiKeySet') : t('settings.apiKeyNotSet')}
              </Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

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

      {/* API Key Modal */}
      <Modal
        visible={showApiKeyModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowApiKeyModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>🔑 {t('settings.groqApiKey')}</Text>
            <Text style={styles.modalDescription}>
              {t('settings.groqApiKeyDescription')}
            </Text>
            
            <TouchableOpacity 
              style={styles.helpButton}
              onPress={() => Linking.openURL('https://console.groq.com/keys')}
            >
              <Text style={styles.helpButtonText}>
                🌐 {t('settings.getApiKey')}
              </Text>
            </TouchableOpacity>

            <TextInput
              style={styles.modalInput}
              value={apiKeyInput}
              onChangeText={setApiKeyInput}
              placeholder={t('settings.enterApiKey')}
              placeholderTextColor={colors.textMuted}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={false}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonCancel]}
                onPress={() => {
                  setApiKeyInput(apiKey);
                  setShowApiKeyModal(false);
                }}
              >
                <Text style={styles.modalButtonText}>{t('common.cancel')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonSave]}
                onPress={saveApiKey}
              >
                <Text style={[styles.modalButtonText, styles.modalButtonTextSave]}>
                  {t('common.save')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  modalContent: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    width: '100%',
    maxWidth: 400,
    borderWidth: 1,
    borderColor: colors.border,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  modalDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  helpButton: {
    backgroundColor: colors.primary,
    padding: spacing.sm,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  helpButtonText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  modalInput: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    padding: spacing.sm,
    color: colors.text,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  modalButton: {
    flex: 1,
    padding: spacing.sm,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  modalButtonCancel: {
    backgroundColor: colors.backgroundCard,
    borderWidth: 1,
    borderColor: colors.border,
  },
  modalButtonSave: {
    backgroundColor: colors.primary,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  modalButtonTextSave: {
    color: colors.text,
  },
});
