import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { getErrorsByLanguage, searchErrors } from '../data/errorsData';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';
import * as Clipboard from 'expo-clipboard';

export default function ErrorSolutionsScreen({ route, navigation }) {
  const { t } = useTranslation();
  const { languageId } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedError, setExpandedError] = useState(null);

  const languageErrors = getErrorsByLanguage(languageId);
  
  if (!languageErrors) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>No error solutions available</Text>
      </SafeAreaView>
    );
  }

  const filteredErrors = searchQuery
    ? languageErrors.commonErrors.filter(error =>
        error.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        error.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        error.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : languageErrors.commonErrors;

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high':
        return '#F44336';
      case 'medium':
        return '#FF9800';
      case 'low':
        return '#FFC107';
      default:
        return colors.textSecondary;
    }
  };

  const getSeverityText = (severity) => {
    switch (severity) {
      case 'high':
        return 'Critical';
      case 'medium':
        return 'Medium';
      case 'low':
        return 'Low';
      default:
        return severity;
    }
  };

  const copyToClipboard = (text) => {
    Clipboard.setString(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.header, { backgroundColor: languageErrors.color }]}>
          <Text style={styles.headerIcon}>{languageErrors.icon}</Text>
          <Text style={styles.headerTitle}>{languageErrors.name}</Text>
          <Text style={styles.headerSubtitle}>Errors & Solutions</Text>
        </View>

        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search errors..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearButton}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>
            ⚠️ Common Errors ({filteredErrors.length})
          </Text>

          {filteredErrors.length === 0 && (
            <Text style={styles.noResults}>
              No errors found for "{searchQuery}"
            </Text>
          )}

          {filteredErrors.map((error, index) => (
            <View key={error.id} style={styles.errorCard}>
              <TouchableOpacity
                style={styles.errorHeader}
                onPress={() => setExpandedError(expandedError === error.id ? null : error.id)}
              >
                <View style={styles.errorHeaderLeft}>
                  <View style={styles.errorInfo}>
                    <Text style={styles.errorTitle}>{error.title}</Text>
                    <View style={styles.badges}>
                      <View
                        style={[
                          styles.severityBadge,
                          { backgroundColor: getSeverityColor(error.severity) },
                        ]}
                      >
                        <Text style={styles.badgeText}>
                          {getSeverityText(error.severity)}
                        </Text>
                      </View>
                      <View style={styles.categoryBadge}>
                        <Text style={styles.categoryText}>{error.category}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={styles.expandIcon}>
                  {expandedError === error.id ? '▼' : '▶'}
                </Text>
              </TouchableOpacity>

              <Text style={styles.errorDescription}>{error.description}</Text>

              {expandedError === error.id && (
                <View style={styles.errorDetails}>
                  {/* Error Example */}
                  <View style={styles.section}>
                    <Text style={styles.sectionLabel}>❌ Error Example</Text>
                    <View style={styles.errorExampleBox}>
                      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Text style={styles.errorCode}>{error.errorExample}</Text>
                      </ScrollView>
                      <TouchableOpacity
                        style={styles.copyIconButton}
                        onPress={() => copyToClipboard(error.errorExample)}
                      >
                        <Text style={styles.copyIcon}>📋</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* Causes */}
                  {error.causes && error.causes.length > 0 && (
                    <View style={styles.section}>
                      <Text style={styles.sectionLabel}>🔍 Common Causes</Text>
                      {error.causes.map((cause, idx) => (
                        <View key={idx} style={styles.listItem}>
                          <Text style={styles.bullet}>•</Text>
                          <Text style={styles.listText}>{cause}</Text>
                        </View>
                      ))}
                    </View>
                  )}

                  {/* Solution */}
                  <View style={styles.section}>
                    <Text style={styles.sectionLabel}>✅ Solution</Text>
                    <View style={styles.solutionBox}>
                      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Text style={styles.solutionCode}>{error.solution}</Text>
                      </ScrollView>
                      <TouchableOpacity
                        style={styles.copyIconButton}
                        onPress={() => copyToClipboard(error.solution)}
                      >
                        <Text style={styles.copyIcon}>📋</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* Prevention */}
                  {error.prevention && error.prevention.length > 0 && (
                    <View style={styles.section}>
                      <Text style={styles.sectionLabel}>🛡️ Prevention</Text>
                      {error.prevention.map((tip, idx) => (
                        <View key={idx} style={styles.preventionItem}>
                          <Text style={styles.preventionBullet}>✓</Text>
                          <Text style={styles.preventionText}>{tip}</Text>
                        </View>
                      ))}
                    </View>
                  )}

                  {/* Related Errors */}
                  {error.relatedErrors && (
                    <View style={styles.section}>
                      <Text style={styles.sectionLabel}>🔗 Related Errors</Text>
                      <View style={styles.relatedErrorsContainer}>
                        {error.relatedErrors.map((related, idx) => (
                          <View key={idx} style={styles.relatedErrorTag}>
                            <Text style={styles.relatedErrorText}>{related}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}
                </View>
              )}
            </View>
          ))}
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
    padding: spacing.lg,
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 50,
    marginBottom: spacing.sm,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    margin: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.lg,
    ...shadows.small,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
  },
  clearButton: {
    fontSize: 20,
    color: colors.textSecondary,
    paddingHorizontal: spacing.sm,
  },
  content: {
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  noResults: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
  errorCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.medium,
  },
  errorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  errorHeaderLeft: {
    flex: 1,
  },
  errorInfo: {
    flex: 1,
  },
  errorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  severityBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  categoryBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.primary,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.text,
  },
  expandIcon: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },
  errorDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  errorDetails: {
    marginTop: spacing.md,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  errorExampleBox: {
    backgroundColor: colors.error + '20',
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.error,
    position: 'relative',
  },
  errorCode: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: colors.text,
    lineHeight: 18,
  },
  copyIconButton: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.sm,
    padding: spacing.xs,
  },
  copyIcon: {
    fontSize: 16,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  bullet: {
    color: colors.textSecondary,
    marginRight: spacing.sm,
    fontSize: 14,
  },
  listText: {
    flex: 1,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  solutionBox: {
    backgroundColor: colors.success + '20',
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.success,
    position: 'relative',
  },
  solutionCode: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: colors.text,
    lineHeight: 18,
  },
  preventionItem: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  preventionBullet: {
    color: colors.success,
    marginRight: spacing.sm,
    fontSize: 14,
  },
  preventionText: {
    flex: 1,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  relatedErrorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  relatedErrorTag: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  relatedErrorText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  errorText: {
    fontSize: 16,
    color: colors.error,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
});
