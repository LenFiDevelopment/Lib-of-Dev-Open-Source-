import React, { useState } from 'react';
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
import { getAllCertificationCategories } from '../data/certificationsData';
import { colors, spacing, borderRadius, shadows, typography } from '../constants/theme';
import AdBanner from '../components/AdBanner';

export default function CertificationsScreen({ navigation }) {
  const { t } = useTranslation();
  const categories = getAllCertificationCategories();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedCert, setExpandedCert] = useState(null);
  const [showOnlyFree, setShowOnlyFree] = useState(false);

  const openURL = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return '#4CAF50';
      case 'Intermediate': return '#FF9800';
      case 'Advanced': return '#F44336';
      default: return colors.primary;
    }
  };

  const filteredCategories = selectedCategory
    ? categories.filter(cat => cat.id === selectedCategory)
    : categories;

  const getFilteredCertifications = (category) => {
    let certs = category.certifications;
    
    // Filter by free/paid
    if (showOnlyFree) {
      certs = certs.filter(cert => cert.free === true);
    }
    
    // Filter by search query
    if (!searchQuery) return certs;
    
    const query = searchQuery.toLowerCase();
    return certs.filter(cert =>
      cert.name.toLowerCase().includes(query) ||
      cert.provider.toLowerCase().includes(query) ||
      cert.description.toLowerCase().includes(query) ||
      cert.topics.some(topic => topic.toLowerCase().includes(query))
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Professional IT Certifications</Text>
        <Text style={styles.headerSubtitle}>
          Industry-recognized certifications from leading tech companies - free & paid options
        </Text>
      </View>

      {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search certifications..."
            placeholderTextColor={colors.textMuted}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Free/Paid Filter Toggle */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              !showOnlyFree && styles.toggleButtonActive
            ]}
            onPress={() => setShowOnlyFree(false)}
          >
            <Text style={[
              styles.toggleButtonText,
              !showOnlyFree && styles.toggleButtonTextActive
            ]}>
              All Certifications
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              showOnlyFree && styles.toggleButtonActive
            ]}
            onPress={() => setShowOnlyFree(true)}
          >
            <Text style={[
              styles.toggleButtonText,
              showOnlyFree && styles.toggleButtonTextActive
            ]}>
              💚 Free Only
            </Text>
          </TouchableOpacity>
        </View>

        {/* Category Filter */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoryFilter}
          contentContainerStyle={styles.categoryFilterContent}
        >
          <TouchableOpacity
            style={[
              styles.categoryFilterChip,
              !selectedCategory && styles.categoryFilterChipActive
            ]}
            onPress={() => setSelectedCategory(null)}
          >
            <Text style={[
              styles.categoryFilterText,
              !selectedCategory && styles.categoryFilterTextActive
            ]}>
              Alle
            </Text>
          </TouchableOpacity>
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryFilterChip,
                selectedCategory === category.id && styles.categoryFilterChipActive
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text style={styles.categoryFilterIcon}>{category.icon}</Text>
              <Text style={[
                styles.categoryFilterText,
                selectedCategory === category.id && styles.categoryFilterTextActive
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* AdMob Banner */}
        <View style={styles.adContainer}>
          <AdBanner adUnitId="ca-app-pub-5526801232554836/7251399431" />
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{categories.length}</Text>
            <Text style={styles.statLabel}>Categories</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {categories.reduce((sum, cat) => sum + cat.certifications.length, 0)}
            </Text>
            <Text style={styles.statLabel}>Certifications</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {categories.reduce((sum, cat) => 
                sum + cat.certifications.filter(c => c.free).length, 0
              )}
            </Text>
            <Text style={styles.statLabel}>Free</Text>
          </View>
        </View>

        {/* Categories & Certifications */}
        {filteredCategories.map(category => {
          const filteredCerts = getFilteredCertifications(category);
          if (filteredCerts.length === 0) return null;

          return (
            <View key={category.id} style={styles.categorySection}>
              {/* Category Header */}
              <View style={[styles.categoryHeader, { backgroundColor: category.color + '20' }]}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <View style={styles.categoryHeaderText}>
                  <Text style={styles.categoryName}>{category.name}</Text>
                  <Text style={styles.categoryCertCount}>
                    {filteredCerts.length} Certification{filteredCerts.length !== 1 ? 's' : ''}
                  </Text>
                </View>
              </View>

              {/* Certifications */}
              <View style={styles.certificationsContainer}>
                {filteredCerts.map(cert => (
                  <View key={cert.id} style={styles.certCard}>
                    {/* Cert Header */}
                    <TouchableOpacity
                      style={styles.certHeader}
                      onPress={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
                    >
                      <View style={styles.certHeaderLeft}>
                        <View style={styles.certHeaderTopRow}>
                          <View style={styles.providerBadge}>
                            <Text style={styles.providerText}>{cert.provider}</Text>
                          </View>
                          {!cert.free && (
                            <View style={styles.paidBadge}>
                              <Text style={styles.paidBadgeText}>💰 Paid</Text>
                            </View>
                          )}
                          {cert.free && (
                            <View style={styles.freeBadge}>
                              <Text style={styles.freeBadgeText}>🎉 Free</Text>
                            </View>
                          )}
                        </View>
                        <Text style={styles.certName}>{cert.name}</Text>
                        <Text style={styles.certDescription}>{cert.description}</Text>
                        
                        <View style={styles.certMetaRow}>
                          <View style={[styles.levelBadge, { backgroundColor: getLevelColor(cert.level) + '20' }]}>
                            <Text style={[styles.levelText, { color: getLevelColor(cert.level) }]}>
                              {cert.level}
                            </Text>
                          </View>
                          <Text style={styles.certDuration}>⏱️ {cert.duration}</Text>
                          <Text style={styles.certLanguage}>🌐 {cert.language}</Text>
                        </View>
                      </View>
                      <Text style={styles.expandIcon}>
                        {expandedCert === cert.id ? '▼' : '▶'}
                      </Text>
                    </TouchableOpacity>

                    {/* Expanded Content */}
                    {expandedCert === cert.id && (
                      <View style={styles.certExpandedContent}>
                        {/* Topics */}
                        <View style={styles.topicsContainer}>
                          <Text style={styles.topicsLabel}>📚 Topics:</Text>
                          <View style={styles.topicsList}>
                            {cert.topics.map((topic, index) => (
                              <View key={index} style={styles.topicChip}>
                                <Text style={styles.topicText}>{topic}</Text>
                              </View>
                            ))}
                          </View>
                        </View>

                        {/* Action Button */}
                        <TouchableOpacity
                          style={[styles.certButton, { backgroundColor: category.color }]}
                          onPress={() => openURL(cert.url)}
                        >
                          <Text style={styles.certButtonText}>Go to Certification</Text>
                          {!cert.free && cert.price && (
                            <View style={styles.priceBadge}>
                              <Text style={styles.priceText}>{cert.price}</Text>
                            </View>
                          )}
                          <Text style={styles.certButtonIcon}>→</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                ))}
              </View>
            </View>
          );
        })}

        {/* Empty State */}
        {filteredCategories.every(cat => getFilteredCertifications(cat).length === 0) && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyText}>No certifications found</Text>
            <Text style={styles.emptySubtext}>
              Try a different search term or filter
            </Text>
          </View>
        )}

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Text style={styles.infoIcon}>💡</Text>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Why Certifications Matter:</Text>
            <Text style={styles.infoText}>
              • Prove your skills{'\n'}
              • Boost your resume{'\n'}
              • Increase career opportunities{'\n'}
              • Learn new skills{'\n'}
              • Industry-recognized credentials
            </Text>
          </View>
        </View>

        {/* Bottom Padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>
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
    padding: spacing.lg,
    backgroundColor: colors.backgroundCard,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  headerSubtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundCard,
    margin: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
    padding: spacing.xs,
  },
  clearIcon: {
    fontSize: 18,
    color: colors.textMuted,
    padding: spacing.xs,
  },
  categoryFilter: {
    maxHeight: 50,
  },
  categoryFilterContent: {
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },
  categoryFilterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.xs,
  },
  categoryFilterChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryFilterIcon: {
    fontSize: 16,
  },
  categoryFilterText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  categoryFilterTextActive: {
    color: '#FFFFFF',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: spacing.md,
    gap: spacing.sm,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.backgroundCard,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textMuted,
    textAlign: 'center',
  },
  categorySection: {
    marginBottom: spacing.lg,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    marginHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    gap: spacing.md,
  },
  categoryIcon: {
    fontSize: 32,
  },
  categoryHeaderText: {
    flex: 1,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  categoryCertCount: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  certificationsContainer: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  certCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    ...shadows.medium,
  },
  certHeader: {
    flexDirection: 'row',
    padding: spacing.md,
    gap: spacing.md,
  },
  certHeaderLeft: {
    flex: 1,
  },
  providerBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary + '20',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.sm,
  },
  providerText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
    textTransform: 'uppercase',
  },
  certName: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  certDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    lineHeight: 20,
  },
  certMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flexWrap: 'wrap',
  },
  levelBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  levelText: {
    fontSize: 12,
    fontWeight: '600',
  },
  certDuration: {
    fontSize: 12,
    color: colors.textMuted,
  },
  certLanguage: {
    fontSize: 12,
    color: colors.textMuted,
  },
  expandIcon: {
    fontSize: 16,
    color: colors.textMuted,
  },
  certExpandedContent: {
    padding: spacing.md,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  topicsContainer: {
    marginBottom: spacing.md,
  },
  topicsLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  topicsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  topicChip: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  topicText: {
    fontSize: 13,
    color: colors.text,
  },
  certButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: borderRadius.md,
    gap: spacing.sm,
  },
  certButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  certButtonIcon: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  priceBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 4,
  },
  priceText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  paidBadge: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  paidBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  freeBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  freeBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  certHeaderTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  emptyState: {
    alignItems: 'center',
    padding: spacing.xl,
    marginVertical: spacing.xl,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.textMuted,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: colors.primary + '15',
    margin: spacing.md,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.primary + '30',
    gap: spacing.md,
  },
  infoIcon: {
    fontSize: 24,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  bottomPadding: {
    height: spacing.xl,
  },
});
