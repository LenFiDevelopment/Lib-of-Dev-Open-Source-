import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { getAllLanguages } from '../data/languagesData';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';
import { LanguageCard } from '../components/Card';
import { quickTips } from '../data/developerHintsData';

export default function HomeScreen({ navigation }) {
  const languages = getAllLanguages();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLanguages, setFilteredLanguages] = useState(languages);

  const handleSearch = (query) => {
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
  };

  const getTotalExamples = (language) => {
    let total = 0;
    Object.values(language.categories).forEach(category => {
      total += category.items.length;
    });
    return total;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Hero Section */}
        <View style={styles.header}>
          <Text style={styles.title}>💻 Lib of Dev</Text>
          <Text style={styles.subtitle}>
            Your comprehensive developer reference library
          </Text>
          <Text style={styles.description}>
            13 languages • AI/ML • IoT/Hardware • E-Commerce • Linux • 80+ Hints • shadcn/ui
          </Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search languages, topics, or features..."
              placeholderTextColor={colors.textMuted}
              value={searchQuery}
              onChangeText={handleSearch}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => handleSearch('')}>
                <Text style={styles.clearButton}>✕</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Quick Access Cards */}
        <View style={styles.quickAccessContainer}>
          <Text style={styles.sectionTitle}>⚡ Quick Access</Text>
          <View style={styles.quickAccessGrid}>
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Search')}
            >
              <Text style={styles.quickAccessIcon}>🔍</Text>
              <Text style={styles.quickAccessText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Learning')}
            >
              <Text style={styles.quickAccessIcon}>🎓</Text>
              <Text style={styles.quickAccessText}>Learn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('UIFrameworks')}
            >
              <Text style={styles.quickAccessIcon}>🎨</Text>
              <Text style={styles.quickAccessText}>UI Design</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Platforms')}
            >
              <Text style={styles.quickAccessIcon}>🚀</Text>
              <Text style={styles.quickAccessText}>Platforms</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Hints')}
            >
              <Text style={styles.quickAccessIcon}>💡</Text>
              <Text style={styles.quickAccessText}>Hints</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('SpecializedTopics')}
            >
              <Text style={styles.quickAccessIcon}>🔌</Text>
              <Text style={styles.quickAccessText}>IoT & More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Resources')}
            >
              <Text style={styles.quickAccessIcon}>🔗</Text>
              <Text style={styles.quickAccessText}>Links</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Favorites')}
            >
              <Text style={styles.quickAccessIcon}>⭐</Text>
              <Text style={styles.quickAccessText}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Settings')}
            >
              <Text style={styles.quickAccessIcon}>⚙️</Text>
              <Text style={styles.quickAccessText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Tips Section */}
        <View style={styles.quickTipsContainer}>
          <Text style={styles.sectionTitle}>💡 Quick Tips</Text>
          <Text style={styles.sectionSubtitle}>
            Instant answers to common development questions
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
              <Text style={styles.viewAllText}>View All Hints</Text>
              <Text style={styles.viewAllSubtext}>50+ scenarios covered</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Languages List */}
        <View style={styles.languagesContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>📚 Programming Languages</Text>
            <Text style={styles.sectionCount}>{filteredLanguages.length} languages</Text>
          </View>
          <Text style={styles.sectionSubtitle}>
            Choose a language to explore syntax, functions, and examples
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

        {/* Features Section */}
        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>✨ What's Inside</Text>
          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>📖</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Comprehensive Syntax</Text>
                <Text style={styles.featureDescription}>
                  Detailed references for 13 programming languages
                </Text>
              </View>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>💡</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Code Examples</Text>
                <Text style={styles.featureDescription}>
                  100+ copy-paste ready examples with explanations
                </Text>
              </View>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🎓</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Learning Paths & Resources</Text>
                <Text style={styles.featureDescription}>
                  Structured guides, best practices, tools, and career advice
                </Text>
              </View>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🎨</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>shadcn/ui & Design Systems</Text>
                <Text style={styles.featureDescription}>
                  Learn modern UI frameworks like shadcn/ui, Tailwind CSS, and Radix UI
                </Text>
              </View>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>💡</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Design Patterns</Text>
                <Text style={styles.featureDescription}>
                  Common patterns and best practices for clean code
                </Text>
              </View>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🚀</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Platform Guides</Text>
                <Text style={styles.featureDescription}>
                  Learn about Expo, Vercel, Cloudflare & more
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
    backgroundColor: colors.backgroundElevated,
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
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
    backgroundColor: colors.backgroundElevated,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderWidth: 1,
    borderColor: colors.border,
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
    padding: spacing.md,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  quickAccessCard: {
    flex: 1,
    minWidth: '22%',
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  quickAccessIcon: {
    fontSize: 32,
    marginBottom: spacing.xs,
  },
  quickAccessText: {
    fontSize: 12,
    color: colors.text,
    fontWeight: '600',
    textAlign: 'center',
  },
  languagesContainer: {
    padding: spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  sectionCount: {
    fontSize: 14,
    color: colors.textMuted,
    fontWeight: '600',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
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
    marginBottom: spacing.lg,
  },
  tipsScroll: {
    marginTop: spacing.sm,
  },
  tipCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginRight: spacing.sm,
    width: 180,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  tipIcon: {
    fontSize: 28,
    marginBottom: spacing.xs,
  },
  tipTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  tipAnswer: {
    fontSize: 15,
    fontWeight: 'bold',
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
});
