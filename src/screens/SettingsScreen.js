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
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StoreReview from 'expo-store-review';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';
import { useOnboardingContext } from '../context/OnboardingContext';

// Try to import InterstitialAd from AdMob
let InterstitialAd, AdEventType, TestIds;
let isAdMobAvailable = false;
try {
  const GoogleMobileAds = require('react-native-google-mobile-ads');
  InterstitialAd = GoogleMobileAds.InterstitialAd;
  AdEventType = GoogleMobileAds.AdEventType;
  TestIds = GoogleMobileAds.TestIds;
  isAdMobAvailable = true;
} catch (error) {
  console.log('AdMob module not available');
}

const GITHUB_URL = 'https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-';
const LANGUAGE_STORAGE_KEY = '@app_language';
const GROQ_API_KEY_STORAGE = '@groq_api_key';
const FIRST_INSTALL_KEY = '@first_install_date';
const LAST_RATING_PROMPT_KEY = '@last_rating_prompt';
const HAS_RATED_KEY = '@has_rated_app';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.lenfi.libofdev';
const APP_STORE_URL = 'https://apps.apple.com/app/id-placeholder';

const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
];

export default function SettingsScreen({ navigation }) {
  const { t, i18n } = useTranslation();
  const { restartOnboarding, screenScrollRefs } = useOnboardingContext();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [interests, setInterests] = useState({
    web: false,
    mobile: false,
    backend: false,
    frontend: false,
    database: false,
    devops: false,
    ai: false,
    blockchain: false,
    iot: false,
    gamedev: false,
    security: false,
    cloud: false,
  });

  const [selectedLanguages, setSelectedLanguages] = useState({
    javascript: false,
    typescript: false,
    python: false,
    java: false,
    csharp: false,
    cpp: false,
    go: false,
    rust: false,
    swift: false,
    kotlin: false,
    dart: false,
    ruby: false,
    php: false,
    r: false,
    sql: false,
    html: false,
    css: false,
  });

  // Survey time window: 08.01.2026 00:01 CET to 14.01.2026 23:29 CET
  const isSurveyActive = () => {
    const now = new Date();
    const startDate = new Date('2026-01-08T00:01:00+01:00'); // CET
    const endDate = new Date('2026-01-14T23:29:00+01:00'); // CET
    return now >= startDate && now <= endDate;
  };

  useEffect(() => {
    loadPreferences();
    loadApiKey();
    checkAndPromptRating();
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

  const showSupportAd = async () => {
    if (!isAdMobAvailable) {
      // If AdMob is not available, just show thank you
      setShowThankYouModal(true);
      return;
    }

    try {
      // Production Interstitial Ad Unit ID for Support Button
      const adUnitId = Platform.select({
        ios: 'ca-app-pub-5526801232554836/4489165417',
        android: 'ca-app-pub-5526801232554836/4489165417',
      });

      const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
        requestNonPersonalizedAdsOnly: false,
      });

      // Load the ad
      interstitial.load();

      // Listen for ad events
      const unsubscribeLoaded = interstitial.addAdEventListener(
        AdEventType.LOADED,
        () => {
          interstitial.show();
        }
      );

      const unsubscribeClosed = interstitial.addAdEventListener(
        AdEventType.CLOSED,
        () => {
          setShowThankYouModal(true);
          unsubscribeLoaded();
          unsubscribeClosed();
        }
      );
    } catch (error) {
      console.log('Error showing ad:', error);
      // Still show thank you even if ad fails
      setShowThankYouModal(true);
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

  // Check if app should prompt for rating (after 3 days)
  const checkAndPromptRating = async () => {
    try {
      const hasRated = await AsyncStorage.getItem(HAS_RATED_KEY);
      if (hasRated === 'true') return; // Already rated, don't prompt again

      const firstInstall = await AsyncStorage.getItem(FIRST_INSTALL_KEY);
      const lastPrompt = await AsyncStorage.getItem(LAST_RATING_PROMPT_KEY);
      const now = Date.now();

      // Set first install date if not set
      if (!firstInstall) {
        await AsyncStorage.setItem(FIRST_INSTALL_KEY, now.toString());
        return; // Don't prompt on first launch
      }

      const daysSinceInstall = (now - parseInt(firstInstall)) / (1000 * 60 * 60 * 24);
      
      // Check if 3 days have passed since install
      if (daysSinceInstall < 3) return;

      // If already prompted, wait 7 days before asking again
      if (lastPrompt) {
        const daysSincePrompt = (now - parseInt(lastPrompt)) / (1000 * 60 * 60 * 24);
        if (daysSincePrompt < 7) return;
      }

      // Show rating prompt
      promptForRating();
    } catch (error) {
      console.log('Error checking rating prompt:', error);
    }
  };

  const promptForRating = () => {
    Alert.alert(
      t('settings.rateAppMessage'),
      t('settings.rateAppDescription'),
      [
        {
          text: t('settings.rateLater'),
          style: 'cancel',
          onPress: async () => {
            // Save that we prompted, will ask again in 7 days
            await AsyncStorage.setItem(LAST_RATING_PROMPT_KEY, Date.now().toString());
          },
        },
        {
          text: t('settings.rateNow'),
          onPress: handleRateApp,
        },
      ]
    );
  };

  const handleRateApp = async () => {
    try {
      // Mark as rated so we don't ask again
      await AsyncStorage.setItem(HAS_RATED_KEY, 'true');
      
      // Directly open store URL for reliable behavior
      const storeUrl = Platform.select({
        ios: APP_STORE_URL,
        android: PLAY_STORE_URL,
      });
      
      if (storeUrl) {
        const canOpen = await Linking.canOpenURL(storeUrl);
        if (canOpen) {
          await Linking.openURL(storeUrl);
        } else {
          // Try native in-app review as fallback
          const isAvailable = await StoreReview.isAvailableAsync();
          if (isAvailable) {
            await StoreReview.requestReview();
          }
        }
      }
      
      // Show thank you message after a short delay
      setTimeout(() => {
        Alert.alert('', t('settings.thanksForRating'));
      }, 1500);
    } catch (error) {
      console.log('Error opening store review:', error);
      // Try native review as last resort
      try {
        const isAvailable = await StoreReview.isAvailableAsync();
        if (isAvailable) {
          await StoreReview.requestReview();
        }
      } catch (e) {
        Alert.alert(t('common.error'), t('settings.ratingNotAvailable'));
      }
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

        {/* Weitere Apps Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📱 More Apps</Text>
          <Text style={styles.sectionDescription}>
            More developer tools from the Lib of Dev universe
          </Text>
          
          <TouchableOpacity 
            style={styles.appTeaserCard}
            onPress={() => setShowProjectsModal(true)}
            activeOpacity={0.8}
          >
            <Image 
              source={require('../../assets/libofdev-project.png')}
              style={styles.appTeaserImage}
              resizeMode="cover"
            />
            <View style={styles.appTeaserOverlay}>
              <Text style={styles.appTeaserTitle}>Lib of Dev - Projects</Text>
              <Text style={styles.appTeaserSubtitle}>Coming Soon</Text>
            </View>
          </TouchableOpacity>
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
            onPress={() => Linking.openURL('https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/discussions')}
          >
            <View style={styles.linkIcon}>
              <Text style={styles.linkIconText}>💬</Text>
            </View>
            <View style={styles.linkContent}>
              <Text style={styles.linkTitle}>GitHub Discussions</Text>
              <Text style={styles.linkDescription}>
                Join the community conversation
              </Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          {/* Survey Link - Only visible during survey period */}
          {isSurveyActive() && (
            <TouchableOpacity 
              style={[styles.linkCard, styles.surveyCard]} 
              onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSeWI4_male0pU0zrKWldLKkygoih6AKAZ1mWA-O4EvsApg8Gg/viewform?usp=header')}
            >
              <View style={styles.linkIcon}>
                <Text style={styles.linkIconText}>📋</Text>
              </View>
              <View style={styles.linkContent}>
                <Text style={styles.linkTitle}>{t('settings.surveyTitle')}</Text>
                <Text style={styles.linkDescription}>
                  {t('settings.surveyDescription')}
                </Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity 
            style={styles.linkCard} 
            onPress={() => Linking.openURL('https://www.instagram.com/lenfi_development')}
          >
            <View style={styles.linkIcon}>
              <Text style={styles.linkIconText}>📸</Text>
            </View>
            <View style={styles.linkContent}>
              <Text style={styles.linkTitle}>Instagram</Text>
              <Text style={styles.linkDescription}>
                @lenfi_development
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

          <TouchableOpacity
            style={styles.linkCard}
            onPress={() => {
              Alert.alert(
                '🎓 Tutorial',
                'Restart the app tutorial to learn about all features?',
                [
                  { text: 'Cancel', style: 'cancel' },
                  {
                    text: 'Start Tutorial',
                    onPress: async () => {
                      // Navigate to Browse tab first
                      navigation.navigate('Browse');
                      
                      // Wait a moment for navigation to complete
                      setTimeout(() => {
                        // Scroll HomeScreen to top
                        const browseScrollRef = screenScrollRefs['Browse'];
                        if (browseScrollRef?.current?.scrollTo) {
                          browseScrollRef.current.scrollTo({ y: 0, animated: true });
                        }
                        
                        // Then restart onboarding
                        restartOnboarding();
                      }, 300);
                      
                      // Show message that tutorial is starting
                      Alert.alert(
                        'Tutorial Restarted',
                        'The tutorial is starting now!',
                      );
                    },
                  },
                ]
              );
            }}
          >
            <View style={styles.linkIcon}>
              <Text style={styles.linkIconText}>🎓</Text>
            </View>
            <View style={styles.linkContent}>
              <Text style={styles.linkTitle}>Restart Tutorial</Text>
              <Text style={styles.linkDescription}>
                Learn about app features again
              </Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>❤️ Support Development</Text>
          <TouchableOpacity
            style={styles.supportButton}
            onPress={showSupportAd}
            activeOpacity={0.7}
          >
            <View style={styles.supportButtonContent}>
              <Text style={styles.supportButtonIcon}>🙏</Text>
              <View style={styles.supportButtonTextContainer}>
                <Text style={styles.supportButtonTitle}>Support Me</Text>
                <Text style={styles.supportButtonDescription}>
                  Watch a short ad to support development
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.supportInfo}>
            💡 Clicking this button will show a brief ad. That's it! Your support helps 
            keep this app free and actively developed. Thank you! 🚀
          </Text>
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
            <Text style={styles.aboutDescription}>
              This app is completely free and Open Source. Minimal ads help us fund development. Thanks for your support! 🙏
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Thank You Modal */}
      <Modal
        visible={showThankYouModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowThankYouModal(false)}
      >
        <View style={styles.thankYouOverlay}>
          <View style={styles.thankYouContainer}>
            <Text style={styles.thankYouEmoji}>🎉</Text>
            <Text style={styles.thankYouTitle}>Thank You!</Text>
            <Text style={styles.thankYouMessage}>
              Your support means the world to us! Every contribution helps us:
            </Text>
            <View style={styles.thankYouList}>
              <Text style={styles.thankYouListItem}>✨ Add new features</Text>
              <Text style={styles.thankYouListItem}>🐛 Fix bugs faster</Text>
              <Text style={styles.thankYouListItem}>📚 Create more content</Text>
              <Text style={styles.thankYouListItem}>🚀 Keep the app updated</Text>
            </View>
            <Text style={styles.thankYouFooter}>
              You're awesome! 💙
            </Text>
            <TouchableOpacity
              style={styles.thankYouButton}
              onPress={() => setShowThankYouModal(false)}
            >
              <Text style={styles.thankYouButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* API Key Modal */}
      <Modal
        visible={showApiKeyModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowApiKeyModal(false)}
      >
        <KeyboardAvoidingView 
          style={styles.modalContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TouchableOpacity 
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setShowApiKeyModal(false)}
          >
            <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()}>
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
            </TouchableOpacity>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Modal>

      {/* Projects App Modal */}
      <Modal
        visible={showProjectsModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowProjectsModal(false)}
      >
        <View style={styles.projectsModalOverlay}>
          <View style={styles.projectsModalContainer}>
            <Text style={styles.projectsModalEmoji}>🚀</Text>
            <Text style={styles.projectsModalTitle}>Lib of Dev - Projects</Text>
            <Text style={styles.projectsModalSubtitle}>Coming Soon</Text>
            
            <View style={styles.projectsModalContent}>
              <Text style={styles.projectsModalDescription}>
                The ultimate companion app for your developer projects – from your first "Hello World" to professional IoT applications!
              </Text>
              
              <View style={styles.projectsModalFeatures}>
                <Text style={styles.projectsModalFeatureItem}>
                  🎯 Projects for Beginner to High-End Developers
                </Text>
                <Text style={styles.projectsModalFeatureItem}>
                  🔌 Control ESP32 & Arduino live
                </Text>
                <Text style={styles.projectsModalFeatureItem}>
                  🌐 Real-time website integration
                </Text>
                <Text style={styles.projectsModalFeatureItem}>
                  💬 Messaging server included
                </Text>
              </View>
              
              <Text style={styles.projectsModalFooter}>
                Get ready for the next level! 🔥
              </Text>
            </View>
            
            <TouchableOpacity
              style={styles.projectsModalButton}
              onPress={() => setShowProjectsModal(false)}
            >
              <Text style={styles.projectsModalButtonText}>Schließen</Text>
            </TouchableOpacity>
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
    ai: '🤖',
    blockchain: '⛓️',
    iot: '🔌',
    gamedev: '🎮',
    security: '🔒',
    cloud: '☁️',
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
    cpp: '⚙️',
    go: '🐹',
    rust: '🦀',
    swift: '🦅',
    kotlin: '🅺',
    dart: '🎯',
    ruby: '💎',
    php: '🐘',
    r: '📊',
    sql: '🗄️',
    html: '🌐',
    css: '🎨',
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
    cpp: 'C++',
    go: 'Go',
    rust: 'Rust',
    swift: 'Swift',
    kotlin: 'Kotlin',
    dart: 'Dart',
    ruby: 'Ruby',
    php: 'PHP',
    r: 'R',
    sql: 'SQL',
    html: 'HTML',
    css: 'CSS',
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
  surveyCard: {
    backgroundColor: colors.primaryAlpha,
    borderColor: colors.primary,
    borderWidth: 2,
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
  aboutTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  aboutDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.sm,
  },
  aboutHighlight: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  supportButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.medium,
  },
  supportButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  supportButtonIcon: {
    fontSize: 40,
    marginRight: spacing.md,
  },
  supportButtonTextContainer: {
    flex: 1,
  },
  supportButtonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  supportButtonDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  supportInfo: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  thankYouOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  thankYouContainer: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.xl,
    padding: spacing.xl * 1.5,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    ...shadows.large,
  },
  thankYouEmoji: {
    fontSize: 72,
    marginBottom: spacing.md,
  },
  thankYouTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  thankYouMessage: {
    fontSize: 16,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.lg,
    lineHeight: 24,
  },
  thankYouList: {
    width: '100%',
    marginBottom: spacing.lg,
  },
  thankYouListItem: {
    fontSize: 16,
    color: colors.text,
    marginBottom: spacing.sm,
    paddingLeft: spacing.md,
  },
  thankYouFooter: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: spacing.lg,
  },
  thankYouButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl * 2,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    ...shadows.medium,
  },
  thankYouButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
    width: '100%',
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
  appTeaserCard: {
    backgroundColor: '#A0A0A0',
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    height: 180,
    position: 'relative',
    ...shadows.medium,
  },
  appTeaserImage: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  appTeaserOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(160, 160, 160, 0.7)',
  },
  appTeaserTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  appTeaserSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
  },
  projectsModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  projectsModalContainer: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    ...shadows.large,
  },
  projectsModalEmoji: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  projectsModalTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  projectsModalSubtitle: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: spacing.lg,
  },
  projectsModalContent: {
    width: '100%',
    marginBottom: spacing.lg,
  },
  projectsModalDescription: {
    fontSize: 16,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.lg,
    lineHeight: 24,
  },
  projectsModalFeatures: {
    width: '100%',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  projectsModalFeatureItem: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
    textAlign: 'center',
  },
  projectsModalFooter: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
    textAlign: 'center',
  },
  projectsModalButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl * 2,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    ...shadows.medium,
  },
  projectsModalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
