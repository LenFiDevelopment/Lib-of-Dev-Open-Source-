import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { getAllLanguages } from '../data/languagesData';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';
import { LanguageCard } from '../components/Card';
import { quickTips } from '../data/developerHintsData';
import AdBanner from '../components/AdBanner';
import { useOnboardingContext } from '../context/OnboardingContext';

export default function HomeScreen({ navigation }) {
  const { t } = useTranslation();
  const languages = useMemo(() => getAllLanguages(), []);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLanguages, setFilteredLanguages] = useState(languages);
  const [isImprovementsExpanded, setIsImprovementsExpanded] = useState(false);

  // Refs for onboarding
  const scrollViewRef = useRef(null);
  const quickAccessRef = useRef(null);
  const languagesRef = useRef(null);
  const communityRef = useRef(null);

  // Store refs in context for onboarding
  const { setScreenScrollRef, setOnboardingRefs } = useOnboardingContext();
  useEffect(() => {
    setScreenScrollRef('Browse', scrollViewRef);
    setOnboardingRefs('Browse', {
      quickAccess: quickAccessRef,
      languages: languagesRef,
      community: communityRef,
    });
  }, [setScreenScrollRef, setOnboardingRefs]);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredLanguages(languages);
    } else {
      const filtered = languages.filter(lang =>
        lang.name.toLowerCase().includes(query.toLowerCase()) ||
        lang.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredLanguages(filtered);
    }
  }, [languages]);

  const getTotalExamples = useCallback((language) => {
    let total = 0;
    Object.values(language.categories).forEach(category => {
      total += category.items.length;
    });
    return total;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        ref={scrollViewRef}
        style={styles.scrollView}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        {/* Hero Section */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerEmoji}>💻</Text>
            <View style={styles.headerText}>
              <Text style={styles.title}>{t('home.title')}</Text>
              <Text style={styles.subtitle}>
                {t('home.subtitle')}
              </Text>
              <Text style={styles.description}>
                {t('home.description')}
              </Text>
            </View>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder={t('home.searchPlaceholder')}
              placeholderTextColor={colors.textMuted}
              value={searchQuery}
              onChangeText={handleSearch}
              autoCapitalize="none"
              autoCorrect={false}
              accessible={true}
              accessibilityLabel={t('home.searchPlaceholder')}
              accessibilityHint="Search for programming languages"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity 
                onPress={() => handleSearch('')}
                accessible={true}
                accessibilityLabel="Clear search"
                accessibilityRole="button"
              >
                <Text style={styles.clearButton}>✕</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Info Banner */}
        <View style={styles.infoBanner}>
          <Text style={styles.bannerIcon}>✨</Text>
          <Text style={styles.bannerText}>
            <Text style={styles.bannerBold}>Continuously improving</Text> - New features & content added regularly! Make sure to check for updates.
          </Text>
        </View>

        {/* Community Improvements Banner */}
        <View style={styles.improvementsBanner}>
          <TouchableOpacity 
            style={styles.improvementsHeader}
            onPress={() => setIsImprovementsExpanded(!isImprovementsExpanded)}
            activeOpacity={0.7}
          >
            <Text style={styles.improvementsIcon}>🎉</Text>
            <Text style={styles.improvementsTitle}>{t('home.improvementsTitle')}</Text>
            <Text style={styles.expandIcon}>{isImprovementsExpanded ? '▼' : '▶'}</Text>
          </TouchableOpacity>
          
          <Text style={styles.improvementsSubtitle}>{t('home.improvementsSubtitle')}</Text>
          
          {isImprovementsExpanded && (
            <>
              <View style={styles.improvementsList}>
                <View style={styles.improvementCategory}>
                  <Text style={styles.improvementCategoryTitle}>🤖 {t('home.improvement1Title')}</Text>
                  <Text style={styles.improvementText}>{t('home.improvement1Text')}</Text>
                </View>
                
                <View style={styles.improvementCategory}>
                  <Text style={styles.improvementCategoryTitle}>🔑 {t('home.improvement2Title')}</Text>
                  <Text style={styles.improvementText}>{t('home.improvement2Text')}</Text>
                </View>
                
                <View style={styles.improvementCategory}>
                  <Text style={styles.improvementCategoryTitle}>🔒 {t('home.improvement3Title')}</Text>
                  <Text style={styles.improvementText}>{t('home.improvement3Text')}</Text>
                </View>
                
                <View style={styles.improvementCategory}>
                  <Text style={styles.improvementCategoryTitle}>📚 {t('home.improvement4Title')}</Text>
                  <Text style={styles.improvementText}>{t('home.improvement4Text')}</Text>
                </View>
                
                <View style={styles.improvementCategory}>
                  <Text style={styles.improvementCategoryTitle}>🎨 {t('home.improvement5Title')}</Text>
                  <Text style={styles.improvementText}>{t('home.improvement5Text')}</Text>
                </View>
              </View>
              
              <Text style={styles.improvementsFooter}>{t('home.improvementsFooter')}</Text>
            </>
          )}
        </View>

        {/* Quick Access Cards */}
        <View ref={quickAccessRef} style={styles.quickAccessContainer}>
          <Text style={styles.sectionTitle}>⚡ {t('home.quickAccess')}</Text>
          <View style={styles.quickAccessGrid}>
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Components')}
              accessible={true}
              accessibilityLabel="UI Components"
              accessibilityRole="button"
            >
              <Text style={styles.quickAccessIcon}>🎨</Text>
              <Text style={styles.quickAccessText}>Components</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Hints')}
              accessible={true}
              accessibilityLabel="Developer hints"
              accessibilityRole="button"
            >
              <Text style={styles.quickAccessIcon}>💡</Text>
              <Text style={styles.quickAccessText}>{t('quickAccess.hints')}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Tools')}
              accessible={true}
              accessibilityLabel="Developer tools"
              accessibilityRole="button"
            >
              <Text style={styles.quickAccessIcon}>🛠️</Text>
              <Text style={styles.quickAccessText}>Tools</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Projects')}
              accessible={true}
              accessibilityLabel="Project tutorials"
              accessibilityRole="button"
            >
              <Text style={styles.quickAccessIcon}>📋</Text>
              <Text style={styles.quickAccessText}>Projects</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('HowToGuides')}
              accessible={true}
              accessibilityLabel="How-to guides"
              accessibilityRole="button"
            >
              <Text style={styles.quickAccessIcon}>🎯</Text>
              <Text style={styles.quickAccessText}>How-To</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('SpecializedTopics')}
              accessible={true}
              accessibilityLabel="Specialized topics"
              accessibilityRole="button"
            >
              <Text style={styles.quickAccessIcon}>🔌</Text>
              <Text style={styles.quickAccessText}>Specialized Topics</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Resources')}
              accessible={true}
              accessibilityLabel="Learning resources"
              accessibilityRole="button"
            >
              <Text style={styles.quickAccessIcon}>🔗</Text>
              <Text style={styles.quickAccessText}>{t('quickAccess.links')}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Certifications')}
              accessible={true}
              accessibilityLabel="IT Certifications"
              accessibilityRole="button"
            >
              <Text style={styles.quickAccessIcon}>🎓</Text>
              <Text style={styles.quickAccessText}>Certifications</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Tips Section */}
        <View style={styles.quickTipsContainer}>
          <Text style={styles.sectionTitle}>💡 {t('home.quickTips')}</Text>
          <Text style={styles.sectionSubtitle}>
            {t('home.quickTipsSubtitle')}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tipsScroll}
          >
            {quickTips.slice(0, 6).map((tip) => (
              <TouchableOpacity
                key={tip.id}
                style={styles.tipCard}
                onPress={() => navigation.navigate('Hints')}
              >
                <Text style={styles.tipIcon}>{tip.icon}</Text>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipAnswer}>{tip.answer}</Text>
                <View style={styles.tipBadge}>
                  <Text style={styles.tipBadgeText}>{tip.category}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={[styles.tipCard, styles.viewAllCard]}
              onPress={() => navigation.navigate('Hints')}
            >
              <Text style={styles.viewAllIcon}>👉</Text>
              <Text style={styles.viewAllText}>{t('home.viewAllHints')}</Text>
              <Text style={styles.viewAllSubtext}>50+ {t('home.scenariosCovered')}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* AdMob Banner */}
        <View style={styles.adContainer}>
          <AdBanner adUnitId="ca-app-pub-5526801232554836/5282576179" />
        </View>

        {/* Languages List */}
        <View ref={languagesRef} style={styles.languagesContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>📚 {t('home.languages')}</Text>
            <Text style={styles.sectionCount}>{filteredLanguages.length} {t('home.languagesCount')}</Text>
          </View>
          <Text style={styles.sectionSubtitle}>
            {t('home.languagesSubtitle')}
          </Text>

          <View style={styles.languagesList}>
            {filteredLanguages.map((language) => (
              <LanguageCard
                key={language.id}
                icon={language.icon}
                name={language.name}
                description={language.description}
                color={language.color}
                itemCount={getTotalExamples(language)}
                onPress={() =>
                  navigation.navigate('Language', {
                    languageId: language.id,
                    languageName: language.name,
                  })
                }
              />
            ))}
          </View>

          {filteredLanguages.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>😕</Text>
              <Text style={styles.emptyText}>No languages found</Text>
              <Text style={styles.emptySubtext}>Try a different search term</Text>
            </View>
          )}
        </View>

        {/* Get Involved Section - Prominent Placement */}
        <View ref={communityRef} style={styles.getInvolvedContainer}>
          <View style={styles.getInvolvedHeader}>
            <Text style={styles.getInvolvedBadge}>🌟 CONTRIBUTE</Text>
            <Text style={styles.sectionTitle}>🤝 Join Our Community</Text>
          </View>
          <Text style={styles.getInvolvedDescription}>
            Help us make this app even better! Contribute code, report bugs, or suggest new features.
          </Text>
          
          <View style={styles.communityLinks}>
            <TouchableOpacity 
              style={styles.communityLink}
              onPress={() => Linking.openURL('https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-')}
            >
              <Text style={styles.communityIcon}>📦</Text>
              <View style={styles.communityLinkContent}>
                <Text style={styles.communityLinkTitle}>GitHub Repository</Text>
                <Text style={styles.communityLinkSubtext}>Star, fork & contribute code</Text>
              </View>
              <Text style={styles.communityArrow}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.communityLink}
              onPress={() => Linking.openURL('https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/discussions')}
            >
              <Text style={styles.communityIcon}>💬</Text>
              <View style={styles.communityLinkContent}>
                <Text style={styles.communityLinkTitle}>GitHub Discussions</Text>
                <Text style={styles.communityLinkSubtext}>Ask questions & share ideas</Text>
              </View>
              <Text style={styles.communityArrow}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.communityLink}
              onPress={() => Linking.openURL('https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-/issues')}
            >
              <Text style={styles.communityIcon}>🐛</Text>
              <View style={styles.communityLinkContent}>
                <Text style={styles.communityLinkTitle}>Report Issues</Text>
                <Text style={styles.communityLinkSubtext}>Bug reports & feature requests</Text>
              </View>
              <Text style={styles.communityArrow}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.communityLink}
              onPress={() => Linking.openURL('https://www.instagram.com/lenfi_development/')}
            >
              <Text style={styles.communityIcon}>📸</Text>
              <View style={styles.communityLinkContent}>
                <Text style={styles.communityLinkTitle}>Instagram</Text>
                <Text style={styles.communityLinkSubtext}>Follow @lenfi_development</Text>
              </View>
              <Text style={styles.communityArrow}>→</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contributionCallout}>
            <Text style={styles.contributionEmoji}>💪</Text>
            <Text style={styles.contributionText}>
              Every contribution counts! Whether you're fixing typos, adding examples, or building new features – we appreciate your help.
            </Text>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>✨ What's Inside</Text>
          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🤖</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>AI & Machine Learning</Text>
                <Text style={styles.featureDescription}>
                  Build AI models, run LLMs locally with Ollama, fine-tune models & deploy AI apps
                </Text>
              </View>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>📖</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>20+ Programming Languages</Text>
                <Text style={styles.featureDescription}>
                  Complete syntax guides, 200+ code examples & real-world best practices
                </Text>
              </View>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🔧</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>DevOps & Home Servers</Text>
                <Text style={styles.featureDescription}>
                  Docker, Kubernetes, Linux admin, Proxmox, networking, security & infrastructure
                </Text>
              </View>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🎯</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Step-by-Step How-To Guides</Text>
                <Text style={styles.featureDescription}>
                  Deploy websites, build APIs, create AI models, host your own servers & more
                </Text>
              </View>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🎨</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Full-Stack Development</Text>
                <Text style={styles.featureDescription}>
                  React, Node.js, databases, APIs, UI components, design systems & cloud deployment
                </Text>
              </View>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🚀</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Specialized Topics</Text>
                <Text style={styles.featureDescription}>
                  IoT, blockchain, security, e-commerce, testing, DevOps & advanced architecture
                </Text>
              </View>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🤖</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>AI Chat Assistant</Text>
                <Text style={styles.featureDescription}>
                  Get instant coding help powered by Groq AI - free & fast
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
    backgroundColor: colors.background,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryAlpha,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
  },
  headerEmoji: {
    fontSize: 48,
    marginTop: spacing.xs,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.xs,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: 14,
    color: colors.textMuted,
  },
  searchContainer: {
    padding: spacing.md,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border + '40',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderWidth: 1.5,
    borderColor: colors.border,
    elevation: 2,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: spacing.xs,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
    paddingVertical: spacing.xs,
  },
  clearButton: {
    fontSize: 18,
    color: colors.textMuted,
    padding: spacing.xs,
  },
  quickAccessContainer: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  quickAccessCard: {
    flex: 1,
    minWidth: '22%',
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.border,
    ...shadows.small,
    elevation: 3,
  },
  quickAccessIcon: {
    fontSize: 36,
    marginBottom: spacing.sm,
  },
  quickAccessText: {
    fontSize: 12,
    color: colors.text,
    fontWeight: '700',
    textAlign: 'center',
  },
  languagesContainer: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
    letterSpacing: -0.3,
  },
  sectionCount: {
    fontSize: 14,
    color: colors.textMuted,
    fontWeight: '600',
  },
  sectionSubtitle: {
    fontSize: 13,
    color: colors.textMuted,
    marginBottom: spacing.md,
  },
  languagesList: {
    gap: spacing.sm,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing.xxl,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: spacing.sm,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  featuresContainer: {
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  featuresList: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.sm,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  featureIcon: {
    fontSize: 24,
    marginRight: spacing.sm,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  quickTipsContainer: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
    marginBottom: spacing.md,
  },
  tipsScroll: {
    marginTop: spacing.md,
  },
  tipCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginRight: spacing.md,
    width: 200,
    borderWidth: 1.5,
    borderColor: colors.border,
    ...shadows.small,
    elevation: 2,
  },
  tipIcon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  tipTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
    marginBottom: spacing.xs,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  tipAnswer: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.sm,
    lineHeight: 20,
  },
  tipBadge: {
    backgroundColor: colors.primaryAlpha,
    borderRadius: borderRadius.sm,
    paddingHorizontal: spacing.xs,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  tipBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.primary,
  },
  viewAllCard: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryAlpha,
    borderColor: colors.primary,
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  viewAllIcon: {
    fontSize: 32,
    marginBottom: spacing.xs,
  },
  viewAllText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  viewAllSubtext: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  infoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryAlpha,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    marginHorizontal: spacing.md,
    marginBottom: spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    elevation: 1,
  },
  adContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.md,
    paddingVertical: spacing.sm,
  },
  bannerIcon: {
    fontSize: 22,
    marginRight: spacing.sm,
  },
  bannerText: {
    flex: 1,
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  bannerBold: {
    fontWeight: '700',
    color: colors.primary,
  },
  surveyBanner: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    backgroundColor: colors.primaryAlpha,
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: spacing.md,
    ...shadows.medium,
  },
  surveyContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  surveyIcon: {
    fontSize: 28,
    marginRight: spacing.sm,
  },
  surveyTextContainer: {
    flex: 1,
  },
  surveyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  surveyDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  surveyArrow: {
    fontSize: 32,
    color: colors.primary,
  },
  improvementsBanner: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: spacing.lg,
    ...shadows.medium,
  },
  improvementsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  improvementsIcon: {
    fontSize: 24,
    marginRight: spacing.sm,
  },
  improvementsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
  },
  expandIcon: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
  },
  improvementsSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  improvementsList: {
    gap: spacing.sm,
  },
  improvementCategory: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.sm,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  improvementCategoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  improvementText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  improvementsFooter: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
    marginTop: spacing.md,
    textAlign: 'center',
  },
  surveyContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
  },
  surveyIcon: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  surveyTextContainer: {
    flex: 1,
  },
  surveyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  surveyDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  surveyArrow: {
    fontSize: 28,
    color: colors.primary,
    marginLeft: spacing.sm,
  },
  getInvolvedContainer: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.lg,
    padding: spacing.lg,
    backgroundColor: colors.primaryAlpha,
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    borderColor: colors.primary,
    ...shadows.medium,
  },
  getInvolvedHeader: {
    marginBottom: spacing.md,
  },
  getInvolvedBadge: {
    backgroundColor: colors.primary,
    color: colors.backgroundElevated,
    fontSize: 11,
    fontWeight: '700',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    alignSelf: 'flex-start',
    marginBottom: spacing.sm,
    overflow: 'hidden',
  },
  getInvolvedDescription: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.lg,
  },
  communityLinks: {
    marginBottom: spacing.md,
  },
  communityLink: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundCard,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    borderWidth: 1.5,
    borderColor: colors.border,
    ...shadows.small,
    elevation: 2,
  },
  communityIcon: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  communityLinkContent: {
    flex: 1,
  },
  communityLinkTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  communityLinkSubtext: {
    fontSize: 13,
    color: colors.textMuted,
  },
  communityArrow: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: 'bold',
  },
  contributionCallout: {
    flexDirection: 'row',
    backgroundColor: colors.primaryAlpha,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.primaryAlpha,
    alignItems: 'center',
  },
  contributionEmoji: {
    fontSize: 32,
    marginRight: spacing.sm,
  },
  contributionText: {
    flex: 1,
    fontSize: 13,
    color: colors.text,
    lineHeight: 19,
  },
});
