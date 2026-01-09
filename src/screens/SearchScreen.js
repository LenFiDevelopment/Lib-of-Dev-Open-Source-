import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { getAllLanguages } from '../data/languagesData';
import { getAllDesignPatterns } from '../data/designPatternsData';
import { getAllTools } from '../data/toolsData';
import { specializedTopics } from '../data/specializedTopicsData';
import { getAllCertificationCategories } from '../data/certificationsData';
import { developerHints, quickTips } from '../data/developerHintsData';
import { getTutorialsByLanguage } from '../data/tutorialsData';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

export default function SearchScreen({ navigation }) {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filter, setFilter] = useState('all'); // all, languages, patterns, platforms, topics, tutorials, tools, hints, certifications

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    // Search in languages (17 languages)
    if (filter === 'all' || filter === 'languages') {
      const languages = getAllLanguages();
      languages.forEach((language) => {
        Object.entries(language.categories).forEach(([categoryId, category]) => {
          category.items.forEach((item, itemIndex) => {
            const searchableText = `${item.title} ${item.description} ${item.code} ${item.usage}`.toLowerCase();
            
            if (searchableText.includes(lowerQuery)) {
              results.push({
                type: 'language',
                language,
                categoryId,
                category,
                item,
                itemIndex,
              });
            }
          });
        });
      });
    }

    // Search in specialized topics (HomeServer, HowTo, IoT, etc.)
    if (filter === 'all' || filter === 'topics') {
      const topics = Object.values(specializedTopics);
      topics.forEach((topic) => {
        Object.entries(topic.categories).forEach(([categoryId, category]) => {
          category.items.forEach((item, itemIndex) => {
            const searchableText = `${topic.name} ${item.title} ${item.description} ${item.code} ${item.usage} ${JSON.stringify(item.technologies || [])}`.toLowerCase();
            
            if (searchableText.includes(lowerQuery)) {
              results.push({
                type: 'topic',
                topic,
                categoryId,
                category,
                item,
                itemIndex,
              });
            }
          });
        });
      });
    }

    // Search in tutorials
    if (filter === 'all' || filter === 'tutorials') {
      const languages = getAllLanguages();
      languages.forEach((language) => {
        const tutorials = getTutorialsByLanguage(language.id);
        if (tutorials && tutorials.tutorials) {
          tutorials.tutorials.forEach((tutorial, index) => {
            const searchableText = `${language.name} ${tutorial.title} ${tutorial.description} ${tutorial.level} ${JSON.stringify(tutorial.topics || [])}`.toLowerCase();
            
            if (searchableText.includes(lowerQuery)) {
              results.push({
                type: 'tutorial',
                language,
                tutorial,
                index,
              });
            }
          });
        }
      });
    }

    // Search in tools
    if (filter === 'all' || filter === 'tools') {
      const tools = getAllTools();
      tools.forEach((tool) => {
        const searchableText = `${tool.name} ${tool.developer} ${tool.description} ${tool.category} ${JSON.stringify(tool.features || [])} ${JSON.stringify(tool.platforms || [])}`.toLowerCase();
        
        if (searchableText.includes(lowerQuery)) {
          results.push({
            type: 'tool',
            tool,
          });
        }
      });
    }

    // Search in developer hints
    if (filter === 'all' || filter === 'hints') {
      Object.values(developerHints).forEach((hint) => {
        const searchableText = `${hint.title} ${hint.question} ${hint.answer} ${hint.category}`.toLowerCase();
        
        if (searchableText.includes(lowerQuery)) {
          results.push({
            type: 'hint',
            hint,
          });
        }
      });

      quickTips.forEach((tip) => {
        const searchableText = `${tip.title} ${tip.answer} ${tip.category}`.toLowerCase();
        
        if (searchableText.includes(lowerQuery)) {
          results.push({
            type: 'quicktip',
            tip,
          });
        }
      });
    }

    // Search in certifications
    if (filter === 'all' || filter === 'certifications') {
      const categories = getAllCertificationCategories();
      categories.forEach((category) => {
        category.certifications.forEach((cert) => {
          const searchableText = `${category.name} ${cert.name} ${cert.provider} ${cert.description} ${cert.level}`.toLowerCase();
          
          if (searchableText.includes(lowerQuery)) {
            results.push({
              type: 'certification',
              category,
              certification: cert,
            });
          }
        });
      });
    }

    // Search in design patterns
    if (filter === 'all' || filter === 'patterns') {
      const patterns = getAllDesignPatterns();
      patterns.forEach((pattern) => {
        const searchableText = `${pattern.name} ${pattern.description} ${pattern.category}`.toLowerCase();
        if (searchableText.includes(lowerQuery)) {
          results.push({
            type: 'pattern',
            pattern,
          });
        }
      });
    }

    // Search in platforms (now part of tools)
    if (filter === 'all' || filter === 'platforms') {
      const allTools = getAllTools();
      const platformCategories = ['Cloud & Hosting', 'Mobile Development', 'Version Control & CI/CD'];
      const platformTools = allTools.filter(tool => platformCategories.includes(tool.category));
      platformTools.forEach((platform) => {
        const searchableText = `${platform.name} ${platform.description} ${platform.category} ${JSON.stringify(platform.features || [])}`.toLowerCase();
        if (searchableText.includes(lowerQuery)) {
          results.push({
            type: 'platform',
            platform,
          });
        }
      });
    }

    setSearchResults(results);
  };

  const renderResult = (result, index) => {
    if (result.type === 'language') {
      return (
        <TouchableOpacity
          key={index}
          style={styles.resultCard}
          onPress={() =>
            navigation.navigate('Browse', {
              screen: 'CodeDetail',
              params: {
                languageId: result.language.id,
                categoryId: result.categoryId,
                itemIndex: result.itemIndex,
                itemTitle: result.item.title,
                languageName: result.language.name,
              },
            })
          }
        >
          <View style={styles.resultHeader}>
            <View style={styles.typeBadge}>
              <Text style={styles.typeBadgeText}>CODE</Text>
            </View>
            <Text style={styles.resultLanguage}>
              {result.language.icon} {result.language.name}
            </Text>
            <Text style={styles.resultCategory}>
              {result.category.name}
            </Text>
          </View>
          <Text style={styles.resultTitle}>{result.item.title}</Text>
          <Text style={styles.resultDescription} numberOfLines={2}>
            {result.item.description}
          </Text>
          <View style={styles.resultCodePreview}>
            <Text style={styles.resultCode} numberOfLines={2}>
              {result.item.code}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }

    if (result.type === 'topic') {
      return (
        <TouchableOpacity
          key={index}
          style={styles.resultCard}
          onPress={() =>
            navigation.navigate('Browse', {
              screen: 'CodeDetail',
              params: {
                languageId: result.topic.id,
                categoryId: result.categoryId,
                itemIndex: result.itemIndex,
                itemTitle: result.item.title,
                languageName: result.topic.name,
              },
            })
          }
        >
          <View style={styles.resultHeader}>
            <View style={[styles.typeBadge, { backgroundColor: '#9B59B6' + '30' }]}>
              <Text style={[styles.typeBadgeText, { color: '#9B59B6' }]}>TOPIC</Text>
            </View>
            <Text style={styles.resultLanguage}>
              {result.topic.icon} {result.topic.name}
            </Text>
            <Text style={styles.resultCategory}>
              {result.category.name}
            </Text>
          </View>
          <Text style={styles.resultTitle}>{result.item.title}</Text>
          <Text style={styles.resultDescription} numberOfLines={2}>
            {result.item.description}
          </Text>
          {result.item.code && (
            <View style={styles.resultCodePreview}>
              <Text style={styles.resultCode} numberOfLines={2}>
                {result.item.code}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      );
    }

    if (result.type === 'tutorial') {
      return (
        <TouchableOpacity
          key={index}
          style={styles.resultCard}
          onPress={() =>
            navigation.navigate('Learn', {
              screen: 'TutorialDetail',
              params: {
                tutorial: result.tutorial,
                languageName: result.language.name,
              },
            })
          }
        >
          <View style={styles.resultHeader}>
            <View style={[styles.typeBadge, { backgroundColor: colors.success + '30' }]}>
              <Text style={[styles.typeBadgeText, { color: colors.success }]}>TUTORIAL</Text>
            </View>
            <Text style={styles.resultLanguage}>
              {result.language.icon} {result.language.name}
            </Text>
            <Text style={styles.resultCategory}>
              {result.tutorial.level}
            </Text>
          </View>
          <Text style={styles.resultTitle}>{result.tutorial.title}</Text>
          <Text style={styles.resultDescription} numberOfLines={2}>
            {result.tutorial.description}
          </Text>
        </TouchableOpacity>
      );
    }

    if (result.type === 'tool') {
      return (
        <TouchableOpacity
          key={index}
          style={styles.resultCard}
          onPress={() =>
            navigation.navigate('Browse', {
              screen: 'ToolDetail',
              params: { tool: result.tool },
            })
          }
        >
          <View style={styles.resultHeader}>
            <View style={[styles.typeBadge, { backgroundColor: '#E67E22' + '30' }]}>
              <Text style={[styles.typeBadgeText, { color: '#E67E22' }]}>TOOL</Text>
            </View>
            <Text style={styles.resultLanguage}>
              {result.tool.icon} {result.tool.name}
            </Text>
            <Text style={styles.resultCategory}>
              {result.tool.category}
            </Text>
          </View>
          <Text style={styles.resultDescription} numberOfLines={2}>
            {result.tool.description}
          </Text>
        </TouchableOpacity>
      );
    }

    if (result.type === 'hint') {
      return (
        <TouchableOpacity
          key={index}
          style={styles.resultCard}
          onPress={() =>
            navigation.navigate('Browse', {
              screen: 'Hints',
            })
          }
        >
          <View style={styles.resultHeader}>
            <View style={[styles.typeBadge, { backgroundColor: '#1ABC9C' + '30' }]}>
              <Text style={[styles.typeBadgeText, { color: '#1ABC9C' }]}>HINT</Text>
            </View>
            <Text style={styles.resultCategory}>
              {result.hint.category}
            </Text>
          </View>
          <Text style={styles.resultTitle}>{result.hint.title}</Text>
          <Text style={styles.resultDescription} numberOfLines={2}>
            {result.hint.answer}
          </Text>
        </TouchableOpacity>
      );
    }

    if (result.type === 'quicktip') {
      return (
        <TouchableOpacity
          key={index}
          style={styles.resultCard}
          onPress={() =>
            navigation.navigate('Browse', {
              screen: 'Hints',
            })
          }
        >
          <View style={styles.resultHeader}>
            <View style={[styles.typeBadge, { backgroundColor: '#16A085' + '30' }]}>
              <Text style={[styles.typeBadgeText, { color: '#16A085' }]}>TIP</Text>
            </View>
            <Text style={styles.resultCategory}>
              {result.tip.category}
            </Text>
          </View>
          <Text style={styles.resultTitle}>{result.tip.title}</Text>
          <Text style={styles.resultDescription} numberOfLines={2}>
            {result.tip.answer}
          </Text>
        </TouchableOpacity>
      );
    }

    if (result.type === 'certification') {
      return (
        <TouchableOpacity
          key={index}
          style={styles.resultCard}
          onPress={() =>
            navigation.navigate('Learn', {
              screen: 'Certifications',
            })
          }
        >
          <View style={styles.resultHeader}>
            <View style={[styles.typeBadge, { backgroundColor: '#F39C12' + '30' }]}>
              <Text style={[styles.typeBadgeText, { color: '#F39C12' }]}>CERT</Text>
            </View>
            <Text style={styles.resultLanguage}>
              {result.certification.name}
            </Text>
            <Text style={styles.resultCategory}>
              {result.certification.level}
            </Text>
          </View>
          <Text style={styles.resultDescription} numberOfLines={2}>
            {result.certification.description}
          </Text>
          <Text style={styles.resultCategory}>
            Provider: {result.certification.provider}
          </Text>
        </TouchableOpacity>
      );
    }

    if (result.type === 'pattern') {
      return (
        <TouchableOpacity
          key={index}
          style={styles.resultCard}
        >
          <View style={styles.resultHeader}>
            <View style={[styles.typeBadge, { backgroundColor: colors.accent + '30' }]}>
              <Text style={[styles.typeBadgeText, { color: colors.accent }]}>PATTERN</Text>
            </View>
            <Text style={styles.resultLanguage}>
              {result.pattern.icon} {result.pattern.name}
            </Text>
            <Text style={styles.resultCategory}>
              {result.pattern.category}
            </Text>
          </View>
          <Text style={styles.resultDescription} numberOfLines={3}>
            {result.pattern.description}
          </Text>
        </TouchableOpacity>
      );
    }

    if (result.type === 'platform') {
      return (
        <TouchableOpacity
          key={index}
          style={styles.resultCard}
        >
          <View style={styles.resultHeader}>
            <View style={[styles.typeBadge, { backgroundColor: colors.secondary + '30' }]}>
              <Text style={[styles.typeBadgeText, { color: colors.secondary }]}>PLATFORM</Text>
            </View>
            <Text style={styles.resultLanguage}>
              {result.platform.icon} {result.platform.name}
            </Text>
            <Text style={styles.resultCategory}>
              {result.platform.category}
            </Text>
          </View>
          <Text style={styles.resultDescription} numberOfLines={3}>
            {result.platform.description}
          </Text>
        </TouchableOpacity>
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder={t('search.placeholder')}
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

        {/* Filter Buttons */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'all' && styles.filterButtonActive]}
            onPress={() => { setFilter('all'); handleSearch(searchQuery); }}
          >
            <Text style={[styles.filterButtonText, filter === 'all' && styles.filterButtonTextActive]}>
              {t('search.filterAll')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'languages' && styles.filterButtonActive]}
            onPress={() => { setFilter('languages'); handleSearch(searchQuery); }}
          >
            <Text style={[styles.filterButtonText, filter === 'languages' && styles.filterButtonTextActive]}>
              📚 {t('search.filterLanguages')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'topics' && styles.filterButtonActive]}
            onPress={() => { setFilter('topics'); handleSearch(searchQuery); }}
          >
            <Text style={[styles.filterButtonText, filter === 'topics' && styles.filterButtonTextActive]}>
              🎯 Topics
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'tutorials' && styles.filterButtonActive]}
            onPress={() => { setFilter('tutorials'); handleSearch(searchQuery); }}
          >
            <Text style={[styles.filterButtonText, filter === 'tutorials' && styles.filterButtonTextActive]}>
              📖 Tutorials
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'tools' && styles.filterButtonActive]}
            onPress={() => { setFilter('tools'); handleSearch(searchQuery); }}
          >
            <Text style={[styles.filterButtonText, filter === 'tools' && styles.filterButtonTextActive]}>
              🛠️ Tools
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'hints' && styles.filterButtonActive]}
            onPress={() => { setFilter('hints'); handleSearch(searchQuery); }}
          >
            <Text style={[styles.filterButtonText, filter === 'hints' && styles.filterButtonTextActive]}>
              💡 Hints
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'certifications' && styles.filterButtonActive]}
            onPress={() => { setFilter('certifications'); handleSearch(searchQuery); }}
          >
            <Text style={[styles.filterButtonText, filter === 'certifications' && styles.filterButtonTextActive]}>
              🏆 Certs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'patterns' && styles.filterButtonActive]}
            onPress={() => { setFilter('patterns'); handleSearch(searchQuery); }}
          >
            <Text style={[styles.filterButtonText, filter === 'patterns' && styles.filterButtonTextActive]}>
              🎨 {t('search.filterPatterns')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'platforms' && styles.filterButtonActive]}
            onPress={() => { setFilter('platforms'); handleSearch(searchQuery); }}
          >
            <Text style={[styles.filterButtonText, filter === 'platforms' && styles.filterButtonTextActive]}>
              🚀 {t('search.filterPlatforms')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView 
        style={styles.scrollView}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        {searchQuery.trim().length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyTitle}>{t('search.emptyTitle')}</Text>
            <Text style={styles.emptyDescription}>
              {t('search.emptyDescription')}
            </Text>
            <View style={styles.hintsList}>
              <Text style={styles.hintText}>{t('search.hint1')}</Text>
              <Text style={styles.hintText}>{t('search.hint2')}</Text>
            </View>
          </View>
        )}

        {searchQuery.trim().length > 0 && searchResults.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>😕</Text>
            <Text style={styles.emptyTitle}>{t('search.noResults')}</Text>
            <Text style={styles.emptyDescription}>
              {t('search.noResultsDescription')}
            </Text>
          </View>
        )}

        {searchResults.length > 0 && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsCount}>
              {t('search.resultsCount', { count: searchResults.length })}
            </Text>
            {searchResults.map((result, index) => renderResult(result, index))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchContainer: {
    backgroundColor: colors.backgroundElevated,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
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
    marginBottom: spacing.sm,
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
  filterContainer: {
    flexDirection: 'row',
  },
  filterButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.md,
    backgroundColor: colors.backgroundCard,
    marginRight: spacing.xs,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterButtonText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '600',
  },
  filterButtonTextActive: {
    color: colors.buttonText,
  },
  scrollView: {
    flex: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: spacing.xxl * 2,
    paddingHorizontal: spacing.xl,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  emptyDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: spacing.md,
  },
  hintsList: {
    alignItems: 'center',
    marginTop: spacing.md,
  },
  hintText: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  resultsContainer: {
    padding: spacing.md,
  },
  resultsCount: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    fontWeight: '600',
  },
  resultCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  resultHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: spacing.sm,
    gap: spacing.xs,
  },
  typeBadge: {
    backgroundColor: colors.primary + '30',
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
    borderRadius: 4,
  },
  typeBadgeText: {
    fontSize: 10,
    color: colors.primary,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  resultLanguage: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  resultCategory: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  resultDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    lineHeight: 20,
  },
  resultCodePreview: {
    backgroundColor: colors.codeBackground,
    borderRadius: borderRadius.sm,
    padding: spacing.xs,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  resultCode: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: colors.codeText,
    lineHeight: 16,
  },
});
