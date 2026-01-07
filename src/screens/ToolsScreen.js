import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
  Linking
} from 'react-native';
import { theme } from '../constants/theme';
import { toolsData, getAllCategories, searchTools } from '../data/toolsData';
import AdBanner from '../components/AdBanner';

export default function ToolsScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...getAllCategories().map(c => c.name)];
  
  const filteredTools = searchQuery
    ? searchTools(searchQuery)
    : selectedCategory === 'All'
    ? toolsData
    : toolsData.filter(tool => tool.category === selectedCategory);

  const openURL = (url) => {
    if (url) {
      Linking.openURL(url).catch(err => console.error('Error opening URL:', err));
    }
  };

  const renderPricingBadge = (pricing) => {
    const isFree = pricing.toLowerCase().includes('free') || 
                   pricing.toLowerCase().includes('open source');
    return (
      <View style={[styles.pricingBadge, isFree && styles.freeBadge]}>
        <Text style={[styles.pricingText, isFree && styles.freeText]}>
          {isFree ? '🎉 FREE' : '💰 PAID'}
        </Text>
      </View>
    );
  };

  const renderTool = (tool) => (
    <TouchableOpacity
      key={tool.id}
      style={styles.toolCard}
      onPress={() => navigation.navigate('ToolDetail', { tool })}
      activeOpacity={0.7}
    >
      <View style={styles.toolHeader}>
        <View style={[styles.iconContainer, { backgroundColor: tool.color + '20' }]}>
          <Text style={styles.toolIcon}>{tool.icon}</Text>
        </View>
        <View style={styles.toolInfo}>
          <Text style={styles.toolName}>{tool.name}</Text>
          <Text style={styles.toolDeveloper}>{tool.developer}</Text>
        </View>
        {renderPricingBadge(tool.pricing)}
      </View>

      <Text style={styles.toolDescription} numberOfLines={2}>
        {tool.description}
      </Text>

      <View style={styles.platformsContainer}>
        {tool.platforms && tool.platforms.slice(0, 3).map((platform, index) => (
          <View key={index} style={styles.platformBadge}>
            <Text style={styles.platformText}>{platform}</Text>
          </View>
        ))}
        {tool.platforms && tool.platforms.length > 3 && (
          <Text style={styles.morePlatforms}>+{tool.platforms.length - 3}</Text>
        )}
      </View>

      <View style={styles.featuresPreview}>
        <Text style={styles.featuresTitle}>Key Features:</Text>
        {tool.features && tool.features.slice(0, 3).map((feature, index) => (
          <Text key={index} style={styles.featureItem} numberOfLines={1}>
            • {feature}
          </Text>
        ))}
        {tool.features && tool.features.length > 3 && (
          <Text style={styles.moreFeatures}>
            +{tool.features.length - 3} more features
          </Text>
        )}
      </View>

      <View style={styles.cardFooter}>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openURL(tool.officialDocs)}
        >
          <Text style={styles.linkButtonText}>📚 Docs</Text>
        </TouchableOpacity>
        {tool.tutorial && (
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openURL(tool.tutorial)}
          >
            <Text style={styles.linkButtonText}>🎓 Tutorial</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🛠️ Developer Tools</Text>
        <Text style={styles.headerSubtitle}>
          {filteredTools.length} tools • IDEs, Cloud Platforms & More
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search tools..."
          placeholderTextColor={theme.colors.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Text style={styles.clearButton}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Category Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryChip,
              selectedCategory === category && styles.categoryChipActive
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* AdMob Banner */}
      <View style={styles.adContainer}>
        <AdBanner adUnitId="ca-app-pub-5526801232554836/7375183205" />
      </View>

      {/* Tools List */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredTools.length > 0 ? (
          filteredTools.map(renderTool)
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyText}>No tools found</Text>
            <Text style={styles.emptySubtext}>Try a different search term</Text>
          </View>
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            💡 Tip: Tap on any tool to see detailed setup guides
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    marginHorizontal: 20,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 12,
    height: 50,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: theme.colors.text,
  },
  clearButton: {
    fontSize: 20,
    color: theme.colors.textSecondary,
    padding: 5,
  },
  categoriesScroll: {
    maxHeight: 50,
    marginBottom: 15,
  },
  categoriesContent: {
    paddingHorizontal: 20,
    gap: 10,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: theme.colors.card,
    marginRight: 10,
  },
  categoryChipActive: {
    backgroundColor: theme.colors.primary,
  },
  categoryText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 0,
  },
  toolCard: {
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  toolHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  toolIcon: {
    fontSize: 28,
  },
  toolInfo: {
    flex: 1,
  },
  toolName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 2,
  },
  toolDeveloper: {
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
  pricingBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: theme.colors.warning + '20',
  },
  freeBadge: {
    backgroundColor: theme.colors.success + '20',
  },
  pricingText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: theme.colors.warning,
  },
  freeText: {
    color: theme.colors.success,
  },
  toolDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  platformsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
    gap: 6,
  },
  platformBadge: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  platformText: {
    fontSize: 12,
    color: theme.colors.primary,
    fontWeight: '500',
  },
  morePlatforms: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    alignSelf: 'center',
    marginLeft: 4,
  },
  featuresPreview: {
    marginBottom: 12,
  },
  featuresTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 6,
  },
  featureItem: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    marginBottom: 3,
  },
  moreFeatures: {
    fontSize: 12,
    color: theme.colors.primary,
    marginTop: 4,
    fontStyle: 'italic',
  },
  cardFooter: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
  },
  linkButton: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  linkButtonText: {
    fontSize: 13,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  adContainer: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
