import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { getAllLanguages } from '../data/languagesData';
import { getAllDesignPatterns } from '../data/designPatternsData';
import { getAllPlatforms } from '../data/platformsData';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filter, setFilter] = useState('all'); // all, languages, patterns, platforms

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    const results = [];
    const languages = getAllLanguages();
    const patterns = getAllDesignPatterns();
    const platforms = getAllPlatforms();
    const lowerQuery = query.toLowerCase();

    // Search in languages
    if (filter === 'all' || filter === 'languages') {
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

    // Search in design patterns
    if (filter === 'all' || filter === 'patterns') {
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

    // Search in platforms
    if (filter === 'all' || filter === 'platforms') {
      platforms.forEach((platform) => {
        const searchableText = `${platform.name} ${platform.description} ${platform.category}`.toLowerCase();
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
            placeholder="Search languages, patterns, platforms..."
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
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'languages' && styles.filterButtonActive]}
            onPress={() => { setFilter('languages'); handleSearch(searchQuery); }}
          >
            <Text style={[styles.filterButtonText, filter === 'languages' && styles.filterButtonTextActive]}>
              📚 Languages
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'patterns' && styles.filterButtonActive]}
            onPress={() => { setFilter('patterns'); handleSearch(searchQuery); }}
          >
            <Text style={[styles.filterButtonText, filter === 'patterns' && styles.filterButtonTextActive]}>
              🎨 Patterns
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'platforms' && styles.filterButtonActive]}
            onPress={() => { setFilter('platforms'); handleSearch(searchQuery); }}
          >
            <Text style={[styles.filterButtonText, filter === 'platforms' && styles.filterButtonTextActive]}>
              🚀 Platforms
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView style={styles.scrollView}>
        {searchQuery.trim().length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyTitle}>Search Everything</Text>
            <Text style={styles.emptyDescription}>
              Search across programming languages, design patterns, and deployment platforms
            </Text>
            <View style={styles.hintsList}>
              <Text style={styles.hintText}>💡 Try: "async", "database", "docker"</Text>
              <Text style={styles.hintText}>💡 Try: "singleton", "api", "cloud"</Text>
            </View>
          </View>
        )}

        {searchQuery.trim().length > 0 && searchResults.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>😕</Text>
            <Text style={styles.emptyTitle}>No Results Found</Text>
            <Text style={styles.emptyDescription}>
              Try different keywords or check your filter
            </Text>
          </View>
        )}

        {searchResults.length > 0 && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsCount}>
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
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
    color: '#FFFFFF',
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
