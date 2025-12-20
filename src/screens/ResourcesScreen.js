import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  TextInput,
  Alert,
} from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from '../constants/theme';
import { resourceLinks, allLinks, featuredLinks } from '../data/resourceLinksData';

export default function ResourcesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleLinkPress = async (url, name) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', `Cannot open ${name}`);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to open link');
    }
  };

  const filteredLinks = () => {
    let links = selectedCategory === 'all' 
      ? allLinks 
      : resourceLinks[selectedCategory]?.links || [];

    if (searchQuery) {
      links = links.filter(link =>
        link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return links;
  };

  const categories = Object.keys(resourceLinks);

  const renderLinkCard = (link, index) => (
    <TouchableOpacity
      key={`${link.name}-${index}`}
      style={[
        styles.linkCard,
        link.featured && styles.featuredLinkCard,
      ]}
      onPress={() => handleLinkPress(link.url, link.name)}
    >
      {link.featured && (
        <View style={styles.featuredBadge}>
          <Text style={styles.featuredText}>⭐ Featured</Text>
        </View>
      )}
      <View style={styles.linkHeader}>
        <Text style={styles.linkIcon}>{link.icon}</Text>
        <View style={styles.linkInfo}>
          <Text style={styles.linkName}>{link.name}</Text>
          {link.category && (
            <Text style={styles.linkCategory}>
              {link.categoryIcon} {link.category}
            </Text>
          )}
        </View>
        <Text style={styles.externalIcon}>↗</Text>
      </View>
      <Text style={styles.linkDescription}>{link.description}</Text>
      <Text style={styles.linkUrl} numberOfLines={1}>{link.url}</Text>
    </TouchableOpacity>
  );

  const renderCategoryButton = (categoryKey) => {
    const category = categoryKey === 'all' 
      ? { title: 'All Resources', icon: '🌐' }
      : resourceLinks[categoryKey];
    
    const isSelected = selectedCategory === categoryKey;

    return (
      <TouchableOpacity
        key={categoryKey}
        style={[
          styles.categoryButton,
          isSelected && styles.categoryButtonActive,
        ]}
        onPress={() => setSelectedCategory(categoryKey)}
      >
        <Text style={styles.categoryIcon}>{category.icon}</Text>
        <Text style={[
          styles.categoryButtonText,
          isSelected && styles.categoryButtonTextActive,
        ]}>
          {category.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Official Resources</Text>
        <Text style={styles.subtitle}>
          Direct links to documentation and official websites
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search resources..."
          placeholderTextColor={colors.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => setSearchQuery('')}
          >
            <Text style={styles.clearButtonText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
        contentContainerStyle={styles.categoriesContent}
      >
        {renderCategoryButton('all')}
        {categories.map(renderCategoryButton)}
      </ScrollView>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
      >
        {!searchQuery && selectedCategory === 'all' && featuredLinks.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>⭐ Featured Resources</Text>
            {featuredLinks.map((link, index) => renderLinkCard(link, index))}
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {selectedCategory === 'all' 
              ? `All Resources (${filteredLinks().length})` 
              : resourceLinks[selectedCategory]?.title}
          </Text>
          {filteredLinks().length > 0 ? (
            filteredLinks().map(renderLinkCard)
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>🔍</Text>
              <Text style={styles.emptyText}>No resources found</Text>
              <Text style={styles.emptySubtext}>
                Try adjusting your search or category
              </Text>
            </View>
          )}
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
  header: {
    padding: spacing.md,
    paddingTop: spacing.lg,
  },
  title: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.sizes.md,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundElevated,
    margin: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    paddingVertical: spacing.md,
    fontSize: typography.sizes.md,
    color: colors.text,
  },
  clearButton: {
    padding: spacing.sm,
  },
  clearButtonText: {
    fontSize: 18,
    color: colors.textSecondary,
  },
  categoriesScroll: {
    maxHeight: 50,
  },
  categoriesContent: {
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundElevated,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: spacing.sm,
  },
  categoryButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryIcon: {
    fontSize: 16,
    marginRight: spacing.xs,
  },
  categoryButtonText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: colors.text,
  },
  categoryButtonTextActive: {
    color: colors.background,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.md,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  linkCard: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  featuredLinkCard: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  featuredBadge: {
    position: 'absolute',
    top: -10,
    right: spacing.md,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.full,
    ...shadows.md,
  },
  featuredText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.semibold,
    color: colors.background,
  },
  linkHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  linkIcon: {
    fontSize: 32,
    marginRight: spacing.sm,
  },
  linkInfo: {
    flex: 1,
  },
  linkName: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.text,
    marginBottom: 2,
  },
  linkCategory: {
    fontSize: typography.sizes.xs,
    color: colors.textSecondary,
  },
  externalIcon: {
    fontSize: 20,
    color: colors.primary,
    marginLeft: spacing.sm,
  },
  linkDescription: {
    fontSize: typography.sizes.md,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    lineHeight: 20,
  },
  linkUrl: {
    fontSize: typography.sizes.sm,
    color: colors.primary,
    fontFamily: 'monospace',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing.xxl,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: spacing.md,
    opacity: 0.5,
  },
  emptyText: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  emptySubtext: {
    fontSize: typography.sizes.md,
    color: colors.textSecondary,
  },
});
